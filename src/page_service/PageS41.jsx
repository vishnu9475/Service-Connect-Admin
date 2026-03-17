import EditAdForm from '../componants_service/yaswanth/EditAdForm'
import AppHeader from '../componants_service/yaswanth/AppHeader'


const Page90 = () => {
  return (
    <div>
        <AppHeader
         title="EDIT ADS"
          showBack={true}
         theme="black"
        />
        <EditAdForm/>
    </div>
  )
}

export default Page90