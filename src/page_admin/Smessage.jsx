import React from 'react';
import Header from "../componants/arjun/Header";
import ReceivedMsg from "../componants/arjun/Recieved_msg"; 
import SendMsg from "../componants/arjun/Send_msg";
import ChatForm from "../componants/arjun/Chat_Form";

function S54_INDOX_CHATS_MESSAGES() {
  const messages = [
    { id: 1, type: "received", text: "Hi, Nicholas Good Evening 😊", time: "10:45" },
    { id: 2, type: "sent", text: "Hi, Morning too Ronald", time: "15:29" },
    { id: 3, type: "received", text: "OMG, This is Amazing..", time: "13:59" },
  ];

  return (
    /* h-screen is essential here to keep the footer pinned while the middle scrolls */
    <div className="flex flex-col h-screen bg-[#F8F9FE] w-full overflow-hidden transition-all duration-300">
      
      {/* 1. Header Component
          White theme often looks better for deep-chat views to reduce visual fatigue.
      */}
      <div className="sticky top-0 z-30 w-full shadow-sm bg-white">
        <Header
          title="suresh kumar"
          showBack={true}
          showSearch={true}
          showPhone={true}
          showFilter={false}
          showMenu={false}
          theme="white"
        />
      </div>

      {/* 2. Scrollable Message List
          bg-white/50 gives a slight frosted glass look over the background.
      */}
      <main className="flex-1 overflow-y-auto pb-6 custom-scrollbar bg-white/30 w-full">
        
        {/* Date Divider */}
        <div className="flex justify-center my-8">
          <span className="bg-[#E8F1FF] text-[#4F46B5] px-6 py-1.5 rounded-full text-xs font-bold shadow-sm border border-[#D0E0FF]">
            Today
          </span>
        </div>

        {/* 4K Safety Wrapper for Chat Bubbles:
            - max-w-4xl (approx 900px) is the limit for chat readability.
            - px-4 for mobile, scaling up to px-20 for desktop.
        */}
        <div className="px-4 md:px-10 lg:px-20 max-w-4xl 2xl:max-w-5xl mx-auto w-full flex flex-col space-y-2"> 
          {messages.map((msg) => (
            msg.type === "received" ? (
              <ReceivedMsg key={msg.id} text={msg.text} time={msg.time} /> 
            ) : (
              <SendMsg key={msg.id} text={msg.text} time={msg.time} />
            )
          ))}
        </div>
      </main>

      {/* 3. Footer Input Form
          We cap this at the same width as the messages (max-w-4xl) 
          so the 'Send' button stays aligned with the message bubbles.
      */}
      <footer className="bg-white border-t border-gray-100 w-full pt-2 pb-4 px-4">
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
          <ChatForm /> 
        </div>
      </footer>
    </div>
  );
}

export default S54_INDOX_CHATS_MESSAGES;