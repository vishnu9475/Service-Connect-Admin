import React, { useState, useRef } from 'react'
import { BiPaperclip } from 'react-icons/bi';
import { BsMicFill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";

const Chat_Form = () => {

    const [message, setMessage] = useState("");
    const fileInputRef = useRef(null);

    // Send Message
    const handleSend = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        console.log("Message:", message);
        setMessage("");
    };

    // Open file picker
    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    // File selected
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log("Selected File:", file.name);
            // Upload logic can go here
        }
    };

    return (
        <div>
            <div className="px-9 py-3">
                <form
                    onSubmit={handleSend}
                    className="flex items-center gap-3 bg-[#F7FAFF] rounded-full px-4 py-2
                    shadow-[0_4px_4px_0_rgba(0,0,0,0.15)]"
                >

                    {/* Input */}
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message..."
                        className="flex-1 bg-transparent outline-none text-sm text-gray-700
                        placeholder-gray-400"
                    />

                    {/* Hidden File Input */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    {/* Attach icon */}
                    <button
                        type="button"
                        onClick={handleFileClick}
                        className="text-gray-500"
                    >
                        <BiPaperclip size={20} />
                    </button>

                    {/* Show Mic OR Send */}
                    {message.trim() ? (
                        <button
                            type="submit"
                           className="bg-gray-500 text-white rounded-full p-3 hover:bg-gray-600 transition"
                        >
                            <IoSend size={18} />
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="bg-gray-900 text-white rounded-full p-3"
                        >
                            <BsMicFill size={18} />
                        </button>
                    )}

                </form>
            </div>
        </div>
    )
}

export default Chat_Form;