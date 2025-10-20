"""Helper to start an RQ worker for AI jobs.

Uses dynamic imports so the file doesn't trigger editor diagnostics when
`rq`/`redis` are not installed in the environment used by the editor.
"""
import os
import importlib

redis_mod = importlib.util.find_spec('redis')
rq_mod = importlib.util.find_spec('rq')

if __name__ == '__main__':
    if not redis_mod or not rq_mod:
        raise RuntimeError('redis and rq must be installed to run the worker')

    redis = importlib.import_module('redis')
    rq = importlib.import_module('rq')

    redis_url = os.getenv('REDIS_URL', 'redis://redis:6379/0')
    redis_conn = redis.Redis.from_url(redis_url)
    with rq.Connection(redis_conn):
        q = rq.Queue('ai')
        worker = rq.Worker([q])
        worker.work()
