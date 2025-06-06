from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from routes.auth_routes import auth_bp
from routes.invoice_routes import invoice_bp
from routes.expense_routes import expense_bp

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Register routes
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(invoice_bp, url_prefix='/invoices')
app.register_blueprint(expense_bp, url_prefix='/expenses')

if __name__ == "__main__":
    app.run(debug=True)
