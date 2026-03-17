import { LogOut } from "lucide-react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import user from "../assets/user.jpg"


const menuConfig = [
  { label: "My Profile", path: "/profile" },
  { label: "Home", path: "/page11" },
  { label: "Bookings", path: "//U19Bookings" },
  { label: "Active Services", path: "/page27" },
  { label: "Services", path: "/pageM33" },
  { label: "Complaints", path: "/page30" },
  { label: "Message", path: "/Page_45" },
  { label: "Settings", path: "/settings" },
  { label: "Transaction", path: "/pageM32" },
  { label: "History", path: "/history" },
  { label: "Help Center", path: "/Page_41" },
  { label: "Terms & Conditions", path: "/pageu39" },
  { label: "About Us", path: "/pageu38" },
  { label: "Invite a Friend", path: "/Page_48" },
];

const UserProfileMenuBar_47 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  

  return (
    <div
      className="w-full max-w-[510px] min-h-screen
                backdrop-blur-xl bg-gradient-to-t from-black to-gray-500
                 p-6 text-white shadow-2xl flex flex-col "
    >
      {/* ===== PROFILE CARD ===== */}
      <div className="flex items-center gap-3 mb-6 mt-4 ">
        <div className="relative">
          <img
            src={user}
            className="w-14 h-14 rounded-full object-cover"
            alt="profile"
          />
          <span
            className="absolute top-0 right-0 w-3 h-3 bg-green-500
                       border-2 border-[#1e2028] rounded-full"
          />
        </div>

        <div>
          <h3 className="text-red-400 font-semibold text-sm">
            Stone Stellar
          </h3>
          <p className="text-xs text-yellow-400">UID: CU102</p>
          <p className="text-xs text-green-400">Online</p>
        </div>
      </div>

      {/* ===== MENU ===== */}
      <div className="flex-1 space-y-2 text-sm overflow-y-auto scrollbar-hide">
        {menuConfig.map(({ label, path }) => {
          const isActive = location.pathname === path;

          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`w-full text-left px-4 py-2 rounded-md transition
                ${isActive
                  ? "bg-gray-300 text-black font-medium"
                  : "text-gray-300 hover:bg-white/10"
                }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* ===== LOGOUT ===== */}
      <div className="pt-4 mt-4 border-t border-white/10 flex justify-center">
        <button
          onClick={() => navigate("/logout")}
          className="flex items-center gap-2 text-gray-300 hover:text-white"
        >
          Logout <LogOut size={18} />
        </button>
      </div>
    </div>
  );
};

export default UserProfileMenuBar_47;
