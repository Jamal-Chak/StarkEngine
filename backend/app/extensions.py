from flask_sqlalchemy import SQLAlchemy     # For database handling
from flask_migrate import Migrate           # For database migrations
from flask_cors import CORS                 # For Cross-Origin Resource Sharing
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

db = SQLAlchemy()       # Initializes the database object
migrate = Migrate()     # Sets up migrations
cors = CORS()           # Enables CORS
bcrypt = Bcrypt()
jwt = JWTManager()
