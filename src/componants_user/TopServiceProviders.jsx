import React from 'react';

const PROVIDERS = [
  { id: 1, name: 'Sonja' },
  { id: 2, name: 'Jensen' },
  { id: 3, name: 'Victoria' },
  { id: 4, name: 'Castaldo' },
];

const TopServiceProviders = () => {
  return (
    <section 
      // ✅ CHANGED: 
      // 1. Removed 'px-4' (Internal padding)
      // 2. Added 'mx-5' (External margin) to match your other sections
      className="py-4 mx-5 bg-white font-sans"
    >
      {/* Header with SEE ALL and Chevron */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-[#1A233A] font-bold text-[18px] tracking-tight">
          Top Service Providers
        </h2>
        <button className="text-[11px] font-extrabold text-[#1A233A] flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
          SEE ALL 
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Horizontal Scrollable List */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {PROVIDERS.map((provider) => (
          <div key={provider.id} className="flex flex-col items-center gap-2.5 flex-shrink-0">

            {/* The specific 'squircle' shape from image */}

            <div className="w-[82px] h-[82px] bg-black rounded-[28px] shadow-sm cursor-pointer hover:opacity-80 transition-opacity">
              
              {/* Image would go here */}

            </div>
            
            {/* Name label */}

            <span className="text-[14px] font-bold text-[#1A233A] tracking-tight">

              {provider.name}
               
            </span>
          </div>
        ))}
        {/* End Spacer for scroll padding */}
        <div className="min-w-[4px] flex-shrink-0"></div>
      </div>
    </section>
  );
};

export default TopServiceProviders;