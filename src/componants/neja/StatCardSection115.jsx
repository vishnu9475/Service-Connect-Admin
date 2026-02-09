import React from "react";
import {
  FaUserTie,
  FaUserFriends,
  FaCalendarAlt,
  FaUtensils,
} from "react-icons/fa";

const StatCardSection115 = () => {
  const statsData = [
    {
      title: "Franchisee",
      value: 932,
      Icon: FaUserTie,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      title: "Dealers",
      value: 754,
      Icon: FaUserFriends,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
    {
      title: "Service Providers",
      value: 40,
      Icon: FaCalendarAlt,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },
    {
      title: "Users",
      value: "32k",
      Icon: FaUtensils,
      iconBg: "bg-indigo-900",
      iconColor: "text-white",
    },
  ];

  return (
    <div className="bg-indigo-50 p-4">
      <div className="bg-white rounded-2xl px-3 py-8 grid lg:grid-cols-4 gap-3">
        {statsData.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${item.iconBg}`}
            >
              {item.Icon && (
                <item.Icon className={`text-2xl ${item.iconColor}`} />
              )}
            </div>

            {/* Text */}
            <div>
              <p className="text-sm text-gray-400 font-medium">
                {item.title}
              </p>
              <p className="text-2xl font-bold text-gray-800">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCardSection115;
