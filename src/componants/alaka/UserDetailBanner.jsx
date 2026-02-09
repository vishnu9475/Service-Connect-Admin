import React, { useState, useEffect, useRef  } from "react";
import {
  FiStar,
  FiMoreHorizontal,
  FiPhone,
  FiMail,
  FiMapPin,
  FiUser,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom"; 

const UserDetailBanner = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const viewUser = () => {
    setMenuOpen(false);
    navigate("/ServiceProviderDetails"); 
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      {/* TOP BANNER */}
      <div className="relative h-28 sm:h-32 bg-[#4D44B5]">
        <div className="hidden sm:block absolute right-32 bottom-0 w-40 h-20 bg-orange-400 rounded-t-xl" />
        <div className="hidden sm:block absolute right-10 bottom-0 w-40 h-28 bg-yellow-400 rounded-t-xl" />
      </div>

      {/* CONTENT */}
      <div className="relative px-4 sm:px-6 pb-6">
        {/* AVATAR */}
        <div className="absolute -top-12 sm:-top-14 left-1/2 sm:left-6 -translate-x-1/2 sm:translate-x-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#C9C6F2] border-4 border-white" />
        </div>

        {/* 3 DOT MENU */}
        <div className="absolute top-4 right-4 sm:right-6" ref={menuRef} >
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <FiMoreHorizontal size={20} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white border rounded-lg shadow-md z-10">
              <button
                onClick={viewUser}
                className="px-4 py-2 text-sm hover:bg-gray-100 w-full text-left "
              >
                View
              </button>
            </div>
          )}
        </div>

        {/* USER INFO */}
        <div className="pt-14 sm:pt-16 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <h2 className="text-lg sm:text-xl font-semibold text-[#2d2d6e]">
              Karen Hope
            </h2>

            <div className="flex items-center gap-1 text-yellow-500">
              <FiStar />
              <span className="text-sm font-medium text-gray-700">4.9</span>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-1">Plumber</p>
        </div>

        {/* DETAILS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 text-sm">
          <Detail icon={<FiUser />} label="Franchise" value="K Top" />
          <Detail icon={<FiMapPin />} label="Address" value="Jakarta, Indonesia" />
          <Detail icon={<FiPhone />} label="Phone" value="+12 345 6789 0" />
          <Detail
            icon={<FiMail />}
            label="Email"
            value="Hope@mail.com"
            breakAll
          />
        </div>
      </div>
    </div>
  );
};

const Detail = ({ icon, label, value, breakAll }) => (
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
      {icon}
    </div>
    <div>
      <p className="text-gray-400">{label}</p>
      <p
        className={`font-medium text-gray-700 ${
          breakAll ? "break-all sm:break-normal" : ""
        }`}
      >
        {value}
      </p>
    </div>
  </div>
);

export default UserDetailBanner;
