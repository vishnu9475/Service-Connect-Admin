import yellowstar from "../../assets/yellowstar.png"
import { useState} from "react"

const AdsManage = () => {

  const [selected,setSelected] = useState()
  const options = ["Active","Saved"]

  return (
    <div className="bg-gray-300 p-4">
     <div className="flex  items-center bg-[#787574] text-white rounded-full shadow-md w-[90%] sm:w-[80%] md:w-[60%] mx-auto px-1 py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => setSelected(option)}
                className={`flex-1 py-2 text-center text-sm sm:text-base font-medium rounded-full transition-all duration-300 ${
                  selected === option
                    ? "bg-white text-gray-900 shadow"
                    : "bg-transparent text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
    <div className='flex bg-gray-300 h-screen p-4'>
        <div className='h-52 w-[30%] bg-black rounded-l-2xl'>
           
        </div>
        <div className='rounded-r-2xl bg-white h-52 px-4 w-[70%]'>
            <h1 className='text-orange-400 ml-3 mt-3 font-medium'>Graphic Design</h1>
            <h1 className='ml-3 mt-3 font-medium text-gray-500'>Graphic Design advanced</h1>
             <div className='flex ml-3 mt-5'>
            <img src={yellowstar} className='w-5 h-5'/>
            <h1 className='ml-3 font-medium text-gray-500 '>4.2</h1>
            <h1 className='ml-5 text-gray-500'>|</h1>
            <h1 className='ml-5 font-medium text-gray-500'>2 Hrs 34 Mins</h1>
        </div>
        </div>
    </div>
    </div>
  )
}

export default AdsManage