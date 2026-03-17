import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../componants_user/AppHeader';
import CourseItem from '../componants_user/CourseItem';
import PaymentMethodsSection from '../componants_user/PaymentSelection';
import Component4 from '../componants_user/Component4';

const U21_PAYMENT_METHODS = () => {
  const navigate = useNavigate();

  const paymentOptions = [
    { label: 'Paypal', value: 'paypal' },
    { label: 'Google Pay', value: 'googlepay' },
    { label: 'Credit Card', value: 'creditcard' },
    { label: 'Debit Card', value: 'debitcard' },
  ];

  const handlePaymentSubmit = (paymentMethod) => {
    if (paymentMethod === 'creditcard' || paymentMethod === 'debitcard') {
      navigate('/U21_B_ADD_NEW_CARD');
    } else {
      navigate('/U23PaymentSuccessMessage');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
    
      <Component4 title={"Payment Methods"} theme='black'/>

      <main className="w-[1000px] mx-auto  py-6">
        {/* Course Summary */}
        <div className="mt-6">
          <CourseItem />
        </div>

        {/* Payment Methods */}
        <div className="mt-8">
          <PaymentMethodsSection 
            options={paymentOptions} 
            price="$55" 
            onEnroll={handlePaymentSubmit} 
          />
        </div>
      </main>
    </div>
  );
};

export default U21_PAYMENT_METHODS;