import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppHeader = ({
  title = "SERVICE CONNECT",
  showSearch = false,
  showFilter = false,
  showMenu = false, 
  onBack, // You can still pass a custom function here if you want
  onDownload,
  onPrint
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Helper to run a function and close the menu
  const handleMenuClick = (action) => {
    if (action) action();
    setIsMenuOpen(false);
  };

  // Default back function if no onBack prop is provided
  const handleBack = () => {
    if (onBack) {
      navigate(-1);  // If you passed a specific function, use it
    } else {
     onBack();// Otherwise, just go back one page
    }
  };

  return (
    <header className="w-full h-20 bg-[#1A1C22] flex justify-between items-center px-5 shadow-md relative z-50">

      {/* --- LEFT SIDE --- */}
      <div className="flex items-center gap-4">
        {/* We show the button if onBack is passed OR if we just want it always available */}
        <button 
          onClick={()=>navigate(-1)}
          className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <h1 className="text-white font-bold text-xl tracking-wider uppercase">
          {title}
        </h1>
      </div>

      {/* --- RIGHT SIDE --- */}
      <div className="flex items-center gap-1 relative">

        {/* --- FILTER BUTTON --- */}
        {showFilter && (
          <button 
            onClick={() => navigate("/page16")} 
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white/10 mr-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="4" y1="8" x2="20" y2="8" /><circle cx="16" cy="8" r="2" /><line x1="4" y1="16" x2="20" y2="16" /><circle cx="8" cy="16" r="2" />
            </svg>
          </button>
        )}

        {/* --- SEARCH BUTTON --- */}
        {showSearch && (
          <button 
            onClick={() => navigate("/search-page")} // Changed this to a search path
            className="w-10 h-10 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        )}

        {/* --- THREE DOT MENU --- */}
        {showMenu && (
          <>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="w-10 h-10 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>

            {isMenuOpen && (
                <div className="absolute top-12 right-0 w-48 bg-[#D4D4D8] rounded-xl shadow-2xl p-2 z-[60] animate-in fade-in zoom-in duration-200 origin-top-right">
                    <ul className="flex flex-col text-sm font-semibold text-[#1A1C22]">
                        <li className="flex items-center justify-between p-3 hover:bg-white/50 rounded-lg cursor-pointer transition">
                            <span>Share</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </li>
                        
                        <li 
                          onClick={() => handleMenuClick(onDownload)}
                          className="flex items-center justify-between p-3 hover:bg-white/50 rounded-lg cursor-pointer transition"
                        >
                            <span>Download</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </li>

                        <li 
                          onClick={() => handleMenuClick(onPrint)}
                          className="flex items-center justify-between p-3 hover:bg-white/50 rounded-lg cursor-pointer transition"
                        >
                            <span>Print</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>
                            </svg>
                        </li>
                    </ul>
                </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default AppHeader;