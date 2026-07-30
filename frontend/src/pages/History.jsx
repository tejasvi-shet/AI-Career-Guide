import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function History() {
  const [history, setHistory] = useState([]);
  const [selectedAnalysis, setSelectedAnalysis] = useState(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const email = localStorage.getItem("userEmail");

    const response = await fetch(
      `https://ai-career-guide-backend-weg0.onrender.com/history/${email}`,
    );

    const data = await response.json();

    setHistory(data.history || []);
  };

  const averageScore =
    history.length > 0
      ? Math.round(
          history.reduce((sum, item) => sum + item.match_score, 0) /
            history.length,
        )
      : 0;

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">Analysis History</h1>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-lg text-gray-400">Total Analyses</h3>

            <p className="text-3xl font-bold text-blue-500 mt-2">
              {history.length}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-lg text-gray-400">Average Match Score</h3>

            <p className="text-3xl font-bold text-green-500 mt-2">
              {averageScore}%
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-lg text-gray-400">Latest Analysis</h3>

            <p className="text-xl mt-2">
              {history.length > 0
                ? history[history.length - 1].role
                : "No Data"}
            </p>
          </div>
        </div>

        {/* History Cards */}
        <div className="grid gap-4">
          {history.length > 0 ? (
            history.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 p-5 rounded-xl flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">{item.role}</h2>

                  <p className="text-gray-400">
                    Match Score: {item.match_score}%
                  </p>
                </div>

                <button
                  onClick={() => setSelectedAnalysis(item)}
                  className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </button>
              </div>
            ))
          ) : (
            <div className="bg-slate-900 p-6 rounded-xl">No Analysis Found</div>
          )}
        </div>

        {/* Modal */}
        {selectedAnalysis && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-slate-900 w-11/12 max-w-3xl p-6 rounded-xl">
              <h2 className="text-3xl font-bold mb-4">
                {selectedAnalysis.role}
              </h2>

              <p className="mb-3">
                Match Score:
                <span className="text-green-400 ml-2">
                  {selectedAnalysis.match_score}%
                </span>
              </p>

              <h3 className="font-semibold mb-2">Skills</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedAnalysis.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="font-semibold mb-2">Missing Skills</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedAnalysis.missing_skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-red-600 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="font-semibold mb-2">AI Feedback</h3>

              <div className="bg-slate-800 p-4 rounded-lg max-h-64 overflow-y-auto whitespace-pre-wrap">
                {selectedAnalysis.feedback}
              </div>

              <button
                onClick={() => setSelectedAnalysis(null)}
                className="mt-6 bg-red-600 px-4 py-2 rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default History;
