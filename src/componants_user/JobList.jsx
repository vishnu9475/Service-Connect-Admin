import React, { useState, useRef } from 'react'
import JobItem from './JobItem';
import { useNavigate } from "react-router-dom";
import {IoGrid, IoBookmark, IoRefresh, IoCalendar, IoAdd, IoHelpCircle} from "react-icons/io5";

export default function JobLists() {
    const navigate = useNavigate();
    const [active, setActive] = useState("ongoing");
    const handleTabChange = (tab) => {
        setActive(tab);
        if (tab === "completed") navigate("/pageM33");
    };


    return (
        
        <div className='px-4 sm:px-8 py-4 bg-gray-100 min-h-screen'>
            {/* --- Content Wrapper --- */}
                
                {/* Toggle Logic */}
                <div className="max-w-md mx-auto mb-8">
                <div className="relative flex bg-gray-500 rounded-full p-1">
                    <div
                        className={`
                        absolute top-1 bottom-1 w-1/2 bg-white rounded-full
                        transition-all duration-300
                        ${active === "ongoing" ? "left-1" : "left-[49%]"}
                        `}
                    />

                    <button
                        onClick={() => handleTabChange("ongoing")}
                        className={`relative z-10 w-1/2 py-2 text-sm font-medium transition-colors
                        ${active === "ongoing" ? "text-black" : "text-white"}
                        `}
                    >
                        Ongoing
                    </button>

                    <button
                        onClick={() => handleTabChange("completed")}
                        className={`relative z-10 w-1/2 py-2 text-sm font-medium transition-colors
                        ${active === "completed" ? "text-black" : "text-white"}
                        `}
                    >
                        Completed
                    </button>
                </div>
                </div>

                {/* Grid Logic */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[75%] mx-auto px-4">
                    <JobItem /><JobItem />
                    <JobItem /><JobItem />
                </div>
        </div>
    )
}