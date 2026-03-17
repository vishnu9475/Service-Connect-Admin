import { ArrowRight } from "lucide-react";
import alert from "../assets/alert.png"
import { Link } from 'react-router-dom';


export default function ServiceCompleted() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      
      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-2xl px-6 py-8 shadow-xl text-center space-y-2">
        
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
            {/* Graduation / Headset Icon (SVG inline for accuracy) */}

            <span className="text-2xl">
                <img src={alert} alt="" className='h-40'/>
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900">
          Services Completed
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">
          Complete your Course. Please Write a Review
        </p>

        {/* Rating */}
        <div className="flex justify-center gap-1">
          <span className="text-yellow-400 text-lg">
              ★★★★
            </span>
        </div>

        {/* Button */}
         <Link to='/page25'>
              <button className="mt-5 px-16 bg-gray-900 hover:bg-gray-800 text-white text-sm shadow-lg rounded-full flex justify-center text-center mx-auto relative cursor-pointer py-3">
                Write a Review
                  <span className="bg-white w-8 h-8 text-gray-900  rounded-full  flex items-center justify-center absolute top-1.5 bottom-0 right-1.5 ">
                   <ArrowRight/>
                  </span>
                </button>
                </Link>
      </div>
    </div>
  );
}
