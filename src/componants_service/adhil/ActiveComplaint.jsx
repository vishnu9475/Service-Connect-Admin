import React from 'react'

export default function ActiveComplaint() {
  return (
<div className="w-[95%] mt-3 mx-auto flex flex-col justify-center bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex">
                    <div className="w-3 bg-teal-700"></div>

                    <div className="flex-1 p-4 relative">
                        <span className="absolute top-3 right-3 text-gray-400 cursor-pointer">
              ✕
            </span>
                        <div className='flex flex-1 gap-3'>
                            <h3 className="font-semibold text-gray-800">Tap Repair</h3>
                        <p className=' underline cursor-pointer text-gray-600'>view</p>
                        </div>

                        <div className="flex items-center gap-2 mt-1">
              <span className="w-6 h-6 bg-indigo-400 rounded-full"></span>
              <p className="text-small font-semibold text-gray-500">Rose</p>
            </div>

                <div className="mt-1 text-sm font-semibold text-gray-500">
              <p>Booking Id</p>
              <p>Dispute Status</p>
            </div>

   <div className="mt-4 flex justify-center">
  <button className="w-[95%] h-[0%] bg-gray-800 text-white py-2 rounded-full text-sm font-medium cursor-pointer">
    Chat/Call
  </button>
</div>

                    </div>
                </div>
            </div>
  ) 
}

