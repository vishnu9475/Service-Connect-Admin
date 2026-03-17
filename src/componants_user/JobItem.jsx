import { ArrowRight, CalendarDays, CircleAlert, Clock, X } from 'lucide-react'
import { Link } from 'react-router-dom';
import React from 'react'

export default function JobItem() {
    const textStyle ="text-gray-500 text-sm"
  return (
   <div className="relative bg-white rounded-2xl shadow-[0_4px_6px_rgba(75,75,75,0.45)] p-15 w-full mx-auto px-8 mt-4 mb-4 py-3">

      {/* Left Accent */}
      <div className="absolute left-0 top-0 h-full w-4 bg-green-700 rounded-l-2xl"></div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-lg text-blue-900">Tap Repair</h2>
          <span className="text-xs text-grey-600 cursor-pointer underline">View</span>
        </div>
        <button className="text-gray-400 text-xl"><X/></button>
      </div>
      {/* ----------------User-------------- */}
      <div className=' flex flex-col'>
        <div className='flex gap-3 justify-start'>
            <div className='bg-blue-300 rounded-full h-5 w-5'> </div>
            <p>Keshavan</p>
        </div>
        <p className={textStyle}>Pending</p>
      </div>

      {/* -----------------Time and date-------------- */}
      <div className='flex justify-between mt-2'>
        <div className='flex gap-3'>
            <span><CalendarDays className='text-red-400'/></span>
        <p className={textStyle}>March 20,2020</p>
        </div>
        <div className='flex gap-3'>
            <span><Clock className='text-yellow-300'/></span>
        <p className={textStyle}>09:00 - 10:00</p>
        </div>  
      </div>

     {/*  ----------------Amount ------------------------ */}
     <div className='mt-1 flex justify-between'>
        <p className={textStyle}>Amount: 300/-</p>
        <div className='flex gap-3'>
            <span><CircleAlert className='text-red-400'/></span>
            <p className='text-red-500 text-xs'>Additional Requirement</p>
        </div>
     </div>
     {/* -----------------------button ------------------- */}
     <Link to='/Page28'>
      <button className="mt-4 w-full bg-green-700 text-white text-sm shadow-lg rounded-full flex justify-center text-center mx-auto py-1 px-6 relative cursor-pointer">
        Complete Payment
          <span className="bg-white w-5 h-5 text-green-700  rounded-full  flex items-center justify-center absolute top-1 bottom-0 right-1 ">
           <ArrowRight/>
          </span>
        </button>
        </Link>
    </div>
  );
}