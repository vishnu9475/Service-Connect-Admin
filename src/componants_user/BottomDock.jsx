import React from 'react';

const BottomDock = () => {
  // We use the same color #6D5D5D from your search bar for consistency
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <div className="bg-[#6D5D5D] rounded-[30px] px-6 py-4 flex items-center gap-8 shadow-2xl pointer-events-auto">
        
        {/* 1. Dashboard / Grid Icon */}
        <button className="text-white opacity-90 hover:opacity-100 hover:scale-110 transition-all">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="14" width="7" height="7" rx="1"></rect>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
          </svg>
        </button>

        {/* 2. Book / Saved Icon */}
        <button className="text-white opacity-90 hover:opacity-100 hover:scale-110 transition-all">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        </button>

        {/* 3. Timer / History Icon */}
        <button className="text-white opacity-90 hover:opacity-100 hover:scale-110 transition-all">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </button>

        {/* 4. Layout / Card Icon */}
        <button className="text-white opacity-90 hover:opacity-100 hover:scale-110 transition-all">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
             <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
             <line x1="3" y1="9" x2="21" y2="9"></line>
             <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        </button>

        {/* 5. Plus Icon */}
        <button className="text-white opacity-90 hover:opacity-100 hover:scale-110 transition-all">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>

        {/* 6. Question / Help Icon */}
        <button className="text-white opacity-90 hover:opacity-100 hover:scale-110 transition-all">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
          </svg>
        </button>

      </div>
    </div>
  );
};

export default BottomDock;