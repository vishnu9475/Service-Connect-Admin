import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
export const UserDetailBanner = () => {
  return (
    <div  className='w-full max-w-[1017px]  min-h-[498px]  relative  bg-[#FFFFFF] rounded-tl-[20px] mx-auto'>
        <div  className='w-full h-[140px] bg-[#4D44B5] rounded-tl-[20px]  rounded-tr-[20px] relative  overflow-hidden '>
            
            <div className='w-[263px] h-[140px] bg-[#FB7D5B] absolute  right-[111px] top-[40px] rounded-tl-[20px] rounded-tr-[20px] hidden  sm:block'/>
            <div  className=' w-[263px] h-[140px] bg-[#FCC43E]  absolute  top-[18px] right-[40px] rounded-tl-[20px] rounded-tr-[20px] hidden sm:block'/>
           
         </div>
         <div className='bg-[#C1BBEB] sm:left-10 left-4 top-[10px] absolute rounded-full border-8 border-[#FFFFFF] w-[200px] h-[200px]  overflow-visible' /> 
         <p className='mt-[80px] font-[700] text-[32px] text-[#303972] ml-4 sm:ml-[70px]'>
          Name
         </p>
         <p className='ml-4 sm:ml-[70px] font-[600] text-[18px] text-[#A098AE]'>
          user
         </p>
          
         <div  className='w-full max-w-[953px]  min-h-[75px]   ml-auto mr-[auto] flex flex-col sm:flex-row flex-wrap gap-4 mt-9'>
          {/* Contact details Start */}
          <div className='w-[220px] h-[75px] flex items-center m-4'>
                  <div className='flex flex-col '>
                    <p className='text-[#A098AE] text-[18px] font-[400] ml-1'>
                      Location
                    </p>
                    <div className='flex flex-row'>
                            <div className='w-[40px] h-[40px] rounded-full bg-[#FB7D5B] p-2' >
                                 <CiLocationOn className='w-[24px] h-[24px] text-[#FFFFFF] ' />
                            </div>
                       
                        <p className='text-[18px]  font-[600] text-[#303972] flex   items-center ml-2'>
                         Location
                        </p>
                    </div>
                </div>
         </div>
        

         <div className='w-[220px] h-[75px]  flex items-center m-4'>
                  <div className='flex flex-col '>
                    <p className='text-[#A098AE] text-[18px] font-[400] ml-1'>
                      Address
                    </p>
                    <div className='flex flex-row'>
                            <div className='w-[40px] h-[40px] rounded-full bg-[#FB7D5B] p-2' >
                                 <CiLocationOn className='w-[24px] h-[24px] text-[#FFFFFF] ' />
                            </div>
                       
                        <p className='text-[18px]  font-[600] text-[#303972] flex   items-center ml-2'>
                         Location
                        </p>
                    </div>
                </div>
         </div>

          <div className='w-[220px] h-[75px]  flex items-center m-4'>
                  <div className='flex flex-col '>
                    <p className='text-[#A098AE] text-[18px] font-[400] ml-1'>
                      Phone
                    </p>
                    <div className='flex flex-row'>
                            <div className='w-[40px] h-[40px] rounded-full bg-[#FB7D5B] p-2' >
                                 <IoIosCall  className='w-[24px] h-[24px] text-[#FFFFFF] ' />
                            </div>
                       
                        <p className='text-[18px]  font-[600] text-[#303972] flex   items-center ml-2'>
                         +91 1234345
                        </p>
                    </div>
                </div>
         </div>
<div className='w-[220px] h-[75px]  flex items-center m-4'>
                  <div className='flex flex-col '>
                    <p className='text-[#A098AE] text-[18px] font-[400] ml-1'>
                     Email
                    </p>
                    <div className='flex flex-row'>
                            <div className='w-[40px] h-[40px] rounded-full bg-[#FB7D5B] p-2' >
                                 <CiMail className='w-[24px] h-[24px] text-[#FFFFFF] ' />
                            </div>
                       
                        <p className='text-[18px]  font-[600] text-[#303972] flex   items-center ml-2'>
                        hope@email.com
                        </p>
                    </div>
                </div>
         </div>
          {/* Contact details ends */}
 
         </div>
         
         
    </div>
  )
}
export default UserDetailBanner;