import React from 'react';
import { useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

const StudentDetails = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <>
      <div className='w-full lg:max-w-[1475px] min-h-[1380px] bg-[#C4C4C41F]'>
        
        {/* Header */}
        <div className='w-full h-[60px] bg-[#4D44B5] rounded-tl-[20px] rounded-tr-[20px] flex items-center px-4'>
          <p className='text-[#FFFFFF] font-[700] text-[24px]'>
            Student Details
          </p>
        </div>

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row gap-8 p-6'>

          {/* Photo Upload */}
          <div className='flex flex-col sm:max-w-[192px] pl-6 pt-4 items-center'>
            <p className='text-[#303972] text-[18px] font-[600] pb-3'>
              Photo *
            </p>
            <div className='w-full max-w-[175px] min-h-[175px] bg-[#FFFFFF] flex rounded-[5px]'>
              <div className='h-[42px] w-[154px] m-auto cursor-pointer text-center'>
                <p className='text-[#A098AE] text-[14px] font-[400]'>
                  Drag And Drop Or
                </p>
                <p className='text-[#A098AE] text-[14px] font-[400]'>
                  Click Here To Select File
                </p>
              </div>
            </div>
          </div>

          {/* Form Inputs */}
          <div className='flex flex-col items-center lg:items-start w-full'>
            <input 
              type="text" 
              placeholder='Full Name' 
              className='w-[90%] max-w-[410px] h-[60px] font-[700] text-[14px] text-[#505050] bg-[#FFFFFF] rounded-[12px] p-4 mt-6 border-0 focus:outline-none lg:ml-9'
            />
            <input 
              type="text" 
              placeholder='Address' 
              className='w-[90%] max-w-[410px] min-h-[60px] font-[700] text-[14px] text-[#505050] bg-[#FFFFFF] rounded-[12px] p-4 mt-6 border-0 focus:outline-none lg:ml-9'
            />

            {/* Date of Birth */}
            <div className='relative w-[90%] max-w-[410px] h-[60px] mt-6 bg-[#FFFFFF] rounded-[12px] lg:ml-9'>
              <SlCalender className='absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none' />
              <input 
                type="date" 
                placeholder='Date Of Birth' 
                className='w-full h-full bg-transparent pl-12 pr-4 rounded-[12px] focus:outline-none text-[#505050] font-[700] text-[14px]'
              />
            </div>

            {/* Email */}
            <div className='relative w-[90%] max-w-[410px] h-[60px] mt-6 bg-[#FFFFFF] rounded-[12px] lg:ml-9'>
              <CiMail className='absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[20px]' />
              <input 
                type="email" 
                placeholder='Email' 
                className='w-full h-full pl-12 pr-4 bg-transparent rounded-[12px] focus:outline-none text-[#505050] font-[700] text-[14px]'
              />
            </div>

            <input 
              type="number" 
              placeholder='+91 123345577' 
              className='w-[90%] max-w-[410px] min-h-[60px] font-[700] text-[14px] text-[#505050] bg-[#FFFFFF] rounded-[12px] p-4 mt-6 border-0 focus:outline-none lg:ml-9'
            />

            {/* Gender */}
            <select 
              name="Gender" 
              className='w-[90%] max-w-[410px] min-h-[60px] font-[700] text-[14px] text-[#505050] bg-[#FFFFFF] rounded-[12px] p-4 mt-6 border-0 focus:outline-none lg:ml-9'
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input type="text" placeholder='House Name' className='w-[90%] max-w-[410px] min-h-[60px] font-[700] text-[14px] text-[#505050] bg-[#FFFFFF] rounded-[12px] p-4 mt-6 border-0 focus:outline-none lg:ml-9'/>
            <input type="text" placeholder='LandMark' className='w-[90%] max-w-[410px] min-h-[60px] font-[700] text-[14px] text-[#505050] bg-[#FFFFFF] rounded-[12px] p-4 mt-6 border-0 focus:outline-none lg:ml-9'/>
            <input type="number" placeholder='Pincode' className='w-[90%] max-w-[410px] min-h-[60px] font-[700] text-[14px] text-[#505050] bg-[#FFFFFF] rounded-[12px] p-4 mt-6 border-0 focus:outline-none lg:ml-9'/>
            <input type="text" placeholder='District' className='w-[90%] max-w-[410px] min-h-[60px] font-[700] text-[14px] text-[#505050] bg-[#FFFFFF] rounded-[12px] p-4 mt-6 border-0 focus:outline-none lg:ml-9'/>
            <input type="text" placeholder='State' className='w-[90%] max-w-[410px] min-h-[60px] font-[700] text-[14px] text-[#505050] bg-[#FFFFFF] rounded-[12px] p-4 mt-6 border-0 focus:outline-none lg:ml-9'/>
          </div>
        </div>

        <p className='font-[700] text-[14px] sm:text-[15px] text-[#000000] flex lg:pl-[70px] lg:pt-[50px] sm:pt-10 pl-20'>
          #Other info as required1
        </p>

        {/* Buttons */}
        <div className='flex justify-end flex-col w-full max-w-[1475px]'>
          <div className='flex flex-col sm:flex-row justify-center gap-3 mt-5 sm:justify-end p-5 lg:pr-0'>
            <button 
              type="button"
              className='w-full sm:max-w-[168px] h-[60px] border-[1px] border-[#4D44B5] rounded-[40px] text-[#4D44B5] text-[18px] font-[400] cursor-pointer'
            >
              Save As Draft
            </button>

            <button
              type="button"
              onClick={() => navigate("/Users")} 
              className='w-full sm:max-w-[112px] h-[60px] bg-[#4D44B5] rounded-[40px] text-[#FFFFFF] text-[18px] font-[400] cursor-pointer'
            >
              Submit
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

export default StudentDetails;
