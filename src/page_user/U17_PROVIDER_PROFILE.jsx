import React from 'react';

import ServiceProfile from '../componants_user/ServiceProfile';
import { useNavigate,} from 'react-router-dom';
import Component4 from '../componants_user/Component4';

const U17_PROVIDER_PROFILE = () => {
 
  return (
    <div className='bg-gray-100'>
      <Component4 title={"Profile"} theme='black'/>
      <ServiceProfile/>

    </div> 
  )
}

export default U17_PROVIDER_PROFILE