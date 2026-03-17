import React, { useState } from "react";



// --- SUB-COMPONENT: Date Time Group ---

const DateTimeGroup = ({

  label,

  dateValue,

  timeValue,

  onDateChange,

  onTimeChange,

}) => {

  return (

    <div className="flex flex-col gap-2 w-full">

      <span className="text-gray-600 text-sm lg:text-md font-medium ml-1">

        {label}

      </span>



      <div className="flex items-center gap-3">

        <div className="flex-1 bg-white border rounded-md px-3 py-2 flex flex-col justify-between text-sm">

          <label className="text-[10px] text-gray-500 leading-none lg:text-[15px]">

            Date

          </label>

          <input

            type="date"

            value={dateValue}

            onChange={(e) => onDateChange(e.target.value)}

            className="outline-none w-full bg-transparent font-semibold mt-1"

          />

        </div>



        <div className="bg-white border rounded-md px-3 py-2 flex flex-col text-sm w-36">

          <label className="text-[10px] text-gray-500 leading-none lg:text-[15px]">

            Time

          </label>

          <input

            type="time"

            value={timeValue}

            onChange={(e) => onTimeChange(e.target.value)}

            className="outline-none w-full bg-transparent font-semibold mt-1"

          />

        </div>

      </div>

    </div>

  );

};



// --- MAIN COMPONENT ---

// ✅ ADDED: onConfirm prop here

const ServiceRequest = ({ onConfirm }) => {

  const [formData, setFormData] = useState({

    title: "Change Bulb",

    description: "",

    fromDate: "2023-10-25",

    fromTime: "12:00",

    toDate: "2023-10-25",

    toTime: "13:00",

  });



  const handleConfirm = () => {

    // ✅ Logic: If the parent passed onConfirm, call it!

    if (onConfirm) {

      onConfirm();

    } else {

      alert("Booking Confirmed!");

    }

  };



  return (

    <div className="w-full bg-white">

      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-18 lg:px-30 space-y-4">

        <div className="mx-auto px-2 py-2 mb-2 mt-5 space-y-6">

         

          {/* Profile Section */}

          <div className="flex justify-start items-center gap-8 mb-4">

            <img

              src="https://i.pravatar.cc/150?img=11"

              alt="User"

              className="w-14 h-14 rounded-full object-cover border border-gray-400"

            />

            <div>

              <h2 className="text-lg font-semibold text-gray-900 lg:text-xl">Josh</h2>

              <p className="text-gray-500 text-sm">Electrification 💪</p>

            </div>

          </div>



          {/* Title Field */}

          <div>

             <p className="text-sm text-gray-600 mb-1 lg:text-md">Title</p>

             <div className="bg-white border rounded-md px-3 py-2 flex flex-col text-sm">

                <input

                    type="text"

                    value={formData.title}

                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}

                    className="outline-none w-full bg-transparent font-medium"

                />

             </div>

          </div>



          {/* Description Field */}

          <div>

            <p className="text-sm text-gray-600 mb-1 lg:text-md">Description</p>

            <div className="bg-white border rounded-md px-3 py-2 flex flex-col text-sm">

                <textarea

                    value={formData.description}

                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}

                    placeholder="Describe the task..."

                    className="w-full min-h-[80px] resize-none outline-none bg-transparent"

                />

            </div>

          </div>



          {/* Schedule Section */}

          <div className="space-y-4">

            <p className="text-gray-800 font-semibold lg:font-bold">Availability</p>

            <DateTimeGroup

              label="From"

              dateValue={formData.fromDate}

              timeValue={formData.fromTime}

              onDateChange={(val) => setFormData({ ...formData, fromDate: val, toDate: val })}

              onTimeChange={(val) => setFormData({ ...formData, fromTime: val })}

            />

            <DateTimeGroup

              label="To"

              dateValue={formData.toDate}

              timeValue={formData.toTime}

              onDateChange={(val) => setFormData({ ...formData, toDate: val })}

              onTimeChange={(val) => setFormData({ ...formData, toTime: val })}

            />

          </div>

        </div>



        {/* Button */}

        <div className="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[50%] mx-auto px-2 py-6">

          <button

            onClick={handleConfirm}

            className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition active:scale-95"

          >

            Confirm and Pay

          </button>

        </div>

      </div>

    </div>

  );

};



export default ServiceRequest;