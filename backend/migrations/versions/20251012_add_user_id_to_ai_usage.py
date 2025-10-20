"""add user_id to ai_usage

Revision ID: 20251012_add_user_id
Revises: 
Create Date: 2025-10-12 00:00:00.000000
"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '20251012_add_user_id'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    inspector = sa.inspect(conn)
    # check if table exists and column missing, then add
    if 'ai_usage' in inspector.get_table_names():
        cols = [c['name'] for c in inspector.get_columns('ai_usage')]
        if 'user_id' not in cols:
            op.add_column('ai_usage', sa.Column('user_id', sa.Integer(), nullable=True))


def downgrade():
    conn = op.get_bind()
    inspector = sa.inspect(conn)
    if 'ai_usage' in inspector.get_table_names():
        cols = [c['name'] for c in inspector.get_columns('ai_usage')]
        if 'user_id' in cols:
            op.drop_column('ai_usage', 'user_id')
