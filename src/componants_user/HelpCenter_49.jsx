import React, { useState } from 'react'
import Faq_50 from './Faq_50';
import ContactUs_51 from './ContactUs_51';

const HelpCenter_49 = () => {

    const [activeTab, setActiveTab] = useState("FAQ");
    return (
       
        <div className="p-4 flex justify-center">
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">

        {/* TOP BUTTONS */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("FAQ")}
            className={`w-1/2 py-3 text-sm font-semibold text-center
              border-b-2 transition cursor-pointer
              ${
                activeTab === "FAQ"
                  ? "bg-gray-200 border-gray-600 text-black"
                  : "bg-white border-transparent text-gray-600"
              }`}
          >
            FAQ
          </button>

          <button
            onClick={() => setActiveTab("CONTACT")}
            className={`w-1/2 py-3 text-sm font-semibold text-center
              border-b-2 transition cursor-pointer
              ${
                activeTab === "CONTACT"
                  ? "bg-gray-200 border-gray-600 text-black"
                  : "bg-white border-transparent text-gray-600"
              }`}
          >
            CONTACT US
          </button>
        </div>

        {/* CONTENT */}
        <div >
          {activeTab === "FAQ" && <Faq_50 />}
          {activeTab === "CONTACT" && <ContactUs_51 />}
        </div>

      </div>
    </div>


    )
}

export default HelpCenter_49;
