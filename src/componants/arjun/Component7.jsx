import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


export default function Component7() {
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4">
      {/* Profile */}
      <div className="flex flex-col items-center mb-6">
        <div
          className="h-24 w-24 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-gray-400 transition"
          onClick={() => document.getElementById("fileInput").click()}
        >
          {image ? (
            <img src={image} alt="Profile" className="h-full w-full object-cover" />
          ) : (
            <span className="text-gray-600 text-4xl font-semibold">👤</span>
          )}
        </div>

        <input
          type="file"
          id="fileInput"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      {/* FORM */}
      <form className="w-full max-w-md space-y-4 flex flex-col items-center">
        <Input placeholder="Full Name" />
        <Input placeholder="Address" />
        <Input placeholder="Date of Birth" type="date" />
        <Input placeholder="Email" type="email" />

        {/* PHONE */}
        <PhoneInput
          country="us"
          value={phone}
          onChange={setPhone}
          inputProps={{ name: "phone", required: true }}

          // make it full width
          containerStyle={{ width: "100%" }}
          inputStyle={{ width: "100%" }}

          inputClass="!bg-[#6C6460] !text-white !px-4 !py-2 !rounded-lg !text-lg !border-none placeholder:!text-white focus:!outline-none focus:!ring-2 focus:!ring-gray-400"
          buttonClass="!bg-[#6C6460] !border-none !rounded-l-lg"
          dropdownClass="!bg-white !text-gray-900"
        />

        {/* Gender */}
        <select className="w-full bg-[#6C6460] text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400">
          <option className="text-gray-900">Male</option>
          <option className="text-gray-900">Female</option>
          <option className="text-gray-900">Other</option>
        </select>

        <Input placeholder="House Name" />
        <Input placeholder="Landmark" />
        <Input placeholder="Pin code" />
        <Input placeholder="District" />
        <Input placeholder="State" />

        {/* Button */}
        <button
          type="submit"
          className="mt-4 flex items-center justify-between w-full rounded-full bg-gray-900 px-6 py-2 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 relative"
        >
          <span>Continue</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 text-lg absolute right-4">
            <HiOutlineArrowRight />
          </span>
        </button>
      </form>
    </div>
  );
}

/* Reusable input */
function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-[#6C6460] text-white px-4 py-2 rounded-lg text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-400"
    />
  );
}