import React from 'react'
import AdminSideMenu from '../componants/neja/AdminSideMenu113'
import AddCategoryForm from '../componants/midhun/AddCategoryForm'
import Header from "../componants/neja/AdminMain114"
const Page122 = () => {
  return (
    <div className='flex'>
        <AdminSideMenu/>
        <div className='flex-1 ml-0 lg:ml-[260px]'>
               <Header title="New Category"/>
              <AddCategoryForm />
        </div>      
    </div>
  )
}

export default Page122