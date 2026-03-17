// import React from 'react';
// import { useNavigate } from 'react-router'; 


// const TableHeader = ({ children, className = "" }) => (
//   <th className={`text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 py-2 ${className}`}>
//     {children}
//   </th>
// );

// const TableCell = ({ children, className = "" }) => (
//   <td className={`text-sm font-bold text-gray-900 py-3 border-b border-gray-200/50 ${className}`}>
//     {children}
//   </td>
// );


// const BookingReceipt = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full min-h-screen bg-white font-sans pb-32 relative">
     

//       <div className="max-w-full mx-auto px-4 sm:px-6 md:px-18 lg:px-30 space-y-4">
//         <div className="mx-auto px-2 py-2 mt-5 space-y-8">
          
         
//           <div className="bg-gray-100 rounded-[32px] p-6 lg:p-8 shadow-sm border border-gray-200">
            
          
//             <div className="mb-8">
//               <h2 className="text-gray-900 text-sm font-bold uppercase tracking-widest mb-4">Appointment</h2>
//               <div className="flex flex-wrap gap-3">
//                 <div className="bg-white border border-gray-200 text-gray-900 px-5 py-2.5 rounded-full shadow-sm font-bold text-sm">
//                   Jun 10, 2024
//                 </div>
//                 <div className="bg-white border border-gray-200 text-gray-900 px-5 py-2.5 rounded-full shadow-sm font-bold text-sm">
//                   9:41 AM
//                 </div>
//               </div>
//             </div>

          
//             <div className="mb-8">
//               <h2 className="text-gray-900 text-sm font-bold uppercase tracking-widest mb-4">Invoice</h2>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b border-gray-300">
//                       <TableHeader>Sl.</TableHeader>
//                       <TableHeader>Description</TableHeader>
//                       <TableHeader className="text-center">Qty</TableHeader>
//                       <TableHeader className="text-right">Price</TableHeader>
//                       <TableHeader className="text-right">Total</TableHeader>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <TableCell>01</TableCell>
//                       <TableCell>Bulb Change</TableCell>
//                       <TableCell className="text-center">1</TableCell>
//                       <TableCell className="text-right">300</TableCell>
//                       <TableCell className="text-right text-orange-600">300</TableCell>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
              
//               <div className="flex justify-end mt-4 px-1">
//                 <div className="flex items-center gap-6">
//                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Grand Total</span>
//                   <span className="text-xl font-bold text-gray-900 underline decoration-orange-500 decoration-2 underline-offset-4">300</span>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-200">
//               <div>
//                 <h3 className="text-gray-900 text-[10px] font-bold uppercase tracking-widest mb-2">Terms and conditions</h3>
//                 <p className="text-xs text-gray-500 font-medium leading-relaxed">Valid for 1 month from the date of issue.</p>
//               </div>

//               <div>
//                 <div className="flex items-center gap-2 mb-2">
//                   <h3 className="text-red-600 text-[10px] font-bold uppercase tracking-widest">Additional Requirements</h3>
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-red-600">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
//                   </svg>
//                 </div>
//                 <ul className="text-xs text-gray-600 font-bold space-y-1">
//                   <li className="flex items-center gap-2">• Provide Ladder</li>
//                   <li className="flex items-center gap-2">• Bulb should be provided</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

          
//           <div className="flex flex-col gap-4 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto">
            
           
//             <button 
//                onClick={() => navigate('/U21_PAYMENT_METHODS')}
//                className="w-full bg-gray-900 text-white font-bold py-4 px-8 rounded-full flex items-center justify-between shadow-lg hover:bg-black transition-all active:scale-95"
//             >
//               <span className="text-md uppercase tracking-widest">Complete Payment</span>
//               <div className="bg-white rounded-full p-1.5">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="3">
//                   <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                 </svg>
//               </div>
//             </button>

//             <button className="w-full bg-red-800 text-white font-bold py-4 px-8 rounded-full flex items-center justify-between shadow-lg hover:bg-red-900 transition-all active:scale-95">
//               <span className="text-md uppercase tracking-widest">Raise a Complaint</span>
//               <div className="bg-white rounded-full p-1.5">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#991b1b" strokeWidth="3">
//                   <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                 </svg>
//               </div>
//             </button>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingReceipt;




import React from 'react';
import { useNavigate } from 'react-router'; // 1. Import the hook

// --- SUB-COMPONENTS FOR TABLE ---
const TableHeader = ({ children, className = "" }) => (
  <th className={`text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 py-2 ${className}`}>
    {children}
  </th>
);

const TableCell = ({ children, className = "" }) => (
  <td className={`text-sm font-bold text-gray-900 py-3 border-b border-gray-200/50 ${className}`}>
    {children}
  </td>
);

// --- TOOLBOX DOCK ---
// const ToolBox = () => (
//   <div className="fixed bottom-6 left-0 right-0 px-4 z-[9999] pointer-events-none">
//     <div className="w-full max-w-xl mx-auto bg-[#6D5D5D] rounded-[40px] px-6 py-4 flex justify-between items-center shadow-2xl pointer-events-auto">
//       <button className="text-white scale-110"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg></button>
//       <button className="text-white opacity-60"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 20H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg></button>
//       <button className="text-white opacity-60"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></button>
//       <button className="text-white opacity-60"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg></button>
//       <button className="text-white opacity-60"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg></button>
//     </div>
//   </div>
// );

// --- MAIN RECEIPT PAGE ---
const BookingReceipt = () => {
  const navigate = useNavigate(); // 2. Initialize the navigation function

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-32 relative">
      {/* <ToolBox /> */}

      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-18 lg:px-30 space-y-4">
        <div className="mx-auto px-2 py-2 mt-5 space-y-8">
          
          {/* Main Card */}
          <div className="bg-gray-100 rounded-[32px] p-6 lg:p-8 shadow-sm border border-gray-200">
            
            {/* Appointment Section */}
            <div className="mb-8">
              <h2 className="text-gray-900 text-sm font-bold uppercase tracking-widest mb-4">Appointment</h2>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white border border-gray-200 text-gray-900 px-5 py-2.5 rounded-full shadow-sm font-bold text-sm">
                  Jun 10, 2024
                </div>
                <div className="bg-white border border-gray-200 text-gray-900 px-5 py-2.5 rounded-full shadow-sm font-bold text-sm">
                  9:41 AM
                </div>
              </div>
            </div>

            {/* Invoice Table Section */}
            <div className="mb-8">
              <h2 className="text-gray-900 text-sm font-bold uppercase tracking-widest mb-4">Invoice</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <TableHeader>Sl.</TableHeader>
                      <TableHeader>Description</TableHeader>
                      <TableHeader className="text-center">Qty</TableHeader>
                      <TableHeader className="text-right">Price</TableHeader>
                      <TableHeader className="text-right">Total</TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <TableCell>01</TableCell>
                      <TableCell>Bulb Change</TableCell>
                      <TableCell className="text-center">1</TableCell>
                      <TableCell className="text-right">300</TableCell>
                      <TableCell className="text-right text-orange-600">300</TableCell>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-end mt-4 px-1">
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Grand Total</span>
                  <span className="text-xl font-bold text-gray-900 underline decoration-orange-500 decoration-2 underline-offset-4">300</span>
                </div>
              </div>
            </div>

            {/* Terms & Requirements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-200">
              <div>
                <h3 className="text-gray-900 text-[10px] font-bold uppercase tracking-widest mb-2">Terms and conditions</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Valid for 1 month from the date of issue.</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-red-600 text-[10px] font-bold uppercase tracking-widest">Additional Requirements</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <ul className="text-xs text-gray-600 font-bold space-y-1">
                  <li className="flex items-center gap-2">• Provide Ladder</li>
                  <li className="flex items-center gap-2">• Bulb should be provided</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto">
            
            {/* 3. Added the navigate function to this button */}
            <button 
               onClick={() => navigate('/U21_PAYMENT_METHODS')}
               className="w-full bg-gray-900 text-white font-bold py-4 px-8 rounded-full flex items-center justify-between shadow-lg hover:bg-black transition-all active:scale-95"
            >
              <span className="text-md uppercase tracking-widest">Complete Payment</span>
              <div className="bg-white rounded-full p-1.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="3">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </button>

            <button className="w-full bg-red-800 text-white font-bold py-4 px-8 rounded-full flex items-center justify-between shadow-lg hover:bg-red-900 transition-all active:scale-95">
              <span className="text-md uppercase tracking-widest">Raise a Complaint</span>
              <div className="bg-white rounded-full p-1.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#991b1b" strokeWidth="3">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingReceipt;