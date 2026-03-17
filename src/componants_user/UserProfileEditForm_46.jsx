import React from "react";
import { BiCalendar, BiEnvelope } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { Image } from "lucide-react";
import profile from "../assets/user.jpg";
import { useNavigate } from "react-router-dom";

export default function UserProfileEdit() {
  const navigate = useNavigate
  return (
    /* ===== SAME OUTER LAYOUT AS USER PROFILE ===== */
    <div className="bg-gray-200 min-h-screen p-6 md:p-10">
      <div className="max-w-lg bg-white mx-auto px-4 pb-6 rounded-2xl shadow-2xl shadow-gray-500">
         {/* ❌ Close Button */}
      {/* <button
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
      >
        <X className="w-4 h-4 text-gray-700" />
      </button>  */}

        {/* ===== Profile Image (same position & size) ===== */}
        <label>
          <div className="cursor-pointer bg-gray-200 w-20 h-20 rounded-full relative mx-auto -top-8 shadow-md">
            <img src={profile} alt="Profile" className="rounded-full" />
            <div className="flex items-center justify-center h-7 w-9 bg-cyan-50 rounded-md absolute -right-1 bottom-1 shadow-md">
              <Image className="text-cyan-700 w-4 h-4" />
            </div>
            <input type="file" className="hidden" />
          </div>
        </label>

        {/* ===== FORM ===== */}
        <div className="space-y-4 mt-2">

          <Input placeholder="Full Name" />
          <Input placeholder="Nick Name" />

          <Input icon={<BiCalendar />} placeholder="Date of Birth" />
          <Input icon={<BiEnvelope />} placeholder="Email" />

          {/* Phone */}
          <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md">
            <select className="bg-transparent outline-none text-sm pr-2 border-r border-gray-300">
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+971">🇦🇪 +971</option>
            </select>
            <input
              type="tel"
              placeholder="724-848-1225"
              className="w-full bg-transparent outline-none text-sm pl-2"
            />
          </div>

          {/* Gender */}
          <div className="bg-white px-4 py-3 rounded-xl shadow-md">
            <select className="w-full bg-transparent outline-none text-sm text-gray-400">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <Input placeholder="Student" />

        </div>

        {/* ===== BUTTON ===== */}
        <button className="relative w-full mt-6 bg-[#1E2235] text-white py-3 rounded-full flex items-center justify-center">
          Update
          <span className="absolute right-2 bg-white text-black rounded-full w-9 h-9 flex items-center justify-center">
            <FaArrowRight />
          </span>
        </button>

      </div>
    </div>
  );
}

/* ===== Reusable Input ===== */
const Input = ({ placeholder, icon }) => (
  <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-md">
    {icon && <span className="text-gray-400">{icon}</span>}
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-transparent outline-none text-sm"
    />
  </div>
);
