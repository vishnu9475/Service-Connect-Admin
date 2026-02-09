import React from "react";


const StatCardSection115 = ({ data = [] }) => {
  return (
    <div className="bg-indigo-50 p-4 ">
      <div className="bg-white rounded-2xl px-3 py-8 grid lg:grid-cols-4 gap-3">
        {data.map((item, index) => (
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
