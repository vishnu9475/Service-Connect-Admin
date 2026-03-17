import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// --- SUB-COMPONENT: Date Time Group ---
const DateTimeGroup = ({
  label,
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <span className="text-gray-600 text-sm lg:text-md font-medium ml-1">
        {label}
      </span>

      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <div className="flex-1 bg-white border rounded-md px-3 py-2 flex flex-col justify-between text-sm shadow-sm focus-within:ring-2 focus-within:ring-gray-300">
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

        <div className="flex-1 bg-white border rounded-md px-3 py-2 flex flex-col text-sm shadow-sm focus-within:ring-2 focus-within:ring-gray-300">
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
const ServiceRequest = ({ onConfirm }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "Chandelier Installation",
    description: "",
    fromDate: "2026-01-26",
    fromTime: "10:00",
    toDate: "2026-01-26",
    toTime: "12:00",
    images: [], // State to store image URLs
  });

  // Handle adding new images
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImageUrls = files.map((file) => URL.createObjectURL(file));
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImageUrls],
    }));
  };

  // Handle removing an image
  const removeImage = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm(formData);
    }
    navigate("/U20_Booking_Details");
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 space-y-4">
        <div className="mx-auto px-2 py-2 mb-2 mt-5 space-y-6">
          
          {/* Profile Section */}
          <div className="flex justify-start items-center gap-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
              alt="Elena"
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-500 shadow-md"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Elena</h2>
              <p className="text-gray-600 text-sm font-semibold tracking-wide uppercase">
                Interior Lighting Expert ✨
              </p>
            </div>
          </div>

          {/* Title Field */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Service Title</p>
            <div className="bg-white border rounded-md px-3 py-3 flex flex-col text-sm shadow-sm focus-within:ring-2 focus-within:ring-gray-300">
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="outline-none w-full bg-transparent font-medium text-gray-800"
              />
            </div>
          </div>

          {/* Description Field + Image Upload */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Specific Instructions</p>
            <div className="bg-white border rounded-md px-3 py-3 flex flex-col text-sm shadow-sm focus-within:ring-2 focus-within:ring-gray-300">
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Share any details about the space or fixtures..."
                className="w-full min-h-[100px] resize-none outline-none bg-transparent text-gray-800"
              />

              {/* Image Section */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 font-medium">Images & Videos</span>
                  <label className="cursor-pointer hover:text-gray-600 transition-colors">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <input 
                      type="file" 
                      multiple 
                      className="hidden" 
                      onChange={handleImageUpload} 
                      accept="image/*" 
                    />
                  </label>
                </div>

                <div className="flex flex-wrap gap-2">
                  {/* Thumbnails */}
                  {formData.images.map((src, index) => (
                    <div key={index} className="relative group w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-xl overflow-hidden shadow-sm">
                      <img src={src} alt="upload preview" className="w-full h-full object-cover" />
                      <button 
                        onClick={() => removeImage(index)}
                        className="absolute top-0 right-0 bg-red-500 text-gray-200 text-[10px] p-0.5 rounded-bl-md opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  {/* The "+" Add Button */}
                  <label className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-all">
                    <span className="text-xl sm:text-xl md:text-2xl text-gray-400 font-medium">+</span>
                    <input 
                      type="file" 
                      multiple 
                      className="hidden" 
                      onChange={handleImageUpload} 
                      accept="image/*" 
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Section */}
          <div className="space-y-4 pt-2 ">
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
        <div className="w-full sm:w-[70%] md:w-[60%] mx-auto px-2 py-8">
          <button
            onClick={handleConfirm}
            className="w-full bg-gray-900 text-white py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-800 transition-all active:scale-95 shadow-lg"
          >
            Schedule Elena
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequest;