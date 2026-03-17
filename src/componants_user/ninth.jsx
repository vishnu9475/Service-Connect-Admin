
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Comp9 = ({ open = true }) => {
  const navigate = useNavigate();

useEffect(() => {
if (open) {
const timer = setTimeout(() => {
navigate("/page11");
}, 3000);


return () => clearTimeout(timer);
}
}, [open, navigate]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      
      <div className="w-[320px] rounded-2xl bg-white p-6 text-center shadow-2xl">
        
        {/* Illustration */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
          alt="success"
          className="mx-auto mb-4 h-24 w-24"
        />

        {/* Title */}
        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          Congratulations 🎉
        </h2>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-500">
          Your account is ready to use. You’ll be redirected to the Home page in
          a few seconds.
        </p>

        {/* Loader */}
        <div className="flex justify-center">
          <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-800"></span>
        </div>
      </div>
    </div>
  );
};

export default Comp9;
