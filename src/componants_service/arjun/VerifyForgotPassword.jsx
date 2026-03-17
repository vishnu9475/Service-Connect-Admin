import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function VerifyForgotPassword() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(59);

  // 1. Countdown timer (Fixed 'setTimer' warning)
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  // 2. Handle OTP input (Fixed 'setOtp' warning)
  const handleChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  // 3. Handle keypad input (Fixed 'handleKeypad' is not defined error)
  const handleKeypad = (num) => {
    if (num === "⌫") {
      const lastIndex = otp.findLastIndex((v) => v !== "");
      if (lastIndex >= 0) {
        const newOtp = [...otp];
        newOtp[lastIndex] = "";
        setOtp(newOtp);
      }
    } else if (num !== "*") { // Ignore * for input logic
      const firstEmpty = otp.findIndex((v) => v === "");
      if (firstEmpty >= 0) {
        handleChange(firstEmpty, num);
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 4) {
      navigate("/SRESET_NEW_PASSWORD");
    } else {
      alert("Please enter the 4-digit code.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 space-y-6 flex-1 w-full py-6">
      <div className="w-full text-center mt-[5%]">
        <p className="text-gray-600 text-sm mb-6">
          Code has been sent to (+1) *-*-<span className="font-semibold">4529</span>
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-4 sm:gap-12 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              readOnly
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 sm:w-14 sm:h-14 text-center text-white text-lg bg-[#6C6460] rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          ))}
        </div>

        {/* Timer */}
        <p className="text-sm text-gray-600 mb-6">
          Resend code in <span className="font-semibold text-gray-600">{timer}s</span>
        </p>

        {/* Verify Button */}
        <div className="w-full sm:w-[90%] md:w-[70%] mx-auto px-2 py-2 mb-2 space-y-3">
          <button 
            onClick={handleVerify}
            className="w-full flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 px-6 rounded-full shadow-md relative hover:bg-[#232738] transition"
          >
            <span>Verify</span>
            <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FaArrowRight className="text-[#1D1F2A]" size={14} />
            </span>
          </button>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-4 sm:gap-2 md:gap-4 lg:gap-4 text-center text-gray-800 text-xl font-medium mt-8">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "⌫"].map((num, idx) => (
            <button
              key={idx}
              onClick={() => handleKeypad(num)}
              type="button"
              className="py-4 px-6 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors duration-200 focus:outline-none"
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}