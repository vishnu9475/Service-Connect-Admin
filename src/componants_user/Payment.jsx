import { ChevronLeft, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

export default function PaymentOptions() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      {/* Main Content Wrapper */}
      {/* w-full = Mobile (100% width)
          md:w-[70%] = Tablets (70% width)
          lg:w-[40%] = Laptops (40% width)
      */}
      <div className="px-5 pt-6 pb-10 w-full md:w-[70%] lg:w-[40%] mx-auto">

        {/* Service Card */}
        <div className="bg-white rounded-xl p-4 flex gap-4 shadow-sm">
          <div className="w-14 h-14 bg-black rounded-lg shrink-0" />
          <div>
            <p className="text-xs text-orange-500 font-semibold">
              Graphic Design
            </p>
            <p className="text-sm font-semibold text-gray-800 leading-tight">
              Setup your Graphic Design..
            </p>
          </div>
        </div>

        {/* Section Title */}
        <p className="text-xs text-gray-500 mt-8 mb-4 text-center px-4">
          Select the Payment Methods you Want to Use
        </p>

        {/* Payment Methods */}
        <div className="space-y-3">
          {["Paypal", "Google Pay", "Cash on Delivery"].map((method) => (
            <label 
              key={method} 
              className="bg-white rounded-lg px-4 py-4 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium text-gray-700">{method}</span>
              <input
                type="radio"
                name="payment"
                className="w-5 h-5 accent-gray-800"
              />
            </label>
          ))}
        </div>

        {/* Bottom Button Container */}
        <div className="mt-10 pb-10">
          <Link to="/page31">
            {/* w-full = Full width on mobile for easy tapping
                md:w-[50%] = Half width on tablets
                lg:w-[60%] = Balanced width on laptops
            */}
            <button className="w-full md:w-[60%] mx-auto bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full flex items-center justify-center gap-3 shadow-lg transition-transform active:scale-95">
              <span className="font-bold tracking-wide">PAY RS 75</span>
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center">
                <ArrowRight size={18}/>
              </span>
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}