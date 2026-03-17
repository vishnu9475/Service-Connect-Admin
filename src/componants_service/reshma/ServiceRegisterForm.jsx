import { useState } from "react";
import { ChevronLeft, Upload, Plus } from "lucide-react";
import { useNavigate } from "react-router"
export default function ServiceRegisterForm() {
   
  const [images, setImages] = useState([]);
 const navigate = useNavigate();
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start sm:items-center ">
      
      <div className="w-full  bg-gray-200 shadow-lg rounded-xl overflow-hidden">

       

        {/* Form */}
        <div className="p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3">

          <input
            type="text"
            placeholder="Description"
            className="w-full px-3 py-2 rounded-md bg-gray-500 text-white placeholder-gray-300 outline-none text-sm sm:text-base"
          />

          <input
            type="text"
            placeholder="GST code"
            className="w-full px-3 py-2 rounded-md bg-gray-500 text-white placeholder-gray-300 outline-none text-sm sm:text-base"
          />

          <select className="w-full px-3 py-2 rounded-md bg-gray-500 text-white outline-none text-sm sm:text-base">
            <option>Select Service Category</option>
          </select>

          <select className="w-full px-3 py-2 rounded-md bg-gray-500 text-white outline-none text-sm sm:text-base">
            <option>Select Service Sub-category</option>
          </select>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Certificate/Licensee"
              className="flex-1 px-3 py-2 rounded-md bg-gray-500 text-white placeholder-gray-300 outline-none text-sm sm:text-base"
            />
            <button className="bg-gray-700 p-2 sm:p-2.5 rounded-md text-white">
              <Plus size={18} />
            </button>
          </div>

          <input
            type="text"
            placeholder="File Name (certificate/licensee)"
            className="w-full px-3 py-2 rounded-md bg-gray-500 text-white placeholder-gray-300 outline-none text-sm sm:text-base"
          />

          {/* Upload Section */}
          <div className="border border-gray-400 rounded-md p-2 sm:p-3">
            <p className="text-xs sm:text-sm text-gray-700 mb-2">
              Add image and video
            </p>

            <div className="flex gap-2 flex-wrap">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md border overflow-hidden"
                >
                  <img
                    src={URL.createObjectURL(img)}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              <label className="w-10 h-10 sm:w-12 sm:h-12 bg-white border rounded-md flex items-center justify-center cursor-pointer">
                <Upload size={16} />
                <input
                  type="file"
                  multiple
                  hidden
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
            <input type="checkbox" />
            <span>Terms & Conditions</span>
          </div>

          {/* Button */}
          <button 
          onClick={() => navigate("/page61")}
          className="w-full bg-gray-900 text-white py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800 transition">
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
