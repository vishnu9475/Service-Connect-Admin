import React from 'react'
import Component4 from '../componants_user/Component4'
import Component8 from '../componants_user/eighth'

function Page8() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <Component4  theme='black' title={"FORGOT PASSWORD"}/>
        <div className="flex-1 mt-28 " > 
      <Component8 inputs={[
    { type: "password", placeholder: "Password" },
    { type: "confirm password", placeholder: "Confirm Password" },
  ]} heading='Enter your registered email or phone number to receive an OTP to reset your password'/>
    </div>
     </div>
  )
}

export default Page8
