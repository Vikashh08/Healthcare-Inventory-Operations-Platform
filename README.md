# MedAxis Healthcare Infrastructure

Welcome to the central MedAxis operations platform! We designed this entirely from the ground up to solve the sheer complexity of hospital inventory management, clinical supply chains, and staff authentication. 

Instead of relying on messy, robotic interfaces filled with confusing icons and cluttered dropdowns, this system utilizes a gorgeous, high-contrast, clean medical aesthetic. It's meant to feel human, smooth, and genuinely enjoyable to use during stressful operational shifts.

## What's exactly inside here?

To make sure everything stays secure and scalable, we split the platform into two halves:

1. **The Core Intelligence (Backend)**: We built isolated Python microservices using FastAPI. Each one has its own distinct job—the `auth-service` securely handles logins, the `inventory-service` tracks the warehouse medicine batches, and an `ai-service` connects to Google's Gemini to warn analysts about unusual supply orders.
2. **The Medical Interface (Frontend)**: This is our React application. It uses pure, handwritten CSS and perfectly shapes itself into separate dashboards depending on whether a Super Admin, Finance Officer, or local Branch Pharmacist signs in. 

---

## 🛠 Complete Setup Guide

Getting this platform running locally on your machine is incredibly simple. Just follow these steps to turn the whole hospital infrastructure on:

### 1. Wake up the data layers
We need PostgreSQL and Redis databases running in the background to store our records securely. Assuming you have Docker installed on your Mac, just open your terminal here and type:
```bash
docker-compose up -d
```
You'll see it quietly boot up.

### 2. Boot up the Python microservices
Our Python servers need their own virtual bubble to run correctly. Open a new terminal tab and set it up like this:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
Once everything installs, let's start up the authentication engine so people can actually log in:
```bash
cd auth-service
uvicorn main:app --reload --port 8000
```
*(If you want to run the other services, simply open another tab, activate the virtual environment again using `source backend/venv/bin/activate`, and run the exact same `uvicorn` command inside their respective folders!)*

### 3. Launch the beautiful interface
With your backend humming along in those other tabs, open one final terminal tab to start the React website:
```bash
cd frontend
npm install
npm run dev
```
Wait a couple of seconds for it to start, and check the output. It should give you a local link (usually `http://localhost:5173`). Click that link to open the portal in your browser!
