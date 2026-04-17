import { useEffect, useState } from "react";
import { getDrugs } from "../services/drugService";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function Dashboard() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    getDrugs().then(setDrugs);
  }, []);

  const today = new Date();

  const expired = drugs.filter((d) => new Date(d.expiry_date) < today);

  const expiringSoon = drugs.filter((d) => {
    const expiry = new Date(d.expiry_date);
    const next30 = new Date();
    next30.setDate(today.getDate() + 30);
    return expiry >= today && expiry <= next30;
  });

  const data = [
    { name: "Expired", value: expired.length },
    { name: "Expiring Soon", value: expiringSoon.length },
    {
      name: "Safe",
      value: drugs.length - expired.length - expiringSoon.length,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <p>Total Drugs</p>
          <h2 className="text-3xl font-bold">{drugs.length}</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-yellow-500">Expiring Soon</p>
          <h2 className="text-3xl font-bold">{expiringSoon.length}</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-red-500">Expired</p>
          <h2 className="text-3xl font-bold">{expired.length}</h2>
        </div>
      </div>
      <h2 className="text-xl font-semibold mt-10 mb-4">Recent Drugs</h2>

      <div className="bg-white rounded-2xl shadow p-4">
        <table className="w-full text-sm">
          <thead className="text-gray-500">
            <tr>
              <th className="text-left p-2">Drug</th>
              <th>Batch</th>
              <th>Expiry</th>
            </tr>
          </thead>

          <tbody>
            {drugs.slice(0, 5).map((drug) => (
              <tr key={drug._id} className="border-t">
                <td className="p-2">{drug.drug_name}</td>
                <td>{drug.batch_number}</td>
                <td>{new Date(drug.expiry_date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="text-xl font-semibold mt-10 mb-4">Alerts</h2>

      <div className="space-y-3">
        {expired.length > 0 && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg">
            ⚠️ {expired.length} drug(s) have expired
          </div>
        )}

        {expiringSoon.length > 0 && (
          <div className="bg-yellow-100 text-yellow-700 p-4 rounded-lg">
            ⏳ {expiringSoon.length} drug(s) expiring soon
          </div>
        )}

        {expired.length === 0 && expiringSoon.length === 0 && (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg">
            ✅ All drugs are safe
          </div>
        )}
      </div>
      <h2 className="text-xl font-semibold mt-5">Drug Status Overview</h2>

      <div className="bg-white p-6 rounded-2xl shadow flex justify-center">
        <PieChart width={300} height={200}>
          <Pie data={data} dataKey="value" outerRadius={100} label>
            <Cell fill="#ef4444" />
            <Cell fill="#facc15" />
            <Cell fill="#22c55e" />
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default Dashboard;
