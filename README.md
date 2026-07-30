# AI Career Guide 🚀

An AI-powered career guidance platform that helps users analyze resumes, identify skill gaps, receive AI-powered career recommendations, generate interview questions, and match resumes with suitable job roles.

---

# 📌 Features

## 📄 Resume Analyzer

- Upload PDF resumes
- Automatically extract technical skills
- Calculate resume match score
- Detect missing skills
- Generate AI-powered resume feedback
- Recommend learning resources

---

## 🎯 Career Recommendation

- Personalized career suggestions
- AI-based recommendations according to user skills
- Suitable career path matching

---

## 📊 Skill Gap Analysis

Compare candidate skills with target job roles and display:

- Required Skills
- Missing Skills
- Match Score
- Gap Percentage

---

## 📚 Learning Roadmap

- Suggest learning resources
- Improve missing technical skills
- Personalized upskilling suggestions

---

## 💼 Job Matching

- Match resumes with suitable job roles
- Display compatibility score

---

## 🎤 Interview Question Generator

- Generate interview questions
- Role-specific technical questions
- Beginner to intermediate level

---

## 📜 Analysis History

- Save previous resume analyses
- View historical records

---

## 📈 Analytics Dashboard

View:

- Total Resume Analyses
- Average Match Score
- Top Skills
- Most Selected Role
- Recent Analyses

---

## 📊 Power BI Dashboard

Interactive Power BI dashboard including:

- Resume Count by Role
- Role Distribution
- Average Match Score
- Skills Analysis
- Missing Skills Analysis
- Recent Analyses

---

# 🛠 Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Recharts

## Backend

- FastAPI
- Python

## Database

- MongoDB Atlas

## AI

- Groq API
- Llama 3.3 70B Versatile

## Data Visualization

- Power BI

## DevOps

- Docker
- Docker Compose

## Tools

- Git
- GitHub
- VS Code

---

# 📂 Project Structure

```text
AI-Project/

├── backend/
│   ├── app/
│   ├── routes/
│   ├── database/
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   ├── Dockerfile
│   └── package.json
│
├── powerbi/
│   └── AI_Resume_Analyzer_Dashboard.pbix
│
├── screenshots/
│   ├── home_page.png
│   ├── dashboard_page.png
│   ├── resume_analyzer.png
│   ├── career_recommendation.png
│   ├── skill_gap.png
│   ├── job_matching.png
│   ├── analytics_dashboard_page.png
│   └── powerbi_dashboard.png
│
├── docker-compose.yml
│
└── README.md
```

---

# 📷 Screenshots

## 🏠 Home Page

![Home Page](screenshots/home_page.png)

---

## 📊 Dashboard

![Dashboard](screenshots/dashboard_page.png)

---

## 📄 Resume Analyzer

![Resume Analyzer](screenshots/resume_analyzer.png)

---

## 🎯 Career Recommendation

![Career Recommendation](screenshots/career_recommendation.png)

---

## 📈 Skill Gap Analysis

![Skill Gap](screenshots/skill_gap.png)

---

## 💼 Job Matching

![Job Matching](screenshots/job_matching.png)

---

## 📊 Analytics Dashboard

![Analytics Dashboard](screenshots/analytics_dashboard_page.png)

---

## 📈 Power BI Dashboard

![Power BI Dashboard](screenshots/powerbi_dashboard.png)

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/tejasvi-shet/AI-Project.git

cd AI-Project
```

---

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs on

```text
https://ai-career-guide-backend-weg0.onrender.com
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```text
http://localhost:5173
```

---

# 🐳 Docker

Build containers

```bash
docker compose build
```

Run containers

```bash
docker compose up
```

Stop containers

```bash
docker compose down
```

---

# 📊 Power BI Dashboard

The project includes an interactive Power BI dashboard that provides insights into:

- Resume Analysis Trends
- Average Match Score
- Role Distribution
- Top Skills
- Missing Skills
- Recent Analyses

Dashboard file:

```text
powerbi/AI_Resume_Analyzer_Dashboard.pbix
```

---

# ☁️ Deployment

The application has been containerized using Docker and is ready for deployment on cloud platforms.

Supported deployment platforms:

- Docker Compose
- Render
- Microsoft Azure (Deployment Ready)
- MongoDB Atlas

> Note: Dockerization has been completed. Azure deployment depends on the permissions and policies of the Azure subscription being used.

---

# 👨‍💻 Author

**Tejasvi Shet**

Final Year Computer Engineering Student

GitHub: https://github.com/tejasvi-shet

LinkedIn: https://linkedin.com/in/tejasvi-shet

---

# 📄 License

This project is developed for educational and portfolio purposes.
