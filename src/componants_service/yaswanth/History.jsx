// import { ArrowRight } from 'lucide-react';

// const History = () => {
//   return (
//     <div className="bg-gray-200 h-screen w-full flex items-center justify-center ">
//       <div className='bg-white rounded-4xl h-1/2 w-1/2 flex-col  justify-center items-center'>
//         <h1>No History Found</h1>
//         <p>Your activity will appear here once you start using our service</p>
//         <div className="flex">
//           <h1 className='w-56 rounded-full bg-black text-white'>Explore Services</h1>
//           <div className='bg-white rounded-full'>
//             <ArrowRight color='black'/>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default History


import { ArrowRight } from "lucide-react";

const History = () => {
  return (
    <div className="bg-gray-200 min-h-screen w-full flex items-center justify-center px-4">
      <div
        className="
          bg-white rounded-3xl
          w-[90%]
          sm:max-w-[360px]
          md:max-w-[420px]
          lg:max-w-[500px]
          xl:max-w-[600px]
          2xl:max-w-[700px]
          min-h-[420px]
          flex flex-col justify-center items-center
          gap-4 px-6 py-8
          text-center
        "
      >
        <h1 className="text-xl md:text-2xl font-semibold">
          No History Found
        </h1>

        <p className="text-sm md:text-base text-gray-500">
          Your activity will appear here once you start using our service
        </p>

        {/* <button
          className="
            flex items-center justify-between
            bg-black text-white
            w-full sm:max-w-[220px] lg:max-w-[260px]
            px-5 py-3 rounded-full
            hover:bg-gray-800 transition
          "
        >
          <span>Explore Services</span>
          <span className="bg-white p-2 rounded-full">
            <ArrowRight color="black" size={18} />
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default History;