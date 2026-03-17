import React from "react";
import {
  ArrowLeft,
  CircleChevronLeft,
  Search,
  Phone,
  SlidersHorizontal,
  MoreVertical,
} from "lucide-react"


export default function Component4({
  title,
  showBack = true,
  showSearch = false,
  showPhone = false,
  showFilter = false,
  showMenu = false,
  onMenuClick,
  theme = "white", //"black" or "white"
}) {
  const isDark = theme === "black";
  const bgColor = isDark ? "bg-[#1C1B1F]" : "bg-white";
  const textColor = isDark ? "text-white" : "text-[#1C1B1F]";
  const hoverColor = isDark ? "hover:bg-gray-800" : "hover:bg-gray-100";


  const BackIcon = isDark ? CircleChevronLeft : ArrowLeft;

  return (
     
    <header
      className={`flex items-center justify-between px-3 py-3 md:p-4 lg:p-4 ${bgColor} ${textColor} transition-all`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2">
        {showBack && (
          <button className={`p-1 rounded-full ${hoverColor}`}>
            <BackIcon size={24} />
          </button>
        )}
        <div className="text-md md:text-lg lg:text-lg font-semibold uppercase">{title}</div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {showPhone && (
          <button className={`p-1 rounded-full ${hoverColor}`}>
            <Phone size={22} />
          </button>
        )}
        {showFilter && (
          <button className={ `p-1 rounded-full ${hoverColor}`}>
          <SlidersHorizontal size={22} />
          </button>
        )}
        {showSearch && (
          <button className={`p-1 rounded-full ${hoverColor}`}>
            <Search size={22} />
          </button>
        )}
        {showMenu && (
          <button
            onClick={onMenuClick}
            className={`p-1 rounded-full ${hoverColor}`}
          >
            <MoreVertical size={22} />
          </button>
        )}
      </div>
    </header>
    
  );
}
