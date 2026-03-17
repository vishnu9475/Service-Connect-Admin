import React, { useRef } from 'react'
import { BiCalendar, BiCamera, BiEnvelope, } from 'react-icons/bi';
import { FaArrowRight } from "react-icons/fa";

import person from "../../assets/person.jpg"
import { Image } from 'lucide-react';

const UserProfileEditForm = () => {

    return (
        <div className="flex justify-center px-6 md:px-8 lg:px-10 py-8 font-sans w-full bg-gray-200">
            <div className="max-w-xl bg-gray-100 rounded-2xl p-6 lg:p-10 shadow-2xl shadow-gray-400 ">

              <label>
          <div className='cursor-pointer bg-gray-200 w-20 h-20 md:w-25 md:h-25 lg:w-25 lg:h-25 rounded-full shadow-lg shadow-gray-400 relative mx-auto  border-cyan-700'>
            <img src={person} alt="Profile image" className='rounded-full'/>
          <div className=' flex  items-center justify-center h-7 w-9 bg-cyan-50  rounded-md  shadow-[0_4px_6px_rgba(75,75,75,0.45)] absolute -right-1  bottom-1'>
           <Image className='text-cyan-700 '/>
          </div>
          <input type="file" className='hidden' />
        </div>
        </label>

                {/* Form Fields */}
                <div className="space-y-4 mt-4 ">

                    {/* Full Name */}
                    <div className="bg-white px-4 py-3 rounded-xl
                          shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-transparent outline-none text-sm md:text-md md:px-2 lg:text-md lg:px-3  "
                        />
                    </div>

                    {/* Nick Name */}
                    <div className="bg-white px-4 py-3 rounded-xl
                          shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                        <input
                            type="text"
                            placeholder="Nick Name"
                            className="w-full bg-transparent outline-none text-sm md:text-md md:px-2 lg:text-md lg:px-3"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl
                          shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                        <BiCalendar className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Date of Birth"
                            className="w-full bg-transparent outline-none text-sm md:text-md md:px-2 lg:text-md lg:px-3"
                        />
                    </div>

                   
                    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl
                          shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                        <BiEnvelope className="text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-transparent outline-none text-sm md:text-md md:px-2 lg:text-md lg:px-3"
                        />
                    </div>

                    <div
                        className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl
             shadow-[0_4px_4px_rgba(0,0,0,0.1)]"
                    >
                        {/* Country code */}
                        <select
                            className="bg-transparent outline-none text-sm md:text-md lg-text-md pr-2 border-r border-gray-300"
                        >
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+971">🇦🇪 +971</option>
                        </select>

                        {/* Phone number */}
                        <input
                            type="tel"
                            placeholder="724-848-1225"
                            className="w-full bg-transparent outline-none text-sm md:text-md md:px-2 lg:text-md lg:px-3 pl-2"
                        />
                    </div>

                    {/* Gender */}
                    <div className="bg-white px-4 py-3 rounded-xl
                          shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                        <select className="w-full bg-transparent outline-none text-sm md:text-md md:px-2 lg:text-md lg:px-3 text-gray-400">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Student */}
                    <div className="bg-white px-4 py-3 rounded-xl
                          shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                        <input
                            type="text"
                            placeholder="Student"
                            className="w-full bg-transparent outline-none text-sm md:text-md md:px-2 lg:text-md lg:px-3"
                        />
                    </div>

                </div>

                {/* Button */}
                <button
                    className="relative w-full mt-6 bg-[#1E2235] text-white py-3 rounded-full  flex items-center justify-center cursor-pointer"  >
                    Update

                    {/* Arrow */}
                    <span className="absolute right-2 bg-white text-black rounded-full  w-9 h-9 flex items-center justify-center" >
                        <FaArrowRight />
                    </span>
                </button>

            </div>
        </div>
    )
}

export default UserProfileEditForm;