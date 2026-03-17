import NotificationSettings from "../componants_service/yaswanth/NotificationSettings"
import AppHeader from '../componants_service/yaswanth/AppHeader'

const Page100 = () => {
  return (
    <div>
        <AppHeader
        title="NOTIFICATIONS SETTINGS"
        showBack={true}
         theme="black"
        />
        <NotificationSettings/>
    </div>
  )
}

export default Page100