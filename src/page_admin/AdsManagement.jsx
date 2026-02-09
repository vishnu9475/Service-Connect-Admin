// import React from 'react'
// import AdminSideMenu from '../componants/neja/AdminSideMenu113'
// import StatCardSection115 from '../componants/midhun/StatCardSection115'
// import AdCategory from '../componants/midhun/AdCategory'
// import AdList from '../componants/midhun/AdList'
// import Header from "../componants/neja/AdminMain114"
// import DropDownSet from '../componants/midhun/DropdownSet'
// const Page123 = () => {
//   return (
//     <div className='flex'>
//         <AdminSideMenu/>
//         <div className='flex-1 ml-0 lg:ml-[260px]'>
//         <Header title="Ads Management"/>
//         <div className='lg:ml-[30px]'>
//               <StatCardSection115/>
//               <DropDownSet/>
//         </div>
       
        
        
//         <div className='flex flex-col sm:flex-row   lg:ml-[30px]  '>
//            <AdCategory/>
//            <div className='lg:ml-[150px]'>
//                     <AdList/>
//            </div>
          
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Page123

import React from "react";
import AdminSideMenu from '../componants/neja/AdminSideMenu113'
import StatCardSection115  from '../componants/midhun/StatCardSection115.jsx'
import DropDownSet from "../componants/midhun/DropdownSet.jsx";
import AdCategory from "../componants/midhun/AdCategory.jsx";
import AdList from "../componants/midhun/AdList.jsx";
import AdminMain from "../componants/neja/AdminMain114.jsx";

const Page123 = () => {
  return (
    <div className="flex min-h-screen bg-[#F3F4FF]">

      {/* SIDEBAR */}
      <aside className="hidden lg:flex lg:w-[260px] shrink-0">
        <AdminSideMenu/>
      </aside>

      {/* MAIN */}
      <main className="flex-1 flex flex-col overflow-x-hidden">

        {/* ✅ AdminMain must wrap content */}
        <AdminMain title="Ads Management">

          {/* PAGE CONTAINER */}
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 py-6 space-y-6">

            {/* STATS + DROPDOWN */}
            <StatCardSection115 />
            <DropDownSet />

            {/* CATEGORY + LIST */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-1">
                <AdCategory />
              </div>

              <div className="lg:col-span-2">
                <AdList />
              </div>
            </div>

          </div>

        </AdminMain>
      </main>
    </div>
  );
};

export default Page123;