import React from "react";
import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain2 from  "../componants/neja/AdminMain114";
import DealerDetails from "../componants/vishnu/DealerDetails.jsx";

function Page138() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      {/* FIXED SIDEBAR */}
      <SideMenu />

      {/* MAIN CONTENT */}
      <main className="lg:ml-64 min-h-screen">
        <AdminMain2
          title={<span className="font-bold text-xl">Dealer Details</span>}
          userName="Abc"
        >
          <div className="space-y-6">
            <DealerDetails />
          </div>
        </AdminMain2>
      </main>
    </div>
  );
}

export default Page138;
