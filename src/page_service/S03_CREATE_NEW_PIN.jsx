import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Lock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../componants_service/ayush/CommonHeader";


export default function CreateNewPassword() {
  const navigate=useNavigate();
  const handleClickBack=()=>{
    navigate('/login')
  }
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      <div className="w-full  bg-gray-200">
        
        {/* Header */}
       <CommonHeader
          title="Create New Password"
          backTo="/login"
        />

        {/* Content */}
        {/* <div className="px-5 pt-15"> */}
  
        <div className="px-5 pt-15 max-w-lg mx-auto w-full">

          <p className="text-center text-m text-gray-600 mb-6">
            Add a Pin Number to Make Your Account <br />
            more Secure
          </p>

          {/* Password */}
          <div className="relative mb-4">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-[#6b605e] text-white placeholder-white rounded-xl py-3 pl-11 pr-11 focus:outline-none"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-8">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
            />
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Conform Password"
              className="w-full bg-[#6b605e] text-white placeholder-white rounded-xl py-3 pl-11 pr-11 focus:outline-none"
            />
            <button
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Continue Button */}
          <button onClick={()=>navigate("/otp-verification")} className="w-full bg-gray-900 text-white rounded-full py-3 flex items-center justify-center gap-14">
            Continue
            <span className="bg-white text-black rounded-full p-1">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
