from flask import Flask
from .extensions import db, migrate, cors
from .api.v1.routes import api_v1
from app.plugins.crm.routes import crm_bp  # ✅ CRM plugin wrapper

def create_app():
    app = Flask(__name__)
    app.config.from_object("app.config.DevelopmentConfig")

    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app, resources={r"/*": {"origins": "*"}})

    app.register_blueprint(api_v1, url_prefix='/api/v1')
    app.register_blueprint(crm_bp, url_prefix='/crm')  # ✅ CRM plugin registered

    @app.route('/')
    def home():
        return "✅ Hello, StarkEngine backend is running!"

    return app
