
import AdminSideMenu from '../componants/neja/AdminSideMenu113'
import AdminNotifications from '../componants/midhun/AdminNotifications'
import NewNotificationForm from '../componants/midhun/NewNotificationForm'
import Header from "../componants/neja/AdminMain114"


const Page126 = () => {
  return (
    // 🔹 CHANGED: prevent mobile horizontal overflow
    <div className='flex overflow-x-hidden'>

      <AdminSideMenu/>

      {/* 🔹 CHANGED: mobile-safe content wrapper */}
      <div className='flex-1 ml-0 lg:ml-[260px] w-full max-w-full overflow-x-auto'>

        <Header title="Notification Management">

        <AdminNotifications/>

        <NewNotificationForm/>
       </Header>
      </div>
    </div>
  )
}

export default Page126
