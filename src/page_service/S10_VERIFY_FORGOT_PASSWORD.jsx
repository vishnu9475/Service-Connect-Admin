import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../componants_service/ayush/CommonHeader";


export default function ForgotOtpVerification() {
  const navigate = useNavigate();





  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(59);

  const inputRefs = useRef([]);

  /* ⏱ Timer */
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  /* 🔢 Handle OTP Change */
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) { 
      inputRefs.current[index + 1].focus();
    }
  };

  /* ⌫ Handle Backspace */
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  /* ✅ Verify */
  const handleVerify = () => {
    const code = otp.join("");
    if (code.length !== 4) {
      alert("Please enter complete OTP");
      return;
    }
    // navigate("/profile");
    navigate("/confirm-password"); 
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      <div className="w-full bg-gray-200">

        {/* HEADER */}
        {/* <CommonHeader title="forgot Password" /> */}


      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-4 flex items-center gap-3">
        <button className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center">
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-lg font-semibold tracking-wide">
          FORGOT PASSWORD
        </h1>
      </div>
        {/* CONTENT */}
        {/* <div className="px-5 pt-12 text-center"> */}
        <div className="px-5 pt-15 max-w-md mx-auto w-full">

          <p className="text-sm text-gray-600 mb-12">
            Code has been sent to (+1) ***-**-4529
          </p>

          {/* OTP INPUTS */}
          <div className="flex justify-center gap-4 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-14 h-14 bg-[#6b605e] text-white text-center text-xl rounded-xl outline-none"
              />
            ))}
          </div>




          {/* VERIFY BUTTON */}
          {/* <button
            onClick={handleVerify}
            className="w-full bg-gray-900 text-white rounded-full py-3 flex items-center justify-center gap-3 mb-10"
          >
            Verify
            <span className="bg-white text-black rounded-full p-1">
              <ArrowRight size={16} />
            </span>
          </button> */}

          <button
  type="button"
  onClick={handleVerify}
  className="w-full bg-gray-900 text-white rounded-full py-3 flex items-center justify-center gap-3 mb-10 cursor-pointer"
>
  Verify
  <span className="bg-white text-black rounded-full p-1 flex items-center justify-center">
    <ArrowRight size={16} />
  </span>
</button>


          {/* KEYPAD UI (OPTIONAL) */}
          <div className="grid grid-cols-3 gap-6 text-gray-700 text-lg font-medium">
            {[1,2,3,4,5,6,7,8,9,"*",0,"⌫"].map((key, i) => (
              <div key={i} className="flex justify-center">
                <span>{key}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
