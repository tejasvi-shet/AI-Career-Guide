import { useState } from "react";
import Sidebar from "../components/Sidebar";

function JobMatching() {
  const [file, setFile] = useState(null);
  const [jobs, setJobs] = useState([]);
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

      // Job Matching
      const jobResponse = await fetch(
        "http://127.0.0.1:8000/job-matching",
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

      const jobData = await jobResponse.json();

      setJobs(jobData.jobs || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Job Matching Failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Job Matching System
        </h1>

        {/* Upload Resume */}
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
                onChange={(e) => setFile(e.target.files[0])}
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
              {loading ? "Matching..." : "Find Jobs"}
            </button>
          </div>
        </div>

        {/* Job Results */}
        <div className="grid md:grid-cols-3 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <div
                key={index}
                className="bg-slate-900 p-6 rounded-xl"
              >
                <h2 className="text-xl font-semibold text-blue-400">
                  {job.company}
                </h2>

                <p className="mt-2 text-gray-300">
                  {job.role}
                </p>

                <p className="mt-3 text-green-400 font-semibold">
                  Match Score: {job.match_score}%
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.matched_skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-green-600 px-3 py-1 rounded-full text-sm"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-slate-900 p-6 rounded-xl">
              <p className="text-gray-400">
                Upload a resume to find matching jobs
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobMatching;