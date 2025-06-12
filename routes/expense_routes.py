from flask import Blueprint, jsonify

expense_bp = Blueprint('expense', __name__)

@expense_bp.route('/', methods=['GET'])
def get_expenses():
    return jsonify({"expenses": []})
