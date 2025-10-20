# TwineCapital

TwineCapital is a full-stack financial/business dashboard project with a Flask backend and a React + Vite frontend. It includes features for invoices, CRM integration, document uploads, and AI-powered invoice tools.

Quick highlights:
- Backend: Flask (factory pattern), SQLAlchemy, Flask-Migrate, CORS
- Frontend: React + Vite, Chakra UI, Axios
- AI: `backend/app/services/ai_service.py` (wrapper for OpenAI); default model set to `gpt-5-mini`

Quickstart (dev)

Option A — Docker (recommended, full-stack):

1. Copy `.env.example` to `.env` and edit any values you want.
2. Build and start the stack:

```powershell
make up
```

This brings up Postgres, backend (Gunicorn) and frontend dev server.

Option B — Local (venv):

1. Backend: create & activate venv then:

```powershell
pip install -r backend/requirements.txt
setx FLASK_APP backend/app.py
python backend/app.py
```

2. Frontend:

```powershell
cd frontend/vite-project
npm install
npm run dev
```

Environment variables (see `.env.example`). You can also use the `Makefile`:

```powershell
make install-backend
make install-frontend
make run-backend
```

Running the AI worker (async jobs)

With Docker compose running (includes Redis), start the worker in the backend service container or locally:

```powershell
# from repo root - run inside backend container
docker-compose exec backend python backend/run_worker.py

# or locally (requires redis available at REDIS_URL)
python backend/run_worker.py
```

Database migrations

After adding the `ai_usage` model, create and apply migrations from the `backend` folder:

```powershell
cd backend
flask db migrate -m "Add ai_usage"
flask db upgrade
```

Note: ensure `FLASK_APP` and `DATABASE_URL` are set (see `.env`).

For production readiness and deployment steps, see `PRODUCTION_CHECKLIST.md`.
