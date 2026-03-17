// U18_Request_Service.jsx (new UI matching Booking Details)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../componants_user/Component4";
import ServiceRequest from "../componants_user/ServiceRequest";
import AlertModal from "../componants_user/AlertModal";

const U18_Request_Service = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleGoToReceipt = () => {
    navigate("/page24");
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      {/* Same Header Style as Booking Details */}
      <Component4
        title="Request Service"
        theme="black"
        showBack
      />

      {/* Same Centered Card Layout */}
      <main className="max-w-[800px] w-full mx-auto px-4 mt-6">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          
          <div className="p-1 md:p-4">
            <ServiceRequest onConfirm={() => setShowModal(true)} />
          </div>

        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Need help with this booking?{" "}
          <span className="text-teal-600 font-medium cursor-pointer">
            Contact Support
          </span>
        </p>
      </main>

      {showModal && (
        <AlertModal
          title="Congratulations"
          message="Your Payment is Successful."
          onClose={() => setShowModal(false)}
          onReceiptButtonClick={handleGoToReceipt}
        />
      )}
    </div>
  );
};

export default U18_Request_Service;