import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Analytics() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/analytics"
      );

      const data = await response.json();

      setAnalytics(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Analytics Dashboard
        </h1>

        {loading ? (
          <p>Loading Analytics...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-lg font-semibold">
                Skills Detected
              </h2>

              <p className="text-3xl mt-4 text-blue-500">
                {analytics.skills_detected}
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-lg font-semibold">
                Recommended Career
              </h2>

              <p className="text-2xl mt-4 text-green-500">
                {analytics.recommended_career}
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-lg font-semibold">
                Match Score
              </h2>

              <p className="text-3xl mt-4 text-yellow-500">
                {analytics.match_score}%
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-lg font-semibold">
                Missing Skills
              </h2>

              <p className="text-3xl mt-4 text-red-500">
                {analytics.missing_skills}
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-lg font-semibold">
                Jobs Matched
              </h2>

              <p className="text-3xl mt-4 text-green-500">
                {analytics.jobs_matched}
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-lg font-semibold">
                Interview Questions
              </h2>

              <p className="text-3xl mt-4 text-purple-500">
                {analytics.interview_questions}
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Analytics;