import React from 'react'
import AdminSideMenu from '../componants/neja/AdminSideMenu113'
import AddExpenseForm from '../componants/midhun/AddExpenseForm'
import ExpenseList from '../componants/midhun/ExpenseList'
import Header from "../componants/neja/AdminMain114"

const Page128 = () => {
  return (
    <div className="flex w-full ">
      
      {/* SIDEBAR */}
      <div className="hidden lg:block w-[260px] shrink-0">
        <AdminSideMenu />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 min-w-0">
        
        {/* HEADER */}
        <Header title="Accounts" />

        {/* PAGE CONTENT */}
        <AddExpenseForm />

        <div className="sm:ml-5 lg:mr-[158px] px-4 lg:px-0">
          <ExpenseList />
        </div>

      </div>
    </div>
  )
}

export default Page128
