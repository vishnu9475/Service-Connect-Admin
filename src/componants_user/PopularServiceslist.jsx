import React from 'react';

const PopularServicesList = () => {
  // Example data for the list
  const services = [
    {
      id: 1,
      category: 'Plumbing',
      title: 'Complete Residential Plumbing',
      price: '₹100-200',
      rating: '4.2',
      reviews: '7830',
      imageColor: 'bg-black' // Placeholder for image
    },
    // You can add more service objects here
  ];

  return (
    <div className="w-full max-w-sm px-4 py-2 font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-900">Popular Services</h3>
        <button className="text-[10px] font-bold text-gray-400 hover:text-black tracking-wide">
          SEE ALL
        </button>
      </div>

      {/* List Container */}
      <div className="space-y-4">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-100"
          >
            {/* Service Image / Placeholder */}
            <div className={`h-36 w-full ${service.imageColor}`}></div>

            {/* Content Area */}
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[11px] text-gray-400 font-semibold mb-1">
                    {service.category}
                  </p>
                  <h4 className="font-bold text-[15px] text-[#1A1C22]">
                    {service.title}
                  </h4>
                </div>
                
                {/* Bookmark Icon */}
                <button className="text-teal-600 mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>

              {/* Metadata Row (Price, Rating, Reviews) */}
              <div className="flex items-center gap-3 mt-3 text-[11px] text-gray-500 font-bold">
                <span className="text-gray-900">{service.price}</span>
                <span className="text-gray-300 font-normal">|</span>
                
                <div className="flex items-center gap-1">
                  {/* Star Icon */}
                  <svg className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-900">{service.rating}</span>
                </div>

                <span className="text-gray-300 font-normal">|</span>
                <span>{service.reviews} Reviews</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularServicesList;