import { useEffect, useState } from "react";
import { getDrugs } from "../services/drugService";

function DrugList() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    getDrugs().then(setDrugs);
  }, []);

  const getStatus = (date) => {
    const today = new Date();
    const expiry = new Date(date);
    const next30 = new Date();
    next30.setDate(today.getDate() + 30);

    if (expiry < today) return "Expired";
    if (expiry <= next30) return "Expiring Soon";
    return "Safe";
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Drug Inventory</h1>

      <table className="w-full bg-white rounded-2xl shadow overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Drug</th>
            <th>Batch</th>
            <th>Expiry</th>
            <th>Qty</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {drugs.map((drug) => {
            const status = getStatus(drug.expiry_date);

            return (
              <tr key={drug._id} className="border-t hover:bg-gray-50">
                <td className="p-4">{drug.drug_name}</td>
                <td>{drug.batch_number}</td>
                <td>{new Date(drug.expiry_date).toLocaleDateString()}</td>
                <td>{drug.quantity}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      status === "Expired"
                        ? "bg-red-100 text-red-600"
                        : status === "Expiring Soon"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                    }`}
                  >
                    {status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DrugList;
