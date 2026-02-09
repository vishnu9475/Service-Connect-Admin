import React from 'react';
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import { SlCalender } from "react-icons/sl";
import { IoTime } from "react-icons/io5";

const RecentService = () => {
  const navigate = useNavigate(); // 2. Initialize the hook

  const Service = [
    {
      Service: "Tap Repair",
      id: 1,
      bg: 'bg-[#4D44B5]',
      name: "Keshavan",
      Status: 'Booked',
      date: 'March 20, 2021',
      Time: '09.00 - 10.00 AM'
    },
    {
      Service: "Drain Blockage",
      id: 2,
      bg: 'bg-[#FB7D5B]',
      name: "Keshavan",
      Status: "Complaint",
      date: 'March 20, 2021',
      Time: '09.00 - 10.00 AM'
    },
    {
      Service: "Light Change",
      id: 3,
      bg: 'bg-[#FCC43E]',
      name: "Keshavan",
      Status: "Completed",
      date: 'March 20, 2021',
      Time: '09.00 - 10.00 AM'
    },
    {
      Service: "Fan Repair",
      id: 4,
      bg: 'bg-[#303972]',
      name: "Thomas",
      Status: "Completed",
      date: 'March 20, 2021',
      Time: '09.00 - 10.00 AM'
    }
  ];

  return (
    <div className='w-full min-h-screen bg-[#F3F4FF] py-10 px-4'>
      <div className='w-full max-w-3xl m-auto'>
        
        {/* Header Card */}
        <div className='w-full bg-white rounded-[20px] mb-6 p-6 md:p-10 shadow-sm'>
          <h2 className='text-[28px] font-bold text-[#303972]'>
            Recent Service Details
          </h2>
          <p className='text-[16px] text-[#A098AE] mt-1'>
            Thursday, 10th April, 2021
          </p>
        </div>

        {/* Service List */}
        <div className="grid grid-cols-1 gap-6">
          {Service.map((item) => (
            <div key={item.id} className='w-full bg-white rounded-[20px] flex overflow-hidden shadow-sm transition-transform hover:scale-[1.01]'>
              <div className={`w-[18px] ${item.bg}`} />
              
              <div className='flex-1 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between'>
                <div>
                  <h3 className='text-[#303972] font-bold text-[20px] mb-2'>
                    {item.Service}
                  </h3>
                  <div className='flex items-center mb-1'>
                    <div className='w-8 h-8 rounded-full bg-[#C1BBEB] mr-3' />
                    <span className='text-[#A098AE] text-[15px]'>{item.name}</span>
                  </div>
                  <p className='text-[#A098AE] text-[15px] font-medium'>
                    {item.Status}
                  </p>
                </div>

                <div className='mt-4 md:mt-0 space-y-3 md:text-right'>
                  <div className='flex items-center md:justify-end gap-3 text-[#A098AE] text-[15px]'>
                    <SlCalender className='text-[#FB7D5B] w-5 h-5' />
                    <span>{item.date}</span>
                  </div>
                  <div className='flex items-center md:justify-end gap-3 text-[#A098AE] text-[15px]'>
                    <IoTime className='text-[#FCC43E] w-5 h-5' />
                    <span>{item.Time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button - Now Navigates to /page116 */}
        <button 
          onClick={() => navigate("/servicehistory")} 
          className='w-full h-[65px] bg-[#4D44B51A] rounded-[20px] text-[#4D44B5] font-bold text-[18px] mt-8 hover:bg-[#4D44B52A] transition-all'
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default RecentService;