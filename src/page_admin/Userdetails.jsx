import React from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain2 from "../componants/neja/AdminMain114";
import UserDetailBanner from "../componants/arjun/UserDetailBanner.jsx";
import PaymentHistory from "../componants/arjun/PaymentHistory.jsx";
import RecentServiceList from "../componants/arjun/RecentService.jsx";

function User_Details() {
  const navigate = useNavigate();

  const handleViewAllPayments = () => {
    navigate("/transactionhistory");
  };

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      {/* FIXED SIDEBAR */}
      <SideMenu />

      {/* MAIN CONTENT */}
      <main className="lg:ml-64 min-h-screen overflow-x-hidden">
        <AdminMain2
          title={<span className="font-bold text-xl">Service Provider</span>}
        >
          {/* PAGE CONTENT */}
          <div className="p-4 sm:p-6">
            {/* GRID */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
              
              {/* LEFT COLUMN */}
              <div className="xl:col-span-2 space-y-6">
                <UserDetailBanner />
                <PaymentHistory onView={handleViewAllPayments} />
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-6">
                <RecentServiceList />
              </div>

            </div>
          </div>
        </AdminMain2>
      </main>
    </div>
  );
}

export default User_Details;