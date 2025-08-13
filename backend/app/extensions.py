from flask_sqlalchemy import SQLAlchemy     # For database handling
from flask_migrate import Migrate           # For database migrations
from flask_cors import CORS                 # For Cross-Origin Resource Sharing

db = SQLAlchemy()       # Initializes the database object
migrate = Migrate()     # Sets up migrations
cors = CORS()           # Enables CORS
