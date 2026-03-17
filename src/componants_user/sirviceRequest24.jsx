import React from 'react'
import { Calendar, Clock, Image, Pencil } from "lucide-react";

const sirviceRequest24 = () => {
 
    return (
    <div className="min-h-screen bg-gray-200 flex justify-center py-6">
      <div className="w-full max-w-sm">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-gray-900">Nazrul Islam</h2>
            <p className="text-sm text-gray-600">
              Electrification 💪
            </p>
          </div>
        </div>

        {/* Title */}
        <div className="bg-white rounded-xl p-4 shadow mb-3">
          <label className="text-xs text-gray-500">Title</label>
          <p className="text-gray-800 mt-1">Change Bulb</p>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl p-4 shadow mb-3">
          <label className="text-xs text-gray-500">Description</label>
          <p className="text-gray-800 mt-1">
            Filled dffdfd sdfsdfsdfsdsd
          </p>
        </div>

        {/* Image & video input */}
        <div className="bg-white rounded-xl p-4 shadow flex items-center justify-between mb-4">
          <span className="text-gray-400">Images & Videos</span>
          <Image className="w-5 h-5 text-gray-500" />
        </div>

        {/* Uploaded images */}
        <div className="flex gap-3 mb-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center"
            >
              <Image className="text-white w-5 h-5" />
            </div>
          ))}
          <button className="w-12 h-12 rounded-lg bg-gray-300 flex items-center justify-center text-xl font-bold">
            +
          </button>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
          Availability
          <Pencil className="w-4 h-4" />
        </div>

        {/* Date / Time */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-white rounded-xl p-3 shadow flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Date</p>
              <p className="text-sm">12/12/2020</p>
            </div>
            <Calendar className="w-4 h-4 text-gray-500" />
          </div>

          <div className="bg-white rounded-xl p-3 shadow flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Time</p>
              <p className="text-sm">12:00 PM</p>
            </div>
            <Clock className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white rounded-xl p-3 shadow flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Date</p>
              <p className="text-sm">12/12/2020</p>
            </div>
            <Calendar className="w-4 h-4 text-gray-500" />
          </div>

          <div className="bg-white rounded-xl p-3 shadow flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Time</p>
              <p className="text-sm">12:00 PM</p>
            </div>
            <Clock className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Confirm button */}
        <button className="w-full bg-gray-900 text-white py-4 rounded-full flex items-center justify-center gap-3 font-semibold">
          Confirm
          <span className="bg-white text-gray-900 w-8 h-8 rounded-full flex items-center justify-center">
            →
          </span>
        </button>

      </div>
    </div>
  );
};
export default sirviceRequest24
