import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <DashboardCard
            title="Resume Score"
            value="85%"
          />

          <DashboardCard
            title="Skills Found"
            value="Python, React, SQL"
          />

          <DashboardCard
            title="Recommended Career"
            value="AI Engineer"
          />
        </div>
      </div>

    </div>
  );
}

export default Dashboard;