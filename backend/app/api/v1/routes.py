import os
from flask import Blueprint, jsonify, request, send_from_directory
from .controllers import get_users, get_transactions

api_v1 = Blueprint("api_v1", __name__)

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

# ✅ Optional: Root
@api_v1.route("/")
def home():
    return jsonify({"message": "Welcome to StarkEngine API"})
