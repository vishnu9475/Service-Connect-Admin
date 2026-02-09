import React from 'react'

const ProfileEditForm = () => {
  return (
    <div className='w-full max-w-[763px] bg-[#FDFEFF] flex flex-col p-6 rounded-[20px]'>
      {/* Header */}
      <p className='font-[600] text-[#0E2040] font-Nunito text-[30px] mb-8 drop-shadow-md'>
        Edit Profile
      </p>

      {/* Row 1: Name */}
      <div className='flex flex-col sm:flex-row gap-6 mb-8'>
        <div className='relative flex-1'>
          <input type="text" id="FirstName" placeholder=' ' className='px-4 pt-6 pb-2 peer w-full h-[58px] border rounded-[8px] text-[#5E6366] text-[16px]' />
          <label htmlFor="FirstName" className='absolute left-4 top-4 text-[#5E6366] text-[12px] peer-placeholder-shown:top-4 peer-focus:top-1 peer-not-placeholder-shown:top-1 transition-all duration-400'>
            First Name
          </label>
        </div>

        <div className='relative flex-1'>
          <input type="text" id="LastName" placeholder=' ' className='px-4 pt-6 pb-2 peer w-full h-[58px] border rounded-[8px] text-[#5E6366] text-[16px]' />
          <label htmlFor="LastName" className='absolute left-4 top-4 text-[#5E6366] text-[12px] peer-placeholder-shown:top-4 peer-focus:top-1 peer-not-placeholder-shown:top-1 transition-all duration-400'>
            Last Name
          </label>
        </div>
      </div>

      {/* Row 2: Contact Information */}
      <div className='flex flex-col sm:flex-row gap-6 mb-8'>
        <div className='relative flex-1'>
          <input type="email" id="email" placeholder=' ' className='px-4 pt-6 pb-2 peer w-full h-[58px] border rounded-[8px] text-[#5E6366] text-[16px]' />
          <label htmlFor="email" className='absolute left-4 top-4 text-[#5E6366] text-[12px] peer-placeholder-shown:top-4 peer-focus:top-1 peer-not-placeholder-shown:top-1 transition-all duration-400'>
            Email Address
          </label>
        </div>

        <div className='flex flex-[1] gap-2'>
          <select className='w-[80px] border h-[58px] rounded-[8px] text-[#5E6366] px-2'>
            <option value="">+91</option>
            <option value="">+21</option>
            <option value="">+1</option>
          </select>
          <div className='relative flex-1'>
            <input type="number" id="number" placeholder=' ' className='px-4 pt-6 pb-2 peer w-full h-[58px] border rounded-[8px] text-[#5E6366] text-[16px]' />
            <label htmlFor="number" className='absolute left-4 top-4 text-[#5E6366] text-[12px] peer-placeholder-shown:top-4 peer-focus:top-1 peer-not-placeholder-shown:top-1 transition-all duration-400'>
              Phone Number
            </label>
          </div>
        </div>
      </div>

      {/* Row 3: Account & Nationality */}
      <div className='flex flex-col sm:flex-row gap-6 mb-8'>
        <div className='relative flex-1'>
          <input type="password" id="password" placeholder=' ' className='px-4 pt-6 pb-2 peer w-full h-[58px] border rounded-[8px] text-[#5E6366] text-[16px]' />
          <label htmlFor="password" className='absolute left-4 top-4 text-[#5E6366] text-[12px] peer-placeholder-shown:top-4 peer-focus:top-1 peer-not-placeholder-shown:top-1 transition-all duration-400'>
            Password
          </label>
        </div>

        <div className='relative flex-1'>
          <select id="Country" className='px-4 pt-6 pb-2 peer w-full h-[58px] border rounded-[8px] text-[#5E6366] text-[16px] bg-transparent'>
            <option value="">India</option>
            <option value="">Russia</option>
            <option value="">America</option>
          </select>
          <label htmlFor="Country" className='absolute left-4 top-4 text-[#5E6366] text-[12px] peer-focus:top-1 peer-not-placeholder-shown:top-1 transition-all duration-400'>
            Nationality
          </label>
        </div>
      </div>

      {/* Row 4: Professional Details */}
      <div className='flex flex-col sm:flex-row gap-6 mb-8'>
        <div className='relative flex-1'>
          <select id="designation" className='px-4 pt-6 pb-2 peer w-full h-[58px] border rounded-[8px] text-[#5E6366] text-[16px] bg-transparent'>
            <option value="">Ui Intern</option>
            <option value="">MERN</option>
            <option value="">Python Django</option>
          </select>
          <label htmlFor="designation" className='absolute left-4 top-4 text-[#5E6366] text-[12px] peer-focus:top-1 peer-not-placeholder-shown:top-1 transition-all duration-400'>
            Designation
          </label>
        </div>
        <div className='flex-1 hidden sm:block'></div> {/* Spacer for symmetry */}
      </div>

      {/* Footer: Action */}
      <div className='flex justify-center sm:justify-end mt-4'>
        <button className='w-full sm:w-[195px] h-[58px] bg-[#5570F1] rounded-[12px] text-[#FFFFFF] font-semibold text-[18px] cursor-pointer hover:bg-[#4458c7] transition-colors'>
          Save 
        </button>
      </div>
    </div>
  )
}

export default ProfileEditForm