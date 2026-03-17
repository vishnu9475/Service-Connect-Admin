
import AppHeader from "../componants_service/reshma/AppHeader";
import CourseItem from "../componants_service/reshma/CourseItem";
import PaymentSelection from "../componants_service/reshma/PaymentSelection";

export default function Page62 ()

{
 return(    
<>
    <AppHeader
     title="Payment methods"
        MoreVertical={false}
        showMenu={false}
  ChevronLeft={true} 
   showSearch={false}
  showPhone={false}
  showFilter={false}
        onBack={() => console.log("Go back")}
        theme="black"/>
       
        <CourseItem/>
        <PaymentSelection/>
        </>
        )
}