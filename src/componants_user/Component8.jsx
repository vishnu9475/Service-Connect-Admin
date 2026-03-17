import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function Component8({
  inputs = [],
  heading,
  buttonText = "Continue",
  theme = "white",
}) {
  const isDark = theme === "black";
  const bgColor = isDark ? "bg-[#1C1B1F]" : "bg-[#D9D9DB]";
  const inputBg = isDark
    ? "bg-gray-700 text-white"
    : "bg-stone-400 text-gray-800";
  const placeholderColor = isDark
    ? "placeholder-gray-400"
    : "placeholder-gray-500";

  // form values
  const [values, setValues] = useState(
    inputs.reduce((acc, curr) => ({ ...acc, [curr.placeholder]: "" }), {})
  );

  // popup states
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("success"); // success | error

  const handleChange = (placeholder, value) => {
    setValues({ ...values, [placeholder]: value });
  };

  const handleContinue = () => {
    const pwd = values["Password"];
    const confirm = values["Confirm Password"];

    if (!pwd || !confirm) {
      setPopupType("error");
      setPopupMessage("Please fill all fields");
      setShowPopup(true);
      return;
    }

    if (pwd !== confirm) {
      setPopupType("error");
      setPopupMessage("Passwords do not match ❌");
      setShowPopup(true);
      return;
    }

    setPopupType("success");
    setPopupMessage("Password Updated Successfully ✔️");
    setShowPopup(true);
  };

  return (
    <div className={`w-full min-h-screen flex items-center justify-center py-5 ${bgColor}`}>
      <div className="w-full md:px-40 px-6">
        <h2
          className={`text-center text-lg font-medium mb-6 ${
            isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {heading}
        </h2>

        {inputs.map((input) => (
          <div key={input.placeholder} className="relative mb-4 w-full">
            <CiLock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type={input.type}
              placeholder={input.placeholder}
              value={values[input.placeholder]}
              onChange={(e) =>
                handleChange(input.placeholder, e.target.value)
              }
              className={`w-full rounded-xl pl-11 pr-4 py-3 text-sm ${inputBg} ${placeholderColor} focus:outline-none`}
            />
          </div>
        ))}

        <button
          type="button"
          onClick={handleContinue}
          className="w-full flex items-center justify-end gap-5 px-5 py-3 rounded-full bg-black text-white font-medium"
        >
          <span className="w-[50%] flex items-center md:text-lg  text-sm">
            {buttonText}
          </span>
          <span className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center ml-2">
            <HiOutlineArrowRight />
          </span>
        </button>
      </div>

      {/* POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl w-[90%] max-w-sm p-6 text-center shadow-lg">
            <div
              className={`text-lg font-semibold mb-3 ${
                popupType === "error"
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {popupType === "error" ? "Error" : "Success"}
            </div>

            <p className="text-gray-700 text-sm mb-5">
              {popupMessage}
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className={`w-full py-2 rounded-lg font-medium transition ${
                popupType === "error"
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-green-600 hover:bg-green-700 text-white"
              }`}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
