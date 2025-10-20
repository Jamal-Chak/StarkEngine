from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models.user import User
import importlib

# Dynamic import for flask_jwt_extended to avoid editor diagnostics when package isn't installed
_jwt_mod = None
create_access_token = None
get_jwt_identity = None
try:
    _jwt_mod = importlib.import_module('flask_jwt_extended')
    create_access_token = _jwt_mod.create_access_token
    get_jwt_identity = _jwt_mod.get_jwt_identity
except Exception:
    _jwt_mod = None

    def create_access_token(*args, **kwargs):
        raise RuntimeError('flask_jwt_extended is not installed. Install backend requirements to enable JWT auth.')

    def get_jwt_identity():
        return None


auth_bp = Blueprint('auth_bp', __name__)


@auth_bp.route('/auth/register', methods=['POST'])
def register():
    data = request.get_json() or {}
    # DEBUG: log incoming payload and cookies to help trace why frontend requests fail
    try:
        print('DEBUG auth.register payload:', data)
        print('DEBUG auth.register cookies:', request.cookies)
    except Exception:
        pass
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'error': 'username, email and password required'}), 400

    if User.query.filter((User.username == username) | (User.email == email)).first():
        return jsonify({'error': 'user with that username or email already exists'}), 400

    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    access_token = create_access_token(identity={'id': user.id, 'username': user.username, 'tenant_id': user.tenant_id})
    return jsonify({'access_token': access_token, 'user': {'id': user.id, 'username': user.username}}), 201


@auth_bp.route('/auth/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    # DEBUG: log incoming payload and cookies
    try:
        print('DEBUG auth.login payload:', data)
        print('DEBUG auth.login cookies:', request.cookies)
    except Exception:
        pass
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'username and password required'}), 400

    user = User.query.filter((User.username == username) | (User.email == username)).first()
    if not user or not user.check_password(password):
        return jsonify({'error': 'invalid credentials'}), 401

    access_token = create_access_token(identity={'id': user.id, 'username': user.username, 'tenant_id': user.tenant_id})
    return jsonify({'access_token': access_token, 'user': {'id': user.id, 'username': user.username}}), 200
