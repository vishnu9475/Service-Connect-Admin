import React, { useState, useRef } from "react";
import Text from "../../assets/pic1.jpg";
import Img from "../../assets/pic1.jpg";
import { FiEdit } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";

function NewAdForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [fromDate, setFromDate] = useState("2020-12-12");
  const [fromTime, setFromTime] = useState("12:00");
  const [toDate, setToDate] = useState("2020-12-12");
  const [toTime, setToTime] = useState("12:00");

  const [targetArea, setTargetArea] = useState("upto 5 km radius");
  const [status, setStatus] = useState("Status");

  // IMAGE
  const [image, setImage] = useState(Text);
  const imageInputRef = useRef(null);

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

  // 🖼️ Image picker only
  const handleImageEdit = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // 💾 Save
  const handleSave = () => {
    console.log({
      title,
      description,
      fromDate,
      fromTime,
      toDate,
      toTime,
      targetArea,
      status,
    });
    alert("Ad saved successfully");
  };

  // 💾 Save Draft
  const handleSaveDraft = () => {
    alert("Saved as draft");
  };

  // 🗑️ Delete
  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this ad?")) return;
    alert("Ad deleted");
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex justify-center p-6">
      <div className="w-full">
        <div className="relative w-full sm:min-w-[760px] bg-white rounded-2xl shadow-md px-6 py-5 mx-auto">

          <h2 className="text-[#303972] text-[24px] font-bold mb-4">
            Ads – Type
          </h2>

          {/* USER INFO */}
          <div className="flex items-center gap-3 mb-4">
            <img src={Img} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-semibold text-[#303972]">Karan Hope</p>
              <p className="text-xs text-gray-500">Service Provider</p>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <FaMapMarkerAlt /> North Paravoor, Eravam
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex gap-3 mb-4">
            <img
              src={image}
              className="w-[300px] h-[180px] rounded-xl object-cover"
            />

            <FiEdit
              className="text-gray-400 cursor-pointer mt-1"
              onClick={handleImageEdit}
            />

            <input
              type="file"
              accept="image/*"
              ref={imageInputRef}
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          {/* FORM */}
          <div className="w-[250px] space-y-3 ml-6">

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full h-[36px] border rounded-md px-3 text-sm"
            />

            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="w-full h-[36px] border rounded-md px-3 text-sm"
            />

            {/* SCHEDULE */}
            <div>
              <p className="text-xs font-semibold mb-1">Schedule</p>

              <p className="text-xs font-medium mb-1">From</p>
              <div className="flex gap-2 mb-2">

                <div className="relative w-1/2 border rounded-md px-3 py-1 text-xs">
                  <p className="text-gray-400 text-[10px]">Date</p>
                  <p>{formatDate(fromDate)}</p>
                  <input
                    ref={fromDateRef}
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="absolute inset-0 opacity-0"
                  />
                  <LuCalendarDays
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => fromDateRef.current?.showPicker()}
                  />
                </div>

                <div className="relative w-1/2 border rounded-md px-3 py-1 text-xs">
                  <p className="text-gray-400 text-[10px]">Time</p>
                  <p>{formatTime(fromTime)}</p>
                  <input
                    ref={fromTimeRef}
                    type="time"
                    value={fromTime}
                    onChange={(e) => setFromTime(e.target.value)}
                    className="absolute inset-0 opacity-0"
                  />
                  <FaRegClock
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => fromTimeRef.current?.showPicker()}
                  />
                </div>
              </div>

              <p className="text-xs font-medium mb-1">To</p>
              <div className="flex gap-2">

                <div className="relative w-1/2 border rounded-md px-3 py-1 text-xs">
                  <p className="text-gray-400 text-[10px]">Date</p>
                  <p>{formatDate(toDate)}</p>
                  <input
                    ref={toDateRef}
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="absolute inset-0 opacity-0"
                  />
                  <LuCalendarDays
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => toDateRef.current?.showPicker()}
                  />
                </div>

                <div className="relative w-1/2 border rounded-md px-3 py-1 text-xs">
                  <p className="text-gray-400 text-[10px]">Time</p>
                  <p>{formatTime(toTime)}</p>
                  <input
                    ref={toTimeRef}
                    type="time"
                    value={toTime}
                    onChange={(e) => setToTime(e.target.value)}
                    className="absolute inset-0 opacity-0"
                  />
                  <FaRegClock
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => toTimeRef.current?.showPicker()}
                  />
                </div>
              </div>
            </div>

            {/* TARGET */}
            <div>
              <p className="text-xs font-semibold mb-1">Target Area</p>
              <select
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
          <div className="mt-6 flex flex-col items-center gap-3 w-full
                          sm:absolute sm:bottom-6 sm:right-6 sm:w-auto sm:flex-row sm:items-start">

            <div className="relative">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="h-[34px] w-[110px] border border-[#4D44B5]
                           text-[#4D44B5] rounded-full px-3 text-xs appearance-none"
              >
                <option>Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>

              <FaChevronDown className="absolute right-3 top-1/2
                                       -translate-y-1/2 text-[#4D44B5] text-[10px]" />
            </div>

            <button
              onClick={handleDelete}
              className="h-[34px] w-[110px]
                         rounded-full bg-[#FF3D00]
                         text-white text-xs"
            >
              Delete
            </button>

            <button
              onClick={handleSave}
              className="h-[34px] w-[110px]
                         rounded-full bg-[#4D44B5]
                         text-white text-xs"
            >
              Save
            </button>

            <button
              onClick={handleSaveDraft}
              className="h-[34px] w-[110px]
                         rounded-full bg-[#FF3D00]
                         text-white text-xs"
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
