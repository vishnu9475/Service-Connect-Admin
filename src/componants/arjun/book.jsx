import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingCard = ({ 
  // User & Provider Info
  user = { name: "User", role: "Customer", avatar: "" },
  provider = { name: "Provider", specialty: "Service", avatar: "", franchise: "" },
  
  // Status & IDs
  bookingId = "0000",
  leftStatus = { text: "Requested", bg: "bg-[#1B61F2]" },
  rightStatus = { text: "Pending", bg: "bg-gray-400" },
  
  // Content
  details = { title: "", description: "", location: "", media: [] },
  availability = { fromDate: "", fromTime: "", toDate: "", toTime: "" },
  appointment = { date: "", time: "" },
  
  // Invoice & Declination
  isDeclined = false,
  declineReason = "",
  invoice = { items: [], grandTotal: 0, terms: "" },
  requirements = [],
  
  detailsPath = "/Booking_Details"
}) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full max-w-[1000px] bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden font-sans mx-auto">
      <div className="flex flex-col md:flex-row">
        
        {/* LEFT COLUMN: User Request Info */}
        <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-[#0E2040] text-lg">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.role}</p>
              </div>
            </div>
            <div className={`${leftStatus.bg} text-white px-8 py-2 rounded-full text-xs font-bold tracking-wide cursor-default`}>
              {leftStatus.text}
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-700 mb-1 ml-1 font-medium">
            <span className="text-blue-600">📍</span> {details.location}
          </div>
          <p className="text-xs text-gray-400 mb-6 ml-1 tracking-tight">Booking Id : {bookingId}</p>

          <div className="bg-[#F8FAFF] p-5 rounded-[20px] space-y-4">
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Title</p>
              <p className="text-[#3E5C9A] font-semibold text-[15px]">{details.title}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Description</p>
              <p className="text-[#3E5C9A] text-[13px] leading-relaxed opacity-80">{details.description}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Images & Videos</p>
              <div className="flex gap-3 mt-1">
                {details.media.map((img, i) => (
                  <div key={i} className="w-11 h-11 rounded-full border-2 border-white shadow-sm overflow-hidden ring-1 ring-gray-100">
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Availability</p>
              <div className="space-y-3">
                <div className="flex gap-4 items-center">
                  <span className="text-[10px] text-gray-400 w-8 font-black uppercase tracking-tighter">From</span>
                  <div className="flex gap-2">
                    <div className="bg-[#E9F0FF] px-4 py-1.5 rounded-lg text-[#1B61F2] text-[11px] font-bold">{availability.fromDate}</div>
                    <div className="bg-[#E9F0FF] px-4 py-1.5 rounded-lg text-[#1B61F2] text-[11px] font-bold">{availability.fromTime}</div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-[10px] text-gray-400 w-8 font-black uppercase tracking-tighter">To</span>
                  <div className="flex gap-2">
                    <div className="bg-[#E9F0FF] px-4 py-1.5 rounded-lg text-[#1B61F2] text-[11px] font-bold">{availability.toDate}</div>
                    <div className="bg-[#E9F0FF] px-4 py-1.5 rounded-lg text-[#1B61F2] text-[11px] font-bold">{availability.toTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Provider & Invoice */}
        <div className="flex-1 p-6 relative bg-white">
          <div className="absolute right-6 top-6 z-20">
            <button onClick={() => setShowMenu(!showMenu)} className="text-gray-300 hover:text-gray-500 text-xl font-bold tracking-tighter">•••</button>
            {showMenu && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)}></div>
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-lg shadow-xl z-30 overflow-hidden">
                  <button onClick={() => { navigate(detailsPath); setShowMenu(false); }} className="w-full text-left px-4 py-2 text-sm text-[#303972] hover:bg-gray-50 flex items-center gap-2"><span>📄</span> Details</button>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-between items-start mb-4 pr-8">
            <div className="flex gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 border border-gray-200">
                <img src={provider.avatar} alt={provider.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-[#0E2040] text-lg">{provider.name}</h3>
                <p className="text-sm text-gray-400 font-medium">{provider.specialty}</p>
              </div>
            </div>
            <div className={`${rightStatus.bg} text-white px-6 py-2 rounded-full text-xs font-bold tracking-wide shadow-sm`}>
              {rightStatus.text}
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-6 font-bold italic">
            Franchise : <span className="text-gray-300 not-italic uppercase tracking-wide">{provider.franchise}</span>
          </p>

          <div className="bg-[#F8FAFF] p-6 rounded-[20px]">
            {isDeclined ? (
              <div className="space-y-2">
                <h4 className="text-base font-bold text-[#0E2040] mb-2">Appointment Declined</h4>
                <p className="text-[12px] text-[#E63946] font-medium italic opacity-90">"{declineReason}"</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h4 className="text-[14px] font-bold text-[#2A2A2A] mb-3">Appointment</h4>
                <div className="flex gap-2">
                  <div className="bg-[#E9F0FF] px-5 py-2 rounded-xl text-[#1B61F2] text-[13px] font-bold">{appointment.date}</div>
                  <div className="bg-[#E9F0FF] px-5 py-2 rounded-xl text-[#1B61F2] text-[13px] font-bold">{appointment.time}</div>
                </div>

                {invoice.items.length > 0 && (
                  <div className="pt-4 border-t border-gray-100 space-y-4">
                    <p className="text-[13px] font-bold text-[#303972] tracking-wider uppercase opacity-60">Invoice</p>
                    <div className="grid grid-cols-5 text-[11px] text-gray-400 font-bold uppercase">
                      <span>Sl.no</span> <span>Desc</span> <span className="text-center">Qty</span> <span className="text-right">Price</span> <span className="text-right">Total</span>
                    </div>
                    {invoice.items.map((item, index) => (
                      <div key={index} className="grid grid-cols-5 text-[13px] text-[#303972] font-bold border-b border-gray-50 pb-2">
                        <span>{index + 1}</span> <span>{item.desc}</span> <span className="text-center">{item.qty}</span> <span className="text-right">{item.price}</span> <span className="text-right">{item.price * item.qty}</span>
                      </div>
                    ))}
                    <div className="grid grid-cols-5 items-center">
                      <div className="col-span-3 text-[13px] font-bold text-[#303972] text-right pr-4">Grand Total</div>
                      <div className="col-span-2 text-[16px] font-bold text-[#1B61F2] text-right">{invoice.grandTotal}</div>
                    </div>
                  </div>
                )}

                {requirements.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                    <div className="text-[12px] font-bold text-red-500 flex items-center gap-2 uppercase tracking-wide mb-3">
                      Additional Requirements 
                      <div className="w-5 h-5 border-2 border-red-500 rounded-md flex items-center justify-center text-[11px] font-extrabold">!</div>
                    </div>
                    <ul className="text-[13px] text-[#303972] font-medium space-y-1 ml-4">
                      {requirements.map((req, i) => <li key={i}>• {req}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;