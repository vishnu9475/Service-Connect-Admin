import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { AiOutlineUserAdd } from "react-icons/ai"
import { CiMail } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";

// Ensure this path matches your folder structure (../../ moves from arjun/componants to src)
import changePhotoIcon from "../../assets/images.png"; 

const ProfileBlock = () => {
  // 1. SET STATE FOR PROFILE IMAGE
  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop");

  // 2. HANDLER TO UPDATE IMAGE
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary URL for the selected file
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className='w-full h-full bg-white rounded-xl p-7 shadow-sm border border-gray-100'>
      
      {/* Profile Image Wrapper */}
      <div className='relative w-[185px] h-[184px] m-auto'>
        
        {/* Main Profile Picture (Updates via State) */}
        <div className='w-full h-full rounded-full border-[3px] border-[#ED2590] flex items-center justify-center overflow-hidden'>
          <img 
            src={profileImage} 
            alt="Profile" 
            className='rounded-full w-[173px] h-[173px] object-cover'
          />
        </div>

        {/* 3. THE CLICKABLE ICON (alert1.jpeg) */}
        <label 
          htmlFor="file-upload"
          className='absolute bottom-2 right-2 w-12 h-12 bg-white rounded-full border-2 border-gray-100 shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform overflow-hidden'
        >
          <img 
            src={changePhotoIcon} 
            alt="Change Icon" 
            className='w-full h-full object-cover' 
          />
          {/* Hidden input to trigger logic */}
          <input 
            type="file" 
            id="file-upload" 
            className='hidden' 
            accept="image/*" 
            onChange={handleImageChange} 
          />
        </label>
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

      <div className='border-t border-gray-100 w-full my-6' />

      {/* Information List */}
      <div className='flex flex-col gap-6 px-2'>
        <div className='flex items-center gap-4'>
          <div className='p-2 bg-[#F5F6FF] rounded-full text-[#4D44B5]'>
            <CgProfile size={20} />
          </div>
          <p className='text-[16px] font-[600] text-[#303972]'>Administrator</p>
        </div>

        <div className='flex items-center gap-4'>
          <div className='p-2 bg-[#F5F6FF] rounded-full text-[#4D44B5]'>
            <AiOutlineUserAdd size={20} />
          </div>
          <p className='text-[16px] font-[600] text-[#303972]'>+91 7048144000</p>
        </div>

        <div className='flex items-center gap-4'>
          <div className='p-2 bg-[#F5F6FF] rounded-full text-[#4D44B5]'>
            <CiMail size={20} />
          </div>
          <p className='text-[16px] font-[600] text-[#303972] truncate'>yghori@asite.com</p>
        </div>

        <div className='flex items-center gap-4'>
          <div className='p-2 bg-[#F5F6FF] rounded-full text-[#4D44B5]'>
            <GrGallery size={20} />
          </div>
          <p className='text-[16px] font-[600] text-[#303972]'>PDT - I</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileBlock;