import React, { useState } from 'react'
import { FaApple, FaArrowRight } from 'react-icons/fa';
import { FiEye, FiEyeOff } from "react-icons/fi";

const ServiceLoginForm_59 = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#dcdcdc] px-4">
            <div className="w-full max-w-sm bg-[#e6e6e6] p-6 rounded-xl shadow">

                {/* Email */}
                <div className="mb-4 relative">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-[#7b7370] text-white placeholder-white
                   py-3 px-4 pr-10 rounded-lg outline-none"
                    />
                </div>

                {/* Password */}
                <div className="mb-3 relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full bg-[#7b7370] text-white placeholder-white
                   py-3 px-4 pr-12 rounded-lg outline-none"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2
                   text-white text-lg cursor-pointer"
                    >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between text-sm text-gray-700 mb-5">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-green-500" />
                        Remember Me
                    </label>
                    <a href="http://">forgot password ?</a>
                </div>

                {/* Login Button */}
                <button
                    className="w-full relative bg-[#1f2430] text-white
                 py-3 rounded-full font-medium cursor-pointer"
                >
                    Log In
                    <span className="absolute right-2 top-1/2 -translate-y-1/2
                       w-9 h-9 bg-white text-black
                       rounded-full flex items-center justify-center">
                        <FaArrowRight />
                    </span>
                </button>

                {/* Divider */}
                <div className="my-6 text-center text-sm text-gray-500">
                    Or Continue With
                </div>

                {/* Social Login */}
                <div className="flex justify-center gap-4">
                    <button className="w-12 h-12 bg-white rounded-full shadow
                         flex items-center justify-center cursor-pointer">
                        <img
                            src="https://www.google.com/favicon.ico"
                            alt="google"
                            className="w-6 h-6"
                        />
                    </button>

                    <button className="w-12 h-12 bg-white rounded-full shadow
                         flex items-center justify-center text-xl cursor-pointer">
                        <FaApple />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ServiceLoginForm_59;