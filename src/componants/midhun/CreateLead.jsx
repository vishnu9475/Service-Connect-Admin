import React, { useEffect, useState } from "react";

const CreateLead = () => {
  const [packageName, setPackageName] = useState("");
  const [leadCount, setLeadCount] = useState("");
  const [price, setPrice] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [status, setStatus] = useState("Active");

  const [leadList, setLeadList] = useState([]);

  // Load stored leads
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("leadPackages")) || [];
    setLeadList(stored);
  }, []);

  // Save Lead
  const handleSave = () => {
    if (!packageName || !leadCount || !price) {
      alert("Please fill required fields");
      return;
    }

    const newLead = {
      id: Date.now(),
      packageName,
      leadCount,
      price,
      fromDate,
      toDate,
      status,
    };

    const updatedList = [...leadList, newLead];
    localStorage.setItem("leadPackages", JSON.stringify(updatedList));
    setLeadList(updatedList);

    // Reset form
    setPackageName("");
    setLeadCount("");
    setPrice("");
    setFromDate("");
    setToDate("");
    setStatus("Active");

    alert("Lead Package Created Successfully");
  };

  // Delete Lead
  const handleDelete = (id) => {
    const updated = leadList.filter((lead) => lead.id !== id);
    localStorage.setItem("leadPackages", JSON.stringify(updated));
    setLeadList(updated);
  };

  // Toggle Status
  const toggleStatus = (id) => {
    const updated = leadList.map((lead) =>
      lead.id === id
        ? { ...lead, status: lead.status === "Active" ? "Inactive" : "Active" }
        : lead
    );

    localStorage.setItem("leadPackages", JSON.stringify(updated));
    setLeadList(updated);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-6">

        {/* LEFT SIDE - FORM */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Create Lead Package</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Package Name"
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
              className="border p-2 rounded w-full"
            />

            <input
              type="number"
              placeholder="Lead Count"
              value={leadCount}
              onChange={(e) => setLeadCount(e.target.value)}
              className="border p-2 rounded w-full"
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border p-2 rounded w-full"
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <div className="flex gap-4">
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="border p-2 rounded w-full"
              />
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>

            <button
              onClick={handleSave}
              className="bg-indigo-600 text-white px-4 py-2 rounded w-full hover:bg-indigo-700"
            >
              Save Lead Package
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - LIST */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Lead Packages</h2>

          {leadList.length === 0 ? (
            <p className="text-gray-500">No packages created yet.</p>
          ) : (
            <div className="space-y-4">
              {leadList.map((lead) => (
                <div
                  key={lead.id}
                  className="border rounded p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{lead.packageName}</p>
                    <p className="text-sm text-gray-600">
                      {lead.leadCount} Leads | ₹ {lead.price}
                    </p>
                    <p className="text-xs text-gray-500">
                      {lead.fromDate} → {lead.toDate}
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        lead.status === "Active"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {lead.status}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleStatus(lead.id)}
                      className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                    >
                      Toggle
                    </button>

                    <button
                      onClick={() => handleDelete(lead.id)}
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CreateLead;