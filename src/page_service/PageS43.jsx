import BottomNavBar from '../componants_service/yaswanth/BottomNavBar'
import UserProfile from '../componants_service/yaswanth/UserProfile'
import AppHeader from '../componants_service/yaswanth/AppHeader'

const Page92 = () => {
  return (
    <div>
      <AppHeader
      title="PROFILE"
        showBack={true}
        // showSearch={true}
        // showFilter={true}
        // showMenu={true}
        // showPhone={true}
        theme="black"
      />
        <UserProfile />
        <BottomNavBar/>
    </div>
  )
}

export default Page92