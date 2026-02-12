import React from "react";
import { Users, Calendar, Briefcase } from "lucide-react";

const iconMap = {
  users: Users,
  calendar: Calendar,
  briefcase: Briefcase,
};

const StatCard = ({ title, value, icon, color }) => {
  const Icon = iconMap[icon];

  return (
    <div className="
      bg-white
      rounded-2xl
      p-4
      flex items-center gap-4
      w-full
    ">
      {/* Icon */}
      <div
        className={`w-11 h-11 rounded-full ${color} flex items-center justify-center`}
      >
        {Icon && <Icon className="w-5 h-5 text-white" />}
      </div>

      {/* Text */}
      <div className="leading-tight">
        <p className="text-sm text-gray-400">
          {title}
        </p>
        <p className="text-lg font-semibold text-[#2D3E75]">
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
