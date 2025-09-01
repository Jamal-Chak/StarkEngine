# backend/app/plugins/crm/services.py
import requests

DJANGO_CRM_API = 'http://localhost:8000/api'  # Adjust to your Django host

def get_leads():
    response = requests.get(f'{DJANGO_CRM_API}/leads/')
    return response.json()

def get_contacts():
    response = requests.get(f'{DJANGO_CRM_API}/contacts/')
    return response.json()
