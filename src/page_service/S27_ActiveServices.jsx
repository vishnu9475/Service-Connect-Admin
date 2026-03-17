import AppHeader from "../componants_service/reshma/AppHeader";
import OngoingJobList from "../componants_service/reshma/OngoingJobList";
import ToolBar from "../componants_service/reshma/ToolBar";
const S27_ActiveServices  = () => {
  return (
    <div>
      <AppHeader
        title="Jobs"
        showBack={true}
        showSearch={true}
        showPhone={false}
        showFilter={true}
        showMenu={false}
        theme="black"
      />
      <OngoingJobList />
      <ToolBar />
    </div>
  );
};
export default S27_ActiveServices ;