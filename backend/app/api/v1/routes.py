from flask import Blueprint, jsonify
from .controllers import get_users

api_v1 = Blueprint("api_v1", __name__)

# Existing /users route
api_v1.route("/users")(get_users)

# Add root route to avoid 404 at /
@api_v1.route("/")
def home():
    return jsonify({"message": "Welcome to StarkEngine API"})
