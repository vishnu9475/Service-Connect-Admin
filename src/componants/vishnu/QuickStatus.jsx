
import React from "react";
import { ImUserTie } from "react-icons/im";
import { FaUserTie } from "react-icons/fa6";

const stats = [
  {
    title: "Dealers",
    value: "932",
    change: "+10%",
    description: "than last month",
    icon: ImUserTie,
    iconBg: "bg-indigo-600",
    changeColor: "text-green-500",
  },
  {
    title: "Active Dealers",
    value: "754",
    change: "-0.5%",
    description: "than last month",
    icon: FaUserTie,
    iconBg: "bg-orange-400",
    changeColor: "text-red-500",
  },
  {
    title: "Inactive Dealers",
    value: "754",
    change: "-0.5%",
    description: "than last month",
    icon: FaUserTie,
    iconBg: "bg-orange-400",
    changeColor: "text-red-500",
  },
];

function QuickStats() {
  return (
    <div className="w-full bg-[#F3F4FF] px-2 py-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                bg-white
                rounded-xl sm:rounded-2xl
                p-2 sm:p-5
                flex flex-col sm:flex-row
                items-center
                gap-2 sm:gap-4
                shadow-sm
                hover:shadow-md
                transition-all duration-300
              "
            >
              {/* ICON */}
              <div
                className={`
                  w-9 h-9 sm:w-12 sm:h-12
                  rounded-full
                  flex items-center justify-center
                  ${item.iconBg}
                `}
              >
                <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>

              {/* CONTENT */}
              <div className="flex-1 text-center sm:text-left">
                <p className="text-[10px] sm:text-sm text-gray-400">
                  {item.title}
                </p>

                <p className="text-sm sm:text-xl font-semibold text-indigo-900">
                  {item.value}
                </p>

                <p className="text-[9px] sm:text-xs text-gray-400">
                  <span className={`${item.changeColor} font-medium`}>
                    {item.change}
                  </span>{" "}
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default QuickStats;

