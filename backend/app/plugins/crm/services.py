# backend/app/plugins/crm/services.py
import importlib

DJANGO_CRM_API = 'http://localhost:8000/api'  # Adjust to your Django host

def _requests():
    try:
        return importlib.import_module('requests')
    except Exception:
        return None

def get_leads():
    requests = _requests()
    if not requests:
        return []
    response = requests.get(f'{DJANGO_CRM_API}/leads/')
    return response.json()

def get_contacts():
    requests = _requests()
    if not requests:
        return []
    response = requests.get(f'{DJANGO_CRM_API}/contacts/')
    return response.json()
