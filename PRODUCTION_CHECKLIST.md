# Production Readiness Checklist

This document lists prioritized steps to make TwineCapital production-ready.

1) Secrets & Configuration
   - Add `.env` for development and use a secret manager in production.
   - Required env vars: `DATABASE_URL`, `SECRET_KEY`, `OPENAI_API_KEY`, `DEFAULT_AI_MODEL`.

2) Containerization
   - Create `Dockerfile` for backend (use multi-stage build) and `docker-compose.yml` for local dev.

3) Production Web Server
   - Run with Gunicorn (or Waitress) behind Nginx. Example: `gunicorn -w 4 -b 0.0.0.0:5000 'app:app'`.

4) Database Migrations
   - Ensure alembic uses `DATABASE_URL`; run `alembic upgrade head` as part of deployment.

5) CI/CD
   - Add GitHub Actions: lint + tests, build docker image, deploy to staging.

6) Tests and Linting
   - Add pytest tests for backend, vitest/jest for frontend, and ruff/flake8 + pre-commit hooks.

7) Security
   - Lock down CORS, enable CSRF protection server-side, add rate limiting for LLM endpoints, review dependencies.

8) Observability
   - Structured logs, Sentry for errors, Prometheus metrics.

9) Cost & LLM Controls
   - Add per-client rate limits and token usage logging. Consider caching or async processing.

10) Docs & Developer DX
   - Add `.env.example`, `Makefile` tasks, README improvements and developer onboarding docs.

Follow-up: each item above can be broken down into PR-sized tasks. If you want, I can implement the `.env.example` + README changes (done), add a backend Dockerfile + docker-compose, or add a demo AI endpoint next.
