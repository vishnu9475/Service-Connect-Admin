// import React from 'react'

// const Faq_50 = () => {
//   return (
//     <div>Faq_50</div>
//   )
// }

// export default Faq_50;

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = ["General", "Account", "Payment", "Service"];

const faqs = {
    General: [
        {
            q: "How do I manage my notifications?",
            a: "To manage notifications, go to Settings, select Notification Settings, and customize your preferences."
        },
        {
            q: "How do I start a guided meditation session?",
            a: "Navigate to the meditation section and choose a guided session."
        },
        {
            q: "How do I join a support group?",
            a: "Visit the community tab and select available support groups."
        },
        {
            q: "Is my data safe and private?",
            a: "Yes, your data is encrypted and securely stored."
        }
    ],
    Account: [
        { q: "How do I update my profile?", a: "Go to profile settings to update your information." },
        { q: "How do I update my profile?", a: "Go to profile settings to update your information." },
        { q: "How do I update my profile?", a: "Go to profile settings to update your information." }

    ],
    Payment: [
        { q: "How do I update my profile?", a: "Go to profile settings to update your information." },
        { q: "How do I update my profile?", a: "Go to profile settings to update your information." },
        {
            q: "Is my data safe and private?",
            a: "Yes, your data is encrypted and securely stored."
        }],
    Service: [
        {
            q: "How do I manage my notifications?",
            a: "To manage notifications, go to Settings, select Notification Settings, and customize your preferences."
        },
        {
            q: "How do I start a guided meditation session?",
            a: "Navigate to the meditation section and choose a guided session."
        },
        {
            q: "How do I join a support group?",
            a: "Visit the community tab and select available support groups."
        },
        {
            q: "Is my data safe and private?",
            a: "Yes, your data is encrypted and securely stored."
        }
    ]
};

const Faq_50 = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="min-h-100 bg-gray-100 p-4 flex justify-center">
            {/* <div className="w-full max-w-md"> */}
            <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">


                {/* Category Pills */}
                <div className="flex gap-3 mb-4 overflow-x-auto ">
                    {categories.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setOpenIndex(null);
                            }}
                            className={`px-5 py-2 rounded-full text-sm font-medium
                transition whitespace-nowrap cursor-pointer
                ${activeTab === tab
                                    ? "bg-black text-white"
                                    : "bg-white text-gray-600 border"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Accordion */}
                <div className="space-y-3">
                    {faqs[activeTab].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl px-4 py-3 shadow"
                        >
                            <button
                                className="w-full flex justify-between items-center text-left"
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            >
                                <span className="text-sm font-medium text-gray-800">
                                    {item.q}
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform
                    ${openIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>

                            {openIndex === index && (
                                <p className="mt-2 text-sm text-gray-500">
                                    {item.a}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Faq_50;
