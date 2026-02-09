import React, { useState } from "react";
import { FaAd } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiUserCheck,
  FiBriefcase,
  FiDollarSign,
  FiLayers,
  FiUser,
  FiMessageSquare,
  FiSettings,
  FiBell,
  FiGrid,
  FiX,
} from "react-icons/fi";

const menuData = [
  { id: 1, label: "Dashboard", icon: FiHome, path: "/admin/Dashboard" },
  { id: 2, label: "Users", icon: FiUsers, path: "/admin/Users" },
  { id: 3, label: "Service Providers", icon: FiUserCheck, path: "/admin/Provider" },
  { id: 4, label: "Franchisee", icon: FiBriefcase, path: "/admin/Franchise" },
  { id: 5, label: "Finance", icon: FiDollarSign, path: "/admin/finance" },
  { id: 6, label: "Accounts", icon: FiLayers, path: "/admin/Accounts" },
  { id: 7, label: "Profile", icon: FiUser, path: "/admin/profile" },
  { id: 8, label: "Chat", icon: FiMessageSquare, path: "/admin/chat" },
  { id: 9, label: "Settings", icon: FiSettings, path: "/admin/GeneralSettings" },
  { id: 10, label: "Service Management", icon: FiGrid, path: "/admin/services" },
  { id: 11, label: "Ads Management", icon: FaAd, path: "/admin/AdsManagement" },
  { id: 12, label: "Notifications", icon: FiBell, path: "/admin/Notification" },
];

const AdminSideMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-black"
        onClick={() => setOpen(true)}
      >
        <HiOutlineBars3 size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-full w-64
          bg-[#4F46B5]
          text-white
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/20">
          <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center font-bold">
            S
          </div>
          <span className="text-lg font-semibold">SC</span>

          <button className="ml-auto lg:hidden" onClick={() => setOpen(false)}>
            <FiX size={18} />
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-4 flex flex-col gap-1 px-3 overflow-y-auto">
          {menuData.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <div
                key={item.id}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
                className={`
                  flex items-center gap-3
                  px-4 py-2.5
                  rounded-md
                  text-sm
                  cursor-pointer
                  transition
                  ${
                    isActive
                      ? "bg-white text-[#4F46B5] font-medium"
                      : "text-white/80 hover:bg-white/10"
                  }
                `}
              >
                <Icon size={16} />
                <span className="truncate">{item.label}</span>
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 py-4 left-0 w-full px-5 text-xs text-white/70">
          <p className="font-semibold">Service Connect</p>
          <p>Lets Grow Together</p>
        </div>
      </aside>
    </>
  );
};

export default AdminSideMenu;
