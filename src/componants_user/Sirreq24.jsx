import React, { useRef, useState } from "react";
import {
  Calendar,
  Clock,
  Image,
  Pencil,
  ArrowRight,
 
} from "lucide-react";

const SirviceRequest24 = () => {
  // refs
  const dateRef = useRef(null);
  const fromDateRef = useRef(null);
  const toDateRef = useRef(null);

  // states
  const [date, setDate] = useState("12/12/2020");
  const [fromDate, setFromDate] = useState("Select date");
  const [toDate, setToDate] = useState("Select date");

  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const formatDate = (val) =>
    val ? new Date(val).toLocaleDateString() : "Select date";

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
            <p className="text-sm text-gray-600">Electrification 💪</p>
          </div>
        </div>

        {/* Title */}
        <div className="bg-white rounded-xl p-4 shadow mb-3">
          <label className="text-xs text-gray-500">Title</label>
          <p className="text-gray-800 mt-1"></p>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl p-4 shadow mb-3 h-29">
          <label className="text-xs text-gray-500">Description</label>
          <p className="text-gray-800 mt-1"></p>
        </div>

        {/* Image & video */}
        <div className="bg-white rounded-xl p-4 shadow flex items-center justify-between mb-4">
          <span className="text-gray-400">Images & Videos</span>
          <Image className="w-5 h-5 text-gray-500" />
        </div>

        {/* Uploaded images */}
        <div className="flex gap-3 mb-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center"
            >
              <Image className="text-white w-5 h-5" />
            </div>
          ))}
          <button className="w-12 h-12 rounded-lg bg-gray-300 flex items-center justify-center text-xl font-bold">
            +
          </button>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2 mb-3 text-sm font-medium text-gray-700">
          Availability
          <Pencil className="w-4 h-4" />
        </div>

        {/* FROM ROW */}
         <p>From</p>
        <div className="grid grid-cols-2 gap-3 mb-3">
         
          <div className="bg-white rounded-xl p-3 shadow flex items-center justify-between">
             
            <div>
             <p className="text-[10px]">Date</p>
              <p className="text-sm">{fromDate}</p>
            </div>

            <input
              ref={fromDateRef}
              type="date"
              className="hidden"
              onChange={(e) => setFromDate(formatDate(e.target.value))}
            />

            <button onClick={() => fromDateRef.current.showPicker()}>
              <Calendar className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <div className="bg-white rounded-xl p-3 shadow flex items-center justify-between">
            <div className="w-full">
             <p className="text-[10px]">Time</p>
              <input
                type="time"
                value={fromTime}
                onChange={(e) => setFromTime(e.target.value)}
                className="w-full text-sm outline-none"
              />
            </div>
            {/* <Clock className="w-4 h-4 text-gray-500 ml-2" /> */}
          </div>
        </div>

        {/* TO ROW */}
        <p>To</p>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white rounded-xl p-3 shadow flex items-center justify-between">
            <div>
              <p className="text-[10px]">Date</p>
              <p className="text-sm">{toDate}</p>
            </div>

            <input
              ref={toDateRef}
              type="date"
              className="hidden"
              onChange={(e) => setToDate(formatDate(e.target.value))}
            />

            <button onClick={() => toDateRef.current.showPicker()}>
              <Calendar className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <div className="bg-white rounded-xl p-3 shadow flex items-center justify-between">
            <div className="w-full">
              <p className="text-[10px]">Time</p>
              <input
                type="time"
                value={toTime}
                onChange={(e) => setToTime(e.target.value)}
                className="w-full text-sm outline-none"
              />
            </div>
            {/* <Clock className="w-4 h-4 text-gray-500 ml-2" /> */}
          </div>
        </div>

        {/* Confirm */}
        <button className="hover:bg-gray-500  w-full h-16 bg-gray-900 text-white py-4 rounded-full flex items-center justify-between gap-3 font-semibold">
            <div className="w-3/4 px-15 flex items-center justify-end">
              <h3 className="font-semibold text-[18px]">Confirm</h3>
            </div>
             <div className="px-3">
          <span className="bg-white  text-gray-900 w-10 h-10 rounded-full flex items-center justify-center">
            <ArrowRight />
          </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SirviceRequest24;
