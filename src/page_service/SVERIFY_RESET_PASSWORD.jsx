import Component4 from '../componants_service/arjun/comp4'
import Component5 from '../componants_service/arjun/VerifyForgotPassword'

function SVERIFY_RESET_PASSWORD() {
  return (
    <div className='w-full min-h-screen bg-gray-200'>
      <Component4 title={"RESET PASSWORD"} theme='black'/>
      <Component5/>
    </div>
  )
}

export default SVERIFY_RESET_PASSWORD
