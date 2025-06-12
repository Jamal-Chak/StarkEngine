from flask import Flask
from .extensions import db, migrate
from .api.v1.routes import api_v1

def create_app():
    app = Flask(__name__)

    # Load configuration
    app.config.from_object("app.config.DevelopmentConfig")

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)

    # Register blueprints
    app.register_blueprint(api_v1, url_prefix="/api/v1")

    # Root route
    @app.route('/')
    def home():
        return "✅ Hello, StarkEngine backend is running!"

    # Health check endpoint
    @app.route('/health')
    def health_check():
        return {"status": "healthy"}, 200

    return app
