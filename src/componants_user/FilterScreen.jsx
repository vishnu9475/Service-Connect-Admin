import React, { useState } from 'react';

const FilterScreen = ({ onClose, onApply }) => {
  // --- DATA: The list of filter options ---
  const filterSections = [
    {
      title: 'SubCategories',
      options: ['Web Development', 'Mobile App', 'Data Science', 'UI/UX Design', 'Game Dev']
    },
    {
      title: 'Level', // Replaced "xxxxxx" with Level
      options: ['Beginner', 'Intermediate', 'Expert', 'All Levels']
    },
    {
      title: 'Price',
      options: ['Paid', 'Free']
    },
    {
      title: 'Features', // Replaced "xxxxxx"
      options: ['All Captions', 'Quizzes', 'Coding Exercises', 'Practice Tests']
    },
    {
      title: 'Rating',
      options: ['4.5 & Up', '4.0 & Up', '3.5 & Up', '3.0 & Up']
    },
    {
      title: 'Duration',
      options: ['0-2 Hours', '3-6 Hours', '7-16 Hours', '17+ Hours']
    }
  ];

  // --- STATE: Tracks which boxes are checked ---
  // Format: { 'Web Development': true, 'Paid': true }
  const [selectedFilters, setSelectedFilters] = useState({
    'Mobile App': true, // Example of pre-selected item
    'Data Science': true,
    'Paid': true
  });

  // --- FUNCTIONS ---

  // Toggle a checkbox on/off
  const toggleFilter = (optionName) => {
    setSelectedFilters(prev => ({
      ...prev,
      [optionName]: !prev[optionName] // Flip the true/false value
    }));
  };

  // Clear all selections
  const handleClear = () => {
    setSelectedFilters({});
  };

  return (
    <div className="bg-white flex flex-col font-sans h-screen w-full max-w-md mx-auto">
      
      {/* 1. HEADER */}
      <div className="flex justify-between items-center p-5 border-b border-gray-100">
        <button onClick={onClose} className="p-2 -ml-2">
          {/* Back Arrow Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A233A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 className="text-[#1A233A] font-bold text-xl tracking-wide">FILTER</h2>
        
        <button 
          onClick={handleClear}
          className="text-gray-500 font-semibold text-sm hover:text-red-500 transition-colors"
        >
          Clear
        </button>
      </div>

      {/* 2. SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {filterSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-[#1A233A] font-bold text-lg mb-4">
              {section.title}:
            </h3>
            
            <div className="space-y-3">
              {section.options.map((option) => {
                const isSelected = !!selectedFilters[option];
                
                return (
                  <div 
                    key={option} 
                    onClick={() => toggleFilter(option)}
                    className="flex items-center cursor-pointer group"
                  >
                    {/* Custom Checkbox Design */}
                    <div className={`
                      w-6 h-6 rounded-[6px] mr-3 flex items-center justify-center transition-all duration-200
                      ${isSelected ? 'bg-[#1A233A]' : 'bg-gray-200 group-hover:bg-gray-300'}
                    `}>
                      {isSelected && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    
                    {/* Label */}
                    <span className={`text-[15px] font-medium transition-colors ${isSelected ? 'text-[#1A233A]' : 'text-gray-500'}`}>
                      {option}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 3. FOOTER BUTTON */}
      <div className="p-6 border-t border-gray-100 bg-white">
        <button 
          onClick={onApply}
          className="w-full bg-[#1A233A] text-white font-bold py-4 rounded-[16px] text-lg active:scale-95 transition-transform shadow-lg"
        >
          Apply
        </button>
      </div>
      
    </div>
  );
};

export default FilterScreen;