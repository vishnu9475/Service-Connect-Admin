import React from "react";
import { useState } from "react";

function DropdownSet() {
  const [franchasee, setFranchasee] = useState("");
  const [serviceProvider, setServiceProvider] = useState("");

  return (
    <div className=" bg-[#F5F6FA] flex  items-start">
      
      {/* CARD */}
      <div className="w-full max-w-3xl bg-[#F3F4FF] rounded-xl p-4">
        
        {/* GRID → responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Franchisee */}
          <div>
            <label className="block text-sm font-medium text-[#2D2F7A] mb-1">
              Franchasee
            </label>
            <select
              value={franchasee}
              onChange={(e) => setFranchasee(e.target.value)}
              className="
                w-full bg-white border border-gray-200
                rounded-lg px-4 py-2 text-sm text-gray-400
                focus:outline-none
              "
            >
              <option value="">Value</option>
              <option value="fr1">Franchasee 1</option>
              <option value="fr2">Franchasee 2</option>
            </select>
          </div>

          {/* Service Provider */}
          <div>
            <label className="block text-sm font-medium text-[#2D2F7A] mb-1">
              Service Provider
            </label>
            <select
              value={serviceProvider}
              onChange={(e) => setServiceProvider(e.target.value)}
              className="
                w-full bg-white border border-gray-200
                rounded-lg px-4 py-2 text-sm text-gray-400
                focus:outline-none
              "
            >
              <option value="">Value</option>
              <option value="sp1">Provider 1</option>
              <option value="sp2">Provider 2</option>
            </select>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DropdownSet;
