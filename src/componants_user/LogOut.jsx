import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LogOut() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth data if needed
    // localStorage.clear();

    navigate('/'); // home page
  };

  const handleCancel = () => {
    navigate(-1); // go back to previous page
  };

  return (
    <div className="min-h-screen bg-white md:bg-gray-200 flex items-center justify-center px-4">
      <div className="relative w-full max-w-sm bg-[#f8fbff] rounded-3xl px-6 py-10 text-center shadow-md">

        {/* Close Button */}
        <button
          onClick={handleCancel}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Are you sure you want to logout?
        </h2>

        <p className="text-sm text-gray-500 mb-8">
          You will need to login again to access your account.
        </p>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="relative w-full bg-[#1E2235] text-white py-3 rounded-full flex items-center justify-center hover:bg-[#15192a] transition"
        >
          Logout
          <span className="absolute right-2 bg-white text-black rounded-full w-9 h-9 flex items-center justify-center">
            <ArrowRight size={18} />
          </span>
        </button>
      </div>
    </div>
  );
}
