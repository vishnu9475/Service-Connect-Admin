import React from "react";
import { FiBell, FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon3.jpeg";


const AdminLayout = ({
  title = "Service Provider Management",  
  userName = "Nabila A.",
  role = "Admin",
  children,
}) => {
  const navigate = useNavigate();

  const GeneralSettings = () => {
    navigate("/generalsettings")
  };
  const Notification = () => {
    navigate("/notification");
  };

  return (
    <div className="min-h-screen bg-[#f5f6ff]">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-4 sm:px-8">
        
        {/* Title */}
        <h1 className="text-base sm:text-xl font-semibold text-[#2d2d6e] truncate">
          {title}
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-5">

          {/* Bell with Blue Dot */}
          <button 
          onClick={Notification}
          className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-gray-100 cursor-pointer">
            <FiBell className="text-gray-500 text-lg" />

            {/* Blue Notification Dot */}
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white"></span>
          </button>

          {/* Settings */}
          <button 
          onClick={GeneralSettings}
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-gray-100 cursor-pointer">
            <FiSettings className="text-gray-500 text-lg" />
          </button>
            {/* Hide name on mobile */}
            <div className="hidden sm:block text-sm leading-tight">
                <p className="font-medium text-[#2d2d6e]">
                {userName}
                </p>
                <p className="text-gray-400 text-xs">
                {role}
                </p>
            </div>
          {/* Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={icon}
              alt="avatar"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="p-4 sm:p-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
