from flask import Blueprint, request, jsonify

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    return jsonify({"message": "User registered successfully."})

@auth_bp.route('/login', methods=['POST'])
def login():
    return jsonify({"message": "User logged in successfully."})
