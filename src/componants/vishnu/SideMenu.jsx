import React, { useState } from "react";
import { FaAd } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
  FiMenu,
  FiX,
} from "react-icons/fi";

const menuData = [
  { id: 1, label: "Dashboard", icon: FiHome, path: "/dashboard" },
  { id: 2, label: "Users", icon: FiUsers, path: "/users" },
  { id: 3, label: "Service Providers", icon: FiUserCheck, path: "/providers" },
  { id: 4, label: "Franchisee", icon: FiBriefcase, path: "/franchisee" },
  { id: 5, label: "Finance", icon: FiDollarSign, path: "/finance" },
  { id: 6, label: "Accounts", icon: FiLayers, path: "/accounts" },
  { id: 7, label: "Profile", icon: FiUser, path: "/profile" },
  { id: 8, label: "Chat", icon: FiMessageSquare, path: "/chat" },
  { id: 9, label: "Settings", icon: FiSettings, path: "/settings" },
  { id: 10, label: "Service Management", icon: FiGrid, path: "/services" },
  { id: 11, label: "Ads Management", icon: FaAd, path: "/ads" },
  { id: 12, label: "Notifications", icon: FiBell, path: "/notifications" },
];

const SideMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE TOGGLE */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-white"
        onClick={() => setOpen(true)}
      >
        <FiMenu size={22} />
      </button>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
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
        {/* HEADER */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/20">
          <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center font-bold">
            S
          </div>
          <span className="text-lg font-semibold">SC</span>

          {/* CLOSE (MOBILE) */}
          <button
            className="ml-auto lg:hidden"
            onClick={() => setOpen(false)}
          >
            <FiX size={18} />
          </button>
        </div>

        {/* MENU */}
        <nav className="mt-4 flex flex-col gap-1 px-3">
          {menuData.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
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
                  `
                }
              >
                <Icon size={16} />
                <span className="truncate">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* FOOTER */}
        <div className="absolute bottom-5 left-0 w-full px-5 text-xs text-white/70">
          <p className="font-semibold">Service Connect</p>
          <p>Lets Grow Together</p>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
