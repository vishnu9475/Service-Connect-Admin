import React, { useState, useRef } from "react";
import Text from "../assets/Dummy.jpg";
import Img from "../assets/Dummy.jpg";
import { FiEdit } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";

function NewAdForm() {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
 

  const [fromDate, setFromDate] = useState("2020-12-12");
  const [fromTime, setFromTime] = useState("12:00");
  const [toDate, setToDate] = useState("2020-12-12");
  const [toTime, setToTime] = useState("12:00");

  const [targetArea, setTargetArea] = useState("upto 5 km radius");
  const [status, setStatus] = useState("Status");

  const fromDateRef = useRef(null);
  const fromTimeRef = useRef(null);
  const toDateRef = useRef(null);
  const toTimeRef = useRef(null);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-GB");

  const formatTime = (time) => {
    const [h, m] = time.split(":");
    const hour = h % 12 || 12;
    const ampm = h >= 12 ? "PM" : "AM";
    return `${hour}:${m} ${ampm}`;
  };

  const handleSave = () => {
    alert("Ad saved successfully ");
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this ad?")) return;
    alert("Ad deleted ");
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex justify-center p-6">
      
      {/* RESPONSIVE WRAPPER */}
      <div className="w-full ">
        <div className="relative w-full sm:min-w-[760px] bg-white rounded-2xl shadow-md px-6 py-5 mx-auto">

          <h2 className="text-[#303972] text-[24px] font-bold mb-4">
            Banner Ad
          </h2>

          {/* USER INFO */}
          

          {/* IMAGE */}
          <div className="flex gap-3 mb-4">
            <img
              src={Text}
              className="w-[300px] h-[180px] rounded-xl object-cover"
            />
            <FiEdit
              className="text-gray-400 cursor-pointer mt-1"
              onClick={() => setIsEditing(true)}
            />
          </div>

          {/* FORM */}
          <div className="w-[250px] space-y-3 ml-6">

            <input
              disabled={!isEditing}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full h-[36px] border rounded-md px-3 text-sm"
            />

           

            {/* SCHEDULE */}
            <div>
              <p className="text-xs font-semibold mb-1">Schedule</p>

              {/* FROM */}
              <p className="text-xs font-medium mb-1">From</p>
              <div className="flex gap-2 mb-2">
                <div className="relative w-1/2 border rounded-md px-3 py-1 text-xs">
                  <p className="text-gray-400 text-[10px]">Date</p>
                  <p>{formatDate(fromDate)}</p>
                  {isEditing && (
                    <input
                      ref={fromDateRef}
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="absolute inset-0 opacity-0"
                    />
                  )}
                  <LuCalendarDays
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => fromDateRef.current?.showPicker()}
                  />
                </div>

                <div className="relative w-1/2 border rounded-md px-3 py-1 text-xs">
                  <p className="text-gray-400 text-[10px]">Time</p>
                  <p>{formatTime(fromTime)}</p>
                  {isEditing && (
                    <input
                      ref={fromTimeRef}
                      type="time"
                      value={fromTime}
                      onChange={(e) => setFromTime(e.target.value)}
                      className="absolute inset-0 opacity-0"
                    />
                  )}
                  <FaRegClock
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => fromTimeRef.current?.showPicker()}
                  />
                </div>
              </div>

              {/* TO */}
              <p className="text-xs font-medium mb-1">To</p>
              <div className="flex gap-2">
                <div className="relative w-1/2 border rounded-md px-3 py-1 text-xs">
                  <p className="text-gray-400 text-[10px]">Date</p>
                  <p>{formatDate(toDate)}</p>
                  {isEditing && (
                    <input
                      ref={toDateRef}
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="absolute inset-0 opacity-0"
                    />
                  )}
                  <LuCalendarDays
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => toDateRef.current?.showPicker()}
                  />
                </div>

                <div className="relative w-1/2 border rounded-md px-3 py-1 text-xs">
                  <p className="text-gray-400 text-[10px]">Time</p>
                  <p>{formatTime(toTime)}</p>
                  {isEditing && (
                    <input
                      ref={toTimeRef}
                      type="time"
                      value={toTime}
                      onChange={(e) => setToTime(e.target.value)}
                      className="absolute inset-0 opacity-0"
                    />
                  )}
                  <FaRegClock
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => toTimeRef.current?.showPicker()}
                  />
                </div>
              </div>
            </div>

            {/* TARGET */}
            <div>
              <p className="text-xs font-semibold mb-1">Rate</p>
              <div className="w-full h-[36px] border rounded-md px-3 text-sm pt-2">
                   Rate 0000/Day
              </div>
              {/* <select
                disabled={isEditing}
                value={targetArea}
                onChange={(e) => setTargetArea(e.target.value)}
                className="w-full h-[36px] border rounded-md px-3 text-sm"
              >
                <option>upto 5 km radius</option>
                <option>upto 10 km radius</option>
                <option>upto 20 km radius</option>
              </select> */}
            </div>
            <div>
              <p className="text-xs font-semibold mb-1">Currency</p>
              <select
                disabled={!isEditing}
                value={targetArea}
                onChange={(e) => setTargetArea(e.target.value)}
                className="w-full h-[36px] border rounded-md px-3 text-sm"
              >
                <option>upto 5 km radius</option>
                <option>upto 10 km radius</option>
                <option>upto 20 km radius</option>
              </select>
            </div>

            <div className="text-sm">
              <p>Total number of Days : 30</p>
              <p>Estimated Price : Rs 350/-</p>
            </div>
          </div>

          {/* BUTTONS */}
          {/* BUTTONS */}
{/* BUTTONS */}
{/* BUTTONS */}
<div className="mt-6 flex flex-col items-center gap-3 w-full
                sm:absolute sm:bottom-6 sm:right-6 sm:w-auto sm:flex-row sm:items-start">
  
  <div className="relative">
    <select
      disabled={!isEditing}
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="h-[34px] w-[110px] border border-[#4D44B5] text-[#4D44B5] rounded-full px-3 text-xs appearance-none"
    >
      <option>Status</option>
      <option>Active</option>
      <option>Inactive</option>
    </select>
    <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4D44B5] text-[10px]" />
  </div>

  <button
    onClick={handleDelete}
    className="h-[34px] w-[110px] rounded-full bg-[#FF3D00] text-white text-xs"
  >
    Delete
  </button>

  <button
    onClick={handleSave}
    className="h-[34px] w-[110px] rounded-full bg-[#4D44B5] text-white text-xs"
  >
    Save
  </button>
   <button
    onClick={handleSave}
    className="h-[34px] w-[110px] rounded-full bg-[#FF3D00] text-white text-xs"
  >
    Save As Draft
  </button>
</div>


        </div>
      </div>
    </div>
  );
}

export default NewAdForm;
