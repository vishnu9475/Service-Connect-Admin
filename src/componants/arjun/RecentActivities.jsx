import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import this

const RecentActivities = () => {
  const [activeMenu, setActiveMenu] = useState(null); // Track which user menu is open
  const navigate = useNavigate();

  const users = [
    { id: 1, name: 'Samantha William', location: 'Kochi', active: false },
    { id: 2, name: 'Tony Soap', location: 'Kochi', active: false },
    { id: 3, name: 'Karen Hope', location: 'Kochi', active: false },
    { id: 4, name: 'Jordan Nico', location: 'Kochi', active: false },
    { id: 5, name: 'Nadila Adja', location: 'Kochi', active: false },
    { id: 6, name: 'Budi Doremi', location: 'Kochi', active: false },
  ];

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <div className="w-full bg-white rounded-[30px] p-6 shadow-xl shadow-gray-100 font-sans min-h-[520px] flex flex-col justify-between">
      
      <div>
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">Recent Activities</h2>
            <p className="text-sm text-gray-400 mt-1">
              You have <span className="font-bold text-gray-500">456 New Users</span>
            </p>
          </div>
          <button className="w-10 h-10 rounded-2xl bg-indigo-600 text-white text-xl font-light shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95">
            +
          </button>
        </div>

        {/* User List */}
        <div className="flex flex-col gap-4 mb-6">
          {users.map((user) => (
            <div key={user.id} className="flex justify-between items-center group relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors"></div>
                <div>
                  <div className="text-sm font-bold text-slate-800">{user.name}</div>
                  <div className="text-xs text-gray-400">{user.location}</div>
                </div>
              </div>

              {/* Action Menu Container */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu(user.id)}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all text-gray-400 hover:bg-gray-50 hover:text-indigo-600"
                >
                  {/* Three Dots Icon */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>

                {/* Dropdown Options */}
                {activeMenu === user.id && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-50 z-10 overflow-hidden">
        
        {/* Navigates to /details/1, /details/2, etc. */}
        <button 
         onClick={() => navigate('/userdetails')}
          className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors" >
                 Details
        </button>

        {/* Navigates to your delete confirmation page */}
        <button 
          onClick={() => navigate('/Users')}
          className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-red-50 transition-colors">
          Delete
        </button>
        
      </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <button 
        onClick={() => navigate('/Users')}
        className="w-full py-3 bg-indigo-50 text-indigo-600 font-bold rounded-2xl hover:bg-indigo-100 transition-colors active:scale-95"
      >
        View More
      </button>
    </div>
  );
};

export default RecentActivities;