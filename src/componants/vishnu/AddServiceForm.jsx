import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDownIcon,
  PaperClipIcon,
  PlusIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

function AddServiceForm() {
  /* ===================== */
  /* 🔹 FORM STATE         */
  /* ===================== */
  const [form, setForm] = useState({
    title: "",
    description: "",
    gst: "",
    category: "",
    subCategory: "",
    certificate: null,
    certificateName: "",
    accept: false,
  });

  const [media, setMedia] = useState([]);
  const mediaInputRef = useRef(null);
  const certInputRef = useRef(null);
  const navigate = useNavigate();

  /* ===================== */
  /* 🔹 HANDLERS           */
  /* ===================== */
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleCertificateUpload = (file) => {
    if (!file) return;
    setForm((prev) => ({
      ...prev,
      certificate: file,
      certificateName: file.name,
    }));
  };

  const handleMediaUpload = (files) => {
    const selected = Array.from(files).slice(0, 4);
    setMedia(selected);
  };

  const handleSubmit = () => {
    if (!form.accept) {
      alert("Please accept the terms");
      return;
    }

    const payload = {
      ...form,
      media,
    };

    console.log("SUBMIT 👉", payload);
  };

  const handleDraft = () => {
    console.log("DRAFT 👉", { ...form, media });
  };

  const handleDelete = () => {
    if (!window.confirm("Clear the form?")) return;
    setForm({
      title: "",
      description: "",
      gst: "",
      category: "",
      subCategory: "",
      certificate: null,
      certificateName: "",
      accept: false,
    });
    setMedia([]);
  };

  const handleSubmitgo = () => {
    navigate('/serviceprovider');
  }
  return (
    <div className="min-h-screen bg-[#F4F6FF] px-4 py-6 sm:px-6">

      {/* MAIN CARD */}
      <div className="mx-auto max-w-7xl bg-[#EEF0FA] rounded-2xl min-h-[85vh] flex flex-col">

        {/* HEADER */}
        <div className="bg-indigo-600 text-white px-6 py-3 rounded-t-2xl font-medium">
          Service Details
        </div>

        {/* BODY */}
        <div className="flex flex-col lg:flex-row flex-1 p-6 gap-6">

          {/* LEFT FORM */}
          <div className="w-full lg:max-w-sm">

            <h2 className="text-sm font-semibold text-gray-800 mb-4">
              Register your services
            </h2>

            <FormInput
              placeholder="Service Title"
              value={form.title}
              onChange={(v) => handleChange("title", v)}
            />

            <FormInput
              placeholder="Description"
              value={form.description}
              onChange={(v) => handleChange("description", v)}
            />

            <FormInput
              placeholder="GST code"
              value={form.gst}
              onChange={(v) => handleChange("gst", v)}
            />

            <FormSelect
              placeholder="Select Service Category"
              value={form.category}
              onChange={(v) => handleChange("category", v)}
            />

            <FormSelect
              placeholder="Select Service Sub-category"
              value={form.subCategory}
              onChange={(v) => handleChange("subCategory", v)}
            />

            {/* CERTIFICATE */}
            <FormInput
              placeholder="Certificate/Licensee"
              icon={<PaperClipIcon className="w-4 h-4" />}
              readOnly
              onClick={() => certInputRef.current.click()}
            />

            <FormInput
              placeholder="File Name (certificate/Licensee)"
              value={form.certificateName}
              icon={<PaperClipIcon className="w-4 h-4" />}
              readOnly
            />

            <input
              type="file"
              hidden
              ref={certInputRef}
              onChange={(e) => handleCertificateUpload(e.target.files[0])}
            />

            {/* MEDIA */}
            <p className="text-xs text-gray-600 mb-2">
              Add image and video
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              {media.map((file, i) => (
                <UploadBox key={i}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                </UploadBox>
              ))}

              {media.length < 4 && (
                <UploadBox onClick={() => mediaInputRef.current.click()}>
                  <PlusIcon className="w-5 h-5" />
                </UploadBox>
              )}
            </div>

            <input
              type="file"
              hidden
              multiple
              ref={mediaInputRef}
              accept="image/*,video/*"
              onChange={(e) => handleMediaUpload(e.target.files)}
            />

            {/* ACCEPT */}
            <div className="flex justify-end items-center gap-2">
              <input
                type="checkbox"
                checked={form.accept}
                onChange={(e) => handleChange("accept", e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-xs text-gray-700">Accept</span>
            </div>

            <p className="text-xs text-gray-500">
              #Other info as required
            </p>
          </div>

          <div className="hidden lg:block flex-1" />
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 p-6">
          <button
            onClick={handleDelete}
            className="w-full sm:w-auto px-6 py-2 bg-red-600 text-white rounded-full text-sm cursor-pointer"
          >
            Delete
          </button>

          <button
            onClick={handleDraft}
            className="w-full sm:w-auto px-6 py-2 border border-indigo-500 text-indigo-600 rounded-full text-sm cursor-pointer"
          >
            Save as Draft
          </button>

          <button
            onClick={handleSubmitgo}
            className="w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white rounded-full text-sm cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- HELPER COMPONENTS ---------- */

const FormInput = ({ placeholder, icon, value, onChange, readOnly, onClick }) => (
  <div className="relative mb-3">
    <input
      type="text"
      value={value}
      readOnly={readOnly}
      onClick={onClick}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className="w-full text-sm bg-white border border-gray-400 rounded-md px-4 py-2.5 pr-9 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200"
    />
    {icon && (
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
        {icon}
      </div>
    )}
  </div>
);

const FormSelect = ({ placeholder, value, onChange }) => (
  <div className="relative mb-3">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full text-sm appearance-none bg-white border border-gray-400 rounded-md px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200"
    >
      <option value="">{placeholder}</option>
      <option value="cat1">Category 1</option>
      <option value="cat2">Category 2</option>
    </select>
    <ChevronDownIcon className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
  </div>
);

const UploadBox = ({ children, onClick }) => (
  <div
    onClick={onClick}
    className="w-10 h-10 border border-gray-400 rounded-md flex items-center justify-center text-gray-600 cursor-pointer hover:border-indigo-500 transition overflow-hidden"
  >
    {children}
  </div>
);

export default AddServiceForm;
