 
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
 

export default function ServiceLeadDetails() {
      const [activeTab, setActiveTab] = useState("request");
  
  return (

        <div className=" mt-1 mb-0 flex justify-center items-center bg-gray-300">
                <div className="w-[100%] md:w-[95%] mt-1 flex gap-5 flex-col justify-center  items-center self-center">
                  <div className="flex flex-col w-[100%] p-4">
                    <div className="flex items-start p-2 gap-3">
                        <img
              className="w-20 h-20 rounded-2xl object-cover shadow"
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              alt=""
            />
                       <div className="flex flex-col mt-3 ">
                         <h3 className="font-medium leading-tight">Nazari Isac</h3>
                            <div className="flex items-center gap-1 text-sm text-gray-700">
                  <FaLocationDot className="text-black-600 " />
                  <p className="font-medium">North Paravoor</p>
                </div>
                       </div>
                    </div>
                    <p className="mt-1 ml-3 mb-4 font-medium text-gray-700 ">Booking id : 12aa21w</p>
    
                    <div className="flex bg-white rounded-t-2xl shadow-1xl border-b-1 border-gray-600">
                      <div 
                         onClick={() => setActiveTab("request")}
              className={`w-1/2 py-3 text-center text-sm font-semibold uppercase tracking-wide cursor-pointer transition
                ${
                  activeTab === "request"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Request</div>                       
                        
                        <div 
                         onClick={() => setActiveTab("address")}
              className={`w-1/2 py-3 text-center text-sm font-semibold uppercase tracking-wide cursor-pointer transition
                ${
                  activeTab === "address"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Address</div>
                    </div>
                    




                    <div className="bg-white rounded-b-2xl mb-0 shadow-1xl h-122 md:h-118">
                        











{activeTab === "request" && (
              <div className="space-y-2 p-5 md:p-8">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    Title
                  </p>
                  <p className="text-sm font-medium text-gray-900 ml-4">
                    Bulb Change
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    Description
                  </p>
                  <p className="text-sm font-medium text-gray-700 ml-4 leading-relaxed">
                    Bulb Change standard assistance <br />
                    additional details added <br />
                    resolved tasks added
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Images & Videos
                  </p>

                  <div className="flex gap-3 ml-4 overflow-x-auto">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        className="w-20 h-20 rounded-xl object-cover shadow cursor-pointer hover:scale-105 transition"
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                        alt=""
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                    Availability
                  </p>

                  <div className="ml-4 mb-3">
                    <span className="text-xs font-semibold text-gray-500">
                      From
                    </span>
                    <div className="flex gap-2 mt-2">
                      <div className="bg-gray-100 px-3 py-2 rounded-lg shadow-sm text-sm font-medium">
                        Jun 10, 2024
                      </div>
                      <div className="bg-gray-100 px-3 py-2 rounded-lg shadow-sm text-sm font-medium">
                        9:41 AM
                      </div>
                    </div>
                  </div>

                  <div className="ml-4">
                    <span className="text-xs font-semibold text-gray-500">
                      To
                    </span>
                    <div className="flex gap-2 mt-2">
                      <div className="bg-gray-100 px-3 py-2 rounded-lg shadow-sm text-sm font-medium">
                        Jun 10, 2024
                      </div>
                      <div className="bg-gray-100 px-3 py-2 rounded-lg shadow-sm text-sm font-medium">
                        9:41 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}







                {activeTab === "address" && (
              <div className=" space-y-5 p-5 md:p-8">
                {[
                  ["Name", "Shanavas"],
                  ["Address", "Karthika vilasam kokkunnu"],
                  ["PIN", "306581"],
                  ["Landmark", "Sanjaram Road"],
                  ["Phone", "0987654321"],
                  ["Email", "asdf@gmail.com"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 transition"
                  >
                    <span className="text-xs uppercase tracking-wide text-gray-500 w-24">
                      {label}
                    </span>
                    <span className="text-sm font-medium text-gray-900 truncate">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            )}

                
                    </div>


          <div className="w-full flex flex-col mt-2">

            

            {activeTab === "request" && (
    <Link
      to="/80"
      className="bg-red-800 hover:bg-red-900 w-full md:w-[85%] h-10 md:h-12 my-3 text-white font-semibold rounded-full flex items-center justify-center self-center"
    >
      Decline
    </Link>
  )}


     { activeTab === "address" && (
    <div className="flex gap-4 w-full md:w-[85%] self-center mt-2">

      <a
        href="tel:0987654321"
        className="flex-1 h-10 md:h-12 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full flex items-center justify-center gap-2"
      >
        <FaPhoneAlt /> Call
      </a>

      <a
        href="sms:0987654321"
        className="flex-1 h-10 md:h-12 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-full flex items-center justify-center gap-2"
      >
        <MdMessage /> Message
      </a>

    </div>
    )}

          </div>

    

    
                </div>
                </div>
            </div>
  )
} 