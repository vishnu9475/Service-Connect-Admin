import React, { useState } from 'react';

function SearchFilterComponent() {
  const [activeTab, setActiveTab] = useState('Near By');
  const tabs = ['Near By', '10 KM', 'All'];

  return (
    // CHANGE IS HERE: I used square brackets to set a custom size
    // Try changing '600px' to '800px' or '1000px' to see the difference!
    <div className="w-full max-w-[2000px] mx-auto p-4 space-y-5 font-sans">
      
      {/* --- Search Bar Container --- */}
      <div className="flex items-center bg-[#6D5D5D] rounded-[22px] p-2 pl-5 shadow-lg">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-white opacity-80" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        
        <input
          type="text"
          placeholder="Search for.."
          className="flex-1 bg-transparent border-none outline-none text-white px-3 placeholder:text-gray-300 text-sm"
        />

        <div className="bg-white p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-[#6D5D5D]" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>
      </div>

      {/* --- Filter Bar --- */}
      <div className="relative flex items-center border-2 border-[#1A1C22] rounded-full p-1 bg-white h-12 overflow-hidden shadow-sm">
        <div 
          className="absolute top-1 bottom-1 left-1 bg-[#1A1C22] rounded-full transition-all duration-300 ease-in-out"
          style={{ 
            width: 'calc(33.33% - 4px)', 
            transform: `translateX(${tabs.indexOf(activeTab) * 100}%)` 
          }}
        />
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative z-10 flex-1 h-full text-sm font-bold transition-colors duration-300 ${
              activeTab === tab ? 'text-white' : 'text-[#1A1C22]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchFilterComponent;