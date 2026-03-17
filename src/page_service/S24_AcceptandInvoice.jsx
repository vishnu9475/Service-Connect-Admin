import React from 'react'
import Header from '../componants_service/adhil/Header'
import RequestDetails from '../componants_service/adhil/RequestDetails'
import InvoiceForm from '../componants_service/adhil/InvoiceForm'

export default function S24_AcceptandInvoice() {
  return (
    <div  className='w-[100%] h-[100%] min-h-screen bg-gray-300'>

        <Header
        title="INVOICE"
        showBack={true}
        theme="black"/>

        <RequestDetails/>

        <InvoiceForm/>
 

    </div>
  )
}

