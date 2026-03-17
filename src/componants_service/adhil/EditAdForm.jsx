import React from 'react'

export default function EditAdForm() {
  return (
        <div className="h-full bg-gray-200 flex justify-center">
            <div className="w-full bg-white rounded-2xl shadow-lg p-4">

            <div className="flex gap-4 justify-around items-center mt-3">
          
          <div className='w-[50%] flex justify-center items-center'>
            <span className="w-full text-center bg-amber-300 text-small font-medium text-gray-700 ">
            Add your image <span className="text-lg font-bold">+</span>
          </span>
          </div>

          <div className='w-[50%]'>
            <button className="w-full bg-green-900 text-small text-white rounded-full font-semibold py-2 cursor-pointer hover:bg-green-950">
            Status
          </button>
          </div>
        </div>

            <div className='h-40 md:h-60 rounded-2xl overflow-hidden mt-5'>
                <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Banner Ads"
            className="w-full h-full object-cover"
          />
            </div>

        <div className="w-[90%] mx-auto space-y-3 mt-5">
  <input
    type="text"
    placeholder="Title"
    className="w-full p-3 md:p-3 lg:p-4 bg-white rounded-xl shadow-md border border-gray-300 outline-none font-semibold focus:ring-1 focus:ring-gray-200"
  />

  <input
    type="text"
    placeholder="Description"
    className="w-full p-3 md:p-3 lg:p-4 bg-white rounded-xl shadow-md border border-gray-300 outline-none font-semibold focus:ring-1 focus:ring-gray-200"
  />
</div>

<div>
    118
</div>

<div className="w-[90%] mx-auto space-y-3 mt-5">

    <p className='text-small font-semibold'>Target Area</p>
  <select className="w-full p-3 md:p-3 lg:p-4 bg-white rounded-xl shadow-md border border-gray-300 font-semibold text-gray-600 outline-none focus:ring-1 focus:ring-gray-200">
        <option value="5">upto 5 km radius</option>
        <option value="2">upto 2 km radius</option>
        <option value="10">upto 10 km radius</option>
        <option value="20">upto 20 km radius</option>
      </select>

      <div>
        <p className='text-small font-semibold'>Total Number of days : 30</p>
      <p className='text-small font-semibold'>Estimated price : Rs 350/-</p>
      </div>
</div>

<div className=" w-[70%] md:w-[80%] mx-auto space-y-3 mt-5">
    <button className="w-full bg-gray-900 text-white rounded-full font-semibold py-2 cursor-pointer hover:bg-green-950">
            Status
          </button>
</div>





                  </div>
        </div>

  )
}
