import { FiSearch, FiBell, FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import img from "../../assets/girl.jpg";

const AdminMain = ({
  title = "Page Title",
  showSearch = true,
  userName = "Abc",
  userRole = "Admin",
  avatarUrl = img,
  children,
}) => {
  const navigate = useNavigate();

  // Search handler
  const handleSearch = (e) => {
    console.log("Search:", e.target.value);
  };

  // Notification click → Admin Notifications
  const handleNotification = () => {
    navigate("/Notifications");
  };

  // Settings click → Admin Settings
  const handleSettings = () => {
    navigate("/settings");
  };

  // Profile click → Admin Profile
  const handleProfile = () => {
    navigate("/profile");
  };

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
                onChange={handleSearch}
                className="w-full text-sm outline-none bg-transparent"
              />
            </div>
          )}

          {/* NOTIFICATION */}
          <div
            onClick={handleNotification}
            className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer"
          >
            <FiBell className="text-gray-500" />
            <span className="absolute top-2 right-2 w-[4px] h-[4px] rounded-full bg-[#4D44B5]" />
          </div>

          {/* SETTINGS */}
          <div
            onClick={handleSettings}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer"
          >
            <FiSettings className="text-gray-500" />
          </div>

          {/* PROFILE */}
          <div
            onClick={handleProfile}
            className="flex items-center gap-3 cursor-pointer"
          >
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

export default AdminMain;
