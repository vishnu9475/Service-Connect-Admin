import React, { useState } from 'react'
import Header from '../componants_service/Header'
import RequestDetails from '../componants_service/RequestDetails'
import InvoiceForm from '../componants_service/InvoiceForm'

export default function S24_Accept_and_Invoice() {

  // controls how many invoice blocks are shown
  const [invoiceBlocks, setInvoiceBlocks] = useState([1])

  return (
    <div className='w-[100%] h-[100%] min-h-screen bg-gray-300'>
      <Header
        title="INVOICE"
        showBack={true}
        theme="black"
      />

      <RequestDetails />

      <InvoiceForm
        invoiceBlocks={invoiceBlocks}
        setInvoiceBlocks={setInvoiceBlocks}
      />
    </div>
  )
}
