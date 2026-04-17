import { useState } from "react";
import { addDrug } from "../services/drugService";

function AddDrug() {
  const [drug, setDrug] = useState({
    drug_name: "",
    batch_number: "",
    manufacture_date: "",
    expiry_date: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setDrug({ ...drug, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDrug(drug);
    alert("Drug added successfully");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-2">Add New Drug</h1>
      <p className="text-gray-500 mb-6">
        Fill in the details below to add a drug to inventory
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Drug Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Drug Name
          </label>
          <input
            name="drug_name"
            placeholder="e.g. Paracetamol"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Batch Number */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Batch Number
          </label>
          <input
            name="batch_number"
            placeholder="e.g. B1234"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Dates (Side by side 🔥) */}
        <div className="grid md:grid-cols-2 gap-4">
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Manufacture Date
            </label>
            <input
              type="date"
              name="manufacture_date"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Expiry Date
            </label>
            <input
              type="date"
              name="expiry_date"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            placeholder="e.g. 50"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium">
          + Add Drug
        </button>

      </form>
    </div>
  );
}

export default AddDrug;