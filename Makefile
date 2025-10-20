## Makefile - common developer tasks

.PHONY: install-backend install-frontend up run test lint build

install-backend:
	python -m pip install --upgrade pip
	pip install -r backend/requirements.txt

install-frontend:
	cd frontend/vite-project && npm install

up:
	docker-compose up --build

run-backend:
	python backend/app.py

run-worker:
	python backend/run_worker.py

lint:
	# Python lint
	python -m pip install ruff
	ruff check .

test:
	# Run backend tests
	python -m pip install pytest
	pytest -q

build-frontend:
	cd frontend/vite-project && npm run build
