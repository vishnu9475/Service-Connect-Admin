import About from '../componants_service/yaswanth/About'
import AppHeader from '../componants_service/yaswanth/AppHeader'

const Page95 = () => {
  return (
    <div>
        <AppHeader
        title="ABOUT"
        showBack={true}
         theme="black"
        //  back={true}
        />
        <About/>
    </div>
  )
}

export default Page95