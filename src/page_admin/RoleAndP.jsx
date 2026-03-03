// import { useNavigate } from "react-router-dom";
// import SideMenu from "../componants/neja/AdminSideMenu113";
// import AdminMain from  "../componants/neja/AdminMain114";
// import TeamMemPerTop from "../componants/vishnu/TeamMemPerTop";
// import AddTeamMember from "../componants/vishnu/AddTeamMember";
// import TeamMemberPermissions from "../componants/vishnu/TeamMemberPermission";
// import SuperAdminListCompo from "../componants/vishnu/SuperAdminListCopmo";

// function Page144() {
//   const navigate = useNavigate();
//     const handleAdd = () => {
//     navigate("/addsuperadmin");
//     };
//   return (
//     <div className="min-h-screen bg-[#F3F4FF]">
//       <SideMenu />

//       <main className="lg:ml-64 min-h-screen">
//         <AdminMain title={<span className="font-bold text-xl">Team Members</span>}>

//           <div className="space-y-6">
//             <AddTeamMember
//             handleAdd={handleAdd} />

//             {/* ONE CONTAINER */}
//             <div className="mx-auto max-w-[1100px] bg-white border border-gray-400">

//               {/* ONE SCROLL CONTEXT */}
//               <div className="overflow-x-auto">

//                 {/* HEADER + BODY SCROLL TOGETHER */}
//                 <div className="min-w-[900px]">

//                   <TeamMemPerTop />

//                   <table className="w-full text-sm whitespace-nowrap">
//                     <tbody>
//                       <tr>
//                         <td colSpan={6} className="h-4"></td>
//                       </tr>
//                       <TeamMemberPermissions title="User Management" />
//                       <TeamMemberPermissions title="Service Provider Management" />
//                       <TeamMemberPermissions title="Dealer Management" />
//                       <TeamMemberPermissions title="Franchisee Management" />
//                       <TeamMemberPermissions title="Service Management" />
//                       <TeamMemberPermissions title="Ads Management" />
//                       <TeamMemberPermissions title="Financial" />
//                       <TeamMemberPermissions title="General Settings" />
//                       <TeamMemberPermissions title="Sub Admin Management" />
//                     </tbody>
//                   </table>

//                 </div>
//               </div>
//             </div>

//           </div>

//         </AdminMain>
//       </main>
//     </div>
//   );
// }

// export default Page144;

import React, { useState } from "react";

import TeamMemberPermissions from "../componants/vishnu/TeamMemberPermission";
import SuperAdminListCompo from "../componants/vishnu/SuperAdminListCopmo";

import { useNavigate } from "react-router-dom";
import SideMenu from "../componants/neja/AdminSideMenu113";
import AdminMain from "../componants/neja/AdminMain114";
import TeamMemPerTop from "../componants/vishnu/TeamMemPerTop";
import AddTeamMember from "../componants/vishnu/AddTeamMember";

function Page144() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("users");

  const handleAdd = () => {
    navigate("/addsuperadmin");
  };

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <SideMenu />

      <main className="lg:ml-64 min-h-screen">
        <AdminMain
          title={<span className="font-bold text-xl">Team Members</span>}
        >
          <div className="space-y-6">
            <AddTeamMember handleAdd={handleAdd} />

            {/* MAIN CONTAINER */}
            <div className="mx-auto max-w-[1100px] bg-white border border-gray-400 overflow-hidden">
              
              {/* TABS */}
              <TeamMemPerTop
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {/* CONTENT SWITCH */}
              <div className="p-6">

                {/* 🔹 ALL USERS */}
                {activeTab === "users" && (
                  <SuperAdminListCompo />
                )}

                {/* 🔹 USER ROLE MANAGEMENT */}
                {activeTab === "roles" && (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] text-sm whitespace-nowrap">
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
                )}

              </div>
            </div>
          </div>
        </AdminMain>
      </main>
    </div>
  );
}

export default Page144;