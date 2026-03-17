import React from 'react'
import { X,Calendar,Clock3 } from 'lucide-react'

const BookedItem26 = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex overflow-hidden mx-3 w-[345px] h-[158px] bg-white rounded-2xl">

        {/* Left black strip */}
        <div className="w-[19.81px] h-full bg-black"></div>

        {/* Content area */}
        <div className="flex flex-col w-full px-2">

          {/* Top row */}
          <div className="flex items-start">
            <h1 className="text-[23px]  text-[#303972]">
              Tap Repair
              <a className="underline mx-3 text-[10px]" href="#">
                view
              </a>
            </h1>

            <button className="ml-auto px-3 py-2">
              <X />
            </button>
          </div>
<div className='flex h-8'>
      
          <div className=" mt-2 w-[24.76px] h-[22.8px] bg-[#D9D9DB] rounded-2xl"></div>
          <h3 className='px-1 py-2'>kesavan</h3>
          
       
</div>
<h3 className='px-3 text-[14px]'>booked</h3>
{/* for calender and time */}
<div className='h-7 flex'>
    <Calendar className='text-orange-400'/>
    <h3 className='text-gray-600'> march20,2021</h3>
    <div className='w-7'></div>
     <Clock3 className='text-yellow-300'/>
     <h3 className='text-gray-600' > 10.10-11.10 Am</h3>
</div>
<button className='mx-3 w-[277px] h-[25px] bg-black rounded-2xl text-white flex items-center justify-center'>waiting for Response</button>

    
        </div>
      </div>
    </div>
  )
}

export default BookedItem26
