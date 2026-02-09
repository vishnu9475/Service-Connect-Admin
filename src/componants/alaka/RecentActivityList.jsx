import React from 'react'
import { SlCalender } from "react-icons/sl";
import { IoTime } from "react-icons/io5";
const RecentService = () => {
    const Service=[
        {
            Service:"Top Repair",
            id:1,
             bg:'bg-[#4D44B5]',
             name:"Keshavan",
             Status:'Booked',
             Logo1:SlCalender,
             date:'March-20-2025',
             Logo2: IoTime,
             Time :'9:00 -10:00 Pm'
        },
        {
            Service:"Drain Leakege",
            id:2,
             bg:'bg-[#FB7D5B]',
             name:"Keshavan",
             Status:"Completed",
             Logo1:SlCalender,
             date:'March-20-2025',
             Logo2: IoTime,
             Time :'9:00 -10:00 Pm'
        },
        {
            Service:"Light Change",
            id:3,
             bg:'bg-[#FCC43E]',
             name:"Keshavan",
             Status:"Booked",
             Logo1:SlCalender,
             date:'March-20-2025',
             Logo2: IoTime,
             Time :'9:00 -10:00 Pm'
        },
        {
            Service:"Fan Repair",
            id:4,
             bg:'bg-[#303972]',
             name:"Keshavan",
             Status:"Completed",
             Logo1:SlCalender,
             date:'March-20-2025',
             Logo2: IoTime,
             Time :'9:00 -10:00 Pm'
        }

    ]
  return (
    <div className='w-[90%] max-w-[418px]  m-auto mt-20'>

        <div className='w-full bg-[#FFFFFF] rounded-[20px] mb-9 p-6'>
                        <p className='text-[24px]   font-[700]  text-[#303972] p-3'>
                            Recent Service Details
                        </p>
                        <p className='text-[14px] font-[400] pl-3 text-[#A098AE]'>
                            Thursday 10 April 2025
                        </p>
        </div>
                        {
                Service.map((items)=>{
                    const Icon=items.Logo1
                    const Icon2=items.Logo2
                        return (
                            <>
                            <div className='w-full min-h-[183px]  rounded-[20px] bg-[#FFFFFF] flex flex-row mt-8'>
            
                     <div className={`w-full max-w-[24px] min-h-full ${items.bg} rounded-tl-[20px] rounded-bl-[20px] inline-block`}/>
                      
                       
                    <div className='w-full max-w-[190px] min-h-[136px]  m-auto ml-7 mt-2 ' >
                            <p className='text-[#303972] font-[600] text-[18px]  p-3 pb-1'>
                                {items.Service}
                            </p>
                            <div className='flex flex-row items-center'>

                            
                            <div className='flex flex-row bg-[#C1BBEB] w-[30px] h-[28px] rounded-full ml-3'/>
                            <p className='text-[#A098AE] text-[14px] font-[400] pl-3'>
                              {items.name}
                            </p>
                            </div>
                            <p className='text-[#A098AE] text-[14px] font-[400] p-3  pt-0 pb-[2px]'>
                               {items.Status}
                            </p>
                            <div className='flex flex-row pl-3 pt-0 items-center pt-2'>
                                            <Icon className='w-[16.5px] h-[16.5px] text-[#FB7D5B]'/>
                                            <p className='text-[#A098AE] text-[14px] font-[400] pl-3' >
                                               {items.date}
                                            </p>
                            </div>
                            <div className='flex flex-row pl-2 pt-0 items-center pt-3'>
                                            < Icon2 className='w-[24px] h-[24px] text-[#FB7D5B]'/>
                                            <p className='text-[#A098AE] text-[14px] font-[400] pl-3 ' >
                                              {items.Time}
                                            </p>
                            </div>

                            
                    </div> 
                  
        </div>
                            </>
                        )
                })
            }
       <button className='h-[61px] w-full max-w-[418px] ml-0 mr-0 m-10 flex items-center text-center justify-center bg-[#4D44B51A] rounded-[40px] text-[#4D44B5] font-[600] cursor-pointer'>
            View More
        </button>
    </div>
  )
}

export default RecentService