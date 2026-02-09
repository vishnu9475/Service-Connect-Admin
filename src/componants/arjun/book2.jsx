import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingCard = ({
  user,
  provider,
  bookingId,
  franchiseName,
  leftStatus,
  rightStatus,
  service,
  availability,
  media,
  detailsPath = "/Booking_Details",
}) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const isDeclined = rightStatus.text.toLowerCase() === "declined";

  return (
    <div className="w-full max-w-[1000px] bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">

        {/* ================= LEFT COLUMN ================= */}
        <div className="flex-1 p-6 border-b md:border-b-0 md:border-r">

          {/* User + Status */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <h3 className="font-bold text-[#0E2040]">{user.name}</h3>
                <p className="text-xs text-gray-400">User</p>
              </div>
            </div>

            <span
              className={`${leftStatus.bg} inline-flex items-center text-white px-4 py-1 rounded-full text-[10px] font-bold`}
            >
              {leftStatus.text}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-1">📍 {user.location}</p>
          <p className="text-xs text-gray-400 mb-5">
            Booking ID : {bookingId}
          </p>

          <div className="bg-[#F8FAFF] p-5 rounded-[20px] space-y-4">

            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase">
                Title
              </p>
              <p className="font-semibold text-[#3E5C9A]">
                {service.title}
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase">
                Description
              </p>
              <p className="text-sm text-gray-600">
                {service.description}
              </p>
            </div>

            {/* Images & Videos */}
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                Images & Videos
              </p>

              <div className="flex gap-3">
                {media.map((item, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full overflow-hidden border border-white shadow-sm ring-1 ring-gray-100"
                  >
                    <img
                      src={item.thumbnail}
                      alt={`media-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="pt-2 border-t">
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-3">
                Availability
              </p>

              <div className="space-y-2">
                {availability.map((slot, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <span className="text-[10px] w-8 font-bold text-gray-400 uppercase">
                      {slot.label}
                    </span>

                    <div className="flex gap-2">
                      <span className="bg-[#E9F0FF] px-3 py-1 rounded-md text-blue-600 text-[10px] font-bold">
                        {slot.date}
                      </span>
                      <span className="bg-[#E9F0FF] px-3 py-1 rounded-md text-blue-600 text-[10px] font-bold">
                        {slot.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="flex-1 p-6 relative">

          {/* Three-dot menu button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="absolute right-10 top-4 text-gray-400 text-lg hover:text-gray-600"
          >
            •••
          </button>

          {showMenu && (
            <div className="absolute right-10 top-14 bg-white border rounded-lg shadow-lg">
              <button
                onClick={() => navigate(detailsPath)}
                className="px-3 py-1.5 text-xs hover:bg-gray-50"
              >
                Details
              </button>
            </div>
          )}

          {/* Provider + Status */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-3">
              <img
                src={provider.avatar}
                alt={provider.name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <h3 className="font-bold text-[#0E2040]">{provider.name}</h3>
                <p className="text-xs text-gray-400">{provider.skill}</p>
              </div>
            </div>

            <span
              className={`${rightStatus.bg} inline-flex items-center text-white px-4 py-1 rounded-full text-[10px] font-bold`}
            >
              {rightStatus.text}
            </span>
          </div>

          <p className="text-xs text-gray-400 mb-5">
            Franchise : <span className="uppercase">{franchiseName}</span>
          </p>

          <div className="bg-[#F8FAFF] p-5 rounded-[20px]">
            {isDeclined ? (
              <p className="text-sm text-red-500 font-bold italic">
                Booking declined by provider
              </p>
            ) : (
              <p className="text-sm text-green-600 font-bold">
                Appointment Scheduled
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingCard;
