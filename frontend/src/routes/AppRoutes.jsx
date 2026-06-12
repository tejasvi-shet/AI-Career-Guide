import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ResumeAnalyzer from "../pages/ResumeAnalyzer";
import SkillGap from "../pages/SkillGap";
import CareerRecommendation from "../pages/CareerRecommendation";
import InterviewGenerator from "../pages/InterviewGenerator";
import LearningRoadmap from "../pages/LearningRoadmap";
import JobMatching from "../pages/JobMatching";
import Analytics from "../pages/Analytics";
import History from "../pages/History";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resume-analyzer" element={<ResumeAnalyzer />}/>
      <Route path="/skill-gap" element={<SkillGap />}/>
      <Route path="/career-recommendation"element={<CareerRecommendation />}/>
      <Route path="/interview-generator" element={<InterviewGenerator />} />
      <Route path="/learning-roadmap" element={<LearningRoadmap />} />
      <Route path="/job-matching" element={<JobMatching />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default AppRoutes;