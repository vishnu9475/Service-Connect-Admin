import React, { useState, useRef, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import mount from "../../assets/Dummy.jpg";
import { FaChevronDown } from "react-icons/fa";

export default function NewNotificationForm() {
  const fileRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Aldrich&display=swap";
    document.head.appendChild(link);
  }, []);

  const aldrichStyle = {
    fontFamily: "'Aldrich', sans-serif",
  };

  const [image, setImage] = useState(mount);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [audience, setAudience] = useState("");
  const [status, setStatus] = useState("Status");

  const [fromDate, setFromDate] = useState("2024-06-10");
  const [fromTime, setFromTime] = useState("09:41");
  const [toDate, setToDate] = useState("2024-07-10");
  const [toTime, setToTime] = useState("09:41");

  const [target, setTarget] = useState({
    user: true,
    provider: true,
    franchisee: true,
  });

  const [sendVia, setSendVia] = useState({
    app: true,
    sms: true,
    email: true,
  });

  const toggleTarget = (key) =>
    setTarget({ ...target, [key]: !target[key] });

  const toggleSendVia = (key) =>
    setSendVia({ ...sendVia, [key]: !sendVia[key] });

  /* BUTTON FUNCTIONS */

  const DeleteNot = () => {
    setTitle("");
    setDescription("");
    setAudience("");
    setStatus("Status");
    setFromDate("2024-06-10");
    setFromTime("09:41");
    setToDate("2024-07-10");
    setToTime("09:41");
    setImage(mount);
    alert("Notification deleted");
  };

  const handleSave = () => {
    const data = {
      title,
      description,
      audience,
      status,
      fromDate,
      fromTime,
      toDate,
      toTime,
      target,
      sendVia,
    };
    console.log("Saved:", data);
    alert("Saved Successfully");
  };

  const handleDraft = () => {
    console.log("Saved as Draft");
    alert("Saved as Draft");
  };

  return (
    <div className="flex">

      <div className="w-full max-w-[760px] px-4 mt-4">

      
      <div className="w-full max-w-[760px] px-4  mt-4">
        
        {/*  CHANGED: removed min-w to avoid mobile overflow */}

        <div className="bg-white rounded-2xl w-full max-w-[560px] p-6 shadow-sm">

          {/* IMAGE */}
          <div className="flex items-end gap-2 mb-6">
            <img
              src={image}
              alt="preview"
              className="w-[260px] h-[130px] object-cover rounded-xl"
            />
            <button onClick={() => fileRef.current.click()}>
              <FiEdit className="text-gray-600" />
            </button>
            <input
              ref={fileRef}
              type="file"
              className="hidden"
              onChange={(e) =>
                setImage(URL.createObjectURL(e.target.files[0]))
              }
            />
          </div>

          {/* TITLE + AUDIENCE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-1 ml-1">
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full md:w-[230px] h-[36px] border rounded-md px-3 text-sm"
            />

            <div>
              <label className="text-xs font-medium block mb-1">
                Target Audience
              </label>
              <select
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full h-[36px] border rounded-md px-3 text-xs"
              >
                <option>User Name / ID / Group / Location</option>
                <option>User</option>
                <option>Service Provider</option>
                <option>Franchisee</option>
              </select>
            </div>
          </div>

          {/* DESCRIPTION */}
          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full md:w-[230px] h-[36px] border rounded-md px-3 text-sm mb-2 ml-1"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">

            {/* SCHEDULE */}
          <div>
  <p className="font-medium mb-2">Schedule</p>

  <p className="text-xs mb-1">From</p>
  <div className="flex gap-2 mb-4">

    <label
  className="relative bg-[#7878801F] px-3 py-2 rounded text-xs text-[#007AFF] w-[120px] cursor-pointer"
  style={aldrichStyle}
>
  {fromDate}
  <input
    type="date"
    value={fromDate}
    onChange={(e) => setFromDate(e.target.value)}
    className="absolute inset-0 opacity-0 cursor-pointer"
  />
</label>

   <label
  className="relative bg-[#7878801F] px-3 py-2 rounded text-xs text-[#007AFF] w-[90px] cursor-pointer"
  style={aldrichStyle}
>
  {fromTime}
  <input
    type="time"
    value={fromTime}
    onChange={(e) => setFromTime(e.target.value)}
    className="absolute inset-0 opacity-0 cursor-pointer"
  />
</label>
  </div>

  <p className="text-xs mb-1">To</p>
  <div className="flex gap-2">

    <label
  className="relative bg-[#7878801F] px-3 py-2 rounded text-xs text-[#007AFF] w-[120px] cursor-pointer"
  style={aldrichStyle}
>
  {toDate}
  <input
    type="date"
    value={toDate}
    onChange={(e) => setToDate(e.target.value)}
    className="absolute inset-0 opacity-0 cursor-pointer"
  />
</label>

   <label
  className="relative bg-[#7878801F] px-3 py-2 rounded text-xs text-[#007AFF] w-[90px] cursor-pointer"
  style={aldrichStyle}
>
  {toTime}
  <input
    type="time"
    value={toTime}
    onChange={(e) => setToTime(e.target.value)}
    className="absolute inset-0 opacity-0 cursor-pointer"
  />
</label>

  </div>
</div>
            {/* TARGET + SEND VIA */}
            <div>
              <p className="font-medium mb-2">Target Specific</p>

              {[
                { key: "user", label: "User" },
                { key: "provider", label: "Service Provider" },
                { key: "franchisee", label: "Franchisee" },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center gap-2 text-xs mb-2"
                >
                  <input
                    type="checkbox"
                    checked={target[item.key]}
                    onChange={() => toggleTarget(item.key)}
                    className="w-4 h-4 appearance-none border border-black rounded checked:bg-black relative
                    after:content-['✓'] after:absolute after:left-[3px] after:top-[-1px]
                    after:text-white after:text-sm after:hidden checked:after:block"
                  />
                  {item.label}
                </label>
              ))}

              <p className="font-medium mt-4 mb-2">Send via</p>

              {[
                { key: "app", label: "In App" },
                { key: "sms", label: "SMS" },
                { key: "email", label: "Email" },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center gap-2 text-xs mb-2"
                >
                  <input
                    type="checkbox"
                    checked={sendVia[item.key]}
                    onChange={() => toggleSendVia(item.key)}
                    className="w-4 h-4 appearance-none border border-black rounded checked:bg-black relative
                    after:content-['✓'] after:absolute after:left-[3px] after:top-[-1px]
                    after:text-white after:text-sm after:hidden checked:after:block"
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col items-center gap-3 mt-8 md:flex-row md:justify-end">

            <div className="relative">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="h-[34px] lg:w-[110px] w-full border border-[#4D44B5]
                text-[#4D44B5] rounded-full lg:px-3 px-26 text-xs appearance-none"
              >
                <option>Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>

              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4D44B5] text-[10px]" />
            </div>

            <button
              onClick={DeleteNot}
              className="bg-[#FF3D00] text-white lg:px-5 py-2 rounded-full text-sm  px-26"
            >
              Delete
            </button>

            <button
              onClick={handleSave}
              className="bg-[#4F46BA] text-white lg:px-5 py-2 px-26 rounded-full text-sm"
            >
              Save
            </button>

            <button
              onClick={handleDraft}
              className="bg-[#FF3D00] text-white lg:px-5 py-2 px-16 rounded-full lg:text-sm text-1xl"
            >
              Save As Draft
            </button>

          </div>

        </div>
      </div>
    </div>
  </div>
)
}