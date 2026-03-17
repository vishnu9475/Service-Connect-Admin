import React, { useState } from "react";
import { useNavigate } from "react-router";

// --- SUB-COMPONENT: Date Time Group ---
const DateTimeGroup = ({
  label,
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-gray-600 text-sm lg:text-md font-medium ml-1">
        {label}
      </span>

      <div className="flex items-center gap-3">
        <div className="flex-1 bg-white border rounded-md px-3 py-2 flex flex-col justify-between text-sm shadow-sm">
          <label className="text-[10px] text-gray-500 leading-none lg:text-[13px]">
            Date
          </label>
          <input
            type="date"
            value={dateValue}
            onChange={(e) => onDateChange(e.target.value)}
            className="outline-none w-full bg-transparent font-semibold mt-1"
          />
        </div>

        <div className="bg-white border rounded-md px-3 py-2 flex flex-col text-sm w-36 shadow-sm">
          <label className="text-[10px] text-gray-500 leading-none lg:text-[13px]">
            Time
          </label>
          <input
            type="time"
            value={timeValue}
            onChange={(e) => onTimeChange(e.target.value)}
            className="outline-none w-full bg-transparent font-semibold mt-1"
          />
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const ServiceRequest1 = ({ onConfirm }) => {
  // Hook for navigation
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "Chandelier Installation",
    description: "",
    fromDate: "2026-01-26",
    fromTime: "10:00",
    toDate: "2026-01-26",
    toTime: "12:00",
  });

  const handleConfirm = () => {
    // 1. If an onConfirm prop was passed, run it
    if (onConfirm) {
      onConfirm(formData);
    } 
    
    // 2. Navigate to the Booking Details page
    // Note: Make sure this path exists in your App.js Routes!
    navigate('/U20_Booking_Details'); // Changed from '/u20-booking-details' to '/U20_Booking_Details'
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-18 lg:px-30 space-y-4">
        <div className="mx-auto px-2 py-2 mb-2 mt-5 space-y-6">
          
          {/* Profile Section: Elena */}
          <div className="flex justify-start items-center gap-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
              alt="Elena"
              className="w-16 h-16 rounded-full object-cover border-2 border-teal-500 shadow-md"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Elena</h2>
              <p className="text-teal-600 text-sm font-semibold tracking-wide uppercase">
                Interior Lighting Expert ✨
              </p>
            </div>
          </div>

          {/* Title Field */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Service Title</p>
            <div className="bg-white border rounded-md px-3 py-3 flex flex-col text-sm shadow-sm focus-within:ring-2 focus-within:ring-teal-100">
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="outline-none w-full bg-transparent font-medium text-gray-800"
              />
            </div>
          </div>

          {/* Description Field */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Specific Instructions</p>
            <div className="bg-white border rounded-md px-3 py-3 flex flex-col text-sm shadow-sm focus-within:ring-2 focus-within:ring-teal-100">
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Share any details about the space or fixtures..."
                className="w-full min-h-[100px] resize-none outline-none bg-transparent text-gray-800"
              />
            </div>
          </div>

          {/* Schedule Section */}
          <div className="space-y-4 pt-2">
            <p className="text-gray-900 font-bold text-lg">Booking Window</p>
            <DateTimeGroup
              label="Arrival Window"
              dateValue={formData.fromDate}
              timeValue={formData.fromTime}
              onDateChange={(val) => setFormData({ ...formData, fromDate: val, toDate: val })}
              onTimeChange={(val) => setFormData({ ...formData, fromTime: val })}
            />
            <DateTimeGroup
              label="Estimated Finish"
              dateValue={formData.toDate}
              timeValue={formData.toTime}
              onDateChange={(val) => setFormData({ ...formData, toDate: val })}
              onTimeChange={(val) => setFormData({ ...formData, toTime: val })}
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full sm:w-[60%] md:w-[50%] mx-auto px-2 py-8">
          <button
            onClick={handleConfirm}
            className="w-full bg-teal-600 text-white py-4 rounded-full font-bold text-lg hover:bg-teal-700 transition-all active:scale-95 shadow-lg"
          >
            Schedule Elena
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequest1;