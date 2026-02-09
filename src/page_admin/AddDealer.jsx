import React from "react";
import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";
import DealerForm from "../componants/vishnu/DealerForm.jsx";

function Page139() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      {/* FIXED SIDEBAR */}
      <SideMenu />

      {/* MAIN CONTENT */}
      <main className="lg:ml-64 min-h-screen">
        <AdminMain
          title={<span className="font-bold text-xl">Add New Dealer</span>}
          userName="Abc"
        >
          <div className="space-y-6">
            <DealerForm />
          </div>
        </AdminMain>
      </main>
    </div>
  );
}

export default Page139;

