
import AddLeadBalance from "./AddLeadBalance";

import serviceprovider_profile from "../../assets/person.jpg";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";
export default function  RegisteredService (props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Active");
  const navigate = useNavigate();
  const options = ["Active", "Disabled"];
const [showPopup, setShowPopup] = useState(false);
const [showLeadPopup, setShowLeadPopup] = useState(false);

  return (
    <div className="p-4 flex justify-center">
      <div className="bg-white w-[700px] h-auto rounded-3xl flex justify-between">
        <div className="p-2 text-center flex gap-2">
          <img
            src={serviceprovider_profile}
            alt="profile image"
            className="border border-none rounded-full size-15"
          />
          <div className="flex  flex-col  ">
            <div className="relative text-nowrap">
              <h1 className="text-sm md:text-md   lg:text-lg font-bold">
                {" "}
                {props.service_name}
                <span className=" inline-block px-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-square-pen-icon lucide-square-pen"  
                    
                   onClick={() => {
  if (props.service_disabled) {
    setShowPopup(true);      // show popup
  } else {
    navigate("/73");     // normal navigation
  }
}}
 
                    
                    
                    
                    // onClick={() => navigate("/page73")}
                  >
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                  </svg>
                </span>
              </h1>

              <div className=" text-xs md:text-sm lg:text-sm  absolute text-blue-500 text-md font-semibold">
                <span className="flex text-nowrap tracking-tight">
                  {" "}
                  {props.service_status}{" "}
                </span>
                <span
                 onClick={() => navigate("/addleadbalance")}
                className=" text-green-600 cursor-pointer hover:underline"> {props.lead_balance} </span>

                <span className="text-red-600 text-nowrap tracking-tight">
                  {" "}
                  {props.service_disabled}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm">
          <div className="relative w-25">
          
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between  mx-3 p-3 text-left border border-none  rounded-full  focus:outline-none"
            >
              <span className=" font-medium text-green-500">{selected}</span>
              <ChevronDown
                className={`size-4   text-green-500 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button> */}


<div className="relative flex-shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full  hover:bg-gray-100 transition text-sm"
          >
            <span
              className={`font-semibold ${
                selected === "Active" ? "text-green-600" : "text-red-600"
              }`}
            >
              {selected}
            </span>

            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              } ${
                selected === "Active" ? "text-green-600" : "text-red-600"
              }`}
            />
          </button>










         
            {/* {isOpen && (
              <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(false);
                    }}
                    className="px-4 py-3 cursor-pointer hover:bg-[#fdf8e1] text-red-600 transition-colors"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )} */}




{/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-28  rounded-xl shadow-lg overflow-hidden z-20">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                  className={`px-3 py-2 cursor-pointer text-sm font-medium hover:bg-gray-100 ${
                    option === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {option}
                </div>
              ))}


</div>)
}
</div>
          </div>
        </div>
      </div>
    
    
    
    
    
    
    
    
    
    
    
    
    {/* Disabled Popup */}
{showPopup && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-2xl p-6 w-[320px] text-center shadow-xl">

      <h2 className="font-semibold text-lg mb-2">
        Service Disabled
      </h2>

      <p className="text-sm text-gray-600 mb-4">
        Add lead balance to continue.
      </p>

      <div className="flex gap-3 justify-center">

        <button
          onClick={() => setShowPopup(false)}
          className="px-4 py-2 rounded-lg border"
        >
          Cancel
        </button>

        <button
         onClick={() => {
    setShowPopup(false);     // close disabled popup
    setShowLeadPopup(true);  // open AddLead popup
  }}
          className="px-4 py-2 rounded-lg bg-black text-white"
        >
          Add Balance
        </button>

      </div>
    </div>

 

 
 
 
  </div>

  
)}
{showLeadPopup && (
  <AddLeadBalance onClose={() => setShowLeadPopup(false)} />
)}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  );
};

