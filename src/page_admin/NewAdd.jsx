import React from 'react'
import AdminSideMenu from '../componants/neja/AdminSideMenu113'
import DropdownSet from '../componants/midhun/DropdownSet'
import AdCategoryList from '../componants/midhun/AdCategoryList'
import NewAdForm from '../componants/midhun/NewAdForm'
import Header from "../componants/neja/AdminMain114"
const Page124 = () => {
  return (
    <div className="flex w-full overflow-x-hidden">
      
      {/* SIDEBAR */}
      <AdminSideMenu />

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-0 lg:ml-[260px] min-w-0">

      
      <Header title="Ads Management" >

        
        
        <DropdownSet />

        {/* CONTENT AREA */}
        <div className="flex flex-col sm:flex-row gap-4 w-full overflow-x-hidden">
          <AdCategoryList />
          <NewAdForm />
        </div>

      
      </Header>
      </div>
    </div>
  )
}

export default Page124
