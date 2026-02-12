import React from 'react'
import { CgProfile } from "react-icons/cg";
import { AiOutlineUserAdd } from "react-icons/ai"
import { CiMail } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";

const ProfileBlock = () => {
  // Using a high-quality profile image from the web
  const profileImage = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop";

  return (
    /* 1. Changed max-w-[322px] to w-full to ensure it fills the grid column.
      2. Changed min-h-[627px] to h-full so it matches its container's height on desktop 
         but behaves naturally on mobile.
      3. Changed rounded-[20px] to rounded-xl for consistency with your other brand components.
    */
    <div className='w-full h-full bg-white rounded-xl p-7 shadow-sm border border-gray-100'>
      
      {/* Profile Image with Pink Border */}
      <div className='w-[185px] h-[184px] rounded-full border-[3px] border-[#ED2590] flex items-center justify-center m-auto overflow-hidden'>
        <img 
          src={profileImage} 
          alt="Profile" 
          className='rounded-full w-[173px] h-[173px] object-cover'
        />
      </div>

      {/* Name and Location */}
      <div className='text-center mt-8 mb-4'>
        <p className='text-[24px] font-[700] leading-[24px] text-[#303972]'>
          Yash Ghori
        </p>
        <p className='font-[400] text-[#A098AE] leading-[24px] mt-4'>
          Ahmedabad, Gujarat
        </p>
        <p className='font-[400] text-[16px] text-[#A098AE] mt-2'>
          India
        </p>
      </div>

      {/* Divider */}
      <div className='border-t border-gray-100 w-full my-6' />

      {/* Information List */}
      <div className='flex flex-col gap-6 px-2'>
        
        <div className='flex items-center gap-4'>
          <div className='p-2 bg-[#F5F6FF] rounded-full'>
            <CgProfile className='w-[20px] h-[20px] text-[#4D44B5]' />
          </div>
          <p className='text-[16px] font-[600] text-[#303972]'>
            Administrator
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <div className='p-2 bg-[#F5F6FF] rounded-full'>
            <AiOutlineUserAdd className='w-[20px] h-[20px] text-[#4D44B5]' />
          </div>
          <p className='text-[16px] font-[600] text-[#303972]'>
            +91 7048144000
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <div className='p-2 bg-[#F5F6FF] rounded-full'>
            <CiMail className='w-[20px] h-[20px] shrink-0 text-[#4D44B5]' />
          </div>
          <p className='text-[16px] font-[600] text-[#303972] truncate'>
            yghori@asite.com
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <div className='p-2 bg-[#F5F6FF] rounded-full'>
            <GrGallery className='w-[20px] h-[20px] shrink-0 text-[#4D44B5]' />
          </div>
          <p className='text-[16px] font-[600] text-[#303972]'>
            PDT - I
          </p>
        </div>

      </div>
    </div>
  )
}

export default ProfileBlock;