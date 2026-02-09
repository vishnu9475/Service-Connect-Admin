import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";
import QuickStatus from "../componants/alaka/QuickStatus";
import UserDetailBanner from "../componants/alaka/UserDetailBanner";
import PaymentHistory from "../componants/alaka/PaymentHistory";
import RecentActivities from "../componants/alaka/RecentActivities";
import Chart from "../componants/alaka/Chart";

function DealerDashboardPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF] overflow-x-hidden">

      
      <SideMenu />

      
      <main className="ml-0 lg:ml-[260px] transition-all duration-300">
        <AdminMain title="Dealer Name">

          
          <div className="max-w-[1200px] mx-auto px-4 py-6 space-y-6">

            
            <QuickStatus />

            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

              
              <div className="lg:col-span-2 flex flex-col gap-6 h-full">
                <UserDetailBanner   name="Dealer Name"
  role="Dealer"
/>

                
                <div className="flex-1">
                  <PaymentHistory />
                </div>
              </div>

             
              <div className="h-full">
                <RecentActivities />
              </div>

            </div>

            
            <div className="w-full">
              <Chart />
            </div>

          </div>
        </AdminMain>
      </main>
    </div>
  );
}

export default DealerDashboardPage;
