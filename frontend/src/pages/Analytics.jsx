import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function Analytics() {
  const [stats, setStats] = useState(null);

  const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
  ];

  useEffect(() => {
    const email = localStorage.getItem("userEmail");

    if (!email) {
      console.error("No user email found");
      return;
    }

    fetch(`http://127.0.0.1:8000/dashboard-stats/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Analytics Data:", data);
        setStats(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!stats) {
    return (
      <div className="flex min-h-screen bg-slate-950 text-white">
        <Sidebar />
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold mb-8">
            Analytics Dashboard
          </h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const scoreData =
    stats.recent?.map((item, index) => ({
      name: `Resume ${index + 1}`,
      score: item.match_score,
    })) || [];

  const roleCount = {};

  stats.recent?.forEach((item) => {
    roleCount[item.role] =
      (roleCount[item.role] || 0) + 1;
  });

  const roleData = Object.keys(roleCount).map(
    (role) => ({
      name: role,
      value: roleCount[role],
    })
  );

  const skillCount = {};

  stats.recent?.forEach((item) => {
    item.skills.forEach((skill) => {
      skillCount[skill] =
        (skillCount[skill] || 0) + 1;
    });
  });

  const skillData = Object.keys(skillCount)
    .map((skill) => ({
      skill,
      count: skillCount[skill],
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Analytics Dashboard
        </h1>

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

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* Match Score Trend */}
          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              Match Score Trend
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <LineChart data={scoreData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#3B82F6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Role Distribution */}
          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              Role Distribution
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <PieChart>
                <Pie
                  data={roleData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {roleData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[index % COLORS.length]
                      }
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skills Chart */}
        <div className="bg-slate-900 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Top Skills
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart data={skillData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="skill" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="count"
                fill="#10B981"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Analyses */}
        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6">
            Recent Analyses
          </h2>

          <div className="space-y-4">
            {stats.recent?.length === 0 && (
              <div className="bg-slate-800 p-6 rounded-lg text-center text-gray-400">
                No analyses found yet.
              </div>
            )}

            {stats.recent?.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 p-4 rounded-lg"
              >
                <div className="flex justify-between mb-2">
                  <p>
                    <strong>Role:</strong>{" "}
                    {item.role}
                  </p>

                  <p className="text-blue-400">
                    {item.match_score}%
                  </p>
                </div>

                <p className="text-gray-400">
                  {item.email}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {item.skills
                    .slice(0, 5)
                    .map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-600 px-2 py-1 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Analytics;