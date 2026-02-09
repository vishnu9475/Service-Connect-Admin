import React from "react";
// 1. Import useNavigate
import { useNavigate } from "react-router-dom"; 
import {
  ArrowLeft,
  CircleChevronLeft,
  Search,
  Phone,
  SlidersHorizontal,
  MoreVertical,
} from "lucide-react";

function Header({
  title,
  showBack = true,
  showSearch = false,
  showPhone = false,
  showFilter = false,
  showMenu = false,
  theme = "white",
  onBack, // keeps the prop in case you want to override the behavior
}) {
  // 2. Initialize navigate
  const navigate = useNavigate();

  const isDark = theme === "black";
  const bgClass = isDark ? "bg-[#1C1B1F]" : "bg-white";
  const textClass = isDark ? "text-white" : "text-[#1C1B1F]";
  const hoverClass = isDark ? "hover:bg-gray-800" : "hover:bg-gray-100";

  const BackIcon = isDark ? CircleChevronLeft : ArrowLeft;

  // 3. Define the click handler
  const handleBackClick = () => {
    if (onBack) {
      onBack(); // If a custom function is passed, run that
    } else {
      navigate(-1); // Otherwise, go back one page in history
    }
  };

  return (
    <header
      className={`flex items-center justify-between px-6 py-6 ${bgClass} ${textClass} transition-all`}
    >
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            className={`p-1.5 rounded-full ${hoverClass} transition-all`}
            onClick={handleBackClick} // 4. Attach the handler
          >
            <BackIcon size={28} />
          </button>
        )}
        <h1 className="text-xl font-bold uppercase tracking-wide">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        {showPhone && (
          <button className={`p-1.5 rounded-full ${hoverClass}`}>
            <Phone size={24} />
          </button>
        )}
        {showFilter && (
          <button className={`p-1.5 rounded-full ${hoverClass}`}>
            <SlidersHorizontal size={24} />
          </button>
        )}
        {showSearch && (
          <button className={`p-1.5 rounded-full ${hoverClass}`}>
            <Search size={24} />
          </button>
        )}
        {showMenu && (
          <button className={`p-1.5 rounded-full ${hoverClass}`}>
            <MoreVertical size={24} />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;