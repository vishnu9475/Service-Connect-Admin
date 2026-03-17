


import React from "react";

const ToolBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center px-3 pb-3 z-50">
      <div className="
        w-full 
        max-w-md sm:max-w-lg md:max-w-xl 
        lg:max-w-lg xl:max-w-md
        bg-[#6D5D5D] 
        rounded-full 
        px-4 sm:px-6 lg:px-5   /* width change only */
        py-2.5 sm:py-3        /* ✅ height stays same */
        flex items-center justify-between 
        shadow-2xl
      ">

        {/* Icons */}
        {[
          <svg className="lg:scale-90" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
          </svg>,

          <svg className="lg:scale-90" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>,

          <svg className="lg:scale-90" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>,

          <svg className="lg:scale-90" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>,

          <svg className="lg:scale-95" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>,

          <svg className="lg:scale-90" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
          </svg>,
        ].map((icon, index) => (
          <button
            key={index}
            className="text-white opacity-90 hover:opacity-100 hover:scale-110 transition-all active:scale-95"
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToolBar;
