import AppHeader from "../componants_service/yaswanth/AppHeader";
import BottomNavBar from "../componants_service/yaswanth/BottomNavBar";
import RegisteredServiceList from "../componants_service/yaswanth/RegisteredServiceList";

const Page69 = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <AppHeader
        title="registered services"
        showBack={true}
        showSearch={true}
        showPhone={false}
        showFilter={true}
        showMenu={false}
        theme="black"
      />
      <RegisteredServiceList />

       <BottomNavBar/>
    </div>
  );
};
export default Page69;