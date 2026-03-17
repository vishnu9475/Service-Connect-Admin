import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../componants_service/CommonHeader";
// import CommonHeader from "../componants_service/CommonHeader";



export default function ConfirmPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isValid =
    password.length >= 8 && password === confirmPassword;

  return (
    <div className="min-h-screen bg-[#E5E5E5] flex flex-col">
      
      {/* Header */}
      {/* <div className="bg-[#1E222C] text-white px-4 py-4 flex items-center gap-3">
        <ArrowLeft
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-lg font-semibold">FORGOT PASSWORD</h1>
      </div> */}


             <CommonHeader
                title="Forgot Password"
                backTo="/login"
              />

      {/* Content */}    


      <div className=" px-5 pt-15 max-w-lg mx-auto w-full  flex-1 flex flex-col justify-center px-6">
        <h2 className="text-center text-[#1E222C] font-semibold mb-8">
          Create Your New Password
        </h2>

        {/* Password */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-3 px-12 rounded-lg bg-[#8B7E79] text-white placeholder-white outline-none"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
          <Lock size={18} />
          </span>

          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative mb-6">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full py-3 px-12 rounded-lg bg-[#8B7E79] text-white placeholder-white outline-none"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
          <Lock size={18} />
          </span>

          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {/* Continue Button */}
        <button onClick={()=>navigate('/forgot-success-redirect')}
          disabled={!isValid}
          className={`w-full py-3 rounded-full flex items-center justify-center gap-3 text-white font-semibold transition
            ${
              isValid
                ? "bg-[#1E222C]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          Continue
          <span className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center">
            →
          </span>
        </button>

        {/* Hint */}
        <p className="text-xs text-center mt-4 text-gray-600">
          Password must be at least 8 characters
        </p>
      </div>
    </div>
  );
}
