import React from 'react'
import AppHeader from '../componants_service/reshma/AppHeader'
import Filtercategory from '../componants_service/reshma/FilterCategory'
const Page16 = () => {
  return (
    <div className=''>
      <div>
        <AppHeader showclear="true"
            title="FILTER"
            rightAction={
    <button
      onClick={() => setSelected([])}
      className="text-sm font-semibold flex text-center"
    >
      Clear
    </button>}
         MoreVertical={false}
  ChevronLeft={true} 
   showSearch={false}
  showPhone={false}
  showFilter={false}
  showMenu={false}
  theme="white"
/>
      </div>
      <div>
        <Filtercategory
        title="SUBCATEGORY:"/>
      </div>
    </div>
  )
}

export default Page16
