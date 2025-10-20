from app import create_app
from app.extensions import db


app = create_app()
with app.app_context():
    engine = db.get_engine()
    try:
        from sqlalchemy import inspect
        inspector = inspect(engine)
        print('Tables:', inspector.get_table_names())
    except Exception as e:
        print('Inspector failed, falling back to raw sqlite query:', e)
        try:
            with engine.connect() as conn:
                res = conn.execute("SELECT name FROM sqlite_master WHERE type='table';")
                print('Tables (raw):', [r[0] for r in res])
        except Exception as e2:
            print('Failed to list tables:', e2)
