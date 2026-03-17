import React from 'react'
import Header from '../componants_service/adhil/Header'
import LeadsRequestList from '../componants_service/adhil/LeadsRequestList'

export default function S30_Leads() {
  return (
    <div className='w-[100%] h-[100%] min-h-screen bg-gray-300'>
        <Header
            title="Leads"
            showBack={true}
            theme="black"/>

        <LeadsRequestList />
        
    </div>
  )
}
