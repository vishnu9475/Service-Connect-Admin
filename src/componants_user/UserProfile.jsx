import React, { useState } from "react";
import {
  BellDot,
  ChevronRight,
  Eye,
  Image,
  Languages,
  ShieldAlert,
  ShieldUser,
  User,
  Wallet,
  BadgeQuestionMark,
  Send,
  LogOutIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import user from "../assets/user.jpg"

export default function UserProfile() {
   const navigate = useNavigate();
  const profileOptions = [
    { icon: <User />, label: "Edit Profile", path: "/pageu36" },
    { icon: <Wallet />, label: "Payment Option", path: "/U21_PAYMENT_METHODS/" },
    { icon: <BellDot />, label: "Notification", path: "/pageu40" },

    // Language dropdown
    { icon: <Languages />, label: "Language", isLanguage: true },

    // Dark mode toggle
    { icon: <Eye />, label: "Dark Mode", isToggle: true },

    { icon: <ShieldUser />, label: "Security", path: "/Page_44" },
    { icon: <ShieldAlert />, label: "Teams & Conditions", path: "/pageu39" },
    { icon: <BadgeQuestionMark />, label: "Help Center", path: "/Page_41" },
    { icon: <Send />, label: "Invite Friends", path: "/page_48" },
    { icon: <LogOutIcon />, label: "Logout", path: "/logout" },
  ];

  return (
   
      <div className="max-w-lg mt-9  mx-auto px-4 pb-6 rounded-2xl shadow-2xl shadow-gray-500 ">
  
        {/* Profile Image */}
        <label>
          <div className="cursor-pointer bg-gray-200 w-20 h-20 rounded-full relative mx-auto -top-8 shadow-md">
            <img src={user} alt="Profile" className="rounded-full" />
            <div className="flex items-center justify-center h-7 w-9 bg-cyan-50 rounded-md absolute -right-1 bottom-1 shadow-md">
              <Image className="text-cyan-700 w-4 h-4" />
            </div>
            <input type="file" className="hidden" />
          </div>
        </label>

        {/* Name & Email */}
        <div className="flex flex-col items-center mt-2">
          <h2 className="font-bold text-xl">James S Hernandoz</h2>
          <p className="text-sm text-gray-700">heranandz@gmail.com</p>
        </div>

        {/* Options */}
        <div className="mt-4">
          {profileOptions.map((item, index) => (
            <ProfileOption key={index} {...item} />
          ))}
        </div>
      </div>
  
  );
}

/* ================= PROFILE OPTION ================= */

const ProfileOption = ({ icon, label, path, isLanguage, isToggle }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [toggleOn, setToggleOn] = useState(false);

  const handleClick = () => {
    if (isLanguage) {
      setOpen((prev) => !prev);
    } else if (!isToggle) {
      navigate(path);
    }
  };

  return (
    <div className="mt-4 md:px-6 lg:px-8 relative">
      {/* Main Row */}
      <div
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        <div className="flex gap-4 items-center">
          <span className="text-gray-500">{icon}</span>
          <span className="text-sm">{label}</span>
        </div>

        <div className="flex items-center gap-2">
          {isLanguage && (
            <span className="text-xs text-gray-600">{language}</span>
          )}

          {/* Toggle */}
          {isToggle ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setToggleOn(!toggleOn);
              }}
              className={`w-11 h-6 rounded-full relative transition ${
                toggleOn ? "bg-gray-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition ${
                  toggleOn ? "translate-x-5" : ""
                }`}
              />
            </button>
          ) : (
            <ChevronRight className={`transition ${open ? "rotate-90" : ""}`} />
          )}
        </div>
      </div>

      {/* Language Dropdown */}
      {isLanguage && open && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-gray-200 rounded-lg shadow-md z-20">
          {["English", "Malayalam"].map((lang) => (
            <div
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setOpen(false);
              }}
              className="px-3 py-2 text-xs hover:bg-gray-300 cursor-pointer"
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
