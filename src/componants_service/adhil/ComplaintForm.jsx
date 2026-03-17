import { useState, useRef } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const ComplaintForm = () => {
  const imageInputRef = useRef(null);
  const [images, setImages] = useState([]);

  const handleAddImages = (e) => {
    const files = Array.from(e.target.files);

    const mapped = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      type: file.type.startsWith("video") ? "video" : "image",
    }));

    setImages((prev) => [...prev, ...mapped]);
    e.target.value = null;
  };

  const handleRemoveImage = (index) => {
    URL.revokeObjectURL(images[index].preview);
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full flex flex-col bg-gray-300">
      <form className="flex flex-col self-center w-full mt-5 gap-4">

        <div className="w-[90%] bg-white self-center rounded-xl shadow-lg p-4">
          <label className="block text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Misbehave"
            className="w-full rounded-md py-2 px-2 text-sm outline-none"
          />
        </div>

        <div className="w-[90%] bg-white self-center rounded-xl shadow-lg p-4">
          <label className="block text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
            Description
          </label>
          <textarea
            placeholder="Filled description here..."
            className="w-full h-28 rounded-md py-2 px-2 text-sm outline-none resize-none"
          />
        </div>


         <div className="w-[90%] bg-white self-center rounded-xl shadow-lg p-4">
          <label className="block text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
            Add images and video
          </label>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            ref={imageInputRef}
            className="hidden"
            onChange={handleAddImages}
          />

          <div className="flex gap-4 p-2 flex-wrap">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative w-16 h-16 rounded-md overflow-hidden group"
              >
                {img.type === "video" ? (
                  <video
                    src={img.preview}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={img.preview}
                    alt="service"
                    className="w-full h-full object-cover"
                  />
                )}

                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute inset-0 bg-black/60 text-white 
                             flex items-center justify-center 
                             opacity-0 group-hover:opacity-100 transition"
                >
                  <IoMdClose size={24} />
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => imageInputRef.current.click()}
              className="w-16 h-16 flex items-center justify-center 
                         bg-white hover:bg-stone-100 
                         rounded-lg border-2 border-dashed 
                         border-gray-300 cursor-pointer"
            >
              <IoMdAdd size={32} />
            </button>
          </div>
        </div>


 

          

        <div className="w-[90%] self-center mb-4">
          <Link to="/74">
            <button
              type="button"
              className="w-full h-11 bg-red-900 text-white rounded-full font-semibold hover:bg-red-950"
            >
              Confirm Complaint
            </button>
          </Link>
        </div>

      </form>
    </div>
  );
};

export default ComplaintForm;
