import AppHeader from "../componants_service/yaswanth/AppHeader";
import BottomNavBar from "../componants_service/yaswanth/BottomNavBar";
import ServiceRequestList from "../componants_service/yaswanth/ServiceRequestList";

const Page70 = () => {
  return (
    <div>
      <AppHeader
        title="requests"
        showBack={true}
        showSearch={true}
        showPhone={false}
        showFilter={true}
        showMenu={false}
        theme="black"
      />
      <div className="xs:mx-auto">
        <ServiceRequestList />
      </div>
      <BottomNavBar/>
    </div>
  );
};
export default Page70;