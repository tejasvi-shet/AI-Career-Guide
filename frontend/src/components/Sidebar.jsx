import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaChartBar,
  FaBriefcase,
  FaRobot,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="w-64 bg-slate-900 p-5 min-h-screen flex flex-col">
      <div>
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
              to="/career-recommendation"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <FaBriefcase />
              Career Recommendation
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
              to="/learning-roadmap"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <FaChartBar />
              Learning Roadmap
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
              Analytics Dashboard
            </Link>
          </li>
        </ul>
      </div>

      {/* Logout Button */}
      <div className="mt-auto pt-8">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 py-2 rounded-lg hover:bg-red-700 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;