

// import React, { useState } from 'react'
// import person from "../assets/person.jpg"

// const BoostServiceForm = () => {

//   const [selectedValue, setSelectedValue] = useState('');

//   // Handler function to update the state when the selection changes
//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   const options = [
//     { value: 'upto 5km radius', label: 'upto 5km radius' },
//     { value: 'upto 3km radius', label: 'upto 3km radius' },
//     { value: 'upto 10km radius', label: 'upto 10km radius' },
//   ];
//   return (
//     <div className='pt-20 bg-gray-300 h-screen'>
//       <div className='flex items-center'>
//        <img className="w-15 h-15 p-1 rounded-full relative" src={person} alt="Bordered avatar"/>
//        <h1 className='ml-5 font-medium'>House Electrical</h1>
//         </div>
//         <h1 className='ml-2 font-medium'>Schedule</h1>
//         <label className='font-medium'>From</label>
//         <div>
//           <input type='date' className='bg-white p-2 rounded-lg w-1/2' />
//            <input type='time' className='bg-white p-2 rounded-lg  w-1/2' />
//         </div>
//          <label className='font-medium'>To</label>
//         <div>
//           <input type='date' className='bg-white p-2 rounded-lg w-1/2' />
//            <input type='time' className='bg-white p-2 rounded-lg  w-1/2' />
//         </div>
//         <h1 className='font-medium'>Target Area</h1>
//         <select className='bg-white rounded-lg mt-2 w-full h-10 p-1' value={selectedValue} onChange={handleChange} >
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//         <h1 className='mt-3 font-medium'>No of days : 30</h1>
//         <h1 className='font-medium'>Estimated price : Rs 350</h1>
//         <div className='flex justify-center'>
//         <button className='rounded-full  bg-gray-900 text-white p-3 w-90 h-15 mt-5'>Confirm and pay</button>
//         </div>
//     </div>
//   )
// }

// export default BoostServiceForm


// import React, { useState } from 'react';

// function DropdownList() {
//   // State to store the selected value, initialized to an empty string
//   const [selectedValue, setSelectedValue] = useState('');

//   // Handler function to update the state when the selection changes
//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   const options = [
//     { value: 'upto 5km radius', label: 'upto 5km radius' },
//     { value: 'upto 3km radius', label: 'upto 3km radius' },
//     { value: 'upto 10km radius', label: 'upto 10km radius' },
//   ];

//   return (
//     <div>
//       jhcgkhg
//       <h1>jhfutd</h1>
//       <select  value={selectedValue} onChange={handleChange} >
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default DropdownList;

import React, {  } from "react";
import { Link } from "react-router-dom";

export default function EditAds() {
  


 
  return (
    <div>
     

    
        {/* Profile Section */}
          <div className="max-w-full mx-auto px-4 sm:px-6 md:px-18 lg:px-30 space-y-4">
             <div className=" mx-auto px-2 py-2 mb-2 mt-5 space-y-1">
        <div className="flex justify-start items-center gap-8 mb-4">
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=100"
            alt="Service"
            className="w-14 h-14 rounded-full object-cover border border-gray-400"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 lg:text-xl">
              House Electrical
            </h2>
          </div>
        </div>

        {/* Schedule */}
       
          <p className="text-gray-800 font-semibold mb-2  lg:font-bold">Schedule</p>

          {/* From Section */}
          <div>
            <p className="text-sm text-gray-600 mb-1 lg:text-md">From</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-white border rounded-md px-3 py-2 flex flex-col justify-between text-sm">
                 <label className="text-[10px] text-gray-500 leading-none lg:text-[15px] ">
                        Date
                      </label>
                <input
                  type="date"
                  defaultValue="2020-12-12"
                  className="outline-none w-full bg-transparent"
                />
              </div>
              <div className="bg-white border rounded-md px-3 py-2 flex flex-col text-sm w-36">
                 <label className="text-[10px] text-gray-500 leading-none lg:text-[15px] ">
                        Time
                      </label>
                <input
                  type="time"
                  defaultValue="12:00"
                  className="outline-none w-full bg-transparent"
                />
                
              </div>
            </div>
          </div>

          {/* To Section */}
          <div className="mt-3">
            <p className="text-sm text-gray-600 mb-1 lg:text-md">To</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-white border rounded-md px-3 py-2 flex flex-col justify-between text-sm">
                 <label className="text-[10px] text-gray-500 leading-none lg:text-[15px]">
                        Date
                      </label>
                <input
                  type="date"
                  defaultValue="2020-12-12"
                  className="outline-none w-full bg-transparent"
                />
              </div>
              <div className="bg-white border rounded-md px-3 py-2 flex flex-col text-sm w-36">
                <label className="text-[10px] text-gray-500 leading-none lg:text-[15px]">
                        Time
                      </label>
                <input
                  type="time"
                  defaultValue="12:00"
                  className="outline-none w-full bg-transparent"
                />
            
              </div>
            </div>
         
       

        {/* Target Area */}
        <div>
          <p className="text-gray-800 font-semibold mb-2 lg:text-md">Target Area</p>
          <select className="w-full border rounded-md px-3 py-2 text-sm bg-white outline-none focus:ring-2 focus:ring-gray-700 lg:text-md">
            <option>upto 5 km radius</option>
            <option>upto 10 km radius</option>
            <option>upto 25 km radius</option>
          </select>
        

        {/* Summary */}
        <div className="text-sm space-y-1 lg:text-md ">
          <p className="text-gray-800 ">
            <strong>Total number of Days:</strong> 30
          </p>
          <p className="text-gray-800 ">
            <strong>Estimated Price:</strong> Rs 350/-
          </p>
        </div>
         </div>
         </div>
          </div>

        {/* Confirm Button */}
         <div className=" w-[90%] sm:w-[60%] md:w-[50%] lg:W-[50%] mx-auto px-2 py-2  ">
        <Link to="/missing147"><button className="cursor-pointer w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition">
          Confirm and Pay
        </button></Link>
      </div>
    </div>
    </div>
  );
}