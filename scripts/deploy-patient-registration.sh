#!/bin/bash

set -e

PROJECT_DIR="/srv/ashishlabs"

cd "$PROJECT_DIR"

git pull origin main

docker compose build \
    patient-registration-frontend \
    patient-registration-backend

docker compose up -d \
    patient-registration-frontend \
    patient-registration-backend

docker image prune -f

docker compose ps

docker compose logs --tail=50 patient-registration-frontend
docker compose logs --tail=50 patient-registration-backend