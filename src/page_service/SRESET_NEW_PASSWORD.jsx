import React, { useState } from 'react'; // 1. Import useState
import Component8 from '../componants_service/arjun/Component8';
import Component4 from '../componants_service/arjun/comp4';

const SRESET_NEW_PASSWORD = () => {
  // 2. State to hold password values and error message
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // 3. Validation logic to compare passwords
  const validatePasswords = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    setError(''); // Clear error if valid
    return true;
  };

  return (
    <div className='bg-[#D9D9D9] min-h-screen flex flex-col w-full overflow-x-hidden'>
      
      {/* 1. Header Section */}
      <div className="w-full">
        <Component4 theme='black' title="RESET PASSWORD"/>
      </div>
      
      <div className='flex-1 flex flex-col items-center justify-center p-4 sm:p-8 2xl:p-16'>
        <div className='w-full max-w-[550px] transition-all duration-300'>
          <Component8
            heading="Create Your New Password"
            buttonText="Update Password"
            // 4. Pass inputs with state tracking
            inputs={[
              { 
                type: "password", 
                placeholder: "Password",
                value: password,
                onChange: (e) => setPassword(e.target.value) 
              },
              { 
                type: "password", 
                placeholder: "Confirm Password",
                value: confirmPassword,
                onChange: (e) => setConfirmPassword(e.target.value)
              }
            ]}
            // 5. Pass validation handler and error message
            onValidate={validatePasswords}
            errorMessage={error}
            navigatePath="/SRESET_CONGRATULATIONS"
          />
        </div>
      </div>
    </div>
  )
}

export default SRESET_NEW_PASSWORD;