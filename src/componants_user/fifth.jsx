// import { useEffect, useState } from "react";
// import {HiOutlineArrowRight } from "react-icons/hi";
// const Component5 = () => {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [timeLeft, setTimeLeft] = useState(59);

//   useEffect(() => {
//     if (timeLeft === 0) return;
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => prev - 1);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   const handleKeyPress = (value) => {
//     if (value === "⌫") {
//       const newOtp = [...otp];
//       for (let i = newOtp.length - 1; i >= 0; i--) {
//         if (newOtp[i]) {
//           newOtp[i] = "";
//           break;
//         }
//       }
//       setOtp(newOtp);
//       return;
//     }

//     if (typeof value === "number") {
//       const newOtp = [...otp];
//       for (let i = 0; i < newOtp.length; i++) {
//         if (!newOtp[i]) {
//           newOtp[i] = value.toString();
//           break;
//         }
//       }
//       setOtp(newOtp);
//     }
//   };

//   const handleVerify = () => {
//     if (otp.join("").length < 4) {
//       alert("Enter full OTP");
//       return;
//     }
//     alert(`Verified OTP: ${otp.join("")}`);
//   };

//   return (
//     /* ONLY BACKGROUND */
//     <div className="h-auto  bg-gray-200 p-16 flex flex-col items-center justify-center ">

//       {/* TEXT STARTS DIRECTLY */}
//       <p className="text-sm text-gray-600 mb-4">
//         Code has been sent to (+1) ***-**-3529
//       </p>

//       {/* OTP BOXES */}
//       <div className="flex gap-2 mb-2">
//         {otp.map((value, index) => (
//           <div
//             key={index}
//             className="w-12 h-12 bg-stone-400 rounded-lg flex items-center justify-center text-xl font-semibold"
//           >
//             {value }
//           </div>
//         ))}
//       </div>

//       {/* TIMER */}
//       <div className="mb-4">
//         {timeLeft > 0 ? (
//           <p className="text-sm text-gray-600">
//             Resend Code in <span className="font-semibold">{timeLeft}s</span>
//           </p>
//         ) : (
//           <button className="text-sm font-semibold text-blue-600">
//             Resend Code
//           </button>
//         )}
//       </div>

//       {/* VERIFY BUTTON */}
//      <button
//   onClick={handleVerify}
//   className="relative w-64 bg-[#1E1F2B] text-white px-6 py-4 rounded-full mb-4 flex items-center justify-center"
// >
//   {/* Center Text */}
//   <span className="text-center">Verify</span>

//   {/* Right Arrow */}
//   <span className="absolute right-3 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center">
//     <HiOutlineArrowRight />
//   </span>
// </button>


//       {/* KEYPAD */}
//       <div className="grid grid-cols-3 gap-x-8 gap-y-2 text-xl font-medium text-gray-800">
//         {[1,2,3,4,5,6,7,8,9,"*",0,"⌫"].map((item, index) => (
//           <button
//             key={index}
//             onClick={() => handleKeyPress(item)}
//             className="w-16 h-14 flex items-center justify-center rounded-full hover:bg-gray-300 transition"
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Component5;

import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function VerifyForgotPassword({ flow = "signup" }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(59);
  const navigate = useNavigate();

  // Countdown timer
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  // Handle OTP input
  const handleChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  // Handle keypad input
  const handleKeypad = (num) => {
    if (num === "⌫") {
      const lastIndex = otp.findLastIndex((v) => v !== "");
      if (lastIndex >= 0) {
        const newOtp = [...otp];
        newOtp[lastIndex] = "";
        setOtp(newOtp);
      }
    } else {
      const firstEmpty = otp.findIndex((v) => v === "");
      if (firstEmpty >= 0) handleChange(firstEmpty, num);
    }
  };
const handleVerify = () => {
  const enteredOtp = otp.join("");

  if (enteredOtp.length !== 4) {
    alert("Please enter complete OTP");
    return;
  }

  console.log("OTP verified:", enteredOtp);

  // 🔀 Navigation based on flow
  if (flow === "signup") {
    navigate("/page11"); // Home
  } else if (flow === "reset") {
    navigate("/page8"); // Reset Password
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
              maxLength="1"
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
          <button onClick={handleVerify} className="w-full flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 px-6 rounded-full shadow-md relative hover:bg-[#232738] transition">
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
      aria-label={`Key ${num}`}
      className={`
        py-4 px-6 rounded-lg transition-colors duration-200
        ${num === "⌫" 
          ? "bg-gray-200 text-black hover:bg-gray-300" 
          : "bg-gray-200 hover:bg-gray-300"}
        focus:outline-none focus:ring-2 focus:ring-blue-500
      `}
    >
      {num}
    </button>
  ))}
</div>

      </div>
    </div>
  );
}
