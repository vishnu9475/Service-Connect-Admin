import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../componants_user/AppHeader';
import ServiceRequest from '../componants_user/ServiceRequest';
import BookingReciept from '../componants_user/BookingReciept';
import Component4 from '../componants_user/Component4';

const U20_Booking_Details = () => {
  const navigate = useNavigate();

  const handleBackToBookings = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      <Component4
      title={"Booking Details"}
      theme='black'
      showFilter
      showSearch/>

      {/* FIX: safer responsive width */}
      <main className="max-w-[800px] w-full mx-auto px-4 mt-6">

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

          <div className="p-1 md:p-4">
            <ServiceRequest />
          </div>

          <div className="px-4 md:px-8">
            <div className="border-t border-dashed border-gray-200 w-full" />
          </div>

          <div className="p-4 md:p-8">
            <div className="bg-gray-50 rounded-2xl p-4 md:p-6">
              <h3 className="text-gray-900 font-bold text-lg mb-4 px-2">
                Payment Summary
              </h3>
              <BookingReciept />
            </div>
          </div>

        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Need help with this booking?{" "}
          <span className="text-teal-600 font-medium cursor-pointer">
            Contact Support
          </span>
        </p>
      </main>
    </div>
  );
};

export default U20_Booking_Details;
