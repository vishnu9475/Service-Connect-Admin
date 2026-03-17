import React from 'react'
import Header from '../componants_service/adhil/Header'
import ToolBar from '../componants_service/adhil/ToolBar'
import TransactionItem from '../componants_service/adhil/TransactionItem'
import TransactionList from '../componants_service/adhil/TransactionList'
import TransactionLists from '../componants_service/adhil/TransactionLists'

export default function S35__TRANSACTIONS() {
  return (
    <div  className='w-[100%] h-[100%] min-h-screen bg-gray-300'>

        <Header
        title="Transation"
        showBack={true}
        theme="black"/>

        <TransactionLists/>


              <div className="lg:hidden">
        <ToolBar />
      </div>



    </div>
  )
}

