from flask import Blueprint, jsonify

invoice_bp = Blueprint('invoice', __name__)

@invoice_bp.route('/', methods=['GET'])
def get_invoices():
    return jsonify({"invoices": []})
