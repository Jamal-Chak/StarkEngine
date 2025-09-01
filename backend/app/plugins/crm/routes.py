# backend/app/plugins/crm/routes.py
from flask import Blueprint, jsonify
from .services import get_leads, get_contacts

crm_bp = Blueprint('crm', __name__, url_prefix='/crm')

@crm_bp.route('/leads')
def leads():
    return jsonify(get_leads())

@crm_bp.route('/contacts')
def contacts():
    return jsonify(get_contacts())
