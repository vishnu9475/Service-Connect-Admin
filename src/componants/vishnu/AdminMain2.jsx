import { FiSearch, FiBell, FiSettings } from "react-icons/fi";
import img from "../../assets/icon3.jpeg";

const AdminMain2 = ({
  title = "Page Title",
  showSearch = true,
  userName = "Abc",
  userRole = "Admin",
  avatarUrl = img,
  children,
}) => {
  return (
    <div className="min-h-screen bg-[#f5f6ff]">

      {/* ===== HEADER ===== */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-8 py-4">

        {/* TITLE */}
        <h1 className="text-lg sm:text-xl font-semibold text-[#2d2d6e]">
          {title}
        </h1>

        {/* RIGHT ACTIONS */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">

          {/* SEARCH */}
          {showSearch && (
            <div className="flex items-center bg-white rounded-full px-4 py-2 w-full sm:w-72 shadow-sm">
              <FiSearch className="text-indigo-400 mr-3" />
              <input
                placeholder="Search here..."
                className="w-full text-sm outline-none bg-transparent"
              />
            </div>
          )}

          {/* BELL WITH SMALL BLUE DOT */}
          <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <FiBell className="text-gray-500" />
            {/* small blue circle */}
            <span className="absolute top-2 right-2 w-[4px] h-[4px] rounded-full bg-[#4D44B5]" />
          </div>

          {/* SETTINGS */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <FiSettings className="text-gray-500" />
          </div>

          {/* AVATAR */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right text-sm leading-tight">
              <p className="font-medium text-gray-700">{userName}</p>
              <p className="text-xs text-gray-400">{userRole}</p>
            </div>

            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
              <img
                src={avatarUrl}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="px-4 sm:px-8">
        {children}
      </div>

    </div>
  );
};

export default AdminMain2;
