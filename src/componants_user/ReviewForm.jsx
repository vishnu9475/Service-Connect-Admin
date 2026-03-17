import React from 'react'
import { Link } from 'react-router-dom';
import upload from "../assets/upload.png"

export default function ReviewForm() {
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col font-sans pb-10'>
      
      {/* 1. Service Info Card */}
      {/* Width logic: Full on mobile, max-width 2xl on desktop */}
      <div className="px-4 sm:px-6 mt-6 w-full max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-4 sm:p-6 flex items-center gap-4 shadow-sm border border-gray-100">
          {/* Responsive Image Placeholder */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-xl flex-shrink-0"></div>
          
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] sm:text-xs font-bold text-orange-500 uppercase tracking-wider">
              Graphic Design
            </span>
            <h2 className="text-sm sm:text-lg font-bold text-gray-800 leading-tight truncate">
              Setup your Graphic Design Workspace
            </h2>
          </div>
        </div>
      </div>

      <div className='p-4 sm:p-6 flex flex-col w-full max-w-2xl mx-auto space-y-6'>
        
        {/* 2. Upload Section */}
        <div>
          <p className="text-sm font-bold text-gray-700 mb-3">Add Photo (or) Video</p>
          <label className="cursor-pointer block">
            <div className="bg-white rounded-2xl py-8 flex flex-col justify-center items-center shadow-sm border-2 border-dashed border-gray-200 hover:border-orange-300 transition-colors">
              <img src={upload} alt="upload" className='h-10 w-10 mb-2 opacity-60'/>
              <p className="text-xs font-semibold text-gray-500">Click here to Upload</p>
            </div>
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* 3. Review Input Section */}
        <div>
          <p className="text-sm font-bold text-gray-700 mb-3">Write Your Review</p> 
          <div className="bg-white rounded-2xl flex flex-col shadow-sm border border-gray-100 p-4">
            <textarea 
              placeholder='Would you like to write anything about the product?'
              className='w-full h-32 outline-none resize-none text-sm text-gray-700 placeholder:text-gray-400'
            />
            <p className="text-right text-[10px] font-medium text-gray-400 mt-2">
              *250 Characters Remaining
            </p>
          </div>
          
          {/* 4. Action Button */}
          <Link to="/page26" className="block">
            <button className='bg-[#1a1c24] hover:bg-black text-white w-full sm:w-[60%] rounded-full py-4 mt-8 font-bold shadow-lg transition-all active:scale-95 flex justify-center mx-auto text-sm sm:text-base'>
              Submit Review
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}