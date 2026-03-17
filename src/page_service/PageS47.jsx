import TermsAndConditions from '../componants_service/yaswanth/TermsAndConditions'
import AppHeader from '../componants_service/yaswanth/AppHeader'

const Page96 = () => {
  return (
    <div>
        <AppHeader
        title="TERMS AND CONDITIONS"
        showBack={true}
         theme="black"
         back={true}
        />
        <TermsAndConditions/>
    </div>
  )
}

export default Page96