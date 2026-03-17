import React from 'react'
import Header from '../componants_service/adhil/Header'
import ComplaintSection from '../componants_service/adhil/ComplaintSection'

export default function S28_Form() {
  return (
    <div className='w-[100%] h-[100%] min-h-screen bg-gray-300'>
        <Header
        title="COMPLAINT FORM"
        showBack={true}
        theme="black"/>

        <ComplaintSection/>

    </div>  
     
  )
}
