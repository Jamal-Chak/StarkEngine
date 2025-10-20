from datetime import datetime
from app.extensions import db


class AIUsage(db.Model):
    __tablename__ = 'ai_usage'
    id = db.Column(db.Integer, primary_key=True)
    tenant_id = db.Column(db.String(128), nullable=True)  # placeholder for multi-tenant id
    user_id = db.Column(db.Integer, nullable=True)
    prompt = db.Column(db.Text, nullable=False)
    model = db.Column(db.String(128), nullable=False)
    job_id = db.Column(db.String(128), nullable=True)
    tokens = db.Column(db.Integer, nullable=True)
    cost = db.Column(db.Numeric(10, 4), nullable=True)
    status = db.Column(db.String(32), nullable=False, default='queued')
    result = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)
