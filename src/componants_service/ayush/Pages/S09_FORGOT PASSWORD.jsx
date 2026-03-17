
// import { ArrowLeft, Mail, Phone } from "lucide-react";
// import { useState } from "react";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   // validation
//   const isEmailValid = email.includes("@");
//   const isPhoneValid = phone.length === 10;

//   const handleContinue = () => {
//     if (!email && !phone) {
//       alert("Please enter Email or Phone Number");
//       return;
//     }

//     if (email && !isEmailValid) {
//       alert("Please enter a valid email address");
//       return;
//     }

//     if (phone && !isPhoneValid) {
//       alert("Please enter a valid 10-digit phone number");
//       return;
//     }

//     alert("OTP sent successfully ✅");
//   };


import { ArrowLeft, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate(); // ✅ ADD THIS

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const isEmailValid = email.includes("@");
  const isPhoneValid = phone.length === 10;

  const handleContinue = () => {
    if (!email && !phone) {
      alert("Please enter Email or Phone Number");
      return;
    }

    if (email && !isEmailValid) {
      alert("Please enter a valid email address");
      return;
    }

    if (phone && !isPhoneValid) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    // ✅ Navigate to OTP page
    navigate("/forgot-otp-verification");
  };



  return (
    <div className="min-h-screen bg-neutral-200 flex flex-col">

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-4 flex items-center gap-3">
        <button className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center">
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-lg font-semibold tracking-wide">
          FORGOT PASSWORD
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6">
        <p className="text-center text-sm text-slate-600 mb-8 leading-relaxed">
          Enter your registered email or phone number to receive an OTP
          to reset your password
        </p>

        <div className="w-full max-w-sm mx-auto space-y-4">

          {/* Email Input */}




          {/* <div className="flex items-center gap-3 bg-[#7a6f6a] px-4 py-4 rounded-xl shadow-md"> */}
            <div className="w-full flex items-center gap-3 bg-[#7a6f6a] text-white px-4 py-4 rounded-xl shadow-md mb-4">

            <Mail size={18} className="text-white" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>

          {/* Phone Input */}
            <div className="w-full flex items-center gap-3 bg-[#7a6f6a] text-white px-4 py-4 rounded-xl shadow-md mb-4">
            <Phone size={18} className= "text-white" />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, ""))
              }
              maxLength={10}
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="px-6 pb-6 w-full max-w-sm mx-auto">
        <button
          onClick={handleContinue}
          className="relative w-full bg-gradient-to-r from-slate-900 to-slate-800
                     text-white py-4 rounded-full font-semibold shadow-lg"
        >
          Continue
          <span className="absolute right-2 top-1/2 -translate-y-1/2
                           w-10 h-10 bg-white text-slate-900 rounded-full
                           flex items-center justify-center">
            →
          </span>
        </button>
      </div>
    </div>
  );
}
