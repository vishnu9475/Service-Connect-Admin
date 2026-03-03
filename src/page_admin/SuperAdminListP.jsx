// import { useNavigate } from "react-router-dom";
// import SideMenu from "../componants/neja/AdminSideMenu113";
// import AdminMain from  "../componants/neja/AdminMain114";
// import TeamMemPerTop from "../componants/vishnu/TeamMemPerTop";
// import AddTeamMember from "../componants/vishnu/AddTeamMember";
// import SuperAdminList from "../page_admin/SuperAdminListP.jsx"


// function SuperAdminList() {
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

//                   <TeamMemPerTop
//                   handleAllUsers={handleAllUsers} />

//                   <table className="w-full text-sm whitespace-nowrap">
//                     <SuperAdminList/>
                      
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

// export default SuperAdminList;
