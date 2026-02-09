import React from "react";
import {
  ArrowLeft,
  CircleChevronLeft,
  Search,
  Phone,
  SlidersHorizontal,
  MoreVertical,
   Bell,
} from "lucide-react"
// import Comp10 from "./Comp10";
import { useNavigate } from "react-router-dom";

function Component4({
  title,
  showBack = true,
  showSearch = false,
  showPhone = false,
  showFilter = false,
  showMenu = false,
  showclear=false,
  shownotification=false,
  showprofil=false,
 
  theme = "white", //"black" or "white"
}) {
  
  const navigate = useNavigate(); // ✅ REQUIRED

  const isDark = theme === "black";
  const bgColor = isDark ? "bg-[#1C1B1F]" : "bg-white";
  const textColor = isDark ? "text-white" : "text-[#1C1B1F]";
  const hoverColor = isDark ? "hover:bg-gray-800" : "hover:bg-gray-100";


  const BackIcon = isDark ? CircleChevronLeft : ArrowLeft;

  return (
   
    <header
      className={`flex items-center justify-between px-4 py-4 ${bgColor} ${textColor} transition-all`}
    >
      {/* Left Section */}
     <div className="flex items-center gap-2">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className={`p-1 rounded-full ${hoverColor}`}
          >
            <BackIcon size={24} />
          </button>
        )}
        <h1 className="text-lg font-semibold uppercase">{title}</h1>
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
          <button className={`p-1 rounded-full ${hoverColor}`}>
            <MoreVertical size={22} />
          </button>
        )}
        {showclear && (
          <button className={`p-1 text-black rounded-full ${hoverColor}`}>
              clear
          </button>
          
        )
        }
        
          {shownotification && (
          <button className={`p-1 text-white rounded-full ${hoverColor}`}>
              <Bell size={22} />
          </button>
          
        )

        }
        
         {showprofil && (
          <button className={`p-1  bg-white rounded-full ${hoverColor}`}>
              <div className=" rounded-full px-1">
                <img className="w-3 h-5" src="/image8.png" alt="" />
              </div>
          </button>
          
        )
        }
       
      </div>
    </header>
   
  );
}

export default Component4;