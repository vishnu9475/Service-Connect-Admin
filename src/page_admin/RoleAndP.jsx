import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from  "../componants/neja/AdminMain114";
import TeamMemPerTop from "../componants/vishnu/TeamMemPerTop";
import AddTeamMember from "../componants/vishnu/AddTeamMember";
import TeamMemberPermissions from "../componants/vishnu/TeamMemberPermission";


function Page144() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <SideMenu />

      <main className="lg:ml-64 min-h-screen">
        <AdminMain title={<span className="font-bold text-xl">Team Members</span>}>

          <div className="space-y-6">
            <AddTeamMember />

            {/* ONE CONTAINER */}
            <div className="mx-auto max-w-[1100px] bg-white border border-gray-400">

              {/* ONE SCROLL CONTEXT */}
              <div className="overflow-x-auto">

                {/* HEADER + BODY SCROLL TOGETHER */}
                <div className="min-w-[900px]">

                  <TeamMemPerTop />

                  <table className="w-full text-sm whitespace-nowrap">
                    <tbody>
                      <tr>
                        <td colSpan={6} className="h-4"></td>
                      </tr>
                      <TeamMemberPermissions title="User Management" />
                      <TeamMemberPermissions title="Service Provider Management" />
                      <TeamMemberPermissions title="Dealer Management" />
                      <TeamMemberPermissions title="Franchisee Management" />
                      <TeamMemberPermissions title="Service Management" />
                      <TeamMemberPermissions title="Ads Management" />
                      <TeamMemberPermissions title="Financial" />
                      <TeamMemberPermissions title="General Settings" />
                      <TeamMemberPermissions title="Sub Admin Management" />
                    </tbody>
                  </table>

                </div>
              </div>
            </div>

          </div>

        </AdminMain>
      </main>
    </div>
  );
}

export default Page144;
