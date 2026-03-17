import AppHeader from "../componants_service/yaswanth/AppHeader";
import CourseItem from "../componants_service/yaswanth/CourseItem";
import PaymentMethodsSection from "../componants_service/yaswanth/PaymentMethodsSection";


const Missing147 = () => {
  // Define payment options
  const paymentOptions = [
    { label: 'Paypal', value: 'paypal' },
    { label: 'Google Pay', value: 'googlepay' },
    { label: 'Credit Card', value: 'creditcard' },
    { label: 'Debit Card', value: 'debitcard' },
  ];

  // Handle payment submission
  const handlePaymentSubmit = (paymentMethod) => {
    console.log('Payment submitted with method:', paymentMethod);
    // Add your payment processing logic here
  };
  return (  

    <div>

      <AppHeader
       showBack={true}
        theme="black"   
        title="PAYMENT METHODs"
        onBack={() => console.log("Go back")}   // Shows Back Arrow                
    />

    <div className=" px-4 mt-10">
   
     <CourseItem />

    </div>

      <div className="px-4 mt-6">
        <PaymentMethodsSection 
          options={paymentOptions} 
          price="$55" 
          onEnroll={handlePaymentSubmit} 
        />
      </div>
 
   
     </div>
  )
}

export default Missing147
