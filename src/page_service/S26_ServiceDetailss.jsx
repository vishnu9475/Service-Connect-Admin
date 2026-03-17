import React from 'react'
import AppoinmentDetails from '../componants_service/adhil/AppoinmentDetails'
import RequestDetails from '../componants_service/adhil/RequestDetails'
import Header from '../componants_service/adhil/Header'

export default function S26_ServiceDetailss() {
  return (
    <div className='w-[100%] h-[100%] min-h-screen bg-gray-300'>
        <Header
        title="BOOKING DETAILS"
        showBack={true}
        theme="black"/>

        <RequestDetails/>
        <div className='p-3'>
            <AppoinmentDetails/>
        </div>
    </div>
  )
}
