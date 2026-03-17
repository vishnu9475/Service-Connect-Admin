import React from 'react';
import { Calendar, Clock, AlertOctagon, ChevronDown, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TapRepairCard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full  bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden relative font-sans flex">
      
      {/* Green Sidebar */}
      <div className="w-2 md:w-4 bg-green-700"></div>

      {/* Main Content */}
      <div className="flex-1 p-5 pl-6 relative flex flex-col justify-between">

        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          <X size={18} />
        </button>

        <div>
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-gray-900 text-lg font-bold lg:text-xl">Tap Repair</h2>
            <button className="text-gray-900 text-[10px] font-bold underline hover:text-orange-600 transition-colors uppercase tracking-wider">
              View
            </button>
          </div>

          {/* Professional Info */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>
            </div>
            <span className="text-gray-500 text-xs font-medium">Keshavan</span>
          </div>

          {/* Status */}
          <div className="inline-block bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded mb-3">
            SCHEDULED
          </div>

          {/* Date & Time */}
          <div className="flex items-center gap-5 mb-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="text-orange-500 w-3.5 h-3.5" />
              <span className="text-gray-400 text-[11px] font-bold">
                March 20, 2021
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="text-yellow-500 w-3.5 h-3.5" />
              <span className="text-gray-400 text-[11px] font-bold">
                09.00 – 10.00 AM
              </span>
            </div>
          </div>

          {/* Price & Warning */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="text-gray-400 text-xs font-medium">
              Amount : <span className="text-gray-500">300 /-</span>
            </div>

            <div className="flex items-center gap-2">
              <AlertOctagon className="text-red-600 w-3.5 h-3.5" />
              <span className="text-red-500 text-[10px] font-semibold">
                Additional Requirements
              </span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate('/U21_B_ADD_NEW_CARD')}
          className="w-full bg-green-800 text-white py-2.5 px-4 rounded-full flex items-center justify-between hover:bg-green-900 transition-colors"
        >
          <div className="flex-1 flex justify-center items-center gap-1">
            <span className="font-bold text-xs uppercase tracking-widest">
              Accept & Pay Advance
            </span>
            <ChevronDown className="w-4 h-4" />
          </div>

          <div className="bg-white rounded-full p-1">
            <ArrowRight className="text-green-800 w-4 h-4" />
          </div>
        </button>

      </div>
    </div>
  );
};

export default TapRepairCard;