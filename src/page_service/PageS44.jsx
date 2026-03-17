// import WorkList from '../componants_service/WorkList'
// import BottomNavBar from '../componants_service/BottomNavBar'
// import AppHeader from '../componants_service/AppHeader'

// const Page93 = () => {
//   return (
//     <div>
//         <AppHeader
//         title="WORKS"
//         showBack={true}
//          theme="black"
//           showSearch={true}
//          showFilter={true}
//         />
//         <WorkList/>
//         <BottomNavBar/>
//     </div>
//   )
// }

// export default Page93


import { useLocation } from "react-router-dom";
import Component4 from "../componants_service/yaswanth/Component4";
import ServiceList from "../componants_service/yaswanth/ServiceList";
import JobLists from "../componants_service/yaswanth/JobLists";
import BottomNavBar from "../componants_service/yaswanth/BottomNavBar";

export default function Page93() {
  const { pathname } = useLocation();

  const isJobs = pathname === "/pageu27";

  return (
    <div>
      <Component4
        theme="black"
        title={isJobs ? "Jobs" : "Services"}
        showFilter={!isJobs}
        showSearch={!isJobs}
      />

      {isJobs ? <JobLists /> : <ServiceList />}

      <BottomNavBar />
    </div>
  );
}