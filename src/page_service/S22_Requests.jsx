import AppHeader from "../componants_service/reshma/AppHeader";
import ServiceRequestList from "../componants_service/reshma/ServiceRequestList";
import ToolBar from "../componants_service/reshma/ToolBar";

const S22_Requests = () => {
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
      <ToolBar />
    </div>
  );
};
export default S22_Requests;
