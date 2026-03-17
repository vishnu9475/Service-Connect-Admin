import React from 'react'
import AppHeader from '../componants_service/reshma/AppHeader'
import Component10 from '../componants_service/reshma/Component10'
import RecentSearch from '../componants_service/reshma/RecentSearch'

const Page14 = () => {
  return (
    <div className='px-1'>
      <div>
        <AppHeader
        title="SEARCH"
       
  showBack={true}
  showSearch={false}
  showPhone={false}
  showFilter={false}
  showMenu={false}
 
backTo= {-1}
theme="white"
/>
      </div>
     <div>
        <Component10 showQuickFilters={false}/>
     </div>
     <div>
        <RecentSearch/>
     </div>
    </div>
  )
}

export default Page14