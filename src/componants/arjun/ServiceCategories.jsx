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
    <div className="w-full bg-white rounded-[30px] p-6 shadow-xl shadow-gray-100 font-sans min-h-[550px]">
      {/* Header */}
      <h2 className="text-lg font-bold text-[#313165] mb-4">Service Categories</h2>

      {/* List Container */}
      <div className="flex flex-col gap-4">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="flex flex-col gap-2 cursor-pointer group"
            onClick={() => navigate(`/services/${service.id}`)} // Optional: makes items clickable too
          >
            <div className="w-full h-24 bg-[#C5C5EF] rounded-lg transition-all group-hover:bg-[#B8B8E6]" />
            <span className="text-[#313165] font-bold text-sm">{service.name}</span>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button
        type="button"
        onClick={() => navigate('/category')} // Change '/all-services' to your actual route
        className="mt-6 w-full py-3 bg-[#EDEAF7] text-[#5D5DB1] font-bold rounded-2xl hover:bg-[#E5E1F4] transition-colors"
      >
        View More
      </button>
    </div>
  );
};

export default ServiceCategories;