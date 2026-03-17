import React, { useState, useEffect } from "react";
import { ArrowRight, Proportions } from "lucide-react";
import { useNavigate } from "react-router";

const inputClass =
  "w-full bg-white rounded-lg px-4 py-2 shadow-lg outline-none ";

const PaymentForm = () => {
  const navigate = useNavigate();
  const [cvv, setCvv] = useState("");

  // ✅ Card data (persistent)
  const [cardData, setCardData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
  });

  // ✅ Input fields (always empty on refresh)
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputExpiry, setInputExpiry] = useState("");

  // ✅ Load card data from localStorage on refresh
  useEffect(() => {
    const savedCard = JSON.parse(localStorage.getItem("cardData"));
    if (savedCard) {
      setCardData(savedCard);
    }
  }, []);

  // ✅ Live update card while typing + save to localStorage
  useEffect(() => {
    const liveData = {
      cardName: inputName || cardData.cardName,
      cardNumber: inputNumber || cardData.cardNumber,
      expiryDate: inputExpiry || cardData.expiryDate,
    };
    setCardData(liveData);
    localStorage.setItem("cardData", JSON.stringify(liveData));
  }, [inputName, inputNumber, inputExpiry]);

  const handleButtonClick = () => {
    navigate("/successmessage");
  };

  // ✅ Format card number
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 16);
    value = value.replace(/(.{4})/g, "$1 ").trim();
    setInputNumber(value);
  };

  // ✅ Format expiry date
  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (value.length >= 3) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    setInputExpiry(value);
  };

  return (
    <div className="bg-gray-200 flex flex-col justify-center p-10 mx-auto">
      {/* ✅ Card shows live + saved data */}
      <Card
        cardName={cardData.cardName}
        cardNumber={cardData.cardNumber}
        expiryDate={cardData.expiryDate}
      />

      {/* Card Name */}
      <p className="text-sm text-gray-600 mb-1 px-4 font-semibold">Card Name</p>
      <input
        className={inputClass}
        placeholder="Betindo C. Cullen"
        value={inputName}
        maxLength={30}
        onChange={(e) => setInputName(e.target.value)}
      />

      {/* Card Number */}
      <p className="text-sm text-gray-600 mt-4 mb-1 px-4 font-semibold">
        Card Number
      </p>
      <input
        className={inputClass}
        placeholder="1234 5678 9012 3456"
        value={inputNumber}
        onChange={handleCardNumberChange}
      />

      {/* Expiry & CVV */}
      <div className="flex gap-4 mt-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1 px-4 font-semibold">
            Expiry Date
          </p>
          <input
            className={inputClass}
            placeholder="MM/YY"
            value={inputExpiry}
            onChange={handleExpiryChange}
          />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1 px-4 font-semibold">CVV</p>
          {/* <input className={inputClass} type="password" placeholder="***" /> */}
          <input
            className={inputClass}
            type="password"
            placeholder="***"
            value={cvv}
            maxLength={3}
            inputMode="numeric"
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 3);
              setCvv(value);
            }}
          />

        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleButtonClick}
        className="mt-10 w-full bg-gray-900 text-white py-2 rounded-full flex justify-center px-6 relative"
      >
        Add New Card
        <span className="bg-white text-gray-950 rounded-full w-8 h-8 flex items-center justify-center absolute top-1 bottom-0 right-1">
          <ArrowRight />
        </span>
      </button>
    </div>
  );
};

export default PaymentForm;

// ✅ Card design unchanged
const Card = ({ cardName, cardNumber, expiryDate }) => {
  return (
    <div className="w-full h-40 mb-5 bg-gray-900 rounded-2xl flex flex-col justify-center p-4">
      <span>
        <Proportions className="text-white mb-5" />
      </span>
      <span className="text-white text-sm font-bold">
        {cardNumber || "1234 5678 9123 4567"}
      </span>
      <div>
        <span className="text-white text-sm">expdate</span>
        <span className="text-white text-sm"> {expiryDate || "12/34"}</span>
      </div>
      <span className="text-white text-sm">
        {cardName || "TIMMY C HERNANOEZ"}
      </span>
    </div>
  );
};
