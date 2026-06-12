import { useState } from "react";
import Sidebar from "../components/Sidebar";

function LearningRoadmap() {
  const [selectedRole, setSelectedRole] = useState("");
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateRoadmap = async () => {
    if (!selectedRole) {
      alert("Please select a role");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:8000/roadmap",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role: selectedRole,
          }),
        }
      );

      const data = await response.json();

      setRoadmap(data.roadmap || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Failed to generate roadmap");
    }
  };

  return (
  <div className="flex min-h-screen bg-slate-950 text-white">
    <Sidebar />

    <div className="flex-1 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Learning Roadmap
      </h1>

      {/* Role Selection */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Select Career Goal
        </h2>

        <div className="flex flex-wrap gap-4 items-center">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="bg-slate-800 p-3 rounded text-white w-full md:w-80"
          >
            <option value="">Choose Role</option>
            <option value="AI Engineer">
              AI Engineer
            </option>
            <option value="Data Analyst">
              Data Analyst
            </option>
            <option value="Frontend Developer">
              Frontend Developer
            </option>
            <option value="Backend Developer">
              Backend Developer
            </option>
          </select>

          <button
            onClick={generateRoadmap}
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading
              ? "Generating..."
              : "Generate Roadmap"}
          </button>
        </div>
      </div>

      {/* Roadmap Timeline */}
      <div className="bg-slate-900 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">
          Learning Journey
        </h2>

        {roadmap.length > 0 ? (
          <div className="relative">

            {roadmap.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 mb-8 relative"
              >
                {/* Timeline Circle */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  {index !== roadmap.length - 1 && (
                    <div className="w-1 h-16 bg-blue-500 mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="bg-slate-800 p-4 rounded-lg flex-1 shadow-lg">
                  <h3 className="font-semibold text-blue-400 mb-2">
                    Step {index + 1}
                  </h3>

                  <p className="text-gray-300">
                    {step}
                  </p>
                </div>
              </div>
            ))}

          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Select a role and generate your personalized roadmap 🚀
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
);
}

export default LearningRoadmap;