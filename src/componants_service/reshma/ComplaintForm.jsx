import { CircleAlert } from 'lucide-react'
import { Images } from 'lucide-react';
import { IoChevronBackCircleOutline } from "react-icons/io5";
import React from 'react'
import { Link } from 'react-router-dom';

export default function ServiceRequestDetails() {
    const tiles ="bg-gray-300 text-sm font-semibold rounded-md px-3 shadow-lg"
    const fieldName ="text-sm text-gray-500"

  return (
    
    <div className='bg-gray-300 min-h-screen'>
        {/* ----------profile part------------------ */}
        <div className='flex justify-between p-4 pt-4 w-[65%] mx-auto'>
            <div className='flex '>
                <div className='bg-black h-10 w-10 rounded-full'>
                    <img src="" alt="" />
                </div>
                <div className='px-3'>
                    <p className='font-semibold '>Arjun R</p>
                <p className='text-sm '>Electrician</p>
        </div> </div> </div>
        {/* -------Booking part------------ */}
        <div className='bg-white p-4 rounded-xl shadow-[0_4px_6px_rgba(75,75,75,0.45)] w-[65%] mx-auto'>
            {/* ------------------Booking id--------------------------- */}
            <div className={fieldName}>
                <span>Booking Id: </span>
                <span>12aa21w</span>
            </div>
            {/* -------------Booking details----------------- */}
        <div className='text-sm font-semibold'>
          <ul className=''>Title:
            <li>Bulb change</li>
          </ul>
           <ul>Description:
            <li>blah blah blah blah</li>
          </ul>
        </div>
            <h2 className='font-bold'>Appointment</h2> 
            {/* ------------appointent data and time----- */}
     <div className='flex gap-2 justify-center'>
        <div className={tiles}>Jan 10,2024</div>
        <div className={tiles}>9:45 am</div>
     </div>
     <h4 className='text-sm font-semibold '>Invoice</h4>
    <div className='flex justify-between px-4'>
        <div className={fieldName}>SI.no</div>
        <div className={fieldName}>Description</div>
        <div className={fieldName}>Qty</div>
        <div className={fieldName}>Price</div>
        <div className={fieldName}>Total</div>
    </div>
    <div className='flex justify-between px-4'>
        <div className={fieldName}>1</div>
        <div className={fieldName}>Bulb Change</div>
        <div className={fieldName}>1</div>
        <div className={fieldName}>300</div>
        <div className={fieldName}>300</div>
    </div>
        <div className='flex gap-2 justify-end px-4 mt-8'>
        <div className={fieldName}>Grand Total</div>
        <div className={fieldName}>300</div>
    </div> 
    <p className={fieldName}>Teams and conditions</p>
    <p className={fieldName}>Valid up to 1 month</p>
    <div className='flex gap-2 '>
        <p className='text-sm text-red-600'>Additional Requirement</p>
        <span><CircleAlert className='text-red-600'/></span>
    </div>
    <ul className='text-sm text-gray-500 px-10'>
        <li>Provide Ladder</li>
        <li>Bulb should be provided</li>
    </ul> 
    
   </div>
   
<div className='p-4 rounded-xl w-[25%] mx-auto'>
   {/* ------------------------------Buttons-------------------------- */}
   <Link to='/pageM33'><button className='mt-3 bg-gray-900 hover:bg-gray-800 py-2 rounded-full shadow-[0_4px_6px_rgba(75,75,75,0.45)] text-white w-full'>Service Status</button></Link>
   <Link to='/page32'><button className='mt-3 bg-gray-900 hover:bg-gray-800 py-2 rounded-full shadow-[0_4px_6px_rgba(75,75,75,0.45)] text-white w-full'>Payment Method</button></Link>
</div>

   <div className=" bg-gray-200 flex flex-col items-center p-8 w-[65%] mx-auto">
      
    {/* Title */}
    <div className="relative w-full">
   <input
    type="text"
    placeholder="Miss Behave"
    className="peer w-full bg-white rounded-md px-4 pt-5 pb-2 shadow-[0_4px_6px_rgba(0,0,0,0.3)] outline-none"/>

  <label
    className="absolute left-4 top-2 text-xs text-gray-500 pointer-events-none">
    Title
  </label>
</div>
        {/* Description */}
        <div className="mt-4 relative w-full">
        <textarea
           placeholder="ffhs yryt trdfrhtrft"
    className="peer w-full bg-white rounded-md px-4 pt-6 pb-2 shadow-[0_4px_6px_rgba(0,0,0,0.3)] outline-none resize-none"/>
     <label
    className="absolute left-4 top-2 text-xs text-gray-500 pointer-events-none">
   Description
  </label>
        </div>

        {/*-------------------  Upload --------------------------- */}
       
<label className=" mt-4 block w-full cursor-pointer">
  <div className="w-full flex justify-between items-center bg-white rounded-md px-4 py-3 shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
    <span className="text-gray-400">Images & Videos</span>
    <span><Images/></span>
  </div>
  <input type="file" className="hidden" />
</label>


      {/*----------------Submit---------------------------------------- */}
      <div className='w-[40%]'>
      <Link to="/page30">
        <button className="mt-4 w-full bg-red-900 hover:bg-red-800 text-white py-2 rounded-full flex justify-center px-6 relative">
          Confirm Complaint
        </button>
      </Link>
      </div>
    </div>
    </div>
    
  )
}