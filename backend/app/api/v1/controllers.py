from flask import jsonify

def get_users():
    users = [
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Bob"}
    ]
    return jsonify(users)

def get_transactions():
    transactions = [
        {"date": "2025-06-01", "description": "Invoice Payment", "amount": 1200},
        {"date": "2025-06-05", "description": "Office Supplies", "amount": -320},
        {"date": "2025-06-10", "description": "Service Fee", "amount": 850},
        {"date": "2025-06-13", "description": "Salary Payment", "amount": -2500},
        {"date": "2025-06-15", "description": "VAT Payment", "amount": -700},
    ]
    return jsonify(transactions)
