import React from 'react';

import AppHeader from '../componants_service/AppHeader';

import BookingReciept from '../componants_service/BookingReciept';
import ServiceRequest1 from '../componants_service/ServiceRequest1';

const Page20 = () => {
  return (
    <div>
       <AppHeader
  title="BOOKINGS DETAILS"
  onBack={() => console.log("Go back")} // Shows Back Arrow
  showFilter={true}                     // Shows Filter Icon
  showSearch={true} 
  showPhone={false}  
  showMenu={false} 
  theme="black"                   // Shows Search Icon
    />
<ServiceRequest1/>
<div className="mt-4">
  <BookingReciept />
</div>

    </div>
  )
}

export default Page20