import React from 'react'
import Header from '../componants_service/adhil/Header'
import RequestInfo from '../componants_service/adhil/RequestInfo'
import ServiceDeclineForm from '../componants_service/adhil/ServiceDeclineForm'

export default function S29_Form() {
  return (
    <div  className='w-[100%] h-[100%] min-h-screen bg-gray-300'>

        <Header
        title="DECLAINE FORM"
        showBack={true}
        theme="black"/>

        <RequestInfo/>

        <div>
          <ServiceDeclineForm/>
        </div>


    </div>
  )
}

