"""RQ worker tasks for processing AI jobs.

This file uses dynamic imports for `rq` and `redis` to avoid static
analysis errors when the packages haven't been installed in the editor
environment (Pylance). At runtime, ensure the packages are installed.
"""
import os
import importlib
from app.services.ai_service import completions

# Dynamic import to satisfy editors (Pylance) when packages aren't installed
try:
    rq_mod = importlib.import_module('rq')
    Queue = rq_mod.Queue
    Connection = rq_mod.Connection
except Exception:
    rq_mod = None
    Queue = None
    Connection = None

try:
    redis_mod = importlib.import_module('redis')
    Redis = redis_mod.Redis
except Exception:
    redis_mod = None
    Redis = None

# Connect to Redis
redis_url = os.getenv('REDIS_URL', 'redis://redis:6379/0')
if Redis:
    redis_conn = Redis.from_url(redis_url)
else:
    redis_conn = None

if Queue and redis_conn is not None:
    q = Queue('ai', connection=redis_conn)
else:
    q = None


def process_ai_job(prompt: str, model: str = None, usage_id: int = None, max_tokens: int = 256, temperature: float = 0.2):
    """Process an AI job and persist the result into the AIUsage record.

    usage_id: optional ID from AIUsage table so worker can update status/result.
    """
    # Run the LLM call
    try:
        result = completions(prompt, model=model, max_tokens=max_tokens, temperature=temperature)
    except Exception as exc:
        # Persist failure if usage_id provided
        if usage_id:
            try:
                from app import create_app
                from app.extensions import db
                from app.models.ai_usage import AIUsage

                app = create_app()
                with app.app_context():
                    usage = AIUsage.query.get(usage_id)
                    if usage:
                        usage.status = 'failed'
                        usage.result = str(exc)
                        db.session.add(usage)
                        db.session.commit()
            except Exception:
                pass
        raise

    # Extract text
    try:
        text = result.choices[0].message['content']
    except Exception:
        try:
            text = result.choices[0].text
        except Exception:
            text = str(result)

    # Persist result into DB
    if usage_id:
        try:
            from app import create_app
            from app.extensions import db
            from app.models.ai_usage import AIUsage

            app = create_app()
            with app.app_context():
                usage = AIUsage.query.get(usage_id)
                if usage:
                    usage.status = 'finished'
                    usage.result = text
                    # tokens/cost estimation could be added here
                    db.session.add(usage)
                    db.session.commit()
        except Exception:
            pass

    return {'model': model, 'output': text}


if __name__ == '__main__':
    # simple developer helper to enqueue a test job
    job = q.enqueue(process_ai_job, "Hello from worker test", 'gpt-5-mini')
    print('Enqueued job', job.id)
