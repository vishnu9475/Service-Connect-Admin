import React, { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
const PaymentSelection = () => {
  const [isOn, setIsOn] = useState(false);
const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/page63");
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      {/* container comp */}
      <div className="w-full max-w-md px-4 sm:px-6">

        <p className="mb-4 text-sm sm:text-base">
          Select the Payment Methods you Want to Use
        </p>

        {/* whitecaard 1 */}
        <div className="shadow-md shadow-gray-400 w-full h-[60px] bg-white rounded-2xl px-4 flex justify-between items-center">
          <h3 className="text-sm sm:text-base">PayPal</h3>
          <button
            onClick={() => setIsOn(!isOn)}
            className={`w-8 h-8 border-2 border-gray-500 rounded-full transition-colors duration-300
              ${isOn ? "bg-green-500" : "bg-white"}`}
          />
        </div>

        {/* white card 2 */}
        <div className="shadow-md shadow-gray-400 mt-4 w-full h-[60px] bg-white rounded-2xl px-4 flex justify-between items-center">
          <h3 className="text-sm sm:text-base">GooglePay</h3>
          <button
            onClick={() => setIsOn(!isOn)}
            className={`w-8 h-8 border-2 border-gray-500 rounded-full transition-colors duration-300
              ${isOn ? "bg-green-500" : "bg-white"}`}
          />
        </div>
         <div className="h-70">

         </div>
        {/* plusbutton */}
        <div className="flex justify-end mt-10">
          <div className="shadow-md shadow-gray-400 w-[62px] h-[62px] rounded-full bg-black flex items-center justify-center">
            <Plus className="text-amber-50" />
          </div>
        </div>

        {/* enrol button */}
      
<div className="flex justify-center mt-4">
  <button
    onClick={handleButtonClick}
    className="relative shadow-md shadow-gray-400 w-full h-[60px] bg-black rounded-full text-white font-semibold flex items-center justify-center"
  >
    Pay RS 75

    <span className="absolute right-2 bg-white rounded-full w-10 h-10 flex items-center justify-center">
      <ArrowRight className="text-black" />
    </span>
  </button>
</div>

      </div>
    </div>
  );
};

export default PaymentSelection;