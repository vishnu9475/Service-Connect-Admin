import { FiSearch, FiBell, FiSettings } from "react-icons/fi";
import { useState } from "react";

const AdminMain114 = ({
  title = "Page Title",
  showSearch = true,
  userName = "Abc",
  userRole = "Admin",
  avatarUrl,
  children,
}) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const renderAvatar = () => (
    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-500 shrink-0">
      {avatarUrl ? (
        <img src={avatarUrl} alt="avatar" className="w-full h-full object-cover" />
      ) : (
        <span>{userName.charAt(0)}</span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f6ff]">

      {/* MOBILE ICON ROW */}
      <div className="sm:hidden flex items-center justify-end gap-3 px-4 pt-4">
        {showSearch && (
          <button
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm"
            onClick={() => setShowMobileSearch((v) => !v)}
          >
            <FiSearch className="text-indigo-400" />
          </button>
        )}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <FiBell className="text-gray-500" />
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <FiSettings className="text-gray-500" />
        </div>
        {renderAvatar()}
      </div>

      {/* MOBILE SEARCH BAR */}
      {showSearch && showMobileSearch && (
        <div className="sm:hidden px-4 pt-3">
          <div className="bg-white rounded-full px-5 py-2 flex items-center shadow-sm">
            <FiSearch className="text-indigo-400 mr-3" />
            <input autoFocus placeholder="Search here..." className="w-full text-sm outline-none" />
          </div>
        </div>
      )}

      {/* TITLE (Mobile) - Added ml-10 */}
      <div className="px-4 pt-4 sm:hidden">
        <h1 className="text-lg font-semibold text-[#2d2d6e] ml-10">
          {title}
        </h1>
      </div>

      {/* DESKTOP HEADER */}
      <div className="hidden sm:flex h-16 items-center justify-between px-8 bg-[#f5f6ff]">
        {/* TITLE (Desktop) - Added ml-6 for a subtle shift */}
        <h1 className="text-lg font-semibold text-[#2d2d6e] ml-6">{title}</h1>

        <div className="flex items-center gap-5">
          {showSearch && (
            <div className="flex items-center bg-white rounded-full px-5 py-2 max-w-xs shadow-sm">
              <FiSearch className="text-indigo-400 mr-3" />
              <input placeholder="Search here..." className="w-full text-sm outline-none" />
            </div>
          )}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <FiBell className="text-gray-500" />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <FiSettings className="text-gray-500" />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col text-right text-sm leading-tight">
              <p className="font-medium text-gray-700">{userName}</p>
              <p className="text-xs text-gray-400">{userRole}</p>
            </div>
            {renderAvatar()}
          </div>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="px-4 sm:px-8 py-6">{children}</div>
    </div>
  );
};

export default AdminMain114;