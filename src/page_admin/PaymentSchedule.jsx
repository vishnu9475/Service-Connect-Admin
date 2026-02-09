import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";
import IncomeList from "../componants/alaka/IncomeList";

function PageIncomeManagement() {
  return (
    <div className="min-h-screen bg-[#F3F4FF] overflow-x-hidden">

      
      <SideMenu />

      
      <main className="ml-0 lg:ml-[260px] transition-all duration-300">
        <AdminMain
          title="Income Management"
          userName="Abc"
          userRole="Admin"
        >
         
          <div className="px-6 py-4">

            
            <div className="max-w-4xl mx-auto">
              <IncomeList />
            </div>

          </div>
        </AdminMain>
      </main>

    </div>
  );
}

export default PageIncomeManagement;
