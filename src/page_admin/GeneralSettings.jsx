import React from 'react'
import AdminSideMenu from "../componants/neja/AdminSideMenu113"
import SettingCard from '../componants/midhun/SettingCard'
import Header from "../componants/neja/AdminMain114"
const Page125 = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full overflow-hidden">
            
      {/* Sidebar */}
      <div className="w-full lg:w-[260px] lg:shrink-0">
        
        <AdminSideMenu />
        
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <Header title="General Settings">
        <SettingCard />
        <SettingCard />
        </Header>
      </div>

    </div>
  )
}

export default Page125
