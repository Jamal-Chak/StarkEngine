import os
from flask import Blueprint, jsonify, request, send_from_directory
from .controllers import get_users, get_transactions
from ...services.ai_service import completions, get_default_model
from flask import current_app
from app.models.ai_usage import AIUsage
from app.extensions import db
import importlib

# dynamic import to avoid editor diagnostics when flask_jwt_extended isn't installed
_jwt_mod = None
jwt_required = lambda *a, **k: (lambda f: f)
get_jwt_identity = lambda: None
try:
    _jwt_mod = importlib.import_module('flask_jwt_extended')
    jwt_required = _jwt_mod.jwt_required
    get_jwt_identity = _jwt_mod.get_jwt_identity
except Exception:
    _jwt_mod = None
import os

api_v1 = Blueprint("api_v1", __name__)

# Attach a rate limiter to Blueprint-level via the current_app in create_app

# ✅ Folder for uploaded files
UPLOAD_FOLDER = os.path.join(os.getcwd(), "uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# ✅ Route: /api/v1/users
@api_v1.route("/users")
def users():
    return get_users()

# ✅ Route: /api/v1/transactions
@api_v1.route("/transactions")
def transactions():
    return get_transactions()

# ✅ Route: /api/v1/invoices (POST)
@api_v1.route("/invoices", methods=["POST"])
def create_invoice():
    data = request.get_json()
    print("📥 Received invoice data:", data)
    return jsonify({
        "message": "✅ Invoice created successfully!",
        "invoice": data
    }), 201


# Support GET /api/v1/invoices so clients that expect a GET won't receive 405
@api_v1.route("/invoices", methods=["GET"])
def get_invoices():
    """Return a simple list of invoices (dev stub).

    This matches the top-level invoice blueprint's GET route and prevents
    Method Not Allowed responses when a client performs GET on /api/v1/invoices.
    """
    # In production this should query the DB or delegate to a service.
    return jsonify({"invoices": []}), 200

# ✅ Route: /api/v1/documents/upload (POST)
@api_v1.route("/documents/upload", methods=["POST"])
def upload_document():
    if 'file' not in request.files:
        return jsonify({"error": "No file part in request"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    try:
        file.save(filepath)
    except Exception as e:
        return jsonify({"error": f"Failed to save file: {str(e)}"}), 500

    return jsonify({"message": "✅ File uploaded", "filename": file.filename}), 201

# ✅ Route: /api/v1/documents (GET)
@api_v1.route("/documents", methods=["GET"])
def list_documents():
    try:
        files = os.listdir(UPLOAD_FOLDER)
        return jsonify({"files": files})
    except Exception as e:
        return jsonify({"error": f"Unable to list files: {str(e)}"}), 500

# ✅ Route: /api/v1/documents/download/<filename> (GET)
@api_v1.route("/documents/download/<filename>", methods=["GET"])
def download_document(filename):
    try:
        return send_from_directory(UPLOAD_FOLDER, filename, as_attachment=True)
    except FileNotFoundError:
        return jsonify({"error": "File not found"}), 404

# ✅ Route: /api/v1/health
@api_v1.route("/health")
def health_check():
    return {"status": "healthy"}, 200


# Simple CSRF endpoint used by the frontend to set a cookie for XSRF
@api_v1.route('/csrf/', methods=['GET'])
def csrf_token():
    """Return a dummy csrf token and set a cookie named 'csrftoken'.

    Frontend calls this endpoint (with credentials) to ensure the browser
    receives the cookie before making POST requests that include the
    X-CSRFToken header. In production with Flask-WTF or Django this would
    generate a real token; here we emit a simple random token.
    """
    import secrets
    token = secrets.token_urlsafe(32)
    resp = jsonify({'detail': 'csrf cookie set'})
    # Set cookie; ensure it's available to JS (not HttpOnly) so front-end can read
    resp.set_cookie('csrftoken', token, httponly=False, samesite='Lax')
    return resp, 200


# Demo AI endpoint: POST /api/v1/ai/test
@api_v1.route('/ai/test', methods=['POST'])
@jwt_required()
def ai_test():
    """Enqueue an AI job and return the job id.

    Request body: { prompt: string, model?: string }
    """
    payload = request.get_json() or {}
    prompt = payload.get('prompt', 'Say hello from TwineCapital')
    model = payload.get('model') or current_app.config.get('DEFAULT_AI_MODEL', 'gpt-5-mini')

    # Get user identity from JWT and attach to usage record
    identity = None
    try:
        identity = get_jwt_identity()
    except Exception:
        identity = None

    # Log usage (queued)
    usage = AIUsage(prompt=prompt, model=model, status='queued')
    if isinstance(identity, dict):
        usage.tenant_id = identity.get('tenant_id') or None
    db.session.add(usage)
    db.session.commit()

    # Enqueue job (import rq/redis dynamically; if unavailable, persist usage and return queued state)
    redis_url = os.getenv('REDIS_URL', 'redis://redis:6379/0')
    try:
        import importlib
        redis_mod = importlib.import_module('redis')
        rq_mod = importlib.import_module('rq')
        redis_conn = redis_mod.Redis.from_url(redis_url)
        q = rq_mod.Queue('ai', connection=redis_conn)
        job = q.enqueue('app.workers.ai_worker.process_ai_job', prompt, model, usage.id)
        usage.job_id = job.id
    except Exception as exc:
        # Worker/queue not available (common on Windows dev); leave job_id None and mark queued
        usage.job_id = None
        # Optionally log the exception to server logs
        try:
            current_app.logger.warning('RQ enqueue failed: %s', exc)
        except Exception:
            pass

    # record job id in usage
    usage.job_id = job.id
    usage.status = 'queued'
    db.session.add(usage)
    db.session.commit()

    return jsonify({'job_id': job.id, 'usage_id': usage.id}), 202


@api_v1.route('/invoices/draft', methods=['POST'])
@jwt_required()
def invoice_draft():
    """Enqueue an AI job to draft invoice text from provided invoice metadata.

    Request body: { to_name, items: [{desc, qty, price}], notes }
    """
    payload = request.get_json() or {}
    # build a compact prompt from payload
    to_name = payload.get('to_name', 'Customer')
    items = payload.get('items', [])
    notes = payload.get('notes', '')

    # rudimentary prompt assembly — front-end will send structured data
    lines = [f"Invoice draft for {to_name}"]
    for it in items:
        desc = it.get('desc', '')
        qty = it.get('qty', 1)
        price = it.get('price', 0)
        lines.append(f"- {desc}: {qty} x {price}")
    if notes:
        lines.append(f"Notes: {notes}")

    prompt = "\n".join(lines)

    model = payload.get('model') or current_app.config.get('DEFAULT_AI_MODEL', 'gpt-5-mini')

    # attach user/tenant
    identity = None
    try:
        identity = get_jwt_identity()
    except Exception:
        identity = None

    usage = AIUsage(prompt=prompt, model=model, status='queued')
    if isinstance(identity, dict):
        usage.tenant_id = identity.get('tenant_id')
        usage.user_id = identity.get('id')

    db.session.add(usage)
    db.session.commit()

    redis_url = os.getenv('REDIS_URL', 'redis://redis:6379/0')
    try:
        import importlib
        redis_mod = importlib.import_module('redis')
        rq_mod = importlib.import_module('rq')
        redis_conn = redis_mod.Redis.from_url(redis_url)
        q = rq_mod.Queue('ai', connection=redis_conn)
        job = q.enqueue('app.workers.ai_worker.process_ai_job', prompt, model, usage.id)
        usage.job_id = job.id
    except Exception as exc:
        usage.job_id = None
        try:
            current_app.logger.warning('RQ enqueue failed for invoice draft: %s', exc)
        except Exception:
            pass

    usage.status = 'queued'
    db.session.add(usage)
    db.session.commit()

    return jsonify({'job_id': usage.job_id, 'usage_id': usage.id}), 202


@api_v1.route('/ai/status/<job_id>', methods=['GET'])
def ai_status(job_id):
    # Try to read job status from RQ; if RQ unavailable, fall back to DB lookup
    try:
        import importlib
        redis_mod = importlib.import_module('redis')
        rq_mod = importlib.import_module('rq')
        redis_conn = redis_mod.Redis.from_url(os.getenv('REDIS_URL', 'redis://redis:6379/0'))
        q = rq_mod.Queue('ai', connection=redis_conn)
        job = q.fetch_job(job_id)
        if not job:
            # fall back to DB
            usage = AIUsage.query.filter_by(job_id=job_id).first()
            if not usage:
                return jsonify({'error': 'job not found'}), 404
            return jsonify({'id': None, 'status': usage.status, 'result': usage.result}), 200

        data = {
            'id': job.id,
            'status': job.get_status(),
            'result': job.result if job.is_finished else None,
            'enqueued_at': str(job.enqueued_at),
            'started_at': str(job.started_at) if job.started_at else None,
            'ended_at': str(job.ended_at) if job.ended_at else None,
        }
        return jsonify(data)
    except Exception:
        # RQ not available — query AIUsage table for job status
        usage = AIUsage.query.filter_by(job_id=job_id).first()
        if not usage:
            return jsonify({'error': 'job not found'}), 404
        return jsonify({'id': usage.job_id, 'status': usage.status, 'result': usage.result}), 200

# ✅ Optional: Root
@api_v1.route("/")
def home():
    return jsonify({"message": "Welcome to TwineCapital API"})

@api_v1.route("/routes", methods=["GET"])
def list_registered_routes():
    """
    Diagnostic endpoint (dev-only): list all registered URL rules.
    Returns a JSON object with rule, endpoint, methods, and arguments.
    """
    rules = []
    for rule in sorted(current_app.url_map.iter_rules(), key=lambda r: r.rule):
        methods = sorted(list(rule.methods - {"HEAD", "OPTIONS"}))
        rules.append({
            "rule": rule.rule,
            "endpoint": rule.endpoint,
            "methods": methods,
            "arguments": sorted(list(rule.arguments)),
        })
    return jsonify({"routes": rules}), 200
