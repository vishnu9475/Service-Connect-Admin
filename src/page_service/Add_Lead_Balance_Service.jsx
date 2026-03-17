import React from 'react'
import Header from '../componants_service/adhil/Header'
import AddLeadBalance from '../componants_service/adhil/AddLeadBalance'

export default function Add_Lead_Balance_Sevice() {
  return (
    <div className='w-[100%] h-[100%] min-h-screen bg-gray-300'>

        <Header
        title="EDIT SERVICE"
        showBack={true}
        theme="black"/>

        <AddLeadBalance/>

    </div>
  )
}

