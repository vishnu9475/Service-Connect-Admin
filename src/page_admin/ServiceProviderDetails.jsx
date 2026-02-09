import React from "react";
import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain2 from "../componants/neja/AdminMain114";
import ServiceProviderDetails from "../componants/vishnu/ServiceProviderDetails.jsx";

function Page145() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      {/* FIXED SIDEBAR */}
      <SideMenu />

      {/* MAIN CONTENT */}
      <main className="lg:ml-64 min-h-screen">
        <AdminMain2
          title={<span className="font-bold text-xl">Provider Details</span>}
          userName="Abc"
        >
          <div className="space-y-6">
            <ServiceProviderDetails />
          </div>
        </AdminMain2>
      </main>
    </div>
  );
}

export default Page145;
