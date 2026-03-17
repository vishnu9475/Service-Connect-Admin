import AppHeader from "../componants_service/yaswanth/AppHeader"
import AdsManage from "../componants_service/yaswanth/AdsManage"

const PageS39 = () =>{
  return (
    <div>
        <AppHeader
         title="ADS MANAGEMENT"
          showBack={true}
         theme="black"
         showSearch={true}
        showFilter={true}
        />
        <AdsManage/>
    </div>
  )
}

export default PageS39