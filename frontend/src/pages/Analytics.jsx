import Sidebar from "../components/Sidebar";

function Analytics() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Analytics Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-lg font-semibold">
              Total Resumes
            </h2>

            <p className="text-3xl mt-4 text-blue-500">
              120
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-lg font-semibold">
              Avg Resume Score
            </h2>

            <p className="text-3xl mt-4 text-blue-500">
              82%
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-lg font-semibold">
              Job Matches
            </h2>

            <p className="text-3xl mt-4 text-blue-500">
              95
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-lg font-semibold">
              Users
            </h2>

            <p className="text-3xl mt-4 text-blue-500">
              50
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Analytics;