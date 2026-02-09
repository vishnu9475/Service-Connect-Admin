import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";
import QuickStatus1 from "../componants/alaka/QuickStatus1";
import ServiceProviderList from "../componants/alaka/ServiceProviderList";

function ServiceProviderManagementPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF] overflow-x-hidden">

     
      <SideMenu />

      
      <main className="ml-0 lg:ml-[260px] transition-all duration-300">
        <AdminMain
          title="Service Provider Management"
          userName="Abc"
          userRole="Admin"
        >
          
          <div className="max-w-[1200px] mx-auto px-4 py-6 space-y-6">

            
            <QuickStatus1 />

           
            <ServiceProviderList />

          </div>
        </AdminMain>
      </main>

    </div>
  );
}

export default ServiceProviderManagementPage;
