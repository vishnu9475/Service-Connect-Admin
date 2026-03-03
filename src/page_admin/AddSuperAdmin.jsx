import { useNavigate } from "react-router-dom";
import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";
import AddSuperAdimCobmo from "../componants/vishnu/AddSuperAdminCompo";



function AddSuperAdmin() {
 
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <SideMenu />

      <main className="lg:ml-64 min-h-screen">
        <AdminMain title={<span className="font-bold text-xl">Team Members</span>}>

          <div className="space-y-6">
            <AddSuperAdimCobmo/>
          </div>
          

         
        </AdminMain>
      </main>
    </div>
  );
}

export default AddSuperAdmin;
