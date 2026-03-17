import React, { useState } from 'react'
import Faq from './Faq';
import ContactUs from './ContactUs';

const HelpCenter = () => {

    const [activeTab, setActiveTab] = useState("FAQ");


    return (
        <div className="min-h-screen  flex justify-center">
            <div className="w-full">

                {/* TOP BUTTONS */}
                <div className="flex">
                    {/* FAQ TAB */}
                    <button
                        onClick={() => setActiveTab("FAQ")}
                        className={`w-1/2 py-3 text-sm font-semibold text-center
              border-b-2 transition
              ${activeTab === "FAQ"
                                ? "bg-gray-300 border-gray-600 text-black"
                                : "bg-white border-transparent text-gray-600"
                            }`}
                    >
                        FAQ
                    </button>

                    {/* CONTACT TAB */}
                    <button
                        onClick={() => setActiveTab("CONTACT")}
                        className={`w-1/2 py-3 text-sm font-semibold text-center
              border-b-2 transition
              ${activeTab === "CONTACT"
                                ? "bg-gray-300 border-gray-600 text-black"
                                : "bg-white border-transparent text-gray-600"
                            }`}
                    >
                        CONTACT US
                    </button>
                </div>

                {/* CONTENT AREA */}
                <div>
          {activeTab === "FAQ" && <Faq />}
          {activeTab === "CONTACT" && <ContactUs />}
        </div>

            </div>
        </div>)
}

export default HelpCenter;