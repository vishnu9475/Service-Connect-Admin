import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiStar,
  FiMoreHorizontal,
  FiPhone,
  FiMail,
  FiMapPin,
  FiUser,
} from "react-icons/fi";

const UserDetailBanner = () => {
  // 🔹 ADDED STATE
  const [user, setUser] = useState({
    name: "Karen Hope",
    role: "Plumber",
    rating: 4.9,
    franchise: "K Top",
    address: "Jakarta, Indonesia",
    phone: "+12 345 6789 0",
    email: "Hope@mail.com",
    photo: null,
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // ✏️ Edit user (simple demo)
  const editUser = () => {
    const name = prompt("Edit name:", user.name);
    if (!name) return;

    setUser({ ...user, name });
    setMenuOpen(false);
  };

  // ❌ Delete user (demo)
  const deleteUser = () => {
    if (!window.confirm("Delete this user?")) return;

    alert("User deleted (demo)");
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEdit = () => {
    navigate("/serviceproviderdetails");
  };

    const handleDelete = () => {
    navigate("/serviceproviders");
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">

      {/* TOP BANNER */}
      <div className="relative h-28 sm:h-32 bg-[#4D44B5]">
        <div className="absolute right-20 sm:right-32 bottom-0 w-24 h-12 sm:w-40 sm:h-20 bg-orange-400 rounded-t-xl" />
        <div className="absolute right-4 sm:right-10 bottom-0 w-24 h-20 sm:w-40 sm:h-28 bg-yellow-400 rounded-t-xl" />
      </div>

      {/* CONTENT */}
      <div className="relative px-4 sm:px-6 pb-6">

        {/* AVATAR */}
        <div className="absolute -top-12 sm:-top-14 left-1/2 sm:left-6 -translate-x-1/2 sm:translate-x-0 z-10">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white bg-[#C9C6F2] overflow-hidden flex items-center justify-center">
            {user.photo ? (
              <img
                src={user.photo}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <FiUser className="text-white w-10 h-10 sm:w-12 sm:h-12" />
            )}
          </div>
        </div>

        {/* MENU */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute top-4 right-4 sm:right-6 text-gray-400 hover:text-gray-600 z-10 cursor-pointer"
        >
          <FiMoreHorizontal size={20} />
        </button>

        {/* MENU DROPDOWN */}
        {menuOpen && (
          <div className="absolute right-4 top-12 bg-white border rounded-lg shadow-md w-32 z-20" ref={menuRef}>
            <button
              onClick={handleEdit}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
            >
              Delete
            </button>
          </div>
        )}

        {/* USER INFO */}
        <div className="pt-14 sm:pt-16 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <h2 className="text-lg sm:text-xl font-semibold text-[#2d2d6e]">
              {user.name}
            </h2>

            <div className="flex items-center justify-center sm:justify-start gap-1 text-yellow-500">
              <FiStar />
              <span className="text-sm font-medium text-gray-700">
                {user.rating}
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            {user.role}
          </p>
        </div>

        {/* DETAILS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 text-sm">

          <Detail icon={<FiUser />} label="Franchise" value={user.franchise} />
          <Detail icon={<FiMapPin />} label="Address" value={user.address} />
          <Detail icon={<FiPhone />} label="Phone" value={user.phone} />
          <Detail icon={<FiMail />} label="Email" value={user.email} breakAll />

        </div>
      </div>
    </div>
  );
};

// 🔹 Small reusable detail component
const Detail = ({ icon, label, value, breakAll }) => (
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
      {icon}
    </div>
    <div>
      <p className="text-gray-400">{label}</p>
      <p className={`font-medium text-gray-700 ${breakAll ? "break-all sm:break-normal" : ""}`}>
        {value}
      </p>
    </div>
  </div>
);

export default UserDetailBanner;
