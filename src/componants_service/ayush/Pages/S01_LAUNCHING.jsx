import { Phone, Mail, Chrome } from "lucide-react";
import {  useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate=useNavigate();
  const handleClick =()=>{
    navigate('/login')
  }
  return (
    <div className="min-h-screen bg-[#1D1F2A] flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-center text-white">

        {/* Logo / Illustration */}
     <div className="relative flex justify-center mb-10">
          <div className="w-48 h-48 rounded-full  flex items-center justify-center">
          <img src="src/assets/service-main.png" className="w-100 h-55"/>
           
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <button onClick={handleClick} className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-full font-medium">
            <Phone className="w-5 h-5" />
            Login with Email / Phone
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-gray-700 py-3 rounded-full font-medium">
            <Chrome className="w-5 h-5" />
            Login with Google
          </button>
        </div>

        {/* Signup */}
        <p className="mt-6 text-sm text-gray-400">
          Don’t have an account?{" "}
          <span className="text-white font-semibold cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
