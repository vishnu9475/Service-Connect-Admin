import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookItem = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[240px] bg-white border border-gray-100 rounded-[24px] shadow-sm overflow-hidden relative font-sans">
      
      {/* LEFT ACCENT BAR */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-gray-900"></div>

      {/* CARD CONTENT */}
      <div className="p-5 pl-8 h-full flex flex-col justify-between">
        
        {/* Header Row */}
        <div>
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
              <h2 className="text-gray-900 text-lg font-bold lg:text-xl">Tap Repair</h2>
              <button className="text-gray-900 text-[10px] font-bold underline hover:text-orange-600 transition-colors uppercase tracking-wider">
                View
              </button>
            </div>
            
            <button className="text-gray-300 hover:text-red-500 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>
            </div>
            <span className="text-gray-500 text-xs font-medium">Keshavan</span>
          </div>

          {/* Status Badge */}
          <div className="inline-block bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded mb-3">
            BOOKED
          </div>

          {/* Date & Time */}
          <div className="flex items-center gap-5 mb-3 flex-wrap">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-gray-400 text-[11px] font-bold">March 20, 2021</span>
            </div>

            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="text-gray-400 text-[11px] font-bold">09.00 - 10.00 AM</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => navigate('/U20_Booking_Details')}
          className="w-full bg-gray-900 text-white rounded-full py-2.5 font-bold text-xs uppercase tracking-widest hover:bg-black active:scale-[0.98] transition-all shadow-md"
        >
          Waiting for Response
        </button>

      </div>
    </div>
  );
};

export default BookItem;