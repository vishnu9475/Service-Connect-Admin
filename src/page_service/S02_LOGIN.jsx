import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/createpin")
  }
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="w-full max-w-sm bg-gray-200">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {/* <div className="w-10 h-10 border-2 border-black rounded-md flex items-center justify-center">
            👆
          </div> */}

                              <img src="src/assets/Service_Connect_Logo.png" className="w-76 h-18"/>

          {/* <h1 className="text-xl font-semibold text-gray-900">Service Connect</h1> */}

        </div>








        {/* Title */}
        <h2 className="text-xl font-bold mb-1  text-gray-800">Let’s Log In.!</h2>
        <p className="text-sm text-gray-600 mb-6">
          Login to Your Account to Continue your Courses
        </p>

        {/* Email */}
        <div className="relative mb-4">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white" size={18} />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#6b605e] text-white placeholder-white rounded-xl py-3 pl-11 pr-11 focus:outline-none"
          />
          <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-white" size={18} />
        </div>

        {/* Password */}
        <div className="relative mb-3">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white" size={18} />
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

        {/* Remember / Forgot */}
        <div className="flex items-center justify-between text-sm mb-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-teal-500 " />
           <p className="text-gray-800">Remember Me</p> 
          </label>
          <button 
           onClick={() => navigate("/forgot-password")}
          className="text-gray-700 font-medium">
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button onClick={handleClick} className="w-full bg-gray-900 text-white rounded-full py-3 flex items-center justify-center gap-3 mb-6">
          Log In
          <span className="bg-white text-black rounded-full p-1">
            <ArrowRight size={16} />
          </span>
        </button>

        {/* Divider */}
        <p className="text-center text-sm text-gray-600 mb-4">
          Or Continue With
        </p>

        {/* Social Login */}
        {/* <div className="flex justify-center gap-4 mb-6">
          <button className="bg-white rounded-full p-3 shadow">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
          </button>
          <button className="bg-white rounded-full p-3 shadow">
            <img
              src="https://www.svgrepo.com/show/452196/apple.svg"
              alt="Apple"
              className="w-5 h-5"
            />
          </button>
        </div> */}

<div className="flex justify-center gap-4 mb-6">
  <button className="bg-white rounded-full p-3 shadow">
   <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
  </button>

  <button className="bg-white rounded-full p-3 shadow">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
      alt="Apple"
      className="w-5 h-5"
    />
  </button>
</div>



        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Don't have an Account?{" "}
          <span className="font-semibold cursor-pointer">Form</span>
        </p>
      </div>
    </div>
  );
}
