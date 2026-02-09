import React from "react";
import { FiSearch, FiBell, FiSettings } from "react-icons/fi";

const Header = ({
  title,
  showSearch = true,
  userName = "Abc",
  userRole = "Admin",
  avatarUrl,
  children,
}) => {
  return (
    <div className="bg-[#f5f6ff]">

      {/* HEADER */}
      <div className="px-4 sm:px-6 py-3">

        {/* TOP ROW */}
        <div className="flex flex-wrap items-center ml-8 justify-between  gap-3">

          {/* TITLE */}
          <h1 className="text-lg font-semibold sm:text-center text-[#2d2d6e] ">
            {title}
          </h1>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 sm:gap-5">

            {/* DESKTOP SEARCH */}
            {showSearch && (
              <div className="hidden sm:flex items-center bg-white rounded-full px-5 py-2 w-72 shadow-sm">
                <FiSearch className="text-indigo-400 mr-3" />
                <input
                  placeholder="Search here..."
                  className="w-full text-sm outline-none"
                />
              </div>
            )}

            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              <FiBell className="text-gray-500" />
            </div>

            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              <FiSettings className="text-gray-500" />
            </div>

            {/* AVATAR */}
            <div className="flex items-center gap-3">
              <div className="text-right text-sm leading-tight hidden sm:block">
                <p className="font-medium text-gray-700">{userName}</p>
                <p className="text-xs text-gray-400">{userRole}</p>
              </div>

              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm font-semibold text-gray-500">
                    {userName.charAt(0)}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE SEARCH (aligned with title & content) */}
        {showSearch && (
          <div className="mt-3 sm:hidden">
            <div className="flex items-center bg-white rounded-full px-4 py-2 w-full shadow-sm">
              <FiSearch className="text-indigo-400 mr-3" />
              <input
                placeholder="Search here..."
                className="w-full text-sm outline-none"
              />
            </div>
          </div>
        )}

      </div>

      {/* CONTENT — SAME PADDING AS HEADER */}
      <div className="px-4 sm:px-6 py-4">
        {children}
      </div>

    </div>
  );
};

export default Header;
