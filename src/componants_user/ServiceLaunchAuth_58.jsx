import React from 'react'
import { FiPhoneCall } from "react-icons/fi";

const ServiceLaunchAuth_58 = () => {
    return (
        <div className="min-h-screen bg-[#0f1117] flex items-center justify-center px-4">
            <div className="w-full max-w-sm space-y-4">

                {/* Login with Email / Phone */}
                <button
                    className="w-full relative
             bg-white text-black text-sm font-medium
             py-4 rounded-full shadow
             text-center cursor-pointer"
                >
                    {/* Mobile Icon */}
                    <span
                        className="absolute left-4 top-1/2 -translate-y-1/2
               w-8 h-8 flex items-center justify-center
               bg-black text-white rounded-full"
                    >
                        <FiPhoneCall />
                    </span>

                    Login with Email/Phone
                </button>

                {/* Login with Google */}
                <button
                    className="w-full relative
             bg-[#2a2d35] text-white text-sm font-medium
             py-4 rounded-full shadow
             text-center cursor-pointer"
                >
                    {/* Google Icon */}
                    <img
                        src="https://www.google.com/favicon.ico"
                        alt="google"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-7 h-7"
                    />

                    Login with Google
                </button>

            </div>
        </div>


    )
}

export default ServiceLaunchAuth_58;