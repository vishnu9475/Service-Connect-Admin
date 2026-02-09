import React from "react";

const StatCard115 = ({
  title,
  value,
  text,
  Icon,
  iconBg = "bg-[#4D44B5]",
  iconColor = "text-white",
  image,
}) => {
  return (
    <div className="w-full md:w-[48%] lg:flex-1 bg-white rounded-xl shadow-md p-6 flex items-center justify-between gap-4">
      
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {Icon && (
          <div className={`w-14 h-14 rounded-full flex items-center justify-center ${iconBg}`}>
            <Icon className={`text-2xl ${iconColor}`} />
          </div>
        )}

        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>

          {value && (
            <p className="text-2xl font-bold text-gray-800">{value}</p>
          )}

          <p className="text-sm mt-1">{text}</p>
        </div>
      </div>

      {/* GRAPH */}
      {image && (
        <div className="hidden sm:block">
          <img src={image} alt="graph" className="w-28" />
        </div>
      )}
    </div>
  );
};

export default StatCard115;
