import React from 'react'
import AppHeader from "../componants_service/yaswanth/AppHeader"
import AccountDetails from '../componants_service/yaswanth/AccountDetails'
import ToolBar from '../componants_service/yaswanth/ToolBar'
import TransactionList from '../componants_service/yaswanth/TransactionList'

export default function Page83() {

  // Dummy data (simulating backend response)
  const accountData = {
    user: {
      name: "Adhil T",
      avatar: "https://i.pravatar.cc/100"
    },
    income: 15000,
    expense: 4000,
    balance: 11000,
    cardNumber: "4551 5667 8886 7775"
  };

  return (
    <div className='w-[100%] h-[100%] bg-gray-300'>
      
      <AppHeader
        title="FINANCIAL"
        showBack={true}
        showSearch={true}
        showFilter={true}
        theme="black"
      />

      <AccountDetails
        user={accountData.user}
        income={accountData.income}
        expense={accountData.expense}
        balance={accountData.balance}
        cardNumber={accountData.cardNumber}
      />

      <TransactionList />

      <div className='lg:hidden'>
        <ToolBar />
      </div>
    </div>
  )
}