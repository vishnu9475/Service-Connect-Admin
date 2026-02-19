import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


function PaymentForm() {
  const navigate = useNavigate();

  const [status, setStatus] = useState("Pending");
  const [showStatus, setShowStatus] = useState(false);

  const now = new Date();

  const datePart = now.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const timePart = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

 const handleSave = () => {
  const confirmSave = window.confirm("Are you sure you want to save?");
  if (confirmSave) {
    navigate("/PaymentSchedule");
  }
};

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      alert("Deleted successfully");
    }
  };

  const handleStatus = (value) => {
    setStatus(value);
    setShowStatus(false);
    alert(`Status changed to ${value}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md w-full max-w-6xl p-4 sm:p-6 md:p-8">

      {/* FORM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

        {/* LEFT FORM */}
        <div className="space-y-5">

          <div>
            <label className="text-sm font-medium">User Type</label>
            <select className="w-full mt-1 border rounded-lg px-3 py-2 text-sm">
              <option>User Name</option>
              <option>ID</option>
              <option>Group</option>
              <option>Location</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">User Name / ID</label>
            <select className="w-full mt-1 border rounded-lg px-3 py-2 text-sm">
              <option>User Name</option>
              <option>ID</option>
              <option>Group</option>
              <option>Location</option>
            </select>
          </div>

          
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            <label className="text-sm">Auto Payout Schedule</label>
          </div>

          <select className="w-full border rounded-lg px-3 py-2 text-sm">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            <label className="text-sm">Manual Payout Schedule</label>
          </div>

          
          <div className="flex gap-4">
            <div className="bg-gray-100 text-[#0A6CFF] px-4 py-2 rounded-xl text-lg font-['Aldrich']">
              {datePart}
            </div>
            <div className="bg-gray-100 text-[#0A6CFF] px-4 py-2 rounded-xl text-lg font-['Aldrich']">
              {timePart}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Payment Method</label>
            <select className="w-full mt-1 border rounded-lg px-3 py-2 text-sm">
              <option>Value</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Account Holder Name</label>
            <input className="w-full mt-1 border rounded-lg px-3 py-2 text-sm" placeholder="Value" />
          </div>

          <div>
            <label className="text-sm font-medium">Bank Branch</label>
            <input className="w-full mt-1 border rounded-lg px-3 py-2 text-sm" placeholder="Value" />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-4">

          <button className="bg-gray-500 text-white text-xs px-4 py-2 rounded-lg flex items-center gap-2 shadow">
            CHECK BALANCE
            <FiRefreshCw className="w-4 h-4" />
          </button>

          <div className="bg-gradient-to-r from-gray-700 to-gray-500 text-white rounded-xl p-6 w-full max-w-sm">
            <span className="text-sm">Lasso Kayne</span>
            <p className="tracking-widest text-sm my-3">4551 5667 8886 7775</p>
            <div className="flex justify-between items-end">
              <p className="text-sm text-white/70">Account Balance</p>
              <p className="text-2xl font-semibold text-yellow-100">$121,000</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            <label className="text-sm">Auto Payment</label>
          </div>

          <select className="w-full border rounded-lg px-3 py-2 text-sm">
            <option>Percentage</option>
          </select>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            <label className="text-sm">Manual Payment</label>
          </div>

          <input className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Amount" />

          <div>
            <label className="text-sm font-medium">Bank Name</label>
            <input className="w-full mt-1 border rounded-lg px-3 py-2 text-sm" placeholder="Value" />
          </div>

          <div>
            <label className="text-sm font-medium">Account Number</label>
            <input className="w-full mt-1 border rounded-lg px-3 py-2 text-sm" placeholder="Value" />
          </div>

          <div>
            <label className="text-sm font-medium">IFSC Code</label>
            <input className="w-full mt-1 border rounded-lg px-3 py-2 text-sm" placeholder="Value" />
          </div>
        </div>
      </div>

      {/* FOOTER BUTTONS */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-10 relative">

        <button
          onClick={() => setShowStatus(!showStatus)}
          className="border border-indigo-500 text-indigo-600 px-10 py-2 rounded-full"
        >
          Status ▼
        </button>

        {showStatus && (
          <div className="absolute top-[-120px] bg-white shadow rounded-lg text-sm">
            {["Pending", "Approved", "Rejected"].map((s) => (
              <div
                key={s}
                onClick={() => handleStatus(s)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {s}
              </div>
            ))}
          </div>
        )}

        <button
          onClick={handleDelete}
          className="bg-orange-500 text-white px-10 py-2 rounded-full"
        >
          Delete
        </button>

        <button
          onClick={handleSave}
          className="bg-[#4D44B5] text-white px-10 py-2 rounded-full"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default PaymentForm;
