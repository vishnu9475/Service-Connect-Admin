import React from 'react'

import TopServiceProviders from '../componants_service/reshma/TopServiceProviders'
import ToolBar from '../componants_service/reshma/ToolBar'
import PopularServiceList from '../componants_service/reshma/PopularServiceList'
import CategoryList from '../componants_service/reshma/CategoryList'
import Banner from '../componants_service/reshma/Banner'
import Component10 from '../componants_service/reshma/Component10'
import AppHeader from '../componants_service/reshma/AppHeader'

const Page11 = () => {
  return (
    <div>
       {/*Header  */}
       <div>
        <AppHeader theme='black'title="SERVICE CONNECT" shownotification="true" showprofil="true" />
       </div>
     
       <div className='m-1'>
         <Component10 />
       </div>

       <div>
         <Banner/>
       </div>
       
        <div>
            <CategoryList/>
        </div>
        <div>
            <PopularServiceList/>
        </div>
        <div>
            <TopServiceProviders/>
        </div>
        <div>
            <ToolBar/>
        </div>
    </div>
  )
}

export default Page11
