from flask import Flask
from .extensions import db, migrate, cors, bcrypt, jwt
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from .api.v1.routes import api_v1
from app.plugins.crm.routes import crm_bp  # ✅ CRM plugin wrapper

def create_app():
    app = Flask(__name__)
    app.config.from_object("app.config.DevelopmentConfig")

    # Ensure DEFAULT_AI_MODEL is present in the Flask config. This will
    # default to the value in the project's top-level config.py (which
    # defaults to 'gpt-5-mini') unless overridden via environment.
    try:
        from config import Config as TopConfig  # top-level config.py
        app.config.setdefault('DEFAULT_AI_MODEL', getattr(TopConfig, 'DEFAULT_AI_MODEL', 'gpt-5-mini'))
    except Exception:
        # If importing top-level config fails for any reason, fall back to env or hard-coded default
        import os
        app.config.setdefault('DEFAULT_AI_MODEL', os.getenv('DEFAULT_AI_MODEL', 'gpt-5-mini'))

    db.init_app(app)
    migrate.init_app(app, db)
    # Allow the local Vite dev server origin and enable credentials so cookies
    # (including our csrf cookie) are shared with the frontend during dev.
    # Allow local Vite dev server origins (include common ports 5173 and 5174)
    cors.init_app(
        app,
        resources={r"/*": {"origins": [
            "http://localhost:5173",
            "http://127.0.0.1:5173",
            "http://localhost:5174",
            "http://127.0.0.1:5174",
        ]}},
        supports_credentials=True,
    )
    bcrypt.init_app(app)
    jwt.init_app(app)

    # Initialize rate limiter with a conservative default
    limiter = Limiter(key_func=get_remote_address, default_limits=["10/minute"])
    limiter.init_app(app)

    app.register_blueprint(api_v1, url_prefix='/api/v1')
    # Register auth blueprint
    try:
        from app.api.v1.auth import auth_bp
        app.register_blueprint(auth_bp)
    except Exception:
        pass
    app.register_blueprint(crm_bp, url_prefix='/crm')  # ✅ CRM plugin registered

    # Import models so Flask-Migrate / Alembic can detect them
    try:
        from app.models import ai_usage  # noqa: F401
    except Exception:
        pass

    @app.route('/')
    def home():
        return "✅ Hello, TwineCapital backend is running!"

    return app
