import { FiSearch, FiBell, FiSettings } from "react-icons/fi";

const AdminMain114 = ({
  title = "Page Title",
  showSearch = true,
  showBell = true,      // Added new prop
  showSettings = true,  // Added new prop
  showProfile = true,   // Added new prop
  userName = "Abc",
  userRole = "Admin",
  avatarUrl,
  children,
}) => {
  return (
    <div className="min-h-screen bg-[#f5f6ff]">

      {/* HEADER */}
      <div className="px-4 sm:px-6 py-3">
        {/* Added max-w-7xl (or similar) to help align with content below if needed */}
        <div className="flex flex-wrap items-center justify-between gap-3">

          {/* TITLE */}
          <h1 className="text-lg font-semibold text-[#2d2d6e] mt-1">
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

            {/* CONDITIONAL BELL */}
            {showBell && (
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer">
                <FiBell className="text-gray-500" />
              </div>
            )}

            {/* CONDITIONAL SETTINGS */}
            {showSettings && (
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer">
                <FiSettings className="text-gray-500" />
              </div>
            )}

            {/* CONDITIONAL PROFILE/AVATAR */}
            {showProfile && (
              <div className="flex items-center gap-3">
                <div className="text-right text-sm leading-tight hidden sm:block">
                  <p className="font-medium text-gray-700">{userName}</p>
                  <p className="text-xs text-gray-400">{userRole}</p>
                </div>

                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shadow-sm">
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
            )}

          </div>
        </div>

        {/* MOBILE SEARCH */}
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

      {/* PAGE CONTENT */}
      <div className="px-4 sm:px-6 py-4">
        {children}
      </div>

    </div>
  );
};

export default AdminMain114;