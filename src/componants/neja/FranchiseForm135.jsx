import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiChevronDown,
  FiClock,
  FiEye, 
  FiEyeOff,
} from "react-icons/fi";

import { SlCalender } from "react-icons/sl";

const FranchiseForm135 = ({mode = "new",onPay}) => {
  const [fromDate, setFromDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toDate, setToDate] = useState("");
  const [toTime, setToTime] = useState("");
  const [photo, setPhoto] = useState(null);
  const [about, setAbout] = useState("");
  const [service, setService] = useState("");
  
  return (
    <div className="w-full p-4 sm:p-6 md:px-6 lg:px-6 xl:pl-8 xl:pr-20">
      <div className="w-full bg-white rounded-2xl p-6 sm:p-8">

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT – PHOTO */}
        <div className="w-full lg:w-56">
           <p className="text-sm font-semibold text-[#303972] mb-2">
              Photo *
           </p>
           <label className="relative h-44 w-full bg-[#C1BBEB] rounded-md flex items-center justify-center text-sm text-gray-700 cursor-pointer text-center overflow-hidden">

           <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
              const file = e.target.files[0];
               if (file) {
                  setPhoto(URL.createObjectURL(file));
                }
              }}
            />

          {photo ? (
           <img
             src={photo}
             alt="Selected"
             className="absolute inset-0 w-full h-full object-cover"/>
             ) : (
            <span>
               Drag and drop or <br /> click here to select file
            </span>
           )}
          </label>
       </div>


          {/* RIGHT – FORM */}
          <div className="flex-1 space-y-4">

            <Input placeholder="Full Name" />
            <Input placeholder="Address" />

            <IconInput icon={<SlCalender />} placeholder="Date of Birth" type="date" />

            <IconInput icon={<FiMail />} placeholder="Email" type="email" />

            <IconInput icon={<FiPhone />} placeholder="Primary Phone" type="tel" />
            <IconInput icon={<FiPhone />} placeholder="Alternate Phone" type="tel" />

            <Input placeholder="Revenue" type="number" />
            <Input placeholder="Branches" type="number" />
            <Input placeholder="Service Providers" type="number" />

            <PasswordInput placeholder="Password" />
            <PasswordInput placeholder="Confirm Password" />

            <Input placeholder="Land mark" />
            <Input placeholder="Pin code" type="number" />
            <Input placeholder="District" />
            <Input placeholder="State" />

            <Select
              placeholder="Verification ID"
              options={[
                { label: "Aadhar", value: "aadhar" },
                { label: "PAN", value: "pan" },
                { label: "Passport", value: "passport" },
              ]}
            />

            <Input placeholder="Verification No" />
            <Input placeholder="Community Name" />
            <div>
  <textarea
    value={about}
    onChange={(e) => {
      if (e.target.value.length <= 200) {
        setAbout(e.target.value);
      }
    }}
    placeholder="About (max 200 characters)"
    className="w-full h-24 p-4 bg-[#F3F4FF] rounded-md outline-none text-sm resize-none"
  />
  <p className="text-xs text-right text-gray-500">
    {about.length}/200
  </p>
</div>

{/* SERVICE (500 CHAR LIMIT) */}
<div>
  <textarea
    value={service}
    onChange={(e) => {
      if (e.target.value.length <= 500) {
        setService(e.target.value);
      }
    }}
    placeholder="Service Details (max 500 characters)"
    className="w-full h-32 p-4 bg-[#F3F4FF] rounded-md outline-none text-sm resize-none"
  />
  <p className="text-xs text-right text-gray-500">
    {service.length}/500
  </p>
</div>

            {/* DATE & TIME SECTION */}
            <div className="mt-6 space-y-4">

              {/* FROM */}
              <div>
                <p className="text-sm font-semibold mb-2">From</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <DateBox value={fromDate} onChange={setFromDate} />
                  <TimeBox value={fromTime} onChange={setFromTime} />
                </div>
              </div>

              {/* TO */}
              <div>
                <p className="text-sm font-semibold mb-2">To</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <DateBox value={toDate} onChange={setToDate} />
                  <TimeBox value={toTime} onChange={setToTime} />
                </div>
              </div>
            </div>

            {/* AMOUNT */}
            <p className="text-center text-2xl font-medium mt-6">
              Amount To Pay : <span className="font-medium">150000 Rs</span>
            </p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4 mt-10">
          
          <button 
          className="px-6 py-2 bg-red-600 text-white rounded-full" onClick={() => {
      alert("Deleted!");
    }}>
            Delete
          </button>
         
          
           {mode === "new" && (
          <button className="px-6 py-2 border border-indigo-500 text-indigo-600 rounded-full"onClick={() => {
      alert("Saved as draft!");
    }}>
            Save as Draft
          </button>
         )}
          <button onClick={onPay} className="px-6 py-2 bg-indigo-600 text-white rounded-full">
            {mode === "edit" ? "Update" : "Submit & Pay"}
           
          </button>
          
        </div>
      </div>
    </div>
  );
};

/* ---------- Reusable Inputs ---------- */

const Input = ({ placeholder, type = "text" }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full h-12 px-4 bg-[#F3F4FF] rounded-md outline-none text-sm"
  />
);

const IconInput = ({ icon, placeholder, type = "text" }) => (
  <div className="flex items-center bg-[#F3F4FF] rounded-md h-12 px-4 gap-3">
    {icon}
    <input
      type={type}
      placeholder={placeholder}
      className="bg-transparent outline-none text-sm w-full"
    />
  </div>
);
const PasswordInput = ({ placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center bg-[#F3F4FF] rounded-md h-12 px-4 gap-3">
      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        className="bg-transparent outline-none text-sm w-full"
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="text-gray-500 hover:text-gray-700"
      >
        {show ? <FiEyeOff /> : <FiEye />}
      </button>
    </div>
  );
};
const Select = ({ placeholder, options = [] }) => (
  <select className="w-full h-12 px-4 bg-[#F3F4FF] rounded-md outline-none text-sm">
    <option value="">{placeholder}</option>
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

const DateBox = ({ value, onChange }) => (
  <label className="flex w-full items-center gap-2 bg-[#F3F4FF] px-3 py-2 rounded-md">
    <SlCalender />
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-transparent outline-none text-sm w-full"
    />
  </label>
);

const TimeBox = ({ value, onChange }) => (
  <label className="flex w-full items-center gap-2 bg-[#F3F4FF] px-3 py-2 rounded-md">
    <FiClock />
    <input
      type="time"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-transparent outline-none text-sm w-full"
    />
  </label>
);

export default FranchiseForm135;
