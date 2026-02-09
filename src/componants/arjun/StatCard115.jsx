import React from "react";

const StatCard115 = ({
  title = "Franchisee",
  value = 932,
  Icon, 
  iconBg = "bg-[#4D44B5]", 
  iconColor = "text-white",
}) => {
  return (
    /* Removed fixed width to allow 6-column horizontal alignment */
    <div className="bg-white rounded-[20px] shadow-sm p-3 flex items-center gap-3 min-w-0">
      
      {/* Smaller Icon Circle to save horizontal space */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconBg} shadow-sm`}>
        {Icon && <Icon size={18} className={iconColor} />}
      </div>

      {/* Text: Compact layout */}
      <div className="flex flex-col min-w-0">
        <p className="text-lg font-black text-[#303972] leading-none">
          {value}
        </p>
        <p className="text-[9px] text-gray-400 font-bold uppercase mt-1 truncate tracking-tighter">
          {title}
        </p>
      </div>

    </div>
  );
};

export default StatCard115;