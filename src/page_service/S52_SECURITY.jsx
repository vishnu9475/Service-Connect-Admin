import SecuritySettings111 from "../componants_service/arjun/SecuritySettings111";

import Header from "../componants_service/arjun/Header";

function S52_SECURITY() {
  return (
    /* 1. Added overflow-x-hidden to prevent layout shifting.
       2. Kept the bg-black for the header area to maintain your high-contrast theme.
    */
    <div className="min-h-screen w-full bg-black flex flex-col overflow-x-hidden">
      
      {/* Header Container: Ensuring the text scales beautifully on 4K */}
      <div className="w-full text-white lg:text-5xl xl:text-7xl font-bold tracking-tight">
        <Header title="SECURITY" theme="black" showBack={true} />
      </div>

      
      <main className="flex-1 w-full bg-white flex flex-col pt-16 md:pt-24 2xl:pt-32 px-6 md:px-20 2xl:px-40 pb-12 transition-all duration-300">
        
        
        <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col">
    
          <SecuritySettings111 />
        </div>
      </main>
    </div>
  );
}

export default S52_SECURITY;