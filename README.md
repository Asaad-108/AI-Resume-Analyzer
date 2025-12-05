🧠 AI Resume Analyzer

An intelligent resume-analysis web application using MERN + Python NLP + ATS scoring.

This project allows users to upload their resumes (PDF/DOCX), extract text, analyze skills, generate ATS score, detect missing skills, recommend job roles, and download a structured PDF report — all powered by AI.

🚀 Features
🔹 Resume Upload & Text Extraction

Upload PDF/DOCX files

Extract text using pdf-parse / python-docx / OCR (optional)

Clean, drag-and-drop upload UI

🔹 AI-Powered Resume Analysis

Skill Extraction (Technical + Soft skills)

Grammar Issue Detection (optional)

Resume Summary Generation

Recommended Job Roles

Strengths & Weaknesses

Missing Skills List

🔹 ATS Score System (0–100)

Keyword matching from skills database

Role-based skill mapping

Weighted scoring system

Final ATS Score with breakdown

🔹 Dashboard & Report

Skills found / missing

ATS Score visualization (Progress circle)

Job recommendations

Improvement suggestions

Downloadable PDF Report

🔹 Admin (optional)

View all uploaded resumes

Delete / manage records

🏗️ Tech Stack
Frontend (React / Vite / Tailwind)

Upload UI

Results dashboard

Recharts graphs

PDF report viewer

Backend (Node.js + Express)

File upload API (multer)

Resume text extraction (pdf-parse)

Middleware for Python microservice communication

AI Microservice (Python – FastAPI)

NLP text processing

ATS scoring logic

AI prompts (OpenAI or Local ML model)

Skill extraction using keyword + GPT hybrid method

Database

MongoDB (Mongoose)

⚙️ System Architecture
React (Client)
     ↓
Node.js (Backend)
     ↓
FastAPI (AI Microservice)
     ↓
OpenAI API / Local ML Models

MongoDB (Database)

📁 Folder Structure
/client
  /src
    /components
    /pages
    /utils

/server
  /routes
  /controllers
  /middleware
  /utils
  /models

/ai-service
  app.py
  model.py
  skills.json

🔧 Installation & Setup
1️⃣ Clone Repo
git clone https://github.com/Asaad-108/ai-resume-analyzer.git
cd ai-resume-analyzer

2️⃣ Install Frontend
cd client
npm install
npm run dev

3️⃣ Install Backend
cd server
npm install
npm run dev

4️⃣ Setup AI Microservice
cd ai-service
pip install -r requirements.txt
uvicorn app:app --reload

5️⃣ Setup Environment Variables
server/.env
MONGO_URI=your_mongo_url
AI_SERVICE_URL=http://localhost:8000/analyze
PORT=5000

ai-service/.env
OPENAI_API_KEY=your_api_key

📊 API Endpoints
POST /upload

Upload resume → return extracted text.

POST /analyze

Send extracted text → return AI analysis.

GET /report/:id

Fetch stored analysis report.

📝 ATS Score Logic (Simplified)

Extract skills from resume

Compare with required skills (skills.json)

Match % → ATS score

Missing skills = suggestions

📄 Future Enhancements

Login system (JWT)

Role-specific skill sets (Frontend Dev, Backend Dev, Cloud Engineer)

Multi-language resume support

Full PDF template for reports

🤝 Contributing

Pull requests are welcome!
Please follow the code style and include proper documentation.

📜 License

MIT License

⭐ Author

Muhammad Asaad
Final Year BSCS — University of Central Punjab
AI | MERN | Cloud | Mobile Development