import React from "react";
import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";
import ServiceProviderList from "../componants/vishnu/ServiceProviderList.jsx";

function Page140() {
  return (
    <div className="flex min-h-screen bg-[#f5f6ff] overflow-hidden">
      
      {/* SIDEBAR */}
      <SideMenu />

      {/* MAIN CONTENT */}
      <div className="flex-1 w-full lg:ml-64 overflow-x-hidden">
        <AdminMain
          title={<span className="font-bold text-xl">ServiceProviders</span>}
          userName="Abc"
          userRole="Admin"
        >
          <div className="space-y-6">
            <ServiceProviderList />
          </div>
        </AdminMain>
      </div>

    </div>
  );
}

export default Page140;

