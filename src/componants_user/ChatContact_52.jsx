import React, { useState } from 'react'
import ChatContact52 from './ChatContact52';
import CallContact56 from './CallContact56';

const ChatContact_52 = () => {

    const [activeTab, setActiveTab] = useState("chat");


    return (
        // <div className="min-h-screen bg-gray-300 flex items-start justify-center pt-6">
        //     {/* Tabs Container */}
        //     <div className="bg-[#6f6662] rounded-full p-1 flex  w-lg">

        //         {/* Chat */}
        //         <button
        //             onClick={() => setActiveTab("chat")}
        //             className={`flex-1 py-2 text-sm font-semibold rounded-full transition
        //     ${activeTab === "chat"
        //                     ? "bg-white text-black shadow"
        //                     : "text-white"
        //                 }`}
        //         >
        //             Chat
        //         </button>

        //         {/* Call */}
        //         <button
        //             onClick={() => setActiveTab("call")}
        //             className={`flex-1 py-2 text-sm font-semibold rounded-full transition
        //     ${activeTab === "call"
        //                     ? "bg-white text-black shadow"
        //                     : "text-white"
        //                 }`}
        //         >
        //             Call
        //         </button>

        //     </div>
        // </div>


        <div className="min-h-screen bg-gray-300 pt-6">
            {/* Tabs */}
            <div className="bg-[#6f6662] rounded-full p-1 flex w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
                <button
                    onClick={() => setActiveTab("chat")}
                    className={`flex-1 py-2 text-sm font-semibold rounded-full transition cursor-pointer
            ${activeTab === "chat"
                            ? "bg-white text-black shadow"
                            : "text-white"}`}
                >
                    Chat
                </button>

                <button
                    onClick={() => setActiveTab("call")}
                    className={`flex-1 py-2 text-sm font-semibold rounded-full transition cursor-pointer
            ${activeTab === "call"
                            ? "bg-white text-black shadow"
                            : "text-white"}`}
                >
                    Call
                </button>
            </div>

            {/* Content under tabs */}
            {activeTab === "chat" && <ChatContact52 />}
            {activeTab === "call" && <CallContact56 />}
        </div>

    )
}

export default ChatContact_52;