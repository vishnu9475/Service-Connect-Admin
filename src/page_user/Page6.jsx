import React from 'react'
import Component4 from '../componants_user/Component4'
import Component8 from '../componants_user/eighth'

function Page6() {
  return (
    <div className='w-full min-h-screen bg-gray-200'>
      <Component4 title="FORGOT PASSWORD" theme="black"/>
       <div className='mt-28 '> 
      <Component8 inputs={[
    { type: "email", placeholder: "Email" },
    { type: "tel", placeholder: "Phone Number" },
  ]} heading='Enter your registered email or phone number to receive an OTP to reset your password'
   />
      </div>
     </div>
  )
}

export default Page6
