import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaFileAlt,
  FaChartBar,
  FaBriefcase,
  FaRobot,
  FaSignOutAlt,
  FaHistory,
  FaBars,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div
      className={`bg-slate-900 min-h-screen p-5 flex flex-col transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-8">
          {isOpen && (
            <h2 className="text-2xl font-bold text-blue-500">
              AI Career Guide
            </h2>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-xl"
          >
            <FaBars />
          </button>
        </div>

        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <FaHome />
              {isOpen && "Dashboard"}
            </Link>
          </li>

          <li>
            <Link
              to="/resume-analyzer"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <FaFileAlt />
              {isOpen && "Resume Analyzer"}
            </Link>
          </li>

          <li>
            <Link
              to="/career-recommendation"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <FaBriefcase />
              {isOpen && "Career Recommendation"}
            </Link>
          </li>

          <li>
            <Link
              to="/skill-gap"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <FaChartBar />
              {isOpen && "Skill Gap Analysis"}
            </Link>
          </li>

          <li>
            <Link
              to="/learning-roadmap"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <FaChartBar />
              {isOpen && "Learning Roadmap"}
            </Link>
          </li>

          <li>
            <Link
              to="/interview-generator"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <FaRobot />
              {isOpen && "Interview Generator"}
            </Link>
          </li>

          <li>
            <Link
              to="/job-matching"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <FaBriefcase />
              {isOpen && "Job Matching"}
            </Link>
          </li>

          <li>
            <Link
              to="/analytics"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <FaChartBar />
              {isOpen && "Analytics Dashboard"}
            </Link>
          </li>

          <li>
            <Link
              to="/history"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <FaHistory />
              {isOpen && "Analysis History"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Logout */}
      <div className="mt-auto pt-8">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 py-2 rounded-lg hover:bg-red-700 transition"
        >
          <FaSignOutAlt />
          {isOpen && "Logout"}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;