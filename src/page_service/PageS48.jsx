import AppHeader from '../componants_service/yaswanth/AppHeader'
import NotificationList from '../componants_service/yaswanth/NotificationList'

const Page97 = () => {
  return (
    <>
        <AppHeader
        title="NOTIFICATIONS"
        showBack={true}
         theme="black"
         back={true}
        />
        <NotificationList/>
    </>
  )
}

export default Page97