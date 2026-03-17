
import {
  ArrowLeft,
  ChevronDown,
  Paperclip,
  Plus,
  ArrowRight,
  X,
} from "lucide-react";
import { useState, useRef } from "react";
// import CommonHeader from "../componants_service/CommonHeader";

export default function RegisterService() {
  const [accepted, setAccepted] = useState(false);

  // File States
  const [certificate, setCertificate] = useState(null);
  const [licenseFile, setLicenseFile] = useState(null);

  // Image + Video State
  const [mediaFiles, setMediaFiles] = useState([]);

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);

    const newFiles = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      type: file.type,
    }));

    setMediaFiles((prev) => [...prev, ...newFiles]);
  };

  const removeMedia = (index) => {
    const updated = [...mediaFiles];
    updated.splice(index, 1);
    setMediaFiles(updated);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-[#1f2430] text-white p-4 h-22 flex items-center gap-3 shadow-md">
        <ArrowLeft className="cursor-pointer" />
        <h1 className="text-lg font-semibold tracking-wide">
          REGISTER SERVICE
        </h1>

               {/* <CommonHeader
                  title="Create New Password"
                  backTo=""
                /> */}
        
      </div>

      <div className="flex-1 px-4 py-6 max-w-md mx-auto w-full">
        <Input placeholder="Description" />
        <Input placeholder="GST code" />

        <Dropdown placeholder="Select Service Category" />
        <Dropdown placeholder="Select Service Sub-category" />

        {/* File Upload */}
        <div className="space-y-3 mt-3">
          <FileInput
            label="Certificate/Licensee"
            onFileSelect={(file) => setCertificate(file)}
          />
          <FileInput
            label="File Name (certificate/Licensee)"
            onFileSelect={(file) => setLicenseFile(file)}
          />
        </div>

        {/* Image + Video Upload */}
        <div className="mt-6">
          <p className="text-sm mb-3 font-medium">Add image and video</p>

          <div className="flex flex-wrap gap-3">
            {mediaFiles.map((item, index) => (
              <div
                key={index}
                className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#6f6464]"
              >
                {item.type.startsWith("image") ? (
                  <img
                    src={item.preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={item.preview}
                    className="w-full h-full object-cover"
                  />
                )}

                <button
                  onClick={() => removeMedia(index)}
                  className="absolute top-1 right-1 bg-black bg-opacity-60 rounded-full p-1"
                >
                  <X size={14} className="text-white" />
                </button>
              </div>
            ))}

            {/* Add Button */}
            <label className="w-20 h-20 bg-[#6f6464] rounded-xl flex items-center justify-center cursor-pointer shadow-md">
              <Plus className="text-white" />
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                className="hidden"
                onChange={handleMediaUpload}
              />
            </label>

            <label className="w-20 h-20 bg-[#6f6464] rounded-xl flex items-center justify-center cursor-pointer shadow-md">
              <Plus className="text-white" />
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                className="hidden"
                onChange={handleMediaUpload}
              />
            </label>
                        <label className="w-20 h-20 bg-[#6f6464] rounded-xl flex items-center justify-center cursor-pointer shadow-md">
              <Plus className="text-white" />
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                className="hidden"
                onChange={handleMediaUpload}
              />
            </label>
            <label className="w-20 h-20 bg-[#6f6464] rounded-xl flex items-center justify-center cursor-pointer shadow-md">
              <Plus className="text-white" />
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                className="hidden"
                onChange={handleMediaUpload}
              />
            </label>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-center justify-between mt-6 text-sm">
          <span className="font-medium">Terms & Condition</span>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="w-4 h-4"
            />
            <span>Accept</span>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={() => {
            console.log("Certificate:", certificate);
            console.log("License:", licenseFile);
            console.log("Media Files:", mediaFiles);
          }}
          className="mt-8 w-full bg-[#1f2430] text-white py-4 rounded-full flex items-center justify-center gap-4 shadow-lg hover:scale-105 transition"
        >
          <span className="text-lg font-medium">Continue</span>
          <div className="bg-white text-black p-2 rounded-full">
            <ArrowRight size={18} />
          </div>
        </button>
      </div>
    </div>
  );
}

/* Components */

function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full mt-3 bg-[#6f6464] text-white placeholder-white px-4 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
    />
  );
}

function Dropdown({ placeholder }) {
  return (
    <div className="relative mt-3">
      <select className="w-full appearance-none bg-[#6f6464] text-white px-4 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400">
        <option>{placeholder}</option>
      </select>
      <ChevronDown
        size={18}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none"
      />
    </div>
  );
}

function FileInput({ label, onFileSelect }) {
  const fileRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    fileRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        ref={fileRef}
        className="hidden"
        onChange={handleFileChange}
      />
      <div
        onClick={handleClick}
        className="w-full bg-[#6f6464] text-white px-4 py-3 rounded-xl shadow-md cursor-pointer flex items-center justify-between"
      >
        <span className="truncate">{fileName || label}</span>
        <Paperclip size={18} />
      </div>
    </div>
  );
}
