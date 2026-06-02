function DashboardCard({ title, value }) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-3xl mt-4 text-blue-500">
        {value}
      </p>
    </div>
  );
}

export default DashboardCard;