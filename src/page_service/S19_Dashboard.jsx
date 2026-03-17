import { Search } from "lucide-react";
import AppHeader from "../componants_service/reshma/AppHeader";
import ToolBar from "../componants_service/reshma/ToolBar";
// import UserRequestsList from "../componants_service/reshma/UserRequestsList";
import DashboardPills from "../componants_service/reshma/DashboardPills";
 import Component10 from "../componants_service/reshma/Component10.jsx";
 import ServiceReachGraph from "../componants_service/reshma/ServiceReachGraph.jsx";
import RevenuePieChart from "../componants_service/reshma/RevenuePieChart";


import RecentActivityList from "../componants_service/reshma/RecentActivityList.jsx";
import ActiveServices from "../componants_service/reshma/ActiveServices";
import UserRequest from "../componants_service/reshma/UserRequest.jsx";
import BookingList from "../componants_service/reshma/BookingList.jsx";

const S19_Dashboard = () => {
  return (
    <div className="bg-gray-200 gap-0">
      <AppHeader
        title="registered services"
        showBack={true}
        showSearch={true}
        showPhone={false}
        showFilter={true}
        showMenu={false}
        theme="black"
      />
      <Component10/>
      <DashboardPills />
      <RevenuePieChart />
      <ServiceReachGraph />
      
     <div className="">
        <RecentActivityList />
        <ActiveServices />
        <BookingList />
        
        <UserRequest /> 
        <ToolBar />
       </div> 
    </div>
  );
};
export default S19_Dashboard;
