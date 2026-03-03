import { useNavigate } from "react-router-dom";
import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";
import TeamMemPerTop from "../componants/vishnu/TeamMemPerTop";
import AddTeamMember from "../componants/vishnu/AddTeamMember";
import SuperAdminCompo from "../componants/vishnu/SuperAdminListCopmo"


function SuperAdminList() {
 
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <SideMenu />

      <main className="lg:ml-64 min-h-screen">
        <AdminMain title={<span className="font-bold text-xl">Team Members</span>}>

          <div className="space-y-6">
            <AddTeamMember/>

            {/* ONE CONTAINER */}
            <div className="mx-auto max-w-[1100px] bg-white shadow-md border border-gray-200 overflow-hidden">

              <div className="overflow-x-auto">
                <div className="min-w-[900px]">

                  <TeamMemPerTop />
                  <SuperAdminCompo />

                </div>
              </div>

            </div>
          </div>
          

         
        </AdminMain>
      </main>
    </div>
  );
}

export default SuperAdminList;
