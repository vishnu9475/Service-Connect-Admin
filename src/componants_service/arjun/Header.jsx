import React from "react";
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
  theme = "white", // "black" or "white"
  onBack,          // handler for back button
}) {
  const isDark = theme === "black";

  const bgClass = isDark ? "bg-[#1C1B1F]" : "bg-white";
  const textClass = isDark ? "text-white" : "text-[#1C1B1F]";
  const hoverClass = isDark ? "hover:bg-gray-800" : "hover:bg-gray-100";

  const BackIcon = isDark ? CircleChevronLeft : ArrowLeft;

  return (
    <header
      /* Changed py-4 to py-6: This adds exactly 8-10px of extra height top and bottom */
      className={`flex items-center justify-between px-6 py-6 ${bgClass} ${textClass} transition-all`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            className={`p-1.5 rounded-full ${hoverClass} transition-all`}
            onClick={onBack}
          >
            {/* size 28 is just slightly larger than the original 24 */}
            <BackIcon size={28} />
          </button>
        )}
        {/* text-xl is just one step up from the original text-lg */}
        <h1 className="text-xl font-bold uppercase tracking-wide">
          {title}
        </h1>
      </div>

      {/* Right Section */}
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