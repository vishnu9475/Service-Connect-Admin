import { useEffect, useState } from "react";
import { UserRound, CircleChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../componants_service/ayush/CommonHeader";


export default function Profile() {
  const navigate = useNavigate();
  const [showLocationAlert, setShowLocationAlert] = useState(true);
  const [manualLocation, setManualLocation] = useState("");

  // Show alert when page loads
  useEffect(() => {
    setShowLocationAlert(true);
  }, []);

  const allowLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos.coords.latitude, pos.coords.longitude);
        setShowLocationAlert(false);
      },
      () => {
        alert("Location permission denied");
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center relative">
      <div className="w-full bg-gray-200">

        {/* HEADER */}
        <CommonHeader
                 title="Fill Your Profile"
               />  

        {/* PROFILE ICON */}
        <div className="flex justify-center p-6">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: "#6e5c5c" }}
          >
            <UserRound size={56} />
          </div>
        </div>

        {/* FORM */}
{/* FORM */}
<div className="space-y-3 p-4 max-w-lg mx-auto w-full">
          <Input placeholder="Full Name" />
          <Input placeholder="Address" />
          <Input type="date" />
          <Input type="email" placeholder="Email" />

          {/* PHONE */}
          <div
            className="flex items-center rounded-lg px-3 py-2 text-white"
            style={{ backgroundColor: "#6e5c5c" }}
          >
            <span className="mr-2">🇺🇸</span>
            <span className="mr-2">+1</span>
            <input
              type="tel"
              placeholder="724-848-1235"
              className="bg-transparent outline-none w-full text-sm placeholder-white"
            />
          </div>

          <Select placeholder="Gender" />
          <Input placeholder="House Name" />
          <Input placeholder="Land Mark" />
          <Input placeholder="Pin Code" />
          <Input placeholder="District" />
          <Input placeholder="State" />

          <Select placeholder="Address proof documents" />
          <Input placeholder="ID Number" />

          {/* UPLOAD */}
          <div
            className="rounded-lg px-3 py-2 text-white flex justify-between items-center"
            style={{ backgroundColor: "#6e5c5c" }}
          >
            <span className="text-sm">Attach a copy of Address proof</span>
            📎
          </div>

          <Select placeholder="Payout Required - Daily / Weekly / Monthly" />

          {/* TERMS */}
          <div className="flex items-center text-sm mt-4">
            <span>Terms & Condition</span>
            <div className="ml-auto flex items-center gap-2">
              <input type="checkbox" />
              <span>Accept</span>
            </div>
          </div>

          {/* BUTTON */}
          <div className="p-4">
            <button   onClick={() => navigate("/success")} className="w-full bg-slate-900 text-white py-3 rounded-full flex justify-between px-6 active:scale-95">
              <span>Continue</span>
              <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 🔔 LOCATION ALERT */}
      {showLocationAlert && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-[85%] max-w-sm text-center">
            <h2 className="text-xl font-semibold mb-4">
              Allow Location
            </h2>

            <button
              onClick={allowLocation}
              className="w-full bg-slate-900 text-white py-3 rounded-full mb-4"
            >
              Allow
            </button>

            <p className="text-sm text-gray-500 mb-2">
              Manually Enter Location
            </p>

            <input
              type="text"
              placeholder="Value"
              value={manualLocation}
              onChange={(e) => setManualLocation(e.target.value)}
              className="w-full bg-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* REUSABLE COMPONENTS */

const Input = ({ type = "text", placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    style={{ backgroundColor: "#6e5c5c" }}
    className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white outline-none"
  />
);

const Select = ({ placeholder }) => (
  <select
    style={{ backgroundColor: "#6e5c5c" }}
    className="w-full rounded-lg px-4 py-3 text-sm text-white outline-none"
  >
    <option>{placeholder}</option>
  </select>
);
