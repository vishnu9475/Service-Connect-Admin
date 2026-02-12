import React from "react";
import AdminSideMenu113 from "../componants/neja/AdminSideMenu113";
import AdminMain114 from  "../componants/neja/AdminMain114";
import ProfileBlock from "../componants/arjun/ProfileBlock";
import ProfileEditForm from "../componants/arjun/ProfileEditForm";
import TotWorkStatus from "../componants/arjun/TotWorkStatus";

const Admin_Profile = () => {
  return (
    <div className="flex min-h-screen bg-[#f5f6ff] w-full overflow-x-hidden">
      <AdminSideMenu113 />

      <div className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen relative">
        <div className="mx-auto w-full max-w-[2560px] flex flex-col flex-1">
          
          <AdminMain114
            title="USER PROFILE"
            userName="Nabila"
            userRole="Admin"
            showSearch={false} 
          >
            <div className="p-4 sm:p-6 2xl:p-10 flex-1">
              
              {/* 1. Removed 'items-start' to ensure components stretch equally if needed 
                2. Grid stays 1 column on mobile, 12 on large screens
              */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1800px] mx-auto">
                
                {/* LEFT SIDE: ProfileBlock */}
                {/* Removed max-w-[400px] so it matches the width of the others on mobile */}
                <div className="lg:col-span-12 xl:col-span-3 w-full">
                  <ProfileBlock />
                </div>

                {/* MIDDLE: ProfileEditForm */}
                <div className="lg:col-span-12 xl:col-span-6 w-full">
                  {/* Changed rounded-[20px] to rounded-xl to match your brand style */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 min-h-[400px] lg:min-h-[627px]">
                    <ProfileEditForm />
                  </div>
                </div>

                {/* RIGHT SIDE: TotWorkStatus */}
                <div className="lg:col-span-12 xl:col-span-3 w-full">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
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