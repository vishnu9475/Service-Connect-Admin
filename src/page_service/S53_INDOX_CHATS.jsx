import { useState } from "react";
import { useNavigate } from "react-router-dom"; // --- 1. Import useNavigate ---
import Header from "../componants_service/arjun/Header";
import ChatList from "../componants_service/arjun/ChatList";
import CallList from "../componants_service/arjun/CallContact";
import ToolBox from "../componants_service/arjun/ToolBox"; 

function S53_INDOX_CHATS() {
  const [activeTab, setActiveTab] = useState("Chat");
  const navigate = useNavigate(); // --- 2. Initialize navigation ---

  // --- 3. Function to handle navigation ---
  const handleChatClick = (chatId) => {
    navigate(`/S54_INDOX_CHATS_MESSAGES/${chatId}`);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#c3c4c6] overflow-x-hidden relative">
      
      <div className="sticky top-0 z-40 w-full shadow-sm bg-black">
        <Header
          title="Chat"
          showBack={true}
          showSearch={true}
          showPhone={false}
          showFilter={true}
          showMenu={false}
          theme="black"
        />
      </div>

      <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
        
        <div className="flex justify-center mt-6 mb-4 px-4 sm:px-6">
          <div className="flex w-full max-w-3xl 2xl:max-w-4xl bg-gray-600 rounded-[30px] p-1.5 shadow-inner">
            <button
              onClick={() => setActiveTab("Chat")}
              className={`flex-1 text-center py-3 rounded-[30px] transition-all duration-300 font-semibold text-sm md:text-base
                ${activeTab === "Chat" ? "bg-white text-black shadow-md" : "text-black hover:bg-gray-500/10"}`}
            >
              Chat
            </button>

            <button
              onClick={() => setActiveTab("Calls")}
              className={`flex-1 text-center py-3 rounded-[30px] transition-all duration-300 font-semibold text-sm md:text-base
                ${activeTab === "Calls" ? "bg-white text-black shadow-md" : "text-black hover:bg-gray-500/10"}`}
            >
              Call
            </button>
          </div>
        </div>

        <main className="flex-1 px-4 sm:px-6 pb-40 flex justify-center overflow-y-auto scrollbar-hide">
          <div className="w-full max-w-3xl 2xl:max-w-4xl bg-[#d1d2d4] rounded-3xl shadow-lg border border-gray-100/20 overflow-hidden h-fit transition-all duration-300">
            {activeTab === "Chat" ? (
              <div className="animate-fadeIn">
                {/* --- 4. Pass navigation handler to ChatList --- */}
                <ChatList onChatClick={handleChatClick} />
              </div>
            ) : (
              <div className="animate-fadeIn">
                <CallList />
              </div>
            )}
          </div>
        </main>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
        <div className="w-full max-w-[2560px]">
           <ToolBox />
        </div>
      </div>
    </div>
  );
}

export default S53_INDOX_CHATS;