
// LocationPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Comp6() {
  const [manualLocation, setManualLocation] = useState("");
const navigate = useNavigate();
  const handleAllow = () => {
    // add navigator.geolocation or API call here
    console.log("Location allowed");

    navigate("/page5");
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      {/* Card always visible */}
      <div className="w-full max-w-xs rounded-3xl bg-white px-6 py-6 shadow-2xl">
        <h2 className="mb-6 text-center text-xl font-semibold text-gray-800">
          Allow Location
        </h2>

        <button
          onClick={handleAllow}
          className="mx-auto mb-6 flex w-40 items-center justify-center rounded-full bg-gray-900 py-3 text-sm font-medium text-white hover:bg-black transition"
        >
          Allow
        </button>

        <div className="space-y-2">
          <p className="text-xs font-medium text-gray-600">
            Manually Enter Location
          </p>
          <input
            type="text"
            placeholder="Value"
            value={manualLocation}
            onChange={(e) => setManualLocation(e.target.value)}
            className="w-full rounded-xl bg-gray-400/80 px-3 py-2 text-sm text-white placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
        </div>
      </div>
    </div>
  );
}
