# app/__init__.py

from flask import Flask
from .extensions import db, migrate, cors
from .api.v1.routes import api_v1  # ✅ Blueprint with users & transactions

def create_app():
    app = Flask(__name__)

    # ✅ Load config (can use DevelopmentConfig, ProductionConfig, etc.)
    app.config.from_object("app.config.DevelopmentConfig")

    # ✅ Initialize Flask extensions
    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app, resources={r"/*": {"origins": "*"}})  # Allow CORS for frontend

    # ✅ Register your API routes under /api/v1
    app.register_blueprint(api_v1, url_prefix='/api/v1')

    # ✅ Optional: Basic root route
    @app.route('/')
    def home():
        return "✅ Hello, StarkEngine backend is running!"

    return app
