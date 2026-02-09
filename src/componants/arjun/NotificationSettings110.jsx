import React, { useState } from "react";



const NotificationSettings110 = ({ settings }) => {
  const [values, setValues] = useState(
    settings.reduce((acc, item) => {
      acc[item.id] = item.enabled;
      return acc;
    }, {})
  );

  const toggleSetting = (id) => {
    setValues((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 py-6">
      <div className="max-w-md mx-auto space-y-6">
        {settings.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >
            {/* Label */}
            <span className="text-sm sm:text-base text-gray-800">
              {item.label}
            </span>

            {/* Toggle */}
            <button
              onClick={() => toggleSetting(item.id)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                values[item.id] ? "bg-gray-900" : "bg-gray-200"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                  values[item.id] ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NotificationSettings110;
