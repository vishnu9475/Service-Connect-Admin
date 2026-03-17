import { FaBroom, FaBolt, FaTruck, FaSpa } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Cleaning",
  
     Image: <img src="/image4.png" alt="" />,
    bg: "bg-blue-100",
   
  },
  {
    id: 2,
    name: "Electrical",
     Image: <img src="/image7.png" alt="" />,
    
    bg: "bg-yellow-100",
    
  },
  {
    id: 3,
    name: "Delivery",
     Image: <img src="/image1.png" alt="" />,
    bg: "bg-green-100",
   
  },
  {
    id: 4,
    name: "Beauty",
    Image: <img src="/image8.png" alt="" />,
    bg: "bg-pink-100",
  },
  {
    id: 5,
    name: "All",
     Image: <img src="/image7.png" alt="" />,
    
    bg: "bg-yellow-100",
    
  },
  {
    id: 6,
    name: "Home applience repair",
     Image: <img src="/image3.png" alt="" />,
    
    bg: "bg-yellow-100",
    
  },
  {
    id: 7,
    name: "Laundry",
     Image: <img src="/image3.png" alt="" />,
    
    bg: "bg-yellow-100",
    
  },
  {
    id: 8,
    name: "Buisiness sirvice",
     Image: <img src="/image7.png" alt="" />,
    
    bg: "bg-yellow-100",
    
  },
  {
    id: 9,
    name: "Events",
     Image: <img src="/image7.png" alt="" />,
    
    bg: "bg-yellow-100",
    
  },
  {
    id: 10,
    name: "Technology sirvice",
     Image: <img src="/image7.png" alt="" />,
    
    bg: "bg-yellow-100",
    
  },
  {
    id: 11,
    name: "Health and fitness",
     Image: <img src="/image7.png" alt="" />,
    
    bg: "bg-yellow-100",
    
  },
];

export default function Comp12() {
  return (
    <div className="max-w-[90%]  mx-auto my-8 px-4 py-3 bg-white rounded-sm over shadow-md shadow-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Services Category
        </h2>

        <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 cursor-pointer">
          <Link to="/Page12">SEE ALL</Link>
          <MdArrowForwardIos size={12} />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-5  overflow-x-auto scrollbar-hide ">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center min-w-30 "
          >
            <div
              className={`w-14 px-1 overflow-hidden shadow-lg shadow-gray-900 h-14 rounded-full flex items-center border-2 border-black justify-center ${service.bg}`}
            >
              <span >
                {service.Image}
              </span>
            </div>
            <p className="mt-2 text-sm font-normal text-gray-700">
              {service.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}