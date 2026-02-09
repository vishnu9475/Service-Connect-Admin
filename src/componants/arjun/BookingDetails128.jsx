import React from 'react';
import Dummy from "../../assets/Dummy.png";

import { LuPhoneCall } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RiErrorWarningFill } from "react-icons/ri";

const BookingDetails128 = () => {
  return (
    // Main Container: Centers the content and provides a consistent vertical "start line"
    <div className="max-w-[500px] mx-auto p-5 flex flex-col gap-6 bg-white min-h-screen">
      
      {/* 1. Header Section */}
      <div className="flex items-start gap-4">
        <img src={Dummy} alt="Profile" className="w-14 h-14 rounded-full object-cover" />
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <h2 className="text-[#1E1E1E] font-bold text-lg">Nazrul Islam</h2>
            <span className="bg-[#0961F5] text-white text-[10px] px-6 py-1.5 rounded-full font-semibold">
              Accepted
            </span>
          </div>
          <p className="text-[#797C7B] text-sm">Electrification power 💪</p>
          <p className="text-[#797C7B] text-sm">Franchise : SNS</p>
        </div>
      </div>

      {/* 2. Appointment/Invoice Card */}
      <div className="bg-[#F3F7FF] rounded-3xl p-5 shadow-sm">
        <h3 className="text-[#303972] font-bold text-sm mb-3">Appointment</h3>
        <div className="flex gap-2 mb-6">
          <span className="bg-[#E0E8FF] text-[#007AFF] px-4 py-1.5 rounded-lg text-xs font-bold">Jun 10, 2024</span>
          <span className="bg-[#E0E8FF] text-[#007AFF] px-4 py-1.5 rounded-lg text-xs font-bold">9:41 AM</span>
        </div>

        <h3 className="text-[#303972] font-bold text-xs mb-3">Invoice</h3>
        <div className="grid grid-cols-5 text-[10px] text-[#303972] font-bold border-b border-blue-100 pb-2 mb-2 uppercase opacity-60">
          <span>Sl.no</span>
          <span>Description</span>
          <span className="text-center">Qty</span>
          <span className="text-center">Price</span>
          <span className="text-right">Total</span>
        </div>
        <div className="grid grid-cols-5 text-sm text-[#303972] mb-6">
          <span>1</span>
          <span>Bulb Change</span>
          <span className="text-center"></span>
          <span className="text-center">300</span>
          <span className="text-right font-bold">300</span>
        </div>

        <div className="flex justify-between items-center border-t border-dashed border-blue-200 pt-4 mb-6">
          <div className="text-[10px] text-[#797C7B]">
            <p className="font-bold">Terms and conditions</p>
            <p>Valid up to 1 month</p>
          </div>
          <div className="text-right">
            <span className="text-[#303972] font-bold text-xs mr-4">Grand Total</span>
            <span className="text-[#303972] font-bold text-sm">300</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#EC221F] mb-1">
          <span className="text-[10px] font-bold uppercase">Additional Requirements</span>
          <RiErrorWarningFill size={14} />
        </div>
        <p className="text-[#303972] text-[11px] leading-tight">
          Provide Ladder <br /> Bulb should be provided
        </p>
      </div>

      {/* 3. Complaint Section */}
      <div>
        <h3 className="text-[#1E1E1E] font-bold text-sm mb-3">Complaint</h3>
        <div className="bg-[#F3F7FF] rounded-3xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-[#1E1E1E] font-bold text-lg">Title</h4>
            <span className="text-[#797C7B] text-[10px] font-bold uppercase">2 Weeks Agos</span>
          </div>
          <p className="text-[#545454] text-xs leading-relaxed mb-4">
            The Course is Very Good dolor sit amet, con sect tur adipiscing elit. Naturales divitias dixit parab les esse..
          </p>
          <p className="text-[#1E1E1E] text-[10px] font-bold mb-3 uppercase">Images & Videos</p>
          <div className="flex gap-3 mb-6">
            <img src={Dummy} alt="media" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
            <img src={Dummy} alt="media" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
          </div>
          <div className="flex justify-center gap-4 pt-4 border-t border-blue-100">
            <div className="p-2 bg-white rounded-full shadow-sm cursor-pointer hover:bg-gray-100 transition-colors">
              <LuPhoneCall size={18} />
            </div>
            <div className="p-2 bg-white rounded-full shadow-sm cursor-pointer hover:bg-gray-100 transition-colors">
              <FaTelegramPlane size={18} />
            </div>
            <div className="p-2 bg-white rounded-full shadow-sm cursor-pointer hover:bg-gray-100 transition-colors">
              <CiMail size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Form Section: Aligned vertically with grid pairs */}
      <div className="flex flex-col gap-5 mt-2">
        
        <StatusSelect label="BOOKING STATUS" />
        <StatusSelect label="COMPLAINT STATUS" />
        <StatusSelect label="PAYMENT STATUS" />
        
        <div className="grid grid-cols-2 gap-4">
          <StatusSelect label="Booking Time" />
          <StatusSelect label="Accepted Time" />
        </div>

        <StatusSelect label="Accepted/Declined" />

        <div className="grid grid-cols-2 gap-4">
          <StatusSelect label="Advance Paytime" />
          <StatusSelect label="Service Status" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <StatusSelect label="Completed Time" />
          <StatusSelect label="Payment Completed Time" />
        </div>
        
        {/* The extra "Booking Status" and "Complaint Status" dropdowns that were at the very bottom have been removed */}
      </div>
    </div>
  );
};

// Reusable Sub-component for the Select inputs
const StatusSelect = ({ label }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[#1E1E1E] text-[11px] font-bold uppercase tracking-wide">{label}</label>
    <div className="relative">
      <select className="w-full border border-red-400 rounded-xl px-4 py-2 text-xs text-gray-500 bg-white appearance-none outline-none">
        <option>Tag</option>
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
);

export default BookingDetails128;