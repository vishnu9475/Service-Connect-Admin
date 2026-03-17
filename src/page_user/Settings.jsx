import React, { useState } from "react";
import {
  ChevronRight,
  User,
  Bell,
  Lock,
  CreditCard,
  Globe,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Component4 from "../componants_user/Component4";

const Settings = () => {
  const navigate = useNavigate();
  const [openLanguage, setOpenLanguage] = useState(false);
  const [language, setLanguage] = useState("English");

  const settingsItems = [
    { label: "Account", icon: User, path: "/profile" },
    { label: "Notification", icon: Bell, path: "/Page_43" },
    { label: "Privacy", icon: Lock, path: "/privacy" },
    { label: "Payment", icon: CreditCard, path: "/U21_PAYMENT_METHODS" },
    { label: "Language", icon: Globe, isLanguage: true },
    { label: "Help", icon: HelpCircle, path: "/Page_41" },
    { label: "Logout", icon: LogOut, path: "/logout" },
  ];

  return (
    <div className="min-h-screen bg-white md:bg-gray-200">
      <Component4 title="Settings" theme="black" />

      <div className="flex justify-center px-4 py-6">
        <div className="w-full md:max-w-md bg-white md:rounded-xl md:shadow-lg relative">

          {settingsItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="relative">

                <div
                  onClick={() => {
                    if (item.isLanguage) {
                      setOpenLanguage(!openLanguage);
                    } else {
                      navigate(item.path);
                    }
                  }}
                  className="
                    flex items-center justify-between
                    px-4 py-4
                    cursor-pointer
                    border-b last:border-b-0
                    hover:bg-gray-300
                    transition
                  "
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-5 h-5 text-gray-700" />
                    <span className="text-sm font-medium text-gray-900">
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.isLanguage && (
                      <span className="text-xs text-gray-500">
                        {language}
                      </span>
                    )}
                    <ChevronRight
                      className={`w-4 h-4 text-gray-400 transition ${
                        item.isLanguage && openLanguage ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* LANGUAGE DROPDOWN */}
                {item.isLanguage && openLanguage && (
                  <div className="absolute right-4 top-full mt-2 w-32 bg-gray-200 rounded-lg shadow-md z-20">
                    {["English", "Malayalam"].map((lang) => (
                      <div
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setOpenLanguage(false);
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
          })}
        </div>
      </div>
    </div>
  );
};

export default Settings;