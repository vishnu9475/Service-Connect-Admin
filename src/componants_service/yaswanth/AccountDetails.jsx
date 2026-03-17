// import person from "../assets/person.jpg"
// import uparrow from "../assets/uparrow.png"
// import downarrow from "../assets/downarrow.png"

// const AccountDetails = () => {
//   return (
//     <div className='bg-gray-300 h-screen'>
//     <div className='flex items-center py-4'>
//       <img className="w-12 h-12 p-1 rounded-xl relative ml-5" src={person} alt="Bordered avatar"/>
//       <div>
//         <h1 className="text-gray-600">Lasso Kayne</h1>
//         <h1 className='font-medium text-gray-700'>Welcome back!</h1>
//       </div>
      
//     </div>
//     <div className='flex'>
//      <div className='shadow-xl rounded-2xl flex items-center justify-center ml-6 bg-blue-600 w-52 p-3 text-white'>
//       <img src={uparrow} className='w-7 h-7'/>
//       <div className='font-medium ml-10'>
//         <h1>Income</h1>
//         <h1>$21,000</h1>
//       </div>
//     </div>
//       <div className='shadow-xl rounded-2xl flex items-center justify-center ml-6 bg-pink-600 w-52 p-3 text-white'>
//       <img src={downarrow} className='w-7 h-7'/>
//       <div className='font-medium ml-10'>
//         <h1>Income</h1>
//         <h1>$21,000</h1>
//       </div>
//     </div>
//     </div>
//      <div className='shadow-xl text-gray-300 bg-black w-154 h-70 p-5 rounded-2xl ml-6 mt-6'>
//       <h1 className='ml-5'>Lasso Kayne</h1>
//       <h1 className='font-medium mt-14 ml-5 text-2xl'>4556 4545 2344 6565</h1>
//       <h1 className='mt-18 ml-5 text-xl'>Account balance</h1>
//       <h1 className='ml-5'>$121,000</h1>
//     </div>
   
//     </div>
//   )
// }

// export default AccountDetails

import { BsArrowUpSquareFill } from "react-icons/bs";
import { BsArrowDownSquareFill } from "react-icons/bs";

export default function AccountDetails({
  user,
  income,
  expense,
  balance,
  cardNumber
}) {
  return (
    <div className="">
      <div className=" w-[100%]  flex justify-center bg-gray-300">
        <div className="w-[100%] md:w-[90%] self-center flex flex-col ">
          
          {/* Profile */}
          <div className="flex m-3 gap-2">
            <img
              src={user?.avatar || "https://i.pravatar.cc/100"}
              className="w-18 h-18 rounded"
              alt="profile"
            />
            <div className="flex flex-col justify-center">
              <h3 className="font-semibold text-base">
                {user?.name || "User"}
              </h3>
              <p className="text-small text-gray-500">
                Welcome Back!
              </p>
            </div>
          </div>

          {/* Income & Expense */}
          <div className="flex gap-3 md:gap-9 px-2 text-center">
  
  {/* Income */}
  <div className="flex flex-1 min-w-0 bg-indigo-400 text-white rounded-xl p-2 sm:p-3">
    <BsArrowUpSquareFill className="self-center w-9 h-9 sm:w-12 sm:h-12 flex-shrink-0" />
    <div className="flex flex-col justify-center ml-2 sm:ml-4 min-w-0">
      <p className="text-xs">Income</p>
      <h4 className="font-bold text-sm sm:text-base truncate">
        ${income}
      </h4>
    </div>
  </div>

  {/* Expense */}
  <div className="flex flex-1 min-w-0 bg-pink-400 text-white rounded-xl p-2 sm:p-3">
    <BsArrowDownSquareFill className="self-center w-9 h-9 sm:w-12 sm:h-12 flex-shrink-0" />
    <div className="flex flex-col justify-center ml-2 sm:ml-4 min-w-0">
      <p className="text-xs">Expenditure</p>
      <h4 className="font-bold text-sm sm:text-base truncate">
        ${expense}
      </h4>
    </div>
  </div>

</div>


          {/* Balance Card */}
        <div className="px-2">
  <div className="w-full bg-gradient-to-r from-gray-600 to-gray-500 rounded-xl p-4 mt-5 text-white space-y-2">
    
    <p className="font-medium truncate">
      {user?.name}
    </p>

    <p className="text-medium font-bold tracking-wider truncate">
      {cardNumber}
    </p>

    <div>
      <p className="text-small text-gray-300">
        Account Balance
      </p>
      <p className="font-semibold text-lg truncate">
        ${balance}
      </p>
    </div>

  </div>
</div>


        </div>
      </div>
    </div>
  );
}