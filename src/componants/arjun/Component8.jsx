import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { CiLock } from "react-icons/ci";

const Component8 = ({ 
  heading = "", 
  description = "", 
  buttonText = "Continue",
  // If no inputs are passed, it defaults to the Selection view (Email/Phone)
  inputs = [
    { isSelection: true, placeholder: "Email", icon: <HiOutlineMail />, id: "email" },
    { isSelection: true, placeholder: "Phone Number", icon: <LuPhone />, id: "phone" }
  ], 
  navigatePath = "/" 
}) => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const [showPassword, setShowPassword] = useState({});

  const togglePassword = (idx) => {
    setShowPassword(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-10">
      <div className="w-full max-w-[400px]">
        
        {/* Dynamic Heading: Aligned left for Password Reset */}
        {heading && (
          <h2 className="text-[#1D1F2A] font-bold text-xl mb-4 text-left w-full">
            {heading}
          </h2>
        )}

        {/* Dynamic Description: Centered for Selection Page */}
        {description && (
          <p className="text-[#626262] text-center text-sm font-medium mb-10 leading-relaxed mx-auto max-w-[300px]">
            {description}
          </p>
        )}

        <div className="w-full space-y-4 mb-14">
          {inputs.map((input, idx) => {
            const isSelected = selectedId === idx;
            
            return (
              <div
                key={idx}
                onClick={() => input.isSelection && setSelectedId(idx)}
                className={`relative flex items-center bg-[#766F6B] rounded-2xl shadow-lg border-2 transition-all cursor-pointer ${
                  isSelected ? "border-black scale-[1.02]" : "border-transparent"
                }`}
              >
                {/* Left Icon: Default to Lock for passwords if no icon provided */}
                <div className="pl-5 text-white text-xl">
                  {input.icon || (input.type === "password" && <CiLock />)}
                </div>

                {input.isSelection ? (
                  <div className="w-full p-5 text-white font-semibold text-sm select-none">
                    {input.placeholder}
                  </div>
                ) : (
                  <input
                    type={input.type === "password" ? (showPassword[idx] ? "text" : "password") : input.type}
                    placeholder={input.placeholder}
                    className="w-full p-5 bg-transparent text-white placeholder-white/80 focus:outline-none font-semibold text-sm"
                  />
                )}

                {/* Right Eye Icon for Password fields */}
                {input.type === "password" && (
                  <button 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); togglePassword(idx); }}
                    className="pr-5 text-white/70 hover:text-white"
                  >
                    {showPassword[idx] ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => navigate(navigatePath)}
          className="group w-full bg-[#1D1F2A] text-white flex items-center justify-between p-2 pl-12 rounded-full shadow-2xl transition-all active:scale-95"
        >
          <span className="text-base font-bold tracking-wide">{buttonText}</span>
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
            <FaArrowRight className="text-[#1D1F2A] text-xl transition-transform group-hover:translate-x-1" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Component8;