import React, { useState } from 'react';

// --- SUB-COMPONENTS ---

// 1. PaymentOption
const PaymentOption = ({ label, value, isSelected, onSelect }) => {
  return (
    <div
      className="bg-white p-4 rounded-[20px] flex items-center justify-between shadow-sm cursor-pointer border border-gray-100 transition-all hover:shadow-md active:scale-[0.99]"
      onClick={() => onSelect(value)}
    >
      {/* Updated Font Size: standardized to text-base (normal reading size) */}
      <span className="text-base font-semibold text-gray-800">{label}</span>
      
      {/* Custom Radio Button */}
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
          isSelected
            ? 'border-[#1A233A]' 
            : 'border-gray-300' 
        }`}
      >
        {isSelected && (
          <div className="w-3 h-3 rounded-full bg-[#1A233A]"></div>
        )}
      </div>
    </div>
  );
};

// 2. Floating Add Button
const FloatingAddButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-14 h-14 bg-[#1A233A] rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity active:scale-95"
      aria-label="Add New Payment Method"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="white"
        className="w-8 h-8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  );
};

// 3. Enroll Button (Matches reference styling)
const EnrollButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition active:scale-[0.98] flex items-center justify-center gap-3"
    >
      <span className="text-base">{label}</span>
      {/* Optional: Arrow Icon inside button */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </button>
  );
};

// --- MAIN COMPONENT ---

const PaymentMethodsSection = ({ options, price = "$55", onEnroll }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const paymentMethods = options || [
    { label: 'Paypal', value: 'paypal' },
    { label: 'Google Pay', value: 'googlepay' },
  ];

  const handlePaymentSelect = (value) => {
    setSelectedPaymentMethod(value);
  };

  const handleAddPaymentMethod = () => {
    console.log('Add Payment Method Clicked');
  };

  const handleEnrollClick = () => {
    if (selectedPaymentMethod) {
      if (onEnroll) onEnroll(selectedPaymentMethod);
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div>
      
      {/* 1. CONTENT CONTAINER */}
      {/* Matches the 'EditAds' margins exactly: px-4 -> md:px-20 -> lg:px-32 */}
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-20 lg:px-32 space-y-4 mt-5">
        
        {/* Header - Updated typography to match 'Schedule' from reference code */}
        <p className="text-gray-900 font-bold text-lg mb-2">
          Select Payment Method
        </p>

        {/* Payment Options List */}
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <PaymentOption
              key={method.value}
              label={method.label}
              value={method.value}
              isSelected={selectedPaymentMethod === method.value}
              onSelect={handlePaymentSelect}
            />
          ))}
        </div>

        {/* Floating Add Button */}
        <div className="flex justify-end pt-2">
          <FloatingAddButton onClick={handleAddPaymentMethod} />
        </div>

      </div>

      {/* 2. BUTTON CONTAINER */}
      {/* Matches the 'EditAds' button width exactly: 90% mobile -> 50% laptop */}
      <div className="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[50%] mx-auto px-2 py-2 mt-8 mb-6">
        <EnrollButton 
            label={`Confirm and Pay - ${price}`} 
            onClick={handleEnrollClick} 
        />
      </div>

    </div>
  );
};

export default PaymentMethodsSection;