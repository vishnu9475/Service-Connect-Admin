import React from 'react';
import { IoMdTrendingUp } from "react-icons/io";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Payement = () => {
  const Statusclass = {
    Completed: "text-[#4CBC9A]",
    Pending: "text-[#A098AE]",
    Canceled: "text-[#FF4550]"
  };

  const payementHistory = [
    { id: 1, icon: IoMdTrendingUp, number: '#a139456', date: 'March 2 2025', Amount: '$50.394', Status: 'Completed' },
    { id: 2, icon: IoMdTrendingUp, number: '#a139456', date: 'March 4 2025', Amount: '$80.394', Status: 'Pending' },
    { id: 3, icon: IoMdTrendingUp, number: '#a139456', date: 'March 4 2025', Amount: '$80.394', Status: 'Canceled' },
    { id: 4, icon: IoMdTrendingUp, number: '#a139456', date: 'March 4 2025', Amount: '$80.394', Status: 'Completed' },
  ];

  return (
    // Changed: removed max-width restriction to let it fill the dashboard column
    <div className='w-full bg-[#FFFFFF] px-3 sm:px-5'>
      <p className='text-[20px] sm:text-[24px] font-[700] text-[#303972] py-4'>
        Payment History
      </p>

      {/* Payment List Starts */}
      {/* Changed: removed min-width and overflow-x-auto to stop the scrollbar */}
      <div className='w-full flex flex-col'>
        {payementHistory.map((items, index) => {
          const Icon = items.icon;
          return (
            <div key={index} className='w-full flex flex-row items-center justify-between py-4 border-b border-gray-50 last:border-0'>
              
              {/* Left Side: Icon and ID */}
              <div className='flex items-center gap-3 sm:gap-4 flex-1'>
                <div className='rounded-full bg-[#FF4550] h-[40px] w-[40px] sm:h-[56px] sm:w-[56px] flex-shrink-0 flex items-center justify-center'>
                  <Icon className='w-[20px] h-[20px] sm:w-[32px] sm:h-[32px] text-[#FFFFFF]' />
                </div>
                <p className='text-[#303972] text-[14px] sm:text-[18px] font-[600] truncate'>
                  {items.number}
                </p>
              </div>

              {/* Date: Hidden on very small screens or made smaller */}
              <p className='hidden md:block text-[#A098AE] font-[400] text-[14px] flex-1 text-center'>
                {items.date}
              </p>

              {/* Amount */}
              <p className='text-[#303972] font-[600] text-[14px] sm:text-[18px] flex-1 text-center'>
                {items.Amount}
              </p>

              {/* Status */}
              <p className={`font-[600] text-[14px] sm:text-[18px] flex-1 text-right ${Statusclass[items.Status]}`}>
                {items.Status}
              </p>
            </div>
          );
        })}
      </div>

      {/* Pagination Container */}
      <div className='w-full flex flex-col lg:flex-row gap-4 mt-7 pb-4 items-center justify-between'>
        <p className='text-[14px] font-[400] text-[#A098AE]'>
          Showing <span className='text-black'>1-5</span> From 100 Data
        </p>
        
        <div className='flex flex-row items-center gap-2 sm:gap-4'>
          <BiLeftArrow className='w-[24px] h-[24px] text-[#A098AE] cursor-pointer' />
          <button className='rounded-full bg-[#4D44B5] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] text-white'>1</button>
          <button className='rounded-full border border-[#A098AE] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] text-[#A098AE]'>2</button>
          <button className='rounded-full border border-[#A098AE] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] text-[#A098AE]'>3</button>
          <BiRightArrow className='w-[24px] h-[24px] text-[#A098AE] cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Payement;