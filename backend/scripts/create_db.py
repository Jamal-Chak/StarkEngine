"""Create database and tables for local development.

Run this script from the repository root with your virtualenv activated.

Example:
  & C:\Users\LENOVO\StarkEngine\venv\Scripts\Activate.ps1
  python backend/scripts/create_db.py
"""
from app import create_app
from app.extensions import db


def main():
    app = create_app()
    with app.app_context():
        print("Configured SQLALCHEMY_DATABASE_URI:", app.config.get('SQLALCHEMY_DATABASE_URI'))
        print("Creating database tables (this will create the configured DB if missing)...")
        db.create_all()
        print("✅ Tables created (or already existed).")


if __name__ == '__main__':
    main()
