import { Link } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaChartBar,
  FaBriefcase,
  FaRobot,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 p-5 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-500 mb-8">
        AI Career Guide
      </h2>

      <ul className="space-y-4">
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaHome />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/resume-analyzer"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaFileAlt />
            Resume Analyzer
          </Link>
        </li>

        <li>
          <Link
            to="/skill-gap"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaChartBar />
            Skill Gap Analysis
          </Link>
        </li>

        <li>
          <Link
            to="/career-recommendation"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaBriefcase />
            Career Recommendation
          </Link>
        </li>

        <li>
          <Link
            to="/interview-generator"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaRobot />
            Interview Generator
          </Link>
        </li>

        <li>
          <Link
            to="/learning-roadmap"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaChartBar />
            Learning Roadmap
          </Link>
        </li>

        <li>
          <Link
            to="/job-matching"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaBriefcase />
            Job Matching
          </Link>
        </li>

        <li>
          <Link
            to="/analytics"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaChartBar />
            Analytics
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;