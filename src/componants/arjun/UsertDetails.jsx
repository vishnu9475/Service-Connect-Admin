import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

const UserDetails = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  // 1. Group all inputs into a single state object
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    dob: "",
    email: "",
    phoneNumber: "",
    gender: "",
    houseName: "",
    landmark: "",
    pincode: "",
    district: "",
    state: ""
  });

  const [imagePreview, setImagePreview] = useState(null);

  // 2. LOAD DRAFT: Runs once when the component is opened
  useEffect(() => {
    const savedDraft = localStorage.getItem("student_form_draft");
    if (savedDraft) {
      setFormData(JSON.parse(savedDraft));
      // Note: Image previews usually aren't stored in localStorage 
      // because they are large strings, but we restore the text data.
    }
  }, []);

  // 3. Update state dynamically based on the "name" attribute of inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 4. SAVE AS DRAFT: Stores current state in browser memory
  const handleSaveDraft = () => {
    localStorage.setItem("student_form_draft", JSON.stringify(formData));
    alert("Draft saved! You can complete this later.");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    // 5. PERMANENT SAVE: Clear the temporary draft once submitted successfully
    localStorage.removeItem("student_form_draft");
    alert("Student Profile Added Successfully!");
    navigate("/Users");
  };

  return (
    <div className='min-h-screen'>
      <div className='max-w-6xl mx-auto bg-[#EEF0FA] rounded-xl overflow-hidden shadow-sm'>
        
        <div className='w-full bg-[#4D44B5] text-white px-6 py-3 font-medium text-[20px]'>
          Student Details
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 p-4 md:p-6'>

          {/* PHOTO UPLOAD */}
          <div className='flex flex-col items-start'>
            <label className="text-sm font-medium text-gray-600 pb-2">
              Photo <span className="text-red-500">*</span>
            </label>
            <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleImageChange} />
            <div onClick={() => fileInputRef.current.click()} className='w-32 h-32 rounded-lg border-2 border-dashed border-indigo-300 bg-indigo-100 flex items-center justify-center cursor-pointer overflow-hidden hover:bg-indigo-200 transition-all'>
              {imagePreview ? <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" /> : <span className="text-xs text-gray-500 text-center px-2 font-medium">Click to Upload Photo</span>}
            </div>
          </div>

          {/* FORM INPUTS */}
          <div className='md:col-span-3 flex flex-col gap-4'>
            {/* Added 'name' and 'value' to every input to link with state */}
            <input 
              type="text" name="fullName" placeholder='Full Name' value={formData.fullName} onChange={handleChange}
              className='w-full md:max-w-sm px-4 py-3 rounded-lg bg-white outline-none text-sm font-semibold text-[#303972]'
            />
            
            <input 
              type="text" name="address" placeholder='Address' value={formData.address} onChange={handleChange}
              className='w-full md:max-w-sm px-4 py-3 rounded-lg bg-white outline-none text-sm font-semibold text-[#303972]'
            />

            <div className='relative w-full md:max-w-sm'>
              <SlCalender className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
              <input 
                type="date" name="dob" value={formData.dob} onChange={handleChange}
                className='w-full px-4 py-3 pl-12 rounded-lg bg-white outline-none text-sm font-semibold text-[#303972]'
              />
            </div>

            <div className='relative w-full md:max-w-sm'>
              <CiMail className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]' />
              <input 
                type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange}
                className='w-full px-4 py-3 pl-12 rounded-lg bg-white outline-none text-sm font-semibold text-[#303972]'
              />
            </div>

            <input 
              type="number" name="phoneNumber" placeholder='Phone Number' value={formData.phoneNumber} onChange={handleChange}
              className='w-full md:max-w-sm px-4 py-3 rounded-lg bg-white outline-none text-sm font-semibold text-[#303972]'
            />

            <select 
              name="gender" value={formData.gender} onChange={handleChange}
              className='w-full md:max-w-sm px-4 py-3 rounded-lg bg-white text-sm font-semibold text-[#303972] outline-none'
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input type="text" name="houseName" placeholder='House Name' value={formData.houseName} onChange={handleChange} className='w-full md:max-w-sm px-4 py-3 rounded-lg bg-white outline-none text-sm font-semibold text-[#303972]'/>
            <input type="text" name="landmark" placeholder='Landmark' value={formData.landmark} onChange={handleChange} className='w-full md:max-w-sm px-4 py-3 rounded-lg bg-white outline-none text-sm font-semibold text-[#303972]'/>
            <input type="number" name="pincode" placeholder='Pincode' value={formData.pincode} onChange={handleChange} className='w-full md:max-w-sm px-4 py-3 rounded-lg bg-white outline-none text-sm font-semibold text-[#303972]'/>
            <input type="text" name="district" placeholder='District' value={formData.district} onChange={handleChange} className='w-full md:max-w-sm px-4 py-3 rounded-lg bg-white outline-none text-sm font-semibold text-[#303972]'/>
            <input type="text" name="state" placeholder='State' value={formData.state} onChange={handleChange} className='w-full md:max-w-sm px-4 py-3 rounded-lg bg-white outline-none text-sm font-semibold text-[#303972]'/>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 px-4 md:px-6 pb-6">
          <button 
            type="button"
            onClick={handleSaveDraft}
            className="px-5 py-2 border border-indigo-500 text-indigo-600 rounded-full text-sm bg-white hover:bg-indigo-50 transition-colors font-medium"
          >
            Save As Draft
          </button>
          
          <button
            type="button"
            onClick={handleSubmit} 
            className="px-5 py-2 bg-[#4D44B5] text-white rounded-full text-sm hover:bg-indigo-700 transition-colors font-medium"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

export default UserDetails;