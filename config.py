import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # Default AI model used across the application. Can be overridden with
    # the environment variable DEFAULT_AI_MODEL. Setting to 'gpt-5-mini' to
    # enable GPT-5 mini for all clients by default.
    DEFAULT_AI_MODEL = os.getenv("DEFAULT_AI_MODEL", "gpt-5-mini")
