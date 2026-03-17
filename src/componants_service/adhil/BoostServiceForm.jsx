import React from 'react'

export default function BoostServiceForm() {
  return (
    <div className='w-full h-full bg-gray-200 flex flex-col item-center'>
            <div className="flex items-center self-center mt-10 gap-3 ">
                    <img
            src="https://i.pravatar.cc/100"
            className="w-20 h-20 md:w-25 md:h-25 rounded-full"
            alt="profile"
          />
          <h4 className='text-center text-xl md:text-2xl font-semibold'>House Electrical</h4>
        </div>



        <div className="w-[90%] self-center gap-5 mt-7">

    <p className='text-small lg:text-xl font-semibold my-5'>Target Area</p>
  <select className="w-full p-3 mb-3 h-12 lg:h-16  text-xsm lg:text-xl  bg-white rounded-xl shadow-md border border-gray-300 font-semibold text-gray-600 outline-none focus:ring-1 focus:ring-gray-200">
        <option value="5">upto 5 km radius</option>
        <option value="2">upto 2 km radius</option>
        <option value="10">upto 10 km radius</option>
        <option value="20">upto 20 km radius</option>
      </select>

      <div>
        <p className='text-xsm lg:text-xl lg:text-md font-semibold'>Total Number of days : 30</p>
      <p className='text-xsm lg:text-xl font-semibold'>Estimated price : Rs 350/-</p>
      </div>
</div>

<button className="w-[90%] md:w-[80%] self-center my-10 lg:h-16 bg-gray-900 text-white rounded-full font-semibold py-2 cursor-pointer hover:bg-green-950">
            Status
          </button>

    </div>
  )
}

