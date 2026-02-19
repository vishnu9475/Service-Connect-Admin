import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const stats = [
  {
    value: "24K",
    label: "Service Providers",
    bg: "bg-[#4D44B5]",
  },
  {
    value: "82K",
    label: "Verified",
    bg: "bg-[#5ACD32]",
  },
  {
    value: "200",
    label: "Verification Request",
    bg: "bg-[#FFD93D]",
  },
];

function StatsCards() {
  return (
   
    <div className="max-w-[780px]">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              bg-white rounded-2xl shadow-sm
              px-5 py-4
              flex items-center gap-4
            "
          >
            {/* ICON */}
            <div
              className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center`}
            >
              <PencilSquareIcon className="w-6 h-6 text-white" />
            </div>

            {/* TEXT */}
            <div>
              <p className="text-lg font-bold text-[#303972]">
                {item.value}
              </p>
              <p className="text-sm text-[#A098AE] leading-tight">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default StatsCards;
