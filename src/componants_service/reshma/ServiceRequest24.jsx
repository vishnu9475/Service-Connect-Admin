import { Calendar, Clock, Image as ImageIcon } from "lucide-react";
import { ArrowRight, CircleAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ServiceRequest24() {
  const tiles =
    "bg-gray-300 text-xs sm:text-sm font-semibold rounded-md px-3 py-1 shadow-md";
  const fieldName = "text-xs sm:text-sm text-gray-500";

  const [appointmentDate, setAppointmentDate] = useState("2024-01-10");
  const [appointmentTime, setAppointmentTime] = useState("09:45");

  return (
    <div className="min-h-screen bg-gray-200 font-sans px-3 sm:px-0">

      {/* Main Card */}
      <div className="bg-gray-300 px-4 pt-4 pb-6 rounded-b-3xl shadow-md 
                      w-full mx-auto">
                      

        {/* Profile */}
        <div className="flex items-center gap-3">
          <img
            src="/profile.png"
            alt="profile"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Nazrul Islam
            </p>
            <p className="text-xs text-gray-500">Electrician ⚡</p>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-2">
          Booking Id : 123421
        </p>

        {/* Title */}
        <div className="mt-4">
          <label className="text-xs text-gray-500">Title</label>
          <div className="bg-white rounded-lg px-4 py-2 mt-1 text-sm shadow-sm">
            Change Bulb
          </div>
        </div>

        {/* Description */}
        <div className="mt-4">
          <label className="text-xs text-gray-500">Description</label>
          <div className="bg-white rounded-lg px-4 py-2 mt-1 text-sm shadow-sm text-gray-600">
            Filled dfdfd sdfdsfdsfd
          </div>
        </div>

        {/* Images */}
        <div className="mt-4">
          <label className="text-xs text-gray-500">Images & Videos</label>
          <div className="flex gap-2 sm:gap-3 mt-2 flex-wrap">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg flex items-center justify-center shadow-sm"
              >
                <ImageIcon className="text-gray-400" size={20} />
              </div>
            ))}
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg flex items-center justify-center shadow-sm text-xl font-bold text-gray-500">
              +
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="mt-4">
          <label className="text-xs text-gray-500">Availability</label>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm text-xs w-full sm:w-auto">
              <Calendar size={14} />
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="outline-none bg-transparent text-xs w-full"
              />
            </div>

            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm text-xs w-full sm:w-auto">
              <Clock size={14} />
              <input
                type="time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="outline-none bg-transparent text-xs w-full"
              />
            </div>
          </div>
        </div>
      </div>

    

       <button className="mt-5 w-[80%] sm:w-[50%] md:w-[50%] mx-auto 
                           bg-gray-900 text-white py-2 rounded-full flex justify-center px-6 relative">
          Complete Payment
                  
         
        </button>

      {/* Invoice Section */}
      <div className="bg-gray-300 px-4 sm:px-8 py-3 
                      w-full mx-auto my-4">
                      {/* sm:w-[80%] md:w-[65%] lg:w-[55%]  */}

        <div className="bg-white p-4 rounded-xl shadow-md">

          <h2 className="font-bold">Appointment</h2>

          <div className="flex flex-wrap gap-2 justify-center mt-2">
            <div className={tiles}>
              {new Date(appointmentDate).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </div>
            <div className={tiles}>
              {new Date(`1970-01-01T${appointmentTime}`).toLocaleTimeString(
                "en-US",
                {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                }
              )}
            </div>
          </div>

          <h4 className="text-sm font-semibold mt-3">Invoice</h4>

          {/* Responsive Grid */}
          <div className="grid grid-cols-5 gap-2 text-center mt-2 text-xs sm:text-sm">
            <div className={fieldName}>SI.no</div>
            <div className={fieldName}>Description</div>
            <div className={fieldName}>Qty</div>
            <div className={fieldName}>Price</div>
            <div className={fieldName}>Total</div>

            <div className={fieldName}>1</div>
            <div className={fieldName}>Bulb Change</div>
            <div className={fieldName}>1</div>
            <div className={fieldName}>300</div>
            <div className={fieldName}>300</div>
          </div>

          <div className="flex justify-end gap-2 mt-6 text-sm">
            <div className={fieldName}>Grand Total</div>
            <div className={fieldName}>300</div>
          </div>

          <p className={fieldName}>Terms and conditions</p>
          <p className={fieldName}>Valid up to 1 month</p>

          <div className="flex gap-2 items-center mt-2">
            <p className="text-sm text-red-600">Additional Requirement</p>
            <CircleAlert className="text-red-600" size={16} />
          </div>

          <ul className="text-sm text-gray-500 px-6 list-disc">
            <li>Provide Ladder</li>
            <li>Bulb should be provided</li>
          </ul>
        </div>

        {/* Buttons */}
        <button className="mt-5 w-full sm:w-[60%] md:w-[50%] mx-auto 
                           bg-gray-900 text-white py-2 rounded-full flex justify-center px-6 relative">
          Complete Payment
          <span className="bg-white text-gray-950 rounded-full w-8 h-8 flex items-center justify-center absolute right-1 top-1">
            <ArrowRight />
          </span>
        </button>

        <Link to="/page30">
          <button className="mt-4 w-full sm:w-[60%] md:w-[50%] mx-auto 
                             bg-red-900 text-white py-2 rounded-full flex justify-center px-6 relative">
            Raise a Complaint
            <span className="bg-white text-red-900 rounded-full w-8 h-8 flex items-center justify-center absolute right-1 top-1">
              <ArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
