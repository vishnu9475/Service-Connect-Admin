import React from "react";
import { FaLocationDot, FaStar, FaHeart, FaPaperPlane } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

const BookingDetails = () => {
  const profileImg = "https://i.pravatar.cc/150?u=karan1"; 
  const galleryImg = "https://i.pravatar.cc/150?u=gallery"; 

  return (
    // Reduced mt-10 to mt-4 to bring the whole component up
    <div className="w-full max-w-[1098px] mx-auto bg-[#FFFFFF] rounded-[20px] mt--6 px-4 pb-10">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full">
          
          {/* Profile Header - Reduced top margin and aligned items middle */}
          <div className="flex flex-row items-center gap-3 mt-2"> 
            <img src={profileImg} alt="Profile" className="w-[55px] h-[55px] rounded-full object-cover" />
            <div className="flex flex-col">
              <p className="text-[#000E08] font-[700] text-[16px]">Karan Hope</p>
              <p className="text-[#797C7B] text-[13px] leading-tight">User</p>
              <div className="flex items-center gap-1 mt-0.5">
                <FaLocationDot size={12} className="text-gray-400" />
                <p className="text-[#282827] text-[13px] font-[500]">North Paravoor, Eravam</p>
              </div>
              <p className="text-[#797C7B] text-[11px]">Booking Id : 12aa21w</p>
            </div>
            {/* Button alignment fixed with flex center */}
            <button className="ml-auto bg-[#0961F5] text-white px-5 h-[28px] rounded-full text-[12px] font-medium flex items-center justify-center">
              Requested
            </button>
          </div>

          {/* Service Info Card - Reduced mt-10 to mt-6 */}
          <div className="bg-[#F3F4FF] w-full max-w-[360px] rounded-[24px] mt-6 lg:ml-[68px] p-5 shadow-sm">
            <div className="space-y-3">
              <div>
                <p className="text-[#282827] font-[700] text-[13px]">Title</p>
                <p className="text-[#303972] ml-3 text-[13px]">Bulb Change</p>
              </div>
              <div>
                <p className="text-[#282827] font-[700] text-[13px]">Description</p>
                <p className="text-[#303972] ml-3 text-[13px] leading-relaxed opacity-90">
                  Bulb Change sadsdasd asfafasasdas dasdasdasdasdasd asdasdasd
                </p>
              </div>
              <div>
                <p className="text-[#282827] font-[700] text-[13px]">Images & Videos</p>
                <div className="flex gap-2.5 ml-3 mt-2">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={galleryImg} className="w-9 h-9 rounded-full border-2 border-white shadow-sm" alt="gallery" />
                  ))}
                </div>
              </div>
              <div className="pt-1">
                <p className="text-[#282827] font-[700] text-[13px] mb-1">Availability</p>
                <div className="ml-3 space-y-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#303972] font-bold ml-1">From</span>
                    <div className="flex gap-2 mt-1">
                      <span className="bg-[#7878801F] text-[#007AFF] px-2.5 py-1 rounded-md text-[10px] font-bold">Jun 10, 2024</span>
                      <span className="bg-[#7878801F] text-[#007AFF] px-2.5 py-1 rounded-md text-[10px] font-bold">9:41 AM</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#303972] font-bold ml-1">To</span>
                    <div className="flex gap-2 mt-1">
                      <span className="bg-[#7878801F] text-[#007AFF] px-2.5 py-1 rounded-md text-[10px] font-bold">Jun 10, 2024</span>
                      <span className="bg-[#7878801F] text-[#007AFF] px-2.5 py-1 rounded-md text-[10px] font-bold">9:41 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review Section - Reduced mt-8 to mt-5 */}
          <p className="lg:ml-[68px] mt-5 text-[#202244] font-[700] text-[16px]">Review</p>
          <div className="w-full max-w-[360px] bg-[#F3F4FF] lg:ml-[68px] mt-2 rounded-[24px] p-4 shadow-sm">
            <div className="flex gap-3">
              <img src={profileImg} className="w-10 h-10 rounded-full object-cover shrink-0" alt="Reviewer" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="text-[#202244] font-[700] text-[14px]">Heather S. McMullen</p>
                  <div className="border border-[#4D81E5] rounded-full px-2 py-0.5 flex items-center gap-1">
                    <FaStar size={10} className="text-yellow-400" />
                    <span className="text-[10px] font-bold text-[#202244]">4.2</span>
                  </div>
                </div>
                <p className="text-[#545454] text-[11px] font-[600] mt-1 leading-snug">
                  The Course is Very Good dolor sit amet, con sect tur adipiscing elit...
                </p>
                <div className="flex items-center gap-5 mt-2">
                  <div className="flex items-center gap-1">
                    <FaHeart size={12} className="text-[#DD2E44]" />
                    <span className="text-[10px] font-extrabold">760</span>
                  </div>
                  <span className="text-[10px] font-extrabold">2 Weeks Ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Complaint Section - Reduced mt-8 to mt-5 */}
          <p className="lg:ml-[68px] mt-5 text-[#202244] font-[700] text-[16px]">Complaint</p>
          <div className="w-full max-w-[360px] bg-[#F3F4FF] lg:ml-[68px] mt-2 rounded-[24px] p-5 shadow-sm">
            <div className="flex justify-between items-center mb-1">
              <p className="text-[#202244] font-[700] text-[15px]">Title</p>
              <span className="text-[#202244] text-[10px] font-extrabold opacity-70">2 Weeks Ago</span>
            </div>
            <p className="text-[#545454] font-[600] text-[12px] leading-relaxed mb-3">
              The Course is Very Good dolor sit amet, con sect tur adipiscing elit. Naturales divitias dixit parab les esse..
            </p>
            <div className="flex gap-2 mb-6">
              <img src={profileImg} className="rounded-full w-9 h-9 border-2 border-white" alt="c1" />
              <img src={profileImg} className="rounded-full w-9 h-9 border-2 border-white" alt="c2" />
            </div>
            
            <div className="flex gap-4 justify-center">
              <button className="w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center">
                <LuPhoneCall size={18} className="text-[#202244]" />
              </button>
              <button className="w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center">
                <FaPaperPlane size={16} className="text-[#202244] ml-0.5" />
              </button>
              <button className="w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center">
                <CiMail size={22} className="text-[#202244]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingDetails;