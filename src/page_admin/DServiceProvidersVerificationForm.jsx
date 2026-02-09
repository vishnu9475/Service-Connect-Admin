import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";
import ServiceProviderVerificationForm from "../componants/alaka/ServiceProviderVerificationForm";

function ServiceProviderVerificationformpage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF] overflow-x-hidden">

    
      <SideMenu />

    
      <main className="ml-0 lg:ml-[260px] transition-all duration-300">
        <AdminMain title="Service Providers Verification Form">

         
          <div className="px-6 py-10">
            <div className="max-w-sm mx-auto">
             
              <ServiceProviderVerificationForm />
            </div>
          </div>

        </AdminMain>
      </main>
    </div>
  );
}

export default ServiceProviderVerificationformpage;
