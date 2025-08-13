# backend/app.py
from app import create_app

# Create Flask application instance from app package
app = create_app()

if __name__ == '__main__':
    app.run(debug=True, port=5000)
