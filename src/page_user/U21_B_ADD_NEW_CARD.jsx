import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import the tool
import AppHeader from '../componants_user/AppHeader';
import CardPaymentForm from '../componants_user/CardPaymentForm';
import Component4 from '../componants_user/Component4';

const U21_B_ADD_NEW_CARD = () => {


  return (
    <div className='bg-gray-100'>
      
      <Component4
      title={"Add Card"}
      theme='black'/>

      <CardPaymentForm />
    </div>
  );
};

export default U21_B_ADD_NEW_CARD;