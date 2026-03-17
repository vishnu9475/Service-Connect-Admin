import { LogOut } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import person from "../../assets/person.jpg";

const menuConfig = [
  { label: "My Profile", path: "/s43" },
  { label: "Request", path: "/page70" },
  { label: "My Services", path: "/page69" },
  { label: "Ad Management", path: "/s39" },
  { label: "History", path: "/146" },
  { label: "Finantial Data", path: "/83" },
  { label: "Settings", path: "/145" },
  { label: "Leads", path: "/800" },
  { label: "My Ratings", path: "/s37" },
  { label: "Complaint and disputes", path: "/77" },
  { label: "Finantial Management ", path: "/83" },
  { label: "Franchisee details", path: "/s38" },
];

const UserProfileMenuBar_47 = ({ show, setShow }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setShow(false);
    if (show) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [show, setShow]);

  if (!show) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setShow(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-50 w-[90vw] max-w-[500px] h-full
                      bg-[#1e2028]/90 backdrop-blur-xl shadow-2xl
                      p-6 text-white flex flex-col animate-slideIn">

        {/* Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full
                     bg-white/10 hover:bg-white/20
                     flex items-center justify-center"
        >
          ✕
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 mb-6 mt-6">
          <div className="relative">
            <img src={person} className="w-14 h-14 rounded-full" alt="profile" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500
                             border-2 border-[#1e2028] rounded-full" />
          </div>

          <div>
            <h3 className="text-red-400 font-semibold text-sm">Stone Stellar</h3>
            <p className="text-xs text-yellow-400">UID: CU102</p>
            <p className="text-xs text-green-400">Online</p>
          </div>
        </div>

        {/* Menu */}
        <div className="flex-1 space-y-2 text-sm overflow-y-auto scrollbar-hide">
          {menuConfig.map(({ label, path }) => {
            const isActive = location.pathname === path;

            return (
              <button
                key={path}
                onClick={() => {
                  navigate(path);
                  setShow(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-md transition
                  ${
                    isActive
                      ? "bg-gray-300 text-black font-medium"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Logout */}
        <div className="pt-4 mt-4 border-t border-white/10 flex justify-center">
          <button
            onClick={() => navigate("/page11")}
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            Logout <LogOut size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfileMenuBar_47;
