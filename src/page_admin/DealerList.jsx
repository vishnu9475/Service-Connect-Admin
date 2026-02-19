
import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from "../componants/neja/AdminMain114";
import QuickStatus from "../componants/vishnu/QuickStatus";
import DealersList from "../componants/vishnu/DealersList";

function Page137() {
  return (
    <div className="flex min-h-screen bg-[#f5f6ff] overflow-hidden">
      
      {/* SIDEBAR */}
      <SideMenu />

      {/* MAIN CONTENT */}
      <div className="flex-1 w-full lg:ml-64 overflow-x-hidden">
        <AdminMain
          title={<span className="font-bold text-xl">Dealers</span>}
          userName="Abc"
          userRole="Admin"
        >
          <div className="space-y-6">
            <QuickStatus />
            <DealersList />
          </div>
        </AdminMain>
      </div>

    </div>
  );
}

export default Page137;
