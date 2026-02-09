import React from "react";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";
import FullMessagesPage from "../componants/arjun/Fmessages";

const Mviewmore = () => {
  return (
    /* Outer layout with overflow protection */
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      
      {/* Sidebar - Remains fixed on desktop, hidden on mobile */}
      <AdminSideMenu113 />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        
        {/* 4K Safety Wrapper: Ensures the chat doesn't stretch to 3800px wide */}
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
          
          <AdminMain114
            title="MESSAGES"
            userName="Nabila"
            userRole="Admin"
            showSearch={true}
          >
            {/* 1. Dynamic padding: Scale from p-2 on mobile to lg:p-10 on 4K
                2. items-center: Keeps the chat centered if it hits the max-width
            */}
            <div className="p-2 sm:p-4 lg:p-6 2xl:p-10 flex flex-col items-center flex-1">
              
              {/* 3. The Message Container:
                  - max-w-[1200px] is the sweet spot for chat readability.
                  - w-full ensures it takes up the whole screen on phones.
              */}
              <div className="w-full max-w-[1200px] bg-white rounded-xl shadow-sm overflow-hidden h-full min-h-[600px] transition-all duration-300">
                <FullMessagesPage />
              </div>

            </div>
          </AdminMain114>
        </div>
      </div>
    </div>
  );
};

export default Mviewmore;