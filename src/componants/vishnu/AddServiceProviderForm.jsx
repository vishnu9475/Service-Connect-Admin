import React, { useState, useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDownIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

/* ===================== */
/* 🔹 MAIN COMPONENT     */
/* ===================== */

function AddServiceProviderForm({ onSubmit }) {
  const photoRef = useRef(null);
  const idCopyRef = useRef(null);

  const [idCopyName, setIdCopyName] = useState("");
  const [photoPreview, setPhotoPreview] = useState(null);

  const initialState = {
    fullName: "",
    address: "",
    dob: "",
    email: "",
    phone: "",
    country: "+1",
    password: "",
    gender: "",
    house: "",
    landmark: "",
    pincode: "",
    district: "",
    state: "",
    description: "", // ✅ NEW
    service: "",     // ✅ NEW
    photo: null,
    verificationId: "",
    verificationNo: "",
    verificationFile: null,
    type: "",
  };

  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  /* ===================== */
  /* 🔹 HANDLERS           */
  /* ===================== */

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handlePhotoChange = (file) => {
    if (!file) return;
    setFormData((prev) => ({ ...prev, photo: file }));
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handleIdCopy = (file) => {
    if (!file) return;
    setFormData((prev) => ({ ...prev, verificationFile: file }));
    setIdCopyName(file.name);
  };

  const handleSubmit = () => {
    console.log("SUBMIT 👉", formData);
    onSubmit?.(formData);
  };

  const handleDraft = () => {
    console.log("DRAFT SAVED 👉", formData);
  };

  const handleDelete = () => {
    if (!window.confirm("Clear all form data?")) return;
    setFormData(initialState);
    setPhotoPreview(null);
    setIdCopyName("");
  };

  const handleSubmitgo = () => {
    handleSubmit();
    navigate("/serviceproviderList");
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto bg-[#EEF0FA] rounded-xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-indigo-600 text-white px-6 py-3 font-medium">
          Service Provider Details
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-4 md:p-6">

          {/* PHOTO UPLOAD */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Photo <span className="text-red-500">*</span>
            </label>

            <input
              type="file"
              hidden
              ref={photoRef}
              accept="image/*"
              onChange={(e) => handlePhotoChange(e.target.files[0])}
            />

            <div
              onClick={() => photoRef.current.click()}
              className="mt-2 w-28 h-28 rounded-lg border-2 border-dashed border-indigo-300 bg-indigo-100 flex items-center justify-center cursor-pointer overflow-hidden"
            >
              {photoPreview ? (
                <img src={photoPreview} className="w-full h-full object-cover" />
              ) : (
                <span className="text-xs text-gray-500">Upload</span>
              )}
            </div>
          </div>

          {/* FORM */}
          <div className="md:col-span-3 flex flex-col gap-4">

            <Input placeholder="Full Name" value={formData.fullName} onChange={(v) => handleChange("fullName", v)} />
            <Input placeholder="Address" value={formData.address} onChange={(v) => handleChange("address", v)} />
            <Input placeholder="Date of Birth" value={formData.dob} onChange={(v) => handleChange("dob", v)} />
            <Input placeholder="Email" value={formData.email} onChange={(v) => handleChange("email", v)} />

            <PhoneNumberInput
              value={formData.phone}
              country={formData.country}
              onChange={(phone, country) => {
                handleChange("phone", phone);
                handleChange("country", country);
              }}
            />

            <Input type="password" placeholder="Password" value={formData.password} onChange={(v) => handleChange("password", v)} />
            <Select1 placeholder="Gender" value={formData.gender} onChange={(v) => handleChange("gender", v)} />

            <Input placeholder="House Name" value={formData.house} onChange={(v) => handleChange("house", v)} />
            <Input placeholder="Landmark" value={formData.landmark} onChange={(v) => handleChange("landmark", v)} />
            <Input placeholder="Pincode" value={formData.pincode} onChange={(v) => handleChange("pincode", v)} />
            <Input placeholder="District" value={formData.district} onChange={(v) => handleChange("district", v)} />
            <Input placeholder="State" value={formData.state} onChange={(v) => handleChange("state", v)} />

            <Select2 placeholder="Verification ID" value={formData.verificationId} onChange={(v) => handleChange("verificationId", v)} />
            <Input placeholder="Verification Number" value={formData.verificationNo} onChange={(v) => handleChange("verificationNo", v)} />
            <Textarea
              placeholder="About / Description (max 200 characters)"
              value={formData.description}
              max={200}
              onChange={(v) => handleChange("description", v)}
            />

            <Textarea
              placeholder="Service Details (max 500 characters)"
              value={formData.service}
              max={500}
              rows={5}
              onChange={(v) => handleChange("service", v)}
            />

            {/* ID COPY INPUT STYLE */}
            <div className="relative w-full md:max-w-sm">
              <input
                type="file"
                hidden
                ref={idCopyRef}
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => handleIdCopy(e.target.files[0])}
              />

              <input
                readOnly
                value={idCopyName}
                placeholder="ID Copy"
                onClick={() => idCopyRef.current.click()}
                className="w-full bg-[#ffffff] rounded-lg px-4 py-3 pr-10 text-sm cursor-pointer outline-none truncate"
              />

              <PaperClipIcon
                className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => idCopyRef.current.click()}
              />
            </div>

            <Select3 placeholder="Type" value={formData.type} onChange={(v) => handleChange("type", v)} />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-3 px-4 md:px-6 pb-6">
          <button onClick={handleDelete} className="px-5 py-2 bg-red-500 text-white rounded-full text-sm cursor-pointer">
            Delete
          </button>
          <button onClick={handleDraft} className="px-5 py-2 border border-indigo-500 text-indigo-600 rounded-full text-sm bg-white cursor-pointer">
            Draft
          </button>
          <button onClick={handleSubmitgo} className="px-5 py-2 bg-indigo-600 text-white rounded-full text-sm cursor-pointer">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

/* ===================== */
/* 🔹 PHONE INPUT        */
/* ===================== */

const countries = [
  { code: "US", dial: "+1" },
  { code: "IN", dial: "+91" },
  { code: "GB", dial: "+44" },
];

function PhoneNumberInput({ value, country, onChange }) {
  const [open, setOpen] = useState(false);
  const selected = countries.find((c) => c.dial === country) || countries[0];

  return (
    <div className="relative w-full md:max-w-sm">
      <div className="flex items-center bg-white rounded-lg px-4 py-3 gap-3">
        <button type="button" onClick={() => setOpen(!open)}>
          <ReactCountryFlag svg countryCode={selected.code} />
        </button>
        <ChevronDownIcon className="w-4 h-4" />
        <span>{country}</span>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value, country)}
          className="w-full outline-none"
          placeholder="Phone number"
        />
      </div>

      {open && (
        <div className="absolute bg-white border rounded shadow w-full mt-1 z-10">
          {countries.map((c) => (
            <button
              key={c.code}
              onClick={() => {
                onChange(value, c.dial);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full"
            >
              <ReactCountryFlag svg countryCode={c.code} />
              {c.dial}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ===================== */
/* 🔹 INPUTS / SELECTS   */
/* ===================== */

const Input = ({ placeholder, value, onChange, type = "text" }) => (
  <input
    type={type}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className="w-full md:max-w-sm px-4 py-3 rounded-lg bg-white outline-none text-sm"
  />
);

const Select1 = ({ placeholder, value, onChange }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full md:max-w-sm px-4 py-3 rounded-lg bg-white text-sm">
    <option value="">{placeholder}</option>
    <option>Male</option>
    <option>Female</option>
    <option>Other</option>
  </select>
);

const Select2 = ({ placeholder, value, onChange }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full md:max-w-sm px-4 py-3 rounded-lg bg-white text-sm">
    <option value="">{placeholder}</option>
    <option>Licence</option>
    <option>Certificate</option>
  </select>
);

const Select3 = ({ placeholder, value, onChange }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full md:max-w-sm px-4 py-3 rounded-lg bg-white text-sm">
    <option value="">{placeholder}</option>
    <option>Type 1</option>
    <option>Type 2</option>
  </select>
);

const Textarea = ({ placeholder, value, onChange, max, rows = 4 }) => (
  <div className="w-full md:max-w-sm">
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value.slice(0, max))}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-3 rounded-lg bg-white outline-none text-sm resize-none"
    />
    <p className="text-right text-xs text-gray-400 mt-1">
      {value.length}/{max}
    </p>
  </div>
);


export default AddServiceProviderForm;
