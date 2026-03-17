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
      <div className=" w-[100%] flex justify-center bg-gray-300">
        <div className="w-[100%] md:w-[85%] self-center flex flex-col ">
          
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
          <div className=" flex gap-3 md:gap-9 px-2 text-center">
            
            {/* Income */}
            <div className=" flex flex-1 bg-indigo-400 text-white rounded-xl p-1 sm:p-3">
              <BsArrowUpSquareFill className="self-center w-10 h-10 p-1  sm:w-14 sm:h-14 " />
              <div className="flex flex-col justify-center ml-3 md:ml-4 sm:ml-5">
                <p className="text-xs">Income</p>
                <h4 className="font-bold">${income}</h4>
              </div>
            </div>

            {/* Expense */}
            <div className="flex flex-1 bg-pink-400 text-white rounded-xl p-1 sm:p-3">
              <BsArrowDownSquareFill className="self-center w-10 h-10 p-1 sm:w-14 sm:h-14 " />
              <div className="flex flex-col justify-center ml-3 md:ml-4 sm:ml-5">
                <p className="text-xs">Expenditure</p>
                <h4 className="font-bold">${expense}</h4>
              </div>
            </div>

          </div>

       <div className="flex w-[100%] gap-3 md:gap-9 ">
           <div className=" w-[100%] bg-gradient-to-r  from-gray-600 to-gray-500 rounded-xl p-4 space-y-3 m-3  text-white">
            <p className="font-medium">{user?.name}</p>
            <p className=" text-medium font-bold">
              {cardNumber}
            </p>

            <div>
              <p className="text-small text-gray-300">
                Account Balance
              </p>
              <p className="font-semibold">
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
