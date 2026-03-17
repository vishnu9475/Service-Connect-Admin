// import React from 'react'

// const CallContact_56 = () => {
//   return (
//     <div>CallContact_56</div>
//   )
// }

// export default CallContact_56;

import React, { useState } from 'react'

const CallContact_56 = () => {

    const [activeTab, setActiveTab] = useState("call");


    return (
        <div className="min-h-screen bg-gray-300 flex items-start justify-center pt-6">
            {/* Tabs Container */}
            <div className="bg-[#6f6662] rounded-full p-1 flex  w-lg">

                {/* Chat */}
                <button
                    onClick={() => setActiveTab("chat")}
                    className={`flex-1 py-2 text-sm font-semibold rounded-full transition
            ${activeTab === "chat"
                            ? "bg-white text-black shadow"
                            : "text-white"
                        }`}
                >
                    Chat
                </button>

                {/* Call */}
                <button
                    onClick={() => setActiveTab("call")}
                    className={`flex-1 py-2 text-sm font-semibold rounded-full transition
            ${activeTab === "call"
                            ? "bg-white text-black shadow"
                            : "text-white"
                        }`}
                >
                    Call
                </button>

            </div>
        </div>)
}

export default CallContact_56;