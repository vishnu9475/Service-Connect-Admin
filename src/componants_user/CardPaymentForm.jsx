import React, { useState } from 'react';

// --- Reusable Components ---

// 1. Input Field Component (Updated with Border for White Background)
const InputField = ({ label, id, value, onChange, placeholder, type = 'text', maxLength, className = '' }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="text-gray-900 font-bold text-sm mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        // Added 'border border-gray-200' so it is visible on white background
        className="w-full bg-white border border-gray-200 rounded-[15px] px-4 py-3 font-bold text-[#1A233A] placeholder-gray-400 shadow-sm outline-none focus:ring-2 focus:ring-[#1A1C22]/20 transition-all"
      />
    </div>
  );
};

// 2. Action Button Component (Kept your style, adapted to container)
const ActionButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#1A1C22] text-white py-3.5 px-6 rounded-full flex items-center justify-between shadow-lg active:scale-[0.98] transition-transform hover:shadow-xl hover:bg-gray-800"
    >
      <span className="text-white font-bold text-lg ml-2">{label}</span>
      <div className="bg-white rounded-full p-1.5">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1A1C22"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </button>
  );
};

// 3. Credit Card Preview Component
const CreditCardPreview = ({ cardNumber, cardName, expiryDate }) => {
  const formattedCardNumber = cardNumber
    .replace(/\s/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim() || '**** **** **** ****';

  return (
    <div className="w-full bg-[#1A1C22] rounded-[20px] p-6 text-white shadow-xl relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex justify-between items-start mb-8">
        {/* Chip Icon */}
        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
          <rect x="0.5" y="0.5" width="39" height="31" rx="5.5" stroke="white"/>
          <path d="M10.5 0.5V31.5M29.5 0.5V31.5M0.5 10.5H39.5M0.5 21.5H39.5" stroke="white"/>
          <path d="M10.5 10.5H29.5V21.5H10.5V10.5Z" stroke="white"/>
        </svg>
        {/* Contactless Icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
          <path d="M1 8.571a13.886 13.886 0 0 1 6.429-3.429M2.714 13.714a8.813 8.813 0 0 1 4.714-2.571M5.286 18a4.813 4.813 0 0 1 2.571-1.714M9.571 21.429a1 1 0 0 1 1-1"/>
        </svg>
      </div>

      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-mono tracking-wider break-all">
          {formattedCardNumber}
        </h3>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-[10px] md:text-xs text-gray-300 font-medium mb-1">CARD HOLDER</span>
          <span className="font-bold tracking-wide uppercase truncate max-w-[150px] md:max-w-[200px] text-sm md:text-base">
            {cardName || 'YOUR NAME'}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] md:text-xs text-gray-300 font-medium mb-1">VALID THRU</span>
          <span className="font-bold tracking-wider text-sm md:text-base">
            {expiryDate || 'MM/YY'}
          </span>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

const CardPaymentForm = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16);
    setCardNumber(value);
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    setExpiryDate(value);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCvv(value);
  };

  const handleSubmit = () => {
    console.log('Form Submitted:', { cardName, cardNumber, expiryDate, cvv });
    alert('Card Added Successfully!');
    // Reset Logic here
  };

  return (
    <div>
      
      {/* 1. CONTENT CONTAINER (Matches 'EditAds' margins) */}
      <div className="sm:px-6 space-y-6 mt-5 w-full lg:max-w-[1000px] mx-auto min-h-screen bg-gray-100">
        
        {/* Header - Responsive Size */}
        <p className="text-gray-900 font-bold text-base md:text-xl mb-2 transition-all">
           Card Details
        </p>

        {/* Credit Card Preview */}
        <div className="mb-4">
          <CreditCardPreview
            cardNumber={cardNumber}
            cardName={cardName}
            expiryDate={expiryDate}
          />
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-5">
          <InputField
            label="Card Name*"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Belinda C. Cullen"
          />

          <InputField
            label="Card Number*"
            id="cardNumber"
            value={cardNumber
              .replace(/\s/g, '')
              .replace(/(\d{4})/g, '$1 ')
              .trim()}
            onChange={handleCardNumberChange}
            placeholder="**** **** **** ****"
            maxLength={19}
          />

          <div className="flex gap-4">
            <InputField
              label="Expiry Date*"
              id="expiryDate"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="MM/YY"
              maxLength={5}
              className="flex-1"
            />
            <InputField
              label="CVV*"
              id="cvv"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="***"
              maxLength={4}
              type="password"
              className="flex-1"
            />
          </div>
        </div>
      </div>

      {/* 2. BUTTON CONTAINER (Matches 'EditAds' button size) */}
      <div className="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[50%] mx-auto px-2 py-2 mt-8 mb-6">
        <ActionButton label="Add New Card" onClick={handleSubmit} />
      </div>

    </div>
  );
};

export default CardPaymentForm;
