import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const BookingCard = ({
  leftStatusText = "Requested",
  leftStatusBg = "bg-[#1B61F2]",
  rightStatusText = "Work in Progress",
  rightStatusBg = "bg-[#FBBF24]",
  detailsPath = "/Booking_Details"
}) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const userAvatar = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop";
  const providerAvatar = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop";
  const femaleThumb = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100";

  return (
    <div className="w-full max-w-[1000px] bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden font-sans">
      <div className="flex flex-col md:flex-row">

        {/* LEFT COLUMN */}
        <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                <img src={userAvatar} alt="Karan Hope" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-[#0E2040] text-lg leading-tight">Karan Hope</h3>
                <p className="text-sm text-gray-400 font-medium">User</p>
              </div>
            </div>
            <div className={`${leftStatusBg} text-white px-8 py-2 rounded-full text-sm font-semibold shadow-sm`}>
              {leftStatusText}
            </div>
          </div>

          {/* CLEAN LOCATION: No border, just text and icon as per your image */}
          <div className="flex items-center gap-1.5 mb-1 ml-1">
             <MapPin size={16} className="text-gray-900" fill="currentColor" />
             <span className="text-[13px] font-bold text-gray-800">North Paravoor, Eravam</span>
          </div>
          <p className="text-[12px] text-gray-400 mb-6 ml-1 font-medium tracking-tight">Booking Id : 12aa21w</p>

          {/* Inner Light Blue Panel */}
          <div className="bg-[#f4f7ff] rounded-[32px] p-6 space-y-6">
            <div>
              <p className="text-[13px] font-bold text-gray-800 mb-1.5 uppercase tracking-widest">Title</p>
              <p className="text-[#5d76bc] font-medium px-4">Bulb Change</p>
            </div>

            <div>
              <p className="text-[13px] font-bold text-gray-800 mb-1.5 uppercase tracking-widest">Description</p>
              <div className="text-[#5d76bc] text-[13px] leading-[1.6] px-4">
                <p>Bulb Change sadsdasd asfafas</p>
                <p>asdasd</p>
                <p>asdasdasdasdasd</p>
                <p>asdasdasd</p>
              </div>
            </div>

            <div>
              <p className="text-[13px] font-bold text-gray-800 mb-3 uppercase tracking-widest">Images & Videos</p>
              <div className="flex gap-3 px-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-11 h-11 rounded-full border-2 border-white shadow-md overflow-hidden bg-white">
                    <img src={femaleThumb} alt="attachment" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Section */}
            <div className="pt-4 border-t border-blue-100/50">
              <h4 className="text-[13px] font-bold text-gray-800 mb-4 uppercase tracking-widest">Availability</h4>
              <div className="space-y-4 px-4">
                {['From', 'To'].map((label) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="text-[13px] text-[#5d76bc] w-8 font-medium">{label}</span>
                    <div className="flex gap-2">
                      <span className="bg-[#e9efff] text-[#3b82f6] px-4 py-2 rounded-xl text-[13px] font-bold">
                        Jun 10, 2024
                      </span>
                      <span className="bg-[#e9efff] text-[#3b82f6] px-4 py-2 rounded-xl text-[13px] font-bold">
                        9:41 AM
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 p-6 relative bg-white">
          <div className="absolute right-6 top-6 z-20">
            <button onClick={() => setShowMenu(!showMenu)} className="text-gray-300 hover:text-gray-500 text-xl font-bold tracking-tighter">•••</button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-lg shadow-xl z-30 overflow-hidden">
                <button onClick={() => navigate(detailsPath)} className="w-full text-left px-4 py-2 text-sm text-[#303972] hover:bg-gray-50 flex items-center gap-2">📄 Details</button>
              </div>
            )}
          </div>

          <div className="flex justify-between items-start pr-8">
            <div className="flex gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 border border-gray-200 shadow-sm">
                <img src={providerAvatar} alt="Nazrul Islam" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-[#0E2040] text-lg">Nazrul Islam</h3>
                <p className="text-sm text-gray-400 font-medium">Electrification 💪</p>
                <p className="text-xs text-gray-400 mt-1 font-medium">Franchise : SNS</p>
              </div>
            </div>
            <div className={`${rightStatusBg} text-white px-6 py-2 rounded-full text-sm font-semibold shadow-sm`}>
              {rightStatusText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;