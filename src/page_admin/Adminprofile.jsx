import React from "react";
// 1. Manually import Sidebar and Header components
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";

// Page-specific components
import ProfileBlock from "../componants/arjun/ProfileBlock";
import ProfileEditForm from "../componants/arjun/ProfileEditForm";
import TotWorkStatus from "../componants/arjun/TotWorkStatus";

const Admin_Profile = () => {
  return (
    // Added overflow-x-hidden to prevent unwanted horizontal scrolling
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      
      {/* 3. Manually add the Sidebar */}
      <AdminSideMenu113 />

      {/* 4. Main Content Area: Added relative and flex properties for layout stability */}
      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        
        {/* Wrapper to center content and cap width for 4K monitors */}
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
          
          {/* 5. Manually add the Header */}
          <AdminMain114
            title="USER PROFILE"
            userName="Nabila"
            userRole="Admin"
            showSearch={false} 
          >
            {/* 6. The Profile Content Grid */}
            {/* Adjusting padding: smaller on mobile, generous on 4K (2xl:p-10) */}
            <div className="p-4 sm:p-6 2xl:p-10 flex-1">
              
              {/* Grid Logic:
                - 1 Column on Mobile
                - 12 Columns on Large Screens (Desktop/4K)
                - max-w-[1600px] keeps the profile section from becoming too wide to read
              */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1800px] mx-auto items-start">
                
                {/* LEFT SIDE: ProfileBlock */}
                {/* lg:col-span-3 (25% width on desktop) */}
                <div className="lg:col-span-12 xl:col-span-3 flex justify-center xl:justify-start">
                  <div className="w-full max-w-[400px] xl:max-w-none">
                    <ProfileBlock />
                  </div>
                </div>

                {/* MIDDLE: ProfileEditForm */}
                {/* lg:col-span-6 (50% width on desktop) */}
                <div className="lg:col-span-12 xl:col-span-6 w-full">
                  <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 min-h-[400px] lg:min-h-[627px]">
                    <ProfileEditForm />
                  </div>
                </div>

                {/* RIGHT SIDE: TotWorkStatus */}
                {/* lg:col-span-3 (25% width on desktop) */}
                <div className="lg:col-span-12 xl:col-span-3 w-full">
                  <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden">
                    <TotWorkStatus />
                  </div>
                </div>

              </div>
            </div>
          </AdminMain114>
        </div>
      </div>
    </div>
  );
};

export default Admin_Profile;