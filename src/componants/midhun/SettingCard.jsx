import React from "react";
import { useState } from "react";

export default function SettingCard() {
  const [formData, setFormData] = useState({
    smsDriver: "Twilio",
    twilioSid: "AC8f4bfd69c98ad28c8f3a1dc8a8cca836",
    nexmoKey: "7e29c3ce",
    twilioAuthToken: "********************",
    nexmoSecret: "**************",
    twilioSender: "+14154461617",
    nexmoSender: "ABC",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("SMS Settings Updated Successfully");
  };

  return (
    <div className=" bg-gray-100 p-6 flex justify-center">
      
      {/* RESPONSIVE SCROLL WRAPPER */}
      <div className="w-full  px-4">
        <div className="w-full max-w-[900px] bg-white rounded shadow-sm p-6 mx-auto">

          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1 h-5 bg-blue-400 rounded-sm"></span>
            <h2 className="text-lg font-semibold text-gray-700">
              Update SMS Setting
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* SMS Driver */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                SMS Driver
              </label>
              <select
                name="smsDriver"
                value={formData.smsDriver}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-2 text-sm"
              >
                <option value="Twilio">Twilio</option>
                <option value="Nexmo">Nexmo</option>
              </select>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Twilio SID
                </label>
                <input
                  type="text"
                  name="twilioSid"
                  value={formData.twilioSid}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Nexmo Key
                </label>
                <input
                  type="text"
                  name="nexmoKey"
                  value={formData.nexmoKey}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Twilio Auth Token
                </label>
                <input
                  type="password"
                  name="twilioAuthToken"
                  value={formData.twilioAuthToken}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Nexmo Secret
                </label>
                <input
                  type="password"
                  name="nexmoSecret"
                  value={formData.nexmoSecret}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Twilio Sender Number
                </label>
                <input
                  type="text"
                  name="twilioSender"
                  value={formData.twilioSender}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Nexmo Sender Name
                </label>
                <input
                  type="text"
                  name="nexmoSender"
                  value={formData.nexmoSender}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-2 text-sm"
                />
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-green-400 hover:bg-green-500 text-white text-sm px-6 py-2 rounded shadow"
              >
                ✓ Update
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
