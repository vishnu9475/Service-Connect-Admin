import React, { useState, useRef } from "react";
import Text from "../../assets/Test.jpg";
import { FiEdit } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

function AddCategoryForm() {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [status, setStatus] = useState("Status");
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const [image, setImage] = useState(Text);
  const fileInputRef = useRef(null);

  // 🔹 Enable edit mode + open file picker
  const handleEdit = () => {
    setIsEditing(true);
    fileInputRef.current?.click();
  };

  // 🔹 Image select from desktop
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log({
      title,
      description,
      status,
      value,
      value2,
      image
    });

    alert("Category saved successfully");
    setIsEditing(false); // 🔒 lock after save
  };

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    setTitle("");
    setDescription("");
    setStatus("Status");
    setValue("");
    setValue2("");
    setImage(Text);
    setIsEditing(false);

    alert("Category deleted");
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex ml-[30px] px-4 py-6">

      {/* CARD */}
      <div className="relative w-full max-w-[620px] bg-white rounded-2xl shadow-md p-6">

        {/* TITLE */}
        <h2 className="text-[#303972] text-[22px] sm:text-[26px] font-bold mb-6">
          Add Category details
        </h2>

        {/* CONTENT */}
        <div className="flex flex-col sm:flex-row gap-6 pb-24">

          {/* LEFT SECTION */}
          <div className="w-full sm:w-[300px]">

            {/* IMAGE */}
            <div className="flex items-start gap-3 mb-3">
              <img
                src={image}
                alt="Category"
                className="w-full sm:w-[240px] h-[150px] rounded-xl object-cover"
              />

              <FiEdit
                className="text-gray-400 cursor-pointer text-[18px] mt-1"
                onClick={handleEdit}
                title="Edit"
              />
            </div>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />

            {/* INPUTS */}
            <div className="flex flex-col gap-2 w-full sm:w-[215px] pl-0 sm:pl-2 md:pl-4">

              <input
                type="text"
                placeholder="Title"
                value={title}
                disabled={!isEditing}
                onChange={(e) => setTitle(e.target.value)}
                className="h-[34px] border border-gray-300 rounded-md px-2 text-[12px]
                           outline-none disabled:bg-gray-50"
              />

              <input
                type="text"
                placeholder="Description"
                value={description}
                disabled={!isEditing}
                onChange={(e) => setDescription(e.target.value)}
                className="h-[34px] border border-gray-300 rounded-md px-2 text-[12px]
                           outline-none disabled:bg-gray-50"
              />

              <select
                value={value}
                disabled={!isEditing}
                onChange={(e) => setValue(e.target.value)}
                className="h-[34px] border border-gray-300 rounded-md px-2 text-[12px]"
              >
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>

              <select
                value={value2}
                disabled={!isEditing}
                onChange={(e) => setValue2(e.target.value)}
                className="h-[34px] border border-gray-300 rounded-md px-2 text-[12px]"
              >
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>

            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-wrap sm:flex-nowrap gap-3 justify-end
                        sm:absolute sm:bottom-6 sm:right-6">

          <div className="relative w-full sm:w-auto">
            <select
              value={status}
              disabled={!isEditing}
              onChange={(e) => setStatus(e.target.value)}
              className="h-[34px] w-full sm:w-[100px]
                         border border-[#4D44B5] text-[#4D44B5]
                         rounded-full px-3 text-[12px]
                         appearance-none disabled:bg-gray-50"
            >
              <option>Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2
                                     text-[#4D44B5] text-[10px] pointer-events-none" />
          </div>

          <button
            onClick={handleDelete}
            className="h-[34px] w-full sm:w-[100px]
                       rounded-full bg-[#FF3D00]
                       text-white text-[12px]"
          >
            Delete
          </button>

          <button
            onClick={handleSave}
            disabled={!isEditing}
            className="h-[34px] w-full sm:w-[100px]
                       rounded-full bg-[#4D44B5]
                       text-white text-[12px]
                       disabled:opacity-50"
          >
            Save
          </button>

          <button
            onClick={handleSave}
            disabled={!isEditing}
            className="h-[34px] w-full sm:w-[100px]
                       rounded-full bg-[#FF3D00]
                       text-white text-[12px]
                       disabled:opacity-50"
          >
            Save As Draft
          </button>

        </div>
      </div>
    </div>
  );
}

export default AddCategoryForm;
