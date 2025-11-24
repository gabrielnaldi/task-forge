# TaskForge  
### Distributed Job Processing System with BullMQ, Redis, Docker, Prisma & Swagger

TaskForge is a complete, production-ready job processing system designed to demonstrate modern backend engineering practices.  
It includes a REST API, background workers, Redis-powered queues, persistent logging with Prisma, and a monitoring UI for job management.

This project is ideal for learning or showcasing real-world experience with distributed systems, background tasks, containerization, and scalable architectures.

---

## 🚀 Features

### Core
- **REST API (Node.js + Express or NestJS)**  
- **Job Queues using BullMQ**  
- **Workers for background processing**  
- **Redis as the queue backend**  
- **Prisma ORM with a relational database (PostgreSQL)**  
- **OpenAPI/Swagger documentation**  
- **Containerized system with Docker & Docker Compose**

### Extra (included in the full project)
- Delayed jobs  
- Retry & backoff strategies  
- Repeatable/cron jobs  
- Dead-letter queues  
- Job prioritization  
- Email or notification processing flows  
- Bull-Board (or Arena) job monitoring dashboard  
- API rate limiting & validation  
- Database-persisted job logs  
- Multiple named queues and multiple worker processes  

---

## 🏗️ Architecture Overview


- **API**: Receives requests and pushes jobs into queues  
- **Redis**: Acts as the message broker for BullMQ  
- **Workers**: Execute tasks asynchronously  
- **Database (PostgreSQL)**: Stores job metadata, logs, audit data  
- **Bull Board**: UI to monitor queues and job status  

---

## 📦 Technologies Used

### Backend
- Node.js (18+)
- Express or NestJS (to be chosen in Step 2)
- TypeScript
- BullMQ
- Redis 7
- Prisma ORM
- PostgreSQL  
- Zod (validation)

### Development / Tooling
- Docker & Docker Compose  
- ESLint + Prettier  
- Jest
- Swagger (OpenAPI 3.0)

---

## 🐳 Running the Project with Docker

Clone the repository:

```bash
git clone https://github.com/gabrielnaldi/taskforge
cd taskforge
```

Start all services: 
```bash
docker compose up
```

---

### Services included:
- API — main backend service
- Worker — background job processor
- Redis — queue backend
- Postgres — persistent database
- Bull-board — queue dashboard


### 📚 Endpoints
#### The API will be available at: 
```bash
http://localhost:3000
```


#### Swagger documentation:
```bash
http://localhost:3000/docs
```

#### Bull Board UI:
```bash
http://localhost:3001
```

#### Job Creation
```bash
POST: /jobs/email
POST: /jobs/report
POST: /jobs/notifications
POST: /jobs/cleanup
```


#### Queue Management
```bash
GET: /queues
GET: /queues/:name/jobs
DELETE: /queues/:name/jobs/:id
```

#### System
```bash
GET: /health
GET: /metrics
```

---

## 📌 License

MIT License – Free for personal and commercial use.

## ✨ Author

Gabriel Naldi - Computer Engineer - Fullstack
