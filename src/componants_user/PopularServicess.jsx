import React, { useState } from 'react';

const PopularServicess = () => {
  const [activeTab, setActiveTab] = useState('Plumbing');
  const tabs = ['All', 'Plumbing', 'Electrical', 'Health'];

  // Data for the three cards
  const services = [
    {
      id: 1,
      category: 'Plumbing',
      title: 'Complete Residential Plumbing',
      price: '₹100-200',
      rating: '4.2',
      reviews: '7830 Reviews',
    },
    {
      id: 2,
      category: 'Plumbing',
      title: 'Emergency Leak Repair',
      price: '₹150-300',
      rating: '4.5',
      reviews: '1240 Reviews',
    },
    {
      id: 3,
      category: 'Plumbing',
      title: 'Bathroom Fitting & Setup',
      price: '₹500-800',
      rating: '4.8',
      reviews: '520 Reviews',
    },
  ];

  return (
    <section 
      // ✅ 1. CONTAINER WIDTH: 
      // Changed to 'mx-5' (20px margin on Left & Right) to match your Banner's spacing.
      // Removed 'w-full' and 'max-w-md' so it stretches naturally with the margins.
      // If you used a fixed width on your banner (like w-[340px]), put that here instead!
      className="mx-5 bg-white font-sans py-4"
    >
      {/* 1. Header Section */}
      <div 
        // ✅ 2. REMOVED PADDING: Changed 'px-6' to 'px-0' 
        // because the section margin (mx-5) handles the spacing now.
        className="flex justify-between items-center mb-5 px-0"
      >
        <h2 className="text-[#1A233A] text-xl font-bold tracking-tight">
          Popular Services
        </h2>
        <button className="text-[#1A233A] text-[11px] font-extrabold opacity-80 hover:opacity-100 transition-opacity">
          SEE ALL
        </button>
      </div>

      {/* 2. Horizontal Filter Tabs */}
      <div 
        // ✅ 3. REMOVED PADDING: Changed 'px-6' to 'px-0'
        className="flex w-full items-center justify-between gap-2 mb-6 px-0"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 flex justify-center items-center py-2.5 rounded-full text-[13px] font-bold transition-all duration-200 ${
              activeTab === tab 
                ? 'bg-[#1A1C22] text-white shadow-md' 
                : 'bg-[#7E7575] text-white opacity-90 hover:opacity-100'
            }`} 
          > 
            {tab}  
          </button>
        ))}
      </div>

      {/* 3. Service Card Grid */}
      <div 
        // ✅ 4. ADJUSTED SCROLL: Changed 'px-6' to 'px-0'
        // Added 'overflow-visible' so the shadow doesn't get cut off
        className="flex gap-4 overflow-x-auto no-scrollbar pb-7 px-0 overflow-visible"
      >
        {services.map((service) => (
          <div 
            key={service.id}
            className="min-w-[280px] bg-white rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100"
          >
            {/* Card Image Placeholder */}
            <div className="h-40 bg-black w-full"></div>
            
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wide">
                    {service.category}
                  </p>
                  <h3 className="font-bold text-[16px] text-[#1A233A] mt-1 leading-snug">
                    {service.title}
                  </h3>
                </div>
                
                {/* Teal Bookmark Icon */}
                <button className="text-[#1D8B8B] mt-1">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </button>
              </div>

              {/* Footer Row: Price | Rating | Reviews */}
              <div className="flex items-center gap-2.5 mt-5 text-[11px] font-bold text-gray-500">
                <span className="text-[#1A233A]">{service.price}</span>
                <span className="text-gray-200 font-light text-lg">|</span>
                <div className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFC107" className="mb-0.5">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-[#1A233A]">{service.rating}</span>
                </div>
                <span className="text-gray-200 font-light text-lg">|</span>
                <span className="tracking-tight">{service.reviews}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="min-w-[10px]"></div>
      </div>
    </section>
  );
};

export default PopularServicess;