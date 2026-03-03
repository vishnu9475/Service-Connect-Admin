import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCategories = () => {
  // Initialize the navigate function
  const navigate = useNavigate();

  const services = [
    { id: 1, name: 'Mechanic' },
    { id: 2, name: 'House Keeping' },
    { id: 3, name: 'Laundry' },
  ];

  return (
    <div className="w-full bg-white rounded-[30px] p-6 shadow-xl shadow-gray-100 font-sans min-h-[590px] border border-gray-50">
      {/* Header */}
      <h2 className="text-lg font-bold text-[#313165] mb-6">Service Categories</h2>

      {/* List Container */}
      <div className="flex flex-col gap-5">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="flex flex-col gap-2 cursor-pointer group"
            // All items lead to the development subcategory page
            onClick={() => navigate('/subcategory')} 
          >
            {/* Image Placeholder with subtle hover depth */}
            <div className="w-full h-24 bg-[#C5C5EF]/60 rounded-2xl transition-all duration-300 group-hover:bg-[#C5C5EF] group-hover:shadow-md ring-1 ring-inset ring-black/5" />
            
            <span className="text-[#313165] font-bold text-sm ml-1 group-hover:text-[#4D44B5] transition-colors">
              {service.name}
            </span>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button
        type="button"
        onClick={() => navigate('/category')} 
        className="mt-8 w-full py-4 bg-[#F3F1FB] text-[#5D5DB1] text-sm font-extrabold rounded-2xl hover:bg-[#EDEAF7] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm shadow-indigo-100/50"
      >
        View More
      </button>
    </div>
  );
};

export default ServiceCategories;