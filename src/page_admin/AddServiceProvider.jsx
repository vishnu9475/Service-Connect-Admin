import React from "react";
import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";
import ServiceProviderDetails from "../componants/vishnu/AddServiceProviderForm.jsx";

function Page142() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      {/* FIXED SIDEBAR */}
      <SideMenu />

      {/* MAIN CONTENT */}
      <main className="lg:ml-64 min-h-screen">
        <AdminMain
          title={<span className="font-bold text-xl">Add Service Provider</span>}
          userName="Abc"
        >
          <div className="space-y-6">
            <ServiceProviderDetails />
          </div>
        </AdminMain>
      </main>
    </div>
  );
}

export default Page142;

