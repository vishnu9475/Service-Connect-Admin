import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

export default function SuccessMessage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-green-100 p-6 sm:p-8 text-center transition hover:shadow-2xl">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="text-green-600 w-12 h-12" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Card Added Successfully!
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Your new card has been added to your account.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/66")}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
        >
          Add Another Card
        </button>
      </div>
    </div>
  );
}
