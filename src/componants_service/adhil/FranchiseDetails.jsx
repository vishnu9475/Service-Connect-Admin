import { FaArrowLeft } from "react-icons/fa6";

export default function FranchiseDetails() {
  return (
        <div className="min-h-screen bg-gray-200 flex justify-center">
            <div className="w-full max-auto bg-gray-200 shadow-lg m-2">
                <div className="relative">
                    <img
            src="../src/assets/cococola.jpg"
            alt="header"
            className="w-full h-50 object-cover"
          />
          <div className="absolute top-3 left-3 bg-white/30 backdrop-blur-md rounded-full p-2 shadow">
                <FaArrowLeft />
          </div>

          <div className="absolute top-3 right-3 flex gap-2">
            <span className="w-6 h-6 bg-white/30 backdrop-blur-md rounded-full"></span>
            <span className="w-6 h-6 bg-white/30 backdrop-blur-md rounded-full"></span>
            <span className="w-6 h-6 bg-white/30 backdrop-blur-md rounded-full"></span>
          </div>
        </div>

            <div className="p-4">
                <span className="text-medium font-semibold">Franchisee Name</span>
                <div className="flex justify-between mt-3">
                    <div className="gap-3 flex">
                        <p className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white font-semibold">
                            T
                        </p>
                        <p className="text-small font-semibold">
                            Tome Jose
                        </p>

                    </div>
                    <button className="bg-gray-800 text-white px-4 py-1.5 rounded-full text-sm">
              Chat/Contact
            </button>
                </div>
          </div>


           <div className=" p-4 bg-white rounded-2xl">
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lobortis cras placerat ipsum. Nisl vel adipiscing massa
            bibendum diam. Suspendisse mattis sed mauris.
          </p>
           </div>



        

         <div className="p-4 bg-white rounded-2xl mt-4">

  <h4 className="text-sm font-semibold text-gray-800 mb-3">
    Contact info
  </h4>

  <div className="grid grid-cols-[150px_1fr] gap-y-2">
    <p className="text-small font-semibold text-gray-500 ">Address</p>
    <p className="text-small font-bold text-gray-700">
      KK Building, Ernakulam
    </p>

    <p className="text-small font-semibold text-gray-500">Email</p>
    <p className="text-small font-bold text-gray-700">
      asdf@email.com
    </p>

    <p className="text-small font-semibold text-gray-500">Phone</p>
    <p className="text-small font-bold text-gray-700">
      8582525558
    </p>
  </div>

</div>


          
                </div>
            </div>
  )
}

