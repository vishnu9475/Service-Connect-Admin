import React from 'react'

export default function CreateAdForm() {
  return (
        <div className="min-h-screen bg-gray-200 flex justify-center">
            <div className="w-full p-4">
                <h2 className="text-sm font-semibold text-gray-700 mt-6">
          Choose Your Ad type
        </h2>

                <div className="relative h-32 rounded-2xl overflow-hidden mt-5">
                    <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Banner Ads"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center px-4">
<p className="absolute inset-0 flex items-center justify-center text-white font-semibold">Banner Ads</p>
            <p className=" absolute bottom-3 right-4 text-white text-sm">Rs : 350 / month</p>
          </div>
                </div>


                <div className="flex justify-center mt-10">
          <div className="relative h-40 w-[50%] md:w-[30%] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Card Ads"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  flex flex-col justify-center items-center gap-5">
              <p className="text-white font-semibold">CARD Ads</p>
              <p className="absolute bottom-0 text-white text-xs md:text-sm mt-1">
                Rs : 150 / month
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-900 rounded-2xl py-4 px-4 mt-6 h-14">
  
  <p className="absolute inset-0 flex items-center justify-center text-white font-semibold">
    Popup Ads
  </p>

  <p className="absolute bottom-2 right-4 text-white text-xs md:text-small">
    Rs : 50 / month
  </p>

</div>




            </div>
        </div>
  )
}

