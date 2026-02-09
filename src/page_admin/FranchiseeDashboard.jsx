import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";

import QuickStatus2 from "../componants/alaka/QuickStatus2";
import UserDetailBanner from "../componants/alaka/UserDetailBanner";
import RecentActivities1 from "../componants/alaka/RecentActivities1";
import PaymentHistory from "../componants/alaka/PaymentHistory";
import Chart from "../componants/alaka/Chart";
import IncompleteBookings from "../componants/alaka/IncompleteBookings";
import Complaints from "../componants/alaka/Complaints";

function FranchiseDashboardPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF] overflow-x-hidden">

      
      <SideMenu />

     
      <main className="ml-0 lg:ml-[260px] transition-all duration-300">
        <AdminMain title="Franchise Name">

          <div className="px-6 py-4">
            <div className="max-w-[1200px] mx-auto space-y-6">

             
              <QuickStatus2 />

               
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

              
              <div className="lg:col-span-2 flex flex-col gap-6 h-full">
                <UserDetailBanner
  type="franchise"
  name="Franchise Name"
  role="Franchise"
/>

  

                
                <div className="flex-1">
                  <PaymentHistory />
                </div>
              </div>

              
              <div className="h-full">
                <RecentActivities1 />
              </div>

            </div>

             
              <div className="pt-2">
                <Chart />
              </div>

              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <IncompleteBookings />
                <Complaints />
              </div>

            </div>
          </div>

        </AdminMain>
      </main>
    </div>
  );
}

export default FranchiseDashboardPage;
