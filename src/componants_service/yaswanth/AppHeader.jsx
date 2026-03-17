
import {
  ArrowLeft,
  CircleChevronLeft,
  Search,
  Phone,
  SlidersHorizontal,
  MoreVertical,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function AppHeader({
  title,
  back=true,
  showBack = true,
  showSearch = false,
  showPhone = false,
  showFilter = false,
  showMenu = false,
  theme = "white", // "black" or "white"
}) {
  const isDark = theme === "black";
  const bgColor = isDark ? "bg-[#1C1B1F]" : "bg-white";
  const textColor = isDark ? "text-white" : "text-[#1C1B1F]";
  const hoverColor = isDark ? "hover:bg-gray-800" : "hover:bg-gray-100";

  const navigate = useNavigate()
  const BackIcon = isDark ? CircleChevronLeft : ArrowLeft;

  return (
    <header
      className={`flex items-center justify-between px-4 py-4 ${bgColor} ${textColor} transition-all`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2">
        {showBack && back ? (
            <button
          onClick={() => navigate(-1)}
          className={`p-1 rounded-full cursor-pointer ${hoverColor}`}>
            <BackIcon size={24} />
          </button>
        ): <button className={`p-1 rounded-full ${hoverColor}`}>
            <BackIcon size={24} />
          </button>}
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
          <button className={`p-1 rounded-full ${hoverColor}`}>
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

export default AppHeader;