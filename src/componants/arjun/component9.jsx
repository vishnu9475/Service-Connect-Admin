import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Comp9 = ({ 
  open = true, 
  image, 
  title = "Congratulations 🎉", 
  message = "Your account is ready to use. You’ll be redirected to the Home page in a few seconds.",
  redirectTo = "/", 
  delay = 3000 
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        navigate(redirectTo);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [open, navigate, redirectTo, delay]);

  if (!open) return null;

  return (
    /* Changed bg-black/60 to bg-black for a solid dark background */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      
      {/* Modal Container */}
      <div className="w-[90%] max-w-md rounded-3xl bg-[#F5F9FF] p-10 text-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
        
        {/* Illustration */}
        {image && (
          <div className="flex justify-center mb-6">
             <img
                src={image}
                alt="success"
                className="h-32 w-32 object-contain"
              />
          </div>
        )}

        {/* Text Content */}
        <h2 className="mb-3 text-2xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="mb-8 text-sm md:text-base text-gray-500 leading-relaxed px-4">
          {message}
        </p>

        {/* Loader Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex items-center justify-center">
            {/* Inner static circle */}
            <div className="h-10 w-10 rounded-full border-4 border-gray-200"></div>
            {/* Outer spinning arc */}
            <div className="absolute h-10 w-10 animate-spin rounded-full border-4 border-transparent border-t-black"></div>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            Please Wait
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comp9;