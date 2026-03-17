import React, { useState } from 'react';

const RecentSearchWithBar = () => {
  // --- STATE MANAGEMENT ---

  // 1. State to track the text inside the input box
  const [inputValue, setInputValue] = useState('');

  // 2. State for the Recent Search List
  const [searches, setSearches] = useState([
    '3D Design',
    'Graphic Design',
    'Programming',
    'SEO & Marketing',
    'Web Development',
  ]);

  // --- FUNCTIONS ---

  // Delete an item
  const handleDelete = (indexToDelete) => {
    setSearches((currentSearches) => 
      currentSearches.filter((_, index) => index !== indexToDelete)
    );
  };

  // Add item when "Enter" key is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Check if input is not empty
      if (inputValue.trim() !== '') {
        // Add new value to the START of the array, then keep the old ones
        setSearches([inputValue, ...searches]);
        // Clear the input box
        setInputValue('');
      }
    }
  };

  // --- RENDER ---

  return (
    <div className="w-full max-w-md mx-auto font-sans space-y-6">
      
      {/* ==============================================
          SECTION 1: SEARCH BAR
         ============================================== */}
      <div className="flex items-center bg-[#6D5D5D] rounded-[22px] p-2 pl-5 shadow-md">
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
          // A. Bind the input to our state
          value={inputValue}
          // B. Update state when you type
          onChange={(e) => setInputValue(e.target.value)}
          // C. Listen for key presses (Enter)
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-white px-3 placeholder:text-gray-300 text-sm"
        />

        <div className="bg-white p-2 rounded-xl cursor-pointer">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-[#6D5D5D]" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>
      </div>

      {/* ==============================================
          SECTION 2: RECENT SEARCH LIST
         ============================================== */}
      
      {searches.length === 0 ? (
        <div className="p-8 text-center text-gray-400 bg-white rounded-[32px] shadow-sm">
          No recent searches.
        </div>
      ) : (
        <div className="bg-white rounded-[32px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          {/* List Header */}
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-[#1A233A] font-bold text-[20px] leading-none">
              Recents Search
            </h2>
            <button className="text-[12px] font-bold text-[#1A233A] flex items-center gap-1 hover:opacity-70 transition-opacity">
              SEE ALL
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* List Items */}
          <div className="flex flex-col gap-4">
            {searches.map((item, index) => (
              <div key={index} className="flex justify-between items-center group">
                <span className="text-[#9A9FA5] text-[16px] font-medium group-hover:text-[#1A233A] transition-colors cursor-pointer">
                  {item}
                </span>
                <button 
                  onClick={() => handleDelete(index)}
                  className="text-[#1A233A] opacity-80 hover:text-red-500 hover:opacity-100 hover:scale-110 transition-all p-1"
                  aria-label={`Remove ${item}`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentSearchWithBar;