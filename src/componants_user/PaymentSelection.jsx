import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentMethodsSection = ({ options, price = "$55", onEnroll }) => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const navigate = useNavigate();

  // If options not passed, default methods
  const paymentMethods = options || [
    { label: "Paypal", value: "paypal" },
    { label: "Google Pay", value: "googlepay" },
  ];

  // ✅ Confirm and Pay → Go to Add New Card Page
  const handleConfirmPay = () => {
    navigate("/U21_B_ADD_NEW_CARD");
  };

  return (
    <div className="w-full min-h-screen bg-gray-50/30 pb-10">
      <div className="px-4 sm:px-6 md:px-20 lg:px-32 pt-5 space-y-4">
        <h2 className="text-gray-900 font-bold text-lg md:text-xl">
          Select Payment Method
        </h2>

        {/* Payment options */}
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <button
              key={method.value}
              onClick={() => setSelectedMethod(method.value)}
              className="w-full bg-white p-4 rounded-[20px] flex items-center justify-between shadow-sm cursor-pointer border border-gray-100 transition-all hover:shadow-md hover:shadow-gray-400 active:scale-[0.99]"
            >
              <span className="text-base font-semibold text-gray-800">
                {method.label}
              </span>

              {/* Radio */}
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === method.value
                    ? "border-[#1A233A]"
                    : "border-gray-300"
                }`}
              >
                {selectedMethod === method.value && (
                  <div className="w-3 h-3 rounded-full bg-[#1A233A]" />
                )}
              </div>
            </button>
          ))}

          {/* Add Credit/Debit Button */}
          <button
            onClick={() => navigate("/U21_B_ADD_NEW_CARD")}
            className="w-full bg-white p-4 rounded-[20px] flex items-center justify-end gap-3 shadow-md border border-gray-200 transition-all hover:bg-gray-50 hover:shadow-gray-400 active:scale-[0.99]"
          >
            <span className="text-base font-bold text-[#1A233A]">
              Add Credit/Debit
            </span>
            <Plus className="text-[#1A233A]" size={24} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Confirm button */}
      <div className="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[50%] mx-auto px-2 py-2 mt-8 mb-6">
        <button
            onClick={() => navigate("/U22PaymentSuccessMessage")}
          className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition active:scale-[0.98] flex items-center justify-center gap-3"
        >
          <span className="text-base">{`Confirm and Pay - ${price}`}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodsSection;
