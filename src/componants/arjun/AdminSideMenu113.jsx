import React, { useState, useEffect } from "react";
import { FaAd } from "react-icons/fa";
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
  FiMenu,
  FiChevronDown,
  FiClipboard,
} from "react-icons/fi";

const AdminSideMenu113 = () => {
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Automatically keep the Booking menu open if the current path is a booking sub-page
  useEffect(() => {
    if (location.pathname.includes("/booking")) {
      setBookingOpen(true);
    }
  }, [location.pathname]);

  const menuData = [
    { id: 1, label: "Dashboard", icon: FiHome, path: "/" },
    { id: 2, label: "Users", icon: FiUsers, path: "/users" },
    { id: 3, label: "ServiceProviders", icon: FiUserCheck, path: "/providers" },
    { id: 4, label: "Franchisee", icon: FiBriefcase, path: "/franchisee" },
    { id: 5, label: "Finance", icon: FiDollarSign, path: "/financial" },
    { id: 6, label: "Accounts", icon: FiLayers, path: "/accounts" },
    { id: 7, label: "Profile", icon: FiUser, path: "/profile" },
    { id: 8, label: "Chat", icon: FiMessageSquare, path: "/chat" },
    { id: 9, label: "Settings", icon: FiSettings, path: "/settings" },
    { id: 10, label: "Service Management", icon: FiGrid, path: "/service-mgmt" },
    { id: 11, label: "Ads Management", icon: FaAd, path: "/adsmanagement" },
    { id: 12, label: "Notifications", icon: FiBell, path: "/notifications" },
  ];

  const bookingOptions = [
    { label: "ALL Booking", path: "/ALLb" },
    { label: "Accepted", path: "/Ab" },
    { label: "Ongoing", path: "/Ob" }, // This matches the Route path above
    { label: "Completed", path: "/Cb" },
    { label: "Incomplete", path: "/Ib" },
    { label: "Declined", path: "/Db" },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      {/* Mobile Toggle */}
<button
        className="lg:hidden fixed top-4 left-4 z-50 text-[#e6e6f0]"
        onClick={() => setOpen(true)}
      >
        <FiMenu size={22} />
      </button>

      <aside className={`fixed top-0 left-0 z-50 h-full w-64 bg-[#4F46B5] text-white transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 overflow-y-auto`}>
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/20">
          <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center font-bold">S</div>
          <span className="text-lg font-semibold">SC</span>
        </div>

        <nav className="mt-4 flex flex-col gap-1 px-3 pb-10">
          {menuData.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <React.Fragment key={item.id}>
                {/* Main Menu Item */}
                <div
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-md text-sm cursor-pointer transition-all ${
                    isActive ? "bg-white text-[#4F46B5] font-bold shadow-md" : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </div>

                {/* Booking Dropdown (Inserted after Users) */}
                {item.label === "Users" && (
                  <>
                    <div
                      onClick={() => setBookingOpen(!bookingOpen)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-md text-sm cursor-pointer transition-all ${
                        location.pathname.includes("/booking") ? "text-white font-bold bg-white/10" : "text-white/80 hover:bg-white/10"
                      }`}
                    >
                      <FiClipboard size={18} />
                      <span className="flex-1">Booking</span>
                      <FiChevronDown className={`transition-transform duration-200 ${bookingOpen ? "rotate-180" : ""}`} />
                    </div>

                    {/* Booking Sub-items */}
                    {bookingOpen && (
                      <div className="flex flex-col bg-black/10 rounded-md mt-1 mb-2">
                        {bookingOptions.map((opt) => (
                          <div
                            key={opt.label}
                            onClick={() => { navigate(opt.path); setOpen(false); }}
                            className={`pl-12 py-2.5 text-sm cursor-pointer transition-colors rounded-md ${
                              location.pathname === opt.path ? "text-white font-bold bg-[#6359E9]" : "text-white/60 hover:text-white"
                            }`}
                          >
                            {opt.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </aside>
      
      {/* Mobile Overlay */}
      {open && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setOpen(false)}></div>}
    </>
  );
};

export default AdminSideMenu113;