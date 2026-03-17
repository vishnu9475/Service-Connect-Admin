import React from 'react';
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
const AlertModal = ({
  onClose,
  title = "Congratulations",
  message = "Your Payment is Successfully. Purchase a New Course",
  watchLinkText = "Watch the Course",
  onWatchLinkClick,
  receiptButtonText = "E - Receipt",
  onReceiptButtonClick,
}) => {

const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-[32px] p-8 w-full max-w-sm relative text-center">
        {/* Close Button */}
        <button
          onClick={()=>navigate(-1)}
          className="absolute right-3 top-1 w-10 h-10  text-gray-700 hover:text-gray-900"
          aria-label="Close"
        >
          <XMarkIcon size={8} />
        </button>

        {/* Decorative Elements */}
        <div className="relative h-32 mb-6 flex justify-center items-center">
          {/* Abstract Shapes */}
          <div className="absolute top-4 right-10 w-4 h-4 bg-yellow-400 transform rotate-45"></div>
          <div className="absolute top-0 left-16 text-yellow-400 text-xl">★</div>
          <div className="absolute top-8 right-24 text-yellow-400 text-2xl">★</div>
          <div className="absolute bottom-4 left-12 text-red-500 text-xl">★</div>
          <div className="absolute top-12 right-4 w-3 h-3 bg-teal-500 rounded-full"></div>
          <div className="absolute bottom-8 left-4 w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="absolute top-2 left-24 w-3 h-3 bg-teal-500 rounded-full"></div>
          <div className="absolute top-10 right-16 w-2 h-2 bg-yellow-700 rounded-full"></div>
          <div className="absolute bottom-12 left-20 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-teal-700"></div>
          <div className="absolute bottom-2 left-8 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-teal-700"></div>
          <div className="absolute top-6 left-10 w-8 h-0.5 bg-teal-700 transform -rotate-45"></div>
          <div className="absolute top-4 left-16 w-8 h-0.5 bg-teal-700 transform -rotate-45"></div>

          {/* Main Icon (Shield with Check) */}
          <div className="relative z-10 bg-teal-100 rounded-full p-4">
            <div className="bg-teal-500 text-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-2xl font-bold text-[#1A1C22] mb-3">{title}</h2>
        <p className="text-gray-600 text-sm mb-6 px-4">{message}</p>

        <button
          onClick={onWatchLinkClick}
          className="text-teal-500 font-medium underline hover:text-teal-600 mb-6 block w-full"
        >
          {watchLinkText}
        </button>

        <button
          onClick={() => navigate('/page24')}
          className="bg-[#1A1C22] text-white w-full py-4 px-6 rounded-full flex items-center justify-between hover:bg-gray-800 transition-colors"
        >
          <span className="font-semibold">{receiptButtonText}</span>
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default AlertModal;