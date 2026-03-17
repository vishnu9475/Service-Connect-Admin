import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  CircleChevronLeft,
  Search,
  Phone,
  SlidersHorizontal,
  MoreVertical,
} from "lucide-react"


export default function Header({
  title,
  showBack = true,
  showSearch = false,
  showPhone = false,  
  showFilter = false,
  showMenu = false,
  theme = "white", 
}) {
  const isDark = theme === "black";
  const bgColor = isDark ? "bg-[#1C1B1F]" : "bg-white";
  const textColor = isDark ? "text-white" : "text-[#1C1B1F]";
  const hoverColor = isDark ? "hover:bg-gray-800" : "hover:bg-gray-100";


  const BackIcon = isDark ? CircleChevronLeft : ArrowLeft;
  const navigate = useNavigate();


  return (
    
     
    <header
      className={`flex items-center justify-between px-4 py-4 ${bgColor} ${textColor} transition-all`}
    >
      <div className="flex items-center gap-2">
        {showBack && (
          <button
          onClick={() => navigate(-1)}
          className={`p-1 rounded-full cursor-pointer ${hoverColor}`}>
            <BackIcon size={24} />
          </button>
        )}                                        
        <h1 className="text-lg font-semibold uppercase cursor-pointer">{title}</h1>
      </div>

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
          <button className={`p-1 rounded-full ${hoverColor}`}>
            <MoreVertical size={22} />
          </button>
        )}
      </div>
    </header>
    
  );
}

