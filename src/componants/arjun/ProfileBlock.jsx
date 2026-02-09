import React from 'react'
import { CgProfile } from "react-icons/cg";
import { AiOutlineUserAdd } from "react-icons/ai"
import { CiMail } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";

const ProfileBlock = () => {
  // Using a high-quality profile image from the web
  const profileImage = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop";

  return (
    <div className='w-full max-w-[322px] min-h-[627px] bg-[#FDFEFF] rounded-[20px] p-7 shadow-sm border border-gray-100'>
      
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
        <p className='text-[24px] font-[700] font-Roboto leading-[24px] text-[#4B4B4B]'>
          Yash Ghori
        </p>
        <p className='font-[400] text-[#4B4B4B] leading-[24px] mt-4'>
          Ahmedabad, Gujarat
        </p>
        <p className='font-[400] text-[16px] text-[#4B4B4B] mt-2'>
          India
        </p>
      </div>

      {/* Divider */}
      <div className='border-t border-[#D9E6F7] w-full my-6' />

      {/* Information List */}
      <div className='flex flex-col gap-6 px-2'>
        
        <div className='flex items-center gap-4'>
          <CgProfile className='w-[24px] h-[24px] text-gray-500' />
          <p className='text-[16px] font-[400] text-[#4B4B4B]'>
            Administrator
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <AiOutlineUserAdd className='w-[24px] h-[24px] text-gray-500' />
          <p className='text-[16px] font-[400] text-[#4B4B4B]'>
            +91 7048144000
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <CiMail className='w-[24px] h-[24px] shrink-0 text-gray-500' />
          <p className='text-[16px] font-[400] text-[#4B4B4B] truncate'>
            yghori@asite.com
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <GrGallery className='w-[24px] h-[24px] shrink-0 text-gray-500' />
          <p className='text-[16px] font-[400] text-[#4B4B4B]'>
            PDT - I
          </p>
        </div>

      </div>
    </div>
  )
}

export default ProfileBlock;