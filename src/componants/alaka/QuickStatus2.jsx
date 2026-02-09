import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";

const stats = [
  {
    title: "Total Service Providers",
    value: "932",
    percent: "+10%",
    trend: "text-green-500",
    iconBg: "bg-indigo-600",
  },
  {
    title: "Total Dealers",
    value: "754",
    percent: "-0.5%",
    trend: "text-red-500",
    iconBg: "bg-orange-400",
  },
  {
    title: "Total Services",
    value: "932",
    percent: "+10%",
    trend: "text-green-500",
    iconBg: "bg-indigo-600",
  },
  {
    title: "Complaints",
    value: "754",
    percent: "-0.5%",
    trend: "text-red-500",
    iconBg: "bg-orange-400",
  },
  {
    title: "Total Ads",
    value: "932",
    percent: "+10%",
    trend: "text-green-500",
    iconBg: "bg-indigo-600",
  },
  {
    title: "Registration Earnings",
    value: "754",
    percent: "-0.5%",
    trend: "text-red-500",
    iconBg: "bg-orange-400",
  },
  {
    title: "Commission Earnings",
    value: "932",
    percent: "+10%",
    trend: "text-green-500",
    iconBg: "bg-indigo-600",
  },
  {
    title: "Ads Earnings",
    value: "754",
    percent: "-0.5%",
    trend: "text-red-500",
    iconBg: "bg-orange-400",
  },
];

function StatsGrid() {
  return (
    
    <div className="max-w-[1100px] w-full">

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        "
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl px-5 py-4 shadow-sm"
          >
            <div className="flex items-center gap-4">

              {/* ICON */}
              <div
                className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center`}
              >
                <UserIcon className="w-6 h-6 text-white" />
              </div>

              {/* TEXT */}
              <div>
                <p className="text-xs text-[#A098AE]">
                  {item.title}
                </p>

                <p className="text-lg font-bold text-[#303972]">
                  {item.value}
                </p>

                <p className="text-xs">
                  <span className={item.trend}>
                    {item.percent}
                  </span>{" "}
                  <span className="text-black">
                    than last month
                  </span>
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default StatsGrid;
