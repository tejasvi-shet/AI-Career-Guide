import { useState } from "react";
import Sidebar from "../components/Sidebar";

function CareerRecommendation() {
  const [file, setFile] = useState(null);
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please select a resume");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      // Upload Resume
      const resumeResponse = await fetch(
        "http://127.0.0.1:8000/upload-resume",
        {
          method: "POST",
          body: formData,
        }
      );

      const resumeData = await resumeResponse.json();

      // Career Recommendation
      const careerResponse = await fetch(
        "http://127.0.0.1:8000/career-recommendation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            skills: resumeData.skills,
          }),
        }
      );

      const careerData = await careerResponse.json();

      setCareers(
        careerData.recommended_careers || []
      );

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Analysis Failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Career Recommendation
        </h1>

        {/* Upload Section */}
        <div className="bg-slate-900 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Upload Resume
          </h2>

          <div className="flex items-center gap-4 flex-wrap">
            <label className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 transition">
              📄 Choose File
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) =>
                  setFile(e.target.files[0])
                }
              />
            </label>

            {file && (
              <span className="text-green-400 text-sm">
                ✓ {file.name}
              </span>
            )}

            <button
              onClick={handleAnalyze}
              className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              {loading
                ? "Analyzing..."
                : "Get Recommendations"}
            </button>
          </div>
        </div>

        {/* Career Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {careers.length > 0 ? (
            careers.map((career, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  index === 0
                    ? "bg-slate-900 border-2 border-yellow-400"
                    : "bg-slate-900"
                }`}
              >
                {index === 0 && (
                  <p className="text-yellow-400 font-bold mb-2">
                    ⭐ Best Match
                  </p>
                )}

                <h2 className="text-xl font-semibold mb-2 text-blue-400">
                  {career.career}
                </h2>

                <p className="text-green-400 font-semibold mb-4">
                  Match Score: {career.match_percentage}%
                </p>

                <div className="flex flex-wrap gap-2">
                  {career.matched_skills.map(
                    (skill, idx) => (
                      <span
                        key={idx}
                        className="bg-green-600 px-3 py-1 rounded-full text-sm"
                      >
                        ✓ {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-slate-900 p-6 rounded-xl">
              <p className="text-gray-400">
                Upload a resume to get career
                recommendations
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CareerRecommendation;