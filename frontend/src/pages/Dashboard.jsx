import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");

    if (!email) return;

    fetch(
      `http://127.0.0.1:8000/dashboard-stats/${email}`
    )
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        {!stats ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* Top Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">

              <div className="bg-slate-900 p-6 rounded-xl">
                <h3 className="text-gray-400">
                  Total Analyses
                </h3>

                <p className="text-4xl text-blue-500 mt-2">
                  {stats.total_analyses}
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-xl">
                <h3 className="text-gray-400">
                  Average Score
                </h3>

                <p className="text-4xl text-green-500 mt-2">
                  {stats.average_score}%
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-xl">
                <h3 className="text-gray-400">
                  Top Role
                </h3>

                <p className="text-xl mt-3">
                  {stats.top_role}
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-xl">
                <h3 className="text-gray-400">
                  Top Skill
                </h3>

                <p className="text-xl mt-3">
                  {stats.top_skill}
                </p>
              </div>

            </div>

            {/* Welcome Section */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Welcome Back 👋
              </h2>

              <p className="text-gray-300">
                You have completed{" "}
                <span className="text-blue-400 font-bold">
                  {stats.total_analyses}
                </span>{" "}
                resume analyses.
              </p>

              <p className="text-gray-300 mt-2">
                Your strongest skill is{" "}
                <span className="text-green-400 font-bold">
                  {stats.top_skill}
                </span>
              </p>

              <p className="text-gray-300 mt-2">
                Your most suitable role is{" "}
                <span className="text-yellow-400 font-bold">
                  {stats.top_role}
                </span>
              </p>
            </div>

            {/* Recent Activity */}
            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">
                Recent Activity
              </h2>

              <div className="space-y-3">
                {stats.recent?.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 p-4 rounded-lg"
                  >
                    <p>
                      Resume analyzed for{" "}
                      <span className="text-blue-400">
                        {item.role}
                      </span>
                    </p>

                    <p className="text-sm text-gray-400">
                      Match Score: {item.match_score}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;