# AshishLabs

AshishLabs is my personal engineering platform showcasing enterprise-grade software applications, data engineering projects, AI systems, and modern full-stack development.

This repository is a production-first monorepo designed for deployment on a Linux VPS using Docker, Docker Compose, and a host-installed Nginx reverse proxy.

---

# Technology Stack

## Frontend

- React
- Vite
- JavaScript
- React Router
- CSS

## Backend

- FastAPI
- Python

## DevOps

- Docker
- Docker Compose
- Nginx
- Git
- GitHub

---

# Repository Structure

```
ashishlabs/
│
├── docker-compose.yml
├── .env
├── .gitignore
├── README.md
│
├── docs/
├── nginx/
├── scripts/
├── shared/
│
├── portfolio/
│
└── patient-registration/
```

---

# Applications

## Portfolio

Production URL

```
https://ashishlabs.com
```

---

## Enterprise Patient Registration System

Production URL

```
https://ashishlabs.com/patient-registration
```

Backend API

```
https://ashishlabs.com/patient-registration/api
```

---

# Local Development

Portfolio

```bash
cd portfolio/frontend
npm install
npm run dev
```

Patient Registration Frontend

```bash
cd patient-registration/frontend
npm install
npm run dev
```

Patient Registration Backend

```bash
cd patient-registration/backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

# Docker

Build every service

```bash
docker compose build
```

Start

```bash
docker compose up -d
```

Stop

```bash
docker compose down
```

---

# Production Deployment

```bash
git pull origin main

docker compose build

docker compose up -d
```

---

# Current Milestone

- Portfolio Website
- Enterprise Patient Registration System

Future projects will be added to this monorepo while keeping the deployment architecture unchanged.

---

# License

Personal Project

Copyright © Ashish Hiremath