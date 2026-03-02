import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const SubscribeView = ({
  name = "",
  id = "#Id:3543324",
  status = "Subscribed",

  about = "We provide professional hair, skin, and beauty services in a clean, friendly salon, delivering safe, stylish, relaxing care to keep you fresh, confident, and perfectly groomed every single day.",

  serviceDetails = "We are a customer-focused franchise dedicated to providing high-quality beauty and wellness services for both men and women in a comfortable, hygienic, and professionally managed environment. Our goal is to create a complete self-care destination where every client feels relaxed, valued, and confident after every visit.We continuously update our techniques and services to stay aligned with the latest industry standards and trends.Professional beauty and grooming for a neat, fresh and good look.",

  revenue = "10,00,500",
  branches = "2",
  serviceProviders = "8",
  communityName = "Premium Salon Community",

  primaryPhone = "9876543210",
  alternatePhone = "9123456780",
  verificationType = "Aadhar",
  verificationNo = "1234 5678 9123",

  landmark = "Near Main Bus Stand",
  pincode = "641001",
  district = "Coimbatore",
  state = "Tamil Nadu",

  contact = {
    address: "Santha Street, Kanoor",
    phone: "9876543210",
    email: "santha@email.com",
  },

  fromDate = "2026-01-01",
  fromTime = "09:00",
  toDate = "2026-12-31",
  toTime = "21:00",

  onEdit = () => alert("Edit clicked"),
 
}) => {
  const location = useLocation();
  const nameFromList = location.state?.name;

  const displayName = nameFromList || name;

  const isActive = status === "Subscribe";
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="w-full bg-[#F4F5FF] p-4 sm:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl pt-14 p-6 sm:p-8 shadow-sm relative">
        <button
          onClick={onEdit}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 px-5 py-2 text-sm bg-[#4D44B5] text-white rounded-full z-10"
        >
          Edit
        </button>

        {/* TOP HEADER */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold text-[#2D2D6E]">
                    {displayName}
                  </h2>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">{id}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              {about}
            </p>
          </div>
        </div>

        {/* SERVICE */}
        <div className="mt-8 bg-white border border-gray-200 shadow-sm rounded-xl p-6">
          <h3 className="font-semibold text-[#2D2D6E] mb-3">Service</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {serviceDetails}
          </p>
        </div>

        {/* DETAILS + CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* LEFT */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 text-sm text-gray-700 space-y-2">
            <p><b>Revenue:</b> ₹ {revenue}</p>
            <p><b>Branches:</b> {branches}</p>
            <p><b>Providers:</b> {serviceProviders}</p>
            <p><b>Community:</b> {communityName}</p>

            <hr className="my-2 border-gray-200" />

            <p><b>Verification Type:</b> {verificationType}</p>
            <p><b>Aadhar No:</b> {verificationNo}</p>

            <hr className="my-2 border-gray-200" />

            <p><b>Validity From:</b> {fromDate} {fromTime}</p>
            <p><b>Validity To:</b> {toDate} {toTime}</p>
          </div>

          {/* RIGHT */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h3 className="font-semibold text-[#2D2D6E] mb-3">Contact</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p><b>Address:</b> {contact.address}</p>
              <p>{landmark}, {district}, {state} - {pincode}</p>
              <p><b>Phone:</b> {contact.phone}</p>
              <p><b>Email:</b> {contact.email}</p>
              <p><b>Primary Phone:</b> {primaryPhone}</p>
              <p><b>Alternate Phone:</b> {alternatePhone}</p>
            </div>
          </div>
        </div>

        {/* DASHBOARD BUTTON */}
        
      </div>
    </div>
  );
};

export default SubscribeView;