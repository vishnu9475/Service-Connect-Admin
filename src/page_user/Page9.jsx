import React from 'react'

import Component4 from '../componants_user/Component4'
import Component8 from '../componants_user/Component8'


const Page9 = () => {
  return (
    <div className='min-h-screen'>
       <div>
         <Component4 theme='black'
           title="FORGET PASSWORD"/>
       </div>
       <div className='w-full'>
    <Component8
  heading="Create Your New Password"
  buttonText="Update Password"
  inputs={[
    { type: "password", placeholder: "Password" },
    { type: "password", placeholder: "Confirm Password" }
  ]}
/>


       </div>
    </div>
  )
}

export default Page9
