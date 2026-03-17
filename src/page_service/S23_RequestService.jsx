import React from 'react'
import RequestDetails from '../componants_service/adhil/RequestDetails'
import Header from '../componants_service/adhil/Header'

export default function S23_RequestService() {
  return (
    <div className='w-[100%] h-[100%] min-h-screen bg-gray-300'>
        <Header
        title="REQUEST DETAILS"
        showBack={true}
        theme="black"/>

        <RequestDetails 
        showButtons ={true}
        />
    </div>
  )
}

