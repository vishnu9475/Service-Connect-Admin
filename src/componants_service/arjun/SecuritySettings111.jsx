import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import hook

const SecuritySettings111 = () => {
  const navigate = useNavigate(); // 2. Initialize navigate

  const toggles = [
    { id: "rem", label: "Remember Me", enabled: true },
    { id: "bio", label: "Biometric ID", enabled: true },
    { id: "face", label: "Face ID", enabled: false }
  ];

  const actions = [
    { id: "pin", label: "Change PIN" },
    { id: "pass", label: "Change Password" }
  ];

  const [values, setValues] = useState(
    toggles.reduce((acc, item) => {
      acc[item.id] = item.enabled;
      return acc;
    }, {})
  );

  const toggleHandler = (id) => {
    setValues((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // 3. Create a handler for the action buttons
  const handleActionClick = (id) => {
    if (id === "pass") {
      navigate("/SRESET_PASSWORD"); // This matches the path in your App.js
    } else if (id === "pin") {
      // You can add logic for Change PIN here later
      console.log("Change PIN clicked");
    }
  };

  return (
    <section className="flex-1 w-full bg-white flex flex-col px-6 md:px-20 py-10">
      <div className="w-full max-w-screen-xl mx-auto flex-1 flex flex-col justify-between">
        
        <div className="space-y-10">
          {toggles.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-6">
              <span className="text-xl md:text-2xl font-medium text-gray-800">{item.label}</span>
              <button
                onClick={() => toggleHandler(item.id)}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  values[item.id] ? "bg-black" : "bg-gray-200"
                }`}
              >
                <span className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    values[item.id] ? "translate-x-8" : ""
                  }`}
                />
              </button>
            </div>
          ))}

          <button className="w-full flex items-center justify-between text-xl md:text-2xl font-medium py-6 text-gray-800 border-b border-gray-100">
            <span>Google Authenticator</span>
            <span className="text-6xl text-black font-bold leading-none">›</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-16 pb-6">
          {actions.map((btn) => (
            <button
              key={btn.id}
              onClick={() => handleActionClick(btn.id)} // 4. Attach the click handler
              className="
                flex-1 py-5 rounded-2xl font-bold text-lg md:text-xl
                bg-gray-100 text-black 
                border-2 border-transparent
                transition-all duration-300
                hover:bg-black hover:text-white
              "
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySettings111;