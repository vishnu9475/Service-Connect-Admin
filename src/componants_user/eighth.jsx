import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Component8({
  titleText = "RESET PASSWORD",
  description = "Enter your details below",
  inputs = [
    { type: "password", placeholder: "Password" },
    { type: "password", placeholder: "Confirm Password" },
  ],
  onSubmit = () => {},
}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    inputs.reduce((acc, input) => ({ ...acc, [input.placeholder]: "" }), {})
  );

  // 👁 state for showing/hiding password
  const [showPassword, setShowPassword] = useState({
    Password: false,
    "Confirm Password": false,
  });

  const handleChange = (placeholder, value) => {
    setFormData({ ...formData, [placeholder]: value });
  };

  const handleSubmit = () => {
    if (formData["Password"] !== formData["Confirm Password"]) {
      alert("Passwords do not match");
      return;
    }
    onSubmit(formData);
    navigate("/");
  };

  const togglePassword = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field],
    });
  };

  return (
    <div className="w-full bg-primary flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full py-6">
        <h2 className="text-center font-semibold mb-3">{titleText}</h2>
        <p className="text-gray-900 text-sm mb-8 text-center">{description}</p>

        {inputs.map((input, idx) => (
          <div key={idx} className="relative mb-4">
            <CiLock className="absolute left-3 top-3 text-gray-300 w-5 h-5" />

            <input
              type={
                showPassword[input.placeholder] ? "text" : "password"
              }
              name="new-password"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              placeholder={input.placeholder}
              value={formData[input.placeholder]}
              onChange={(e) =>
                handleChange(input.placeholder, e.target.value)
              }
              className="w-full pl-10 pr-10 py-3 rounded-md text-sm bg-[#6C6460] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            />

            {/* 👁 Eye Icon */}
            <div
              className="absolute right-3 top-3 text-white cursor-pointer"
              onClick={() => togglePassword(input.placeholder)}
            >
              {showPassword[input.placeholder] ? (
                <FaEye size={18} />
              ) : (
                <FaEyeSlash size={18} />
              )}
            </div>
          </div>
        ))}

        <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto px-2 py-2 mb-2 space-y-3 mt-4">
          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 px-6 rounded-full shadow-md relative hover:bg-[#232738] transition"
          >
            <span>Submit</span>
            <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FaArrowRight className="text-[#1D1F2A]" size={14} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}