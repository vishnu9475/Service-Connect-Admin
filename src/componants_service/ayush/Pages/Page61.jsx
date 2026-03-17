import { useEffect } from "react";
import { Lock, Key } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ForgotSuccessRedirect() {
  const navigate = useNavigate();

  // Auto redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // change to home route
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1E222C] to-[#0F1117] px-4">
      
      {/* Card */}
      <div className="w-full max-w-sm bg-[#F8FAFC] rounded-3xl px-6 py-10 text-center shadow-xl">
        
        {/* Illustration */}
        <div className="relative flex justify-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <Lock className="text-pink-500" size={36} />
          </div>

          <div className="absolute -right-2 top-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
            <Key className="text-white" size={16} />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-lg font-semibold text-[#1E222C] mb-2">
          Congratulations
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          Your Account is Ready to Use. You will be redirected to the Home Page
          in a few seconds.
        </p>

        {/* Loader */}
        <div className="flex justify-center">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
