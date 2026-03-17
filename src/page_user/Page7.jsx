import React from 'react'
import Component4 from '../componants_user/Component4'
import Component5 from '../componants_user/fifth'

function Page7() {
  return (
    <div className='w-full min-h-screen bg-gray-200'>
      <Component4 title={"FORGOT PASSWORD"} theme='black'/>
      <Component5 flow="reset"/>
    </div>
  )
}

export default Page7
