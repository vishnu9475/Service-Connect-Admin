import React from 'react'
import { BiPaperclip } from 'react-icons/bi';
import { BsMicFill } from "react-icons/bs";

const Chat_Form = () => {
    return (
        <div>
            <div className="px-9 py-3">
                <div className="flex items-center gap-3 bg-[#F7FAFF] rounded-full px-4 py-2
                      shadow-[0_4px_4px_0_rgba(0,0,0,0.15)]">

                    {/* Input */}
                    <input
                        type="text"
                        placeholder="Message..."
                        className="flex-1 bg-transparent outline-none text-sm text-gray-700
                     placeholder-gray-400"
                    />

                    {/* Attach icon */}
                    <button className="text-gray-500">
                        <BiPaperclip size={20} />
                    </button>

                    {/* Mic button */}
                    <button className="bg-gray-900 text-white rounded-full p-3">
                        <BsMicFill size={18} />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Chat_Form;