import React, { useState, useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from "react-router-dom";
import {
  ChevronDownIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";

const countries = [
  { name: "United States", code: "US", dial: "+1" },
  { name: "India", code: "IN", dial: "+91" },
  { name: "United Kingdom", code: "GB", dial: "+44" },
  { name: "Canada", code: "CA", dial: "+1" },
];

function DealerForm({ onNext }) {
  /* ===================== */
  /* 🔹 FORM STATE         */
  /* ===================== */
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    franchise: "",
    email: "",
    contactPhone: "",
    contactCountry: "+1",
    whatsappPhone: "",
    whatsappCountry: "+1",
    password: "",
    landmark: "",
    pincode: "",
    district: "",
    state: "",
    verificationId: "",
    verificationNo: "",
    status: "",
    description: "", // ✅ NEW (max 200)
    service: "",     // ✅ NEW (max 500)
    photo: null,
    idCopy: null,
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [idCopyName, setIdCopyName] = useState("");

  const photoRef = useRef(null);
  const idCopyRef = useRef(null);
  const navigate = useNavigate();

  /* ===================== */
  /* 🔹 HANDLERS           */
  /* ===================== */
  const update = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handlePhoto = (file) => {
    if (!file) return;
    update("photo", file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handleIdCopy = (file) => {
    if (!file) return;
    update("idCopy", file);
    setIdCopyName(file.name);
  };

  const handleSubmit = () => {
    console.log("SUBMIT & PAY 👉", form);
    onNext?.(form);
  };

  const handleDraft = () => {
    console.log("SAVE AS DRAFT 👉", form);
  };

  const handleDelete = () => {
    if (!window.confirm("Clear the form?")) return;

    setForm({
      fullName: "",
      address: "",
      franchise: "",
      email: "",
      contactPhone: "",
      contactCountry: "+1",
      whatsappPhone: "",
      whatsappCountry: "+1",
      password: "",
      landmark: "",
      pincode: "",
      district: "",
      state: "",
      verificationId: "",
      verificationNo: "",
      status: "",
      description: "", // ✅ NEW (max 200)
      service: "",     // ✅ NEW (max 500)
      photo: null,
      idCopy: null,
    });
    setPhotoPreview(null);
    setIdCopyName("");
  };

  const handleSubmitAndPay = () => {
    handleSubmit();
    navigate("/payoutschedule");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F6FF] p-4 md:p-6">

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-4 md:p-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* PHOTO UPLOAD */}
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium text-gray-600">
              Photo <span className="text-red-500">*</span>
            </label>

            <input
              type="file"
              accept="image/*"
              hidden
              ref={photoRef}
              onChange={(e) => handlePhoto(e.target.files[0])}
            />

            <div
              onClick={() => photoRef.current.click()}
              className="mt-2 w-28 h-28 md:w-40 md:h-40 rounded-xl bg-purple-200 flex items-center justify-center cursor-pointer overflow-hidden"
            >
              {photoPreview ? (
                <img src={photoPreview} className="w-full h-full object-cover" />
              ) : (
                <div className="text-xs text-gray-600 text-center">
                  <p>Drag and drop or</p>
                  <p className="font-medium">click here</p>
                </div>
              )}
            </div>
          </div>

          {/* FORM */}
          <div className="md:col-span-2 flex flex-col gap-4 items-start">

            <Input placeholder="Full Name" value={form.fullName} onChange={(v) => update("fullName", v)} />
            <Input placeholder="Address" value={form.address} onChange={(v) => update("address", v)} />
            <Input placeholder="Franchise Name" value={form.franchise} onChange={(v) => update("franchise", v)} />
            <Input placeholder="Email" value={form.email} onChange={(v) => update("email", v)} />
            
            <PhoneNumberInput
              label="Contact Number"
              phone={form.contactPhone}
              country={form.contactCountry}
              onChange={(p, c) => {
                update("contactPhone", p);
                update("contactCountry", c);
              }}
            />

            <PhoneNumberInput
              label="Whatsapp Number"
              phone={form.whatsappPhone}
              country={form.whatsappCountry}
              onChange={(p, c) => {
                update("whatsappPhone", p);
                update("whatsappCountry", c);
              }}
            />

            <Input placeholder="Password" type="password" value={form.password} onChange={(v) => update("password", v)} />
            <Input placeholder="Land mark" value={form.landmark} onChange={(v) => update("landmark", v)} />
            <Input placeholder="Pin code" value={form.pincode} onChange={(v) => update("pincode", v)} />
            <Input placeholder="District" value={form.district} onChange={(v) => update("district", v)} />
            <Input placeholder="State" value={form.state} onChange={(v) => update("state", v)} />
            <Textarea
              placeholder="About / Description (max 200 characters)"
              value={form.description}
              max={200}
              onChange={(v) => update("description", v)}
            />

            <Textarea
              placeholder="Service Details (max 500 characters)"
              value={form.service}
              max={500}
              onChange={(v) => update("service", v)}
            />
            <Select placeholder="Verification ID" value={form.verificationId} onChange={(v) => update("verificationId", v)} />
            <Input placeholder="Verification no" value={form.verificationNo} onChange={(v) => update("verificationNo", v)} />

            {/* ID COPY */}
            <div className="relative w-full md:max-w-md">
              <input
                type="file"
                hidden
                ref={idCopyRef}
                onChange={(e) => handleIdCopy(e.target.files[0])}
              />
              <input
                readOnly
                value={idCopyName}
                placeholder="ID Copy"
                onClick={() => idCopyRef.current.click()}
                className="w-full bg-[#F4F6FF] rounded-lg px-4 py-3 pr-10 text-sm cursor-pointer"
              />
              <PaperClipIcon
                className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => idCopyRef.current.click()}
              />
            </div>

            <Select placeholder="Status" value={form.status} onChange={(v) => update("status", v)} />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4 mt-10">
          <button onClick={handleDelete} className="px-8 py-2 rounded-full bg-red-500 text-white cursor-pointer">
            Delete
          </button>
          <button onClick={handleDraft} className="px-8 py-2 rounded-full border border-indigo-500 text-indigo-600 cursor-pointer">
            Save as Draft
          </button>
          <button onClick={handleSubmitAndPay} className="px-8 py-2 rounded-full bg-indigo-600 text-white cursor-pointer">
            Submit & Pay
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===================== */
/* 🔹 PHONE INPUT        */
/* ===================== */

function PhoneNumberInput({ label, phone, country, onChange }) {
  const [open, setOpen] = useState(false);
  const selected = countries.find((c) => c.dial === country);

  return (
    <div className="w-full md:max-w-md relative">
      <p className="text-xs text-gray-500 mb-1">{label}</p>

      <div className="flex items-center bg-[#F4F6FF] rounded-lg px-4 py-3 gap-3">
        <button type="button" onClick={() => setOpen(!open)}>
          <ReactCountryFlag svg countryCode={selected.code} className="w-5 h-5" />
        </button>
        <ChevronDownIcon className="w-4 h-4 relative top-1" />
        <span>({country})</span>
        <input
          value={phone}
          onChange={(e) => onChange(e.target.value, country)}
          className="bg-transparent outline-none w-full"
          placeholder="724-848-1225"
        />
        
      </div>

      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow border">
          {countries.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => {
                onChange(phone, c.dial);
                setOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 w-full"
            >
              <ReactCountryFlag svg countryCode={c.code} className="w-5 h-5" />
              {c.name}
              <span className="ml-auto">{c.dial}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ===================== */
/* 🔹 INPUT / SELECT     */
/* ===================== */

const Input = ({ placeholder, value, onChange, type = "text" }) => (
  <input
    type={type}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className="w-full md:max-w-md bg-[#F4F6FF] rounded-lg px-4 py-3 text-sm outline-none"
  />
);

const Select = ({ placeholder, value, onChange }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full md:max-w-md bg-[#F4F6FF] rounded-lg px-4 py-3 text-sm outline-none"
  >
    <option value="">{placeholder}</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
  </select>
);

const Textarea = ({ placeholder, value, onChange, max }) => (
  <div className="w-full md:max-w-md">
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value.slice(0, max))}
      placeholder={placeholder}
      rows={4}
      className="w-full bg-[#F4F6FF] rounded-lg px-4 py-3 text-sm outline-none resize-none"
    />
    <p className="text-right text-xs text-gray-400 mt-1">
      {value.length}/{max}
    </p>
  </div>
);


export default DealerForm;
