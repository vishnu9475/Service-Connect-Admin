import Header from '../componants_service/yaswanth/AppHeader'
import ToolBar from '../componants_service/reshma/ToolBar'
import ActiveComplaints from '../componants_service/adhil/ActiveComplaints'

export default function S36_COMPLAINTS() {
  return (
    <div className="w-full min-h-screen bg-gray-300 flex flex-col">
      <Header
        title="COMPLAINTS"
        showBack={true}
        showSearch={true}
        showFilter={true}
        theme="black"
      />

      {/* Content area grows to fill space */}
      <div className="flex-1">
        <ActiveComplaints />
      </div>

      <div className="lg:hidden">
        <ToolBar />
      </div>
    </div>
  )
}
