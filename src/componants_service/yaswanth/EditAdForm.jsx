


import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function EditAds({ onBack }) {
  const [status, setStatus] = useState(true);
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className=" bg-gray-200">
     

      {/* Body */}
      <div className="max-w mx-auto px-4 sm:px-6 md:px-18 lg:px-20 space-y-4 mr-2 ">
        
        
        {/* Top Row: Add Image + Status */}
        <div className="flex justify-between items-center mx-2.5">
          <label
            htmlFor="upload"
            className="text-gray-700 font-semibold cursor-pointer flex items-center gap-2 lg:text-lg"
          >
            Add your image <Plus size={18} className="text-gray-800" />
          </label>
          <input
            id="upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <button
            onClick={() => setStatus(!status)}
            className={`px-12 py-1.5 mt-2 rounded-full text-sm font-semibold ${
              status ? "bg-green-600 text-white" : "bg-gray-400 text-black"
            }`}
          >
            {"Active"}
          </button>
        </div>
 <div className=" mx-auto px-2 py-2 mb-2 mt-5 space-y-1 ">
        {/* Image Preview */}
        <div className="rounded-xl overflow-hidden shadow-md -mb-2">
          <img
            src={image}
            alt="Ad Preview"
            className="w-full h-36  md:h-60 lg:h-60 object-cover"
          />
        </div>
        
</div>
        {/* Title + Description */}
         <div className=" mx-auto px-2 py-2 mb-2 space-y-1">
       
          <input
            type="text"
            placeholder="Title"
            className="w-full border rounded-md px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:ring-gray-700 lg:text-lg"
          />
          <textarea
            placeholder="Description"
            rows={2}
            className="w-full border rounded-md px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:ring-gray-700 resize-none lg:text-lg"
          ></textarea>
        </div>
        

        {/* Schedule */}
        <div className="  mx-auto px-2 py-2 mb-2  space-y-1">
          <p className="text-gray-800 font-semibold mb-2 lg:font-bold">Schedule</p>

          {/* From Section */}
          <div>
            <p className="text-sm text-gray-600 mb-1 lg:text-md">From</p>
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
                 <label className="text-[10px] text-gray-500 leading-none  lg:text-[15px]">
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
            <p className="text-sm text-gray-600 mb-1  lg:text-md">To</p>
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
          <p className="text-gray-800">
            <strong>Total number of Days:</strong> 30
          </p>
          <p className="text-gray-800">
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