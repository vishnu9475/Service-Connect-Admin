import AppHeader from '../componants_service/yaswanth/AppHeader'
import LeadsRequestList from '../componants_service/yaswanth/LeadsRequestList'

export default function S30_Leads() {
  return (
    <div>
        <AppHeader
            title="Leads"
            showBack={true}
            theme="black"/>

        <LeadsRequestList />
        
    </div>
  )
}