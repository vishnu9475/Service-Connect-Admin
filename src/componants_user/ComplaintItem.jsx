import { ArrowRight, CalendarDays, CircleAlert, Clock, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

export default function ComplaintItem() {
    const textStyle = "text-gray-500 text-sm";

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* --- Content Area --- */}
            {/* Added responsive padding for better spacing on mobile */}
            <div className="p-4 sm:p-8">
                
                {/* CONTAINER LOGIC:
                   - w-full on mobile
                   - md:w-[70%] on tablets
                   - lg:w-[45%] on laptops 
                */}
                <div className="relative bg-white rounded-2xl shadow-[0_4px_6px_rgba(75,75,75,0.45)] p-4 w-full md:w-[70%] lg:w-[45%] mt-4 mx-auto overflow-hidden">
                    
                    {/* Left Accent */}
                    <div className="absolute left-0 top-0 h-full w-3 sm:w-4 bg-green-700 rounded-l-2xl"></div>

                    {/* Header */}
                    <div className="flex justify-between items-center px-2 sm:px-4">
                        <div className="flex items-center gap-2">
                            <h2 className="font-bold text-base sm:text-lg text-blue-900">Tap Repair</h2>
                            <span className="text-xs text-gray-600 cursor-pointer underline">View</span>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <X size={20}/>
                        </button>
                    </div>

                    {/* User Section */}
                    <div className='flex flex-col px-2 sm:px-4 mt-2'>
                        <div className='flex gap-3 justify-start items-center'>
                            <div className='bg-blue-300 rounded-full h-5 w-5 shrink-0'> </div>
                            <p className="font-medium text-sm sm:text-base">Keshavan</p>
                        </div>
                        {/* Adjusted margin for mobile alignment */}
                        <p className={`${textStyle} ml-8`}>Pending</p>
                    </div>

                    {/* Time and Date - Stack on very small screens, side-by-side otherwise */}
                    <div className='flex flex-col sm:flex-row justify-between mt-4 px-2 sm:px-4 gap-3 sm:gap-0'>
                        <div className='flex gap-2 items-center'>
                            <CalendarDays size={18} className='text-red-400 shrink-0' />
                            <p className={textStyle}>March 20, 2020</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Clock size={18} className='text-yellow-500 shrink-0' />
                            <p className={textStyle}>09:00 - 10:00</p>
                        </div>
                    </div>

                    {/* Amount & Requirements */}
                    <div className='mt-4 flex flex-col sm:flex-row justify-between px-2 sm:px-4 border-t pt-3 gap-2 sm:gap-0'>
                        <p className="font-bold text-gray-700 text-sm">Amount: 300/-</p>
                        <div className='flex gap-2 items-center'>
                            <CircleAlert size={16} className='text-red-400 shrink-0' />
                            <p className='text-red-500 text-xs font-semibold'>Additional Requirement</p>
                        </div>
                    </div>

                    {/* Button Section */}
                    <div className="px-2 sm:px-4 mt-6">
                       
                        <Link to='/Page_45'>
                              <button className="mt-4 w-full bg-green-700 text-white text-sm shadow-lg rounded-full flex justify-center text-center mx-auto py-1 px-6 relative cursor-pointer font-medium py-2">
                                Chat / Call
                                  <span className="bg-white w-7 h-7 text-green-700  rounded-full  flex items-center justify-center absolute top-1 bottom-0 right-1 ">
                                   <ArrowRight/>
                                  </span>
                                </button>
                                </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}