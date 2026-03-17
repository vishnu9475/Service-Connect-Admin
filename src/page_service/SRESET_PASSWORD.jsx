import React, { useState } from 'react';
import Component4 from '../componants_service/arjun/comp4';
import Component8 from '../componants_service/arjun/Component8';

function SResetPassword() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const phoneRegex = /^\+?[1-9]\d{6,14}$/;

  const handleValidation = () => {
    // Check if both are empty
    if (!email && !phone) {
      setError("Please enter either an email or a phone number.");
      return false;
    }

    // Validate email if entered
    if (email && !gmailRegex.test(email)) {
      setError("Please enter a valid Gmail address.");
      return false;
    }

    // Validate phone if entered
    if (phone && !phoneRegex.test(phone)) {
      setError("Please enter a valid phone number (e.g., +1234567890).");
      return false;
    }
    
    setError('');
    return true;
  };

  return (
    <div className='w-full min-h-screen bg-[#D9D9D9] flex flex-col overflow-x-hidden'>
      <div className="w-full">
        <Component4 title={"RESET PASSWORD"} theme='black'/>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 2xl:p-16">
        <div className="w-full max-w-[550px] transition-all duration-300">
          <Component8 
            description="Enter your registered email or phone number to receive a OTP to reset your password"
            navigatePath="/SVERIFY_RESET_PASSWORD"
            
            inputs={[
              { 
                type: "email",
                placeholder: "Email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                isSelection: false // --- FIX: Explicitly set false ---
              },
              { 
                type: "tel",
                placeholder: "Phone Number",
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                isSelection: false // --- FIX: Explicitly set false ---
              }
            ]}
            
            // --- FIX: Use onValidate to match Component8 props ---
            onValidate={handleValidation}
            errorMessage={error}
          />
        </div>
      </div>
    </div>
  );
}

export default SResetPassword;