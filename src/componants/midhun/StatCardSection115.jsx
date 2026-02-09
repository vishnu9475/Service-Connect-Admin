import React from "react";
import {
  FaUserTie,
  FaUserFriends,
  FaCalendarAlt,
  FaUtensils,
} from "react-icons/fa";

const StatCardSection115 = ({Extratext}) => {
  const statsData = [
    {
      title: "Franchisee",
      value: 932,
      text: (
  <>
    <span className="text-green-500 font-semibold">+10%</span>
    <span className="text-gray-400"> than last month</span>
  </>
),
      Icon: FaUserTie,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      title: "Dealers",
      value: 754,
      text: (
  <>
    <span className="text-red-500 font-semibold">+0.5%</span>
    <span className="text-gray-400"> than last month</span>
  </>),
      Icon: FaUserFriends,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
    {
      title: "Service Providers",
      value: 40,
      text: (
  <>
    <span className="text-green-500 font-semibold">+10%</span>
    <span className="text-gray-400"> than last month</span>
  </>),
      Icon: FaCalendarAlt,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },
    {
      title: "Users",
      value: "32k",
      text: (
  <>
    <span className="text-red-500 font-semibold">0.5%</span>
    <span className="text-gray-400"> than last month</span>
  </>),
      Icon: FaUtensils,
      iconBg: "bg-indigo-900",
      iconColor: "text-white",
    },
  ];

  return (
    <div className="bg-indigo-50 p-4 " >
      <div className="bg-white rounded-2xl px-3 py-8 grid lg:grid-cols-4 gap-3 justify-center">
        {statsData.map((item, index) => (
          <div key={index} className="flex items-center  gap-4">
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
              <p>
                {item.text}
              </p>
              {Extratext &&(
                    <p>
                      {Extratext}
                    </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCardSection115;
