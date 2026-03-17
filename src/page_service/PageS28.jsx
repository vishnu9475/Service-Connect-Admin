import React from 'react'
import AppHeader from "../componants_service/yaswanth/AppHeader"
import ComplaintSection from '../componants_service/yaswanth/ComplaintSection'

export default function S28() {
  return (
    <div className='w-[100%] h-[100%] bg-gray-300'>
        <AppHeader
        title="COMPLAINT FORM"
        showBack={true}
        theme="black"/>

        <ComplaintSection/>

    </div>  
     
  )
}
