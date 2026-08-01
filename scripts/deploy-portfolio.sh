#!/bin/bash

set -e

PROJECT_DIR="/srv/ashishlabs"

cd "$PROJECT_DIR"

git pull origin main

docker compose build portfolio

docker compose up -d portfolio

docker image prune -f

docker compose ps

docker compose logs --tail=50 portfolio