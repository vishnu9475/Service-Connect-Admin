import React from "react";

const StatCard115 = ({
  title = "Franchisee",
  value = 932,
  Icon,
  iconBg = "bg-indigo-100",
  iconColor = "text-indigo-600",

  /* NEW */
  changeValue = "",
  changeColor = "text-green-600",
}) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md p-4 sm:p-6 flex items-center gap-4">
      
      {/* Icon */}
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center ${iconBg}`}
      >
        {Icon && <Icon className={`text-2xl ${iconColor}`} />}
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <p className="text-sm text-gray-500 font-medium">
          {title}
        </p>

        <p className="text-2xl font-bold text-gray-800">
          {value}
        </p>

        {/* Bottom text */}
        {changeValue && (
          <p className="text-xs text-gray-400">
            <span className={`font-semibold ${changeColor}`}>
              {changeValue}
            </span>{" "}
            than last month
          </p>
        )}
      </div>

    </div>
  );
};

export default StatCard115;
