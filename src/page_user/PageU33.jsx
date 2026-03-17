import { useLocation, useNavigate } from "react-router-dom";
import ServiceList from "../componants_user/ServiceList";
import JobLists from "../componants_user/JobList";
import BottomNavBar from "../componants_user/BottomNavBar";
import Component4 from "../componants_user/Component4";

export default function PageU33() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isJobs = pathname === "/pageu27";

  return (
    <div>
      <Component4
        theme="black"
        title={isJobs ? "Jobs" : "Services"}
        showFilter={!isJobs}
        showSearch={!isJobs}
        onBackClick={() => navigate(-1)}
      />

      {isJobs ? <JobLists /> : <ServiceList />}

      <BottomNavBar />
    </div>
  );
}
