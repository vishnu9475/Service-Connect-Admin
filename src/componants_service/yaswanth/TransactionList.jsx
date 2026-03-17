// import React from 'react'
// import shop from "../assets/shop.png"
// import wifi from "../assets/wifi.png"


// const TransactionList = () => {
//   return (
//     <>
//         <div className='bg-gray-300 h-screen p-3'>
//           <h1 className='font-medium'>Transactions</h1>
//            <div className='flex items-center bg-white rounded-3xl shadow-lg w-100 p-4 mt-4'>
//               <img src={shop} className='w-7 h-7 ml-5'/>
//               <div className='ml-4'>
//                 <h1>Sri Rajan</h1>
//                 <h1>22 September 2021</h1>
//               </div>
//               <h1 className='text-red-400 ml-36'>$22</h1>
//         </div>
//          <div className='flex items-center bg-white rounded-3xl shadow-lg w-100 p-4 mt-4'>
//               <img src={wifi} className='w-7 h-7 ml-5'/>
//               <div className='ml-4'>
//                 <h1>Sofiya</h1>
//                 <h1>14 September 2021</h1>
//               </div>
//               <h1 className='text-red-400 ml-36'>$120</h1>
//         </div>
//          <div className='flex items-center bg-white rounded-3xl shadow-lg w-100 p-4 mt-4'>
//               <img src={shop} className='w-7 h-7 ml-5'/>
//               <div className='ml-4'>
//                 <h1>Sri Rajan</h1>
//                 <h1>22 September 2021</h1>
//               </div>
//               <h1 className='text-red-400 ml-36'>$22</h1>
//         </div>
//       </div>    
// </>
//   )
// }

// export default TransactionList

import { useState } from "react";
import { FaWifi } from "react-icons/fa";
import { TbBuildingBank } from "react-icons/tb";
import { CiMenuKebab } from "react-icons/ci";

export default function TransactionList() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const transactions = [
    { id: 1, name: "Sri Rajan", date: "22 September 2021", amount: "$22", type: "bank" },
    { id: 2, name: "Sofiya", date: "14 September 2021", amount: "$120", type: "wifi" },
    { id: 3, name: "Arjun", date: "10 September 2021", amount: "$75", type: "bank" },
    { id: 4, name: "Meera", date: "8 September 2021", amount: "$40", type: "wifi" },
    { id: 5, name: "Kiran", date: "5 September 2021", amount: "$95", type: "bank" }
  ];

  const categories = ["all", ...new Set(transactions.map(tx => tx.type))];

  const filteredTransactions =
    selectedCategory === "all"
      ? transactions
      : transactions.filter(tx => tx.type === selectedCategory);

  return (
    <div className="bg-gray-300 flex flex-col w-[100%] justify-center">
      <div className="px-4 mt-4 flex-1 w-[100%] md:w-[90%] self-center mb-12 lg:mb-8">

        <div className="flex items-center justify-between mb-4 relative">
          <h4 className="font-semibold text-small mt-2">
            Transactions
          </h4>

          <CiMenuKebab
            className="w-5 h-5 mr-1 cursor-pointer "
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {menuOpen && (
            <div className="absolute right-0 top-8 bg-white shadow rounded-lg p-2 text-sm">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer rounded"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setMenuOpen(false);
                  }}
                >
                  {cat.toUpperCase()}
                </div>
              ))}
            </div>
          )}
        </div>

        {filteredTransactions.map((tx) => (
          <Transaction
            key={tx.id}
            icon={
              tx.type === "bank"
                ? <TbBuildingBank className="w-12 h-12 m-1" />
                : <FaWifi className="w-12 h-12 m-1" />
            }
            name={tx.name}
            date={tx.date}
            amount={tx.amount}
          />
        ))}

      </div>
    </div>
  );
}

function Transaction({ name, date, amount, icon }) {
  return (
    <div className="bg-white rounded-xl p-3 flex items-center justify-between mb-3 shadow">
      <div className="flex items-center gap-4 flex-1">
        <div className="flex items-center justify-center">
          {icon}
        </div>

        <div>
          <p className="text-small font-medium">{name}</p>
          <p className="text-small text-gray-400">{date}</p>
        </div>
      </div>

      <p className="text-red-500 text-medium font-semibold mr-1 md:mr-5">
        {amount}
      </p>
    </div>
  );
}