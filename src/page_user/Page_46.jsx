import { Search } from "lucide-react";
import Component4 from "../componants_user/Component4";

const Page_46 = () => {
    return (
         <div className="min-h-screen bg-white ">
      <div className="">

        <Component4
        title={"Messager Name"}
        showSearch
        showBack/>

        {/* Messages */}
        <div className=" md:px-10 py-4 space-y-3 ">
          {/* Received */}
          <div className="max-w-[75%] bg-gray-300 text-sm p-3 rounded-xl rounded-bl-none">
            Hi, Nicholas Good Evening 😊
            <div className="text-[10px] text-right opacity-60 mt-1">10:45</div>
          </div>

          <div className="max-w-[75%] bg-gray-300 text-sm p-3 rounded-xl rounded-bl-none">
            How was your UI/UX Design Course Like.? 😄
            <div className="text-[10px] text-right opacity-60 mt-1">12:45</div>
          </div>

          {/* Sent */}
          <div className="max-w-[75%] ml-auto bg-blue-100 text-sm p-3 rounded-xl rounded-br-none">
            Hello, i also just finished the Sketch Basic ⭐⭐⭐⭐⭐
            <div className="text-[10px] text-right opacity-60 mt-1">15:29</div>
          </div>

          {/* Images */}
          <div className="flex justify-end gap-2">
            <div className="w-16 h-16 bg-black rounded-lg"></div>
            <div className="w-16 h-16 bg-black rounded-lg"></div>
          </div>

          {/* Received */}
          <div className="max-w-[75%] bg-gray-300 text-sm p-3 rounded-xl rounded-bl-none">
            OMG, This is Amazing..
            <div className="text-[10px] text-right opacity-60 mt-1">13:59</div>
          </div>
        </div>

        {/* Input */}
        <div className="p-3 border-t flex items-center gap-2">
          <input
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 outline-none text-sm"
            placeholder="Message"
          />
          <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
            <Search/>
          </button>
        </div>

      </div>
    </div>
    )
}

export default Page_46;