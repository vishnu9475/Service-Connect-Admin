import { useState } from "react";
import { useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdAttach, IoMdAdd } from "react-icons/io";
import { PiImageSquareFill } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import AddLeadBalance from "./AddLeadBalance";


export default function ServiceRegisterForm() {

  const [service, setService] = useState({
    description: "I will build responsive and modern websites.",
    gstCode: "GSTIN12345",
    category: "Web Development",
    subCategory: "Business Websites",
    certificateName: "Web_Development_Certificate.pdf",
    termsAccepted: true,
  });

  const [images, setImages] = useState([]);

  const fileInputRef = useRef(null);

  const imageInputRef = useRef(null);

  const handleAddImages = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (field, value) => {
    setService((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = () => {
    console.log("Updated service:", service);
    // alert("Service updated (dummy)");
  };

  return (
    <div className="w-full h-full p-3 bg-gray-300 item-center">
      <div className="w-[100%] mt-1 flex gap-5 flex-col justify-center">
        <div className="w-[100%] md:w-[95%] mt-1 flex gap-5 flex-col justify-center items-center self-center">


        <div className="w-[95%] md:w-[80%] self-center flex flex-col gap-2 mt-5">


          <textarea
            value={service.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="bg-stone-700 text-white h-14 px-4 py-2 rounded-lg outline-none resize-y"
            placeholder="Description"
          />

          <input
            value={service.gstCode}
            onChange={(e) => handleChange("gstCode", e.target.value)}
            className="bg-stone-700 text-white h-12 rounded-lg px-4 outline-none"
            placeholder="GST code"
          />

          <input
            value={service.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className="bg-stone-700 text-white h-12 rounded-lg px-4 outline-none"
            placeholder="Select Service Category"
          />

          <input
            value={service.subCategory}
            onChange={(e) => handleChange("subCategory", e.target.value)}
            className="bg-stone-700 text-white h-12 rounded-lg px-4 outline-none"
            placeholder="Select Service Sub Category"
          />

          <input
            type="file"
            ref={fileInputRef}
            accept=".pdf,.jpg,.png"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                handleChange("certificateName", file.name);
              }
            }}
          />


          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="relative text-left pl-4 bg-stone-700 text-white h-12 rounded-lg shadow w-full"
          >
            {service.certificateName || "Certificate / Licence"}
            <span className="absolute right-2 top-3 cursor-pointer">
              <IoMdAttach size={22} />
            </span>
          </button>

                    <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="relative text-left pl-4 bg-stone-700 text-white h-12 rounded-lg shadow w-full"
          >
            {service.certificateName || "Certificate / Licence"}
            <span className="absolute right-2 top-3 cursor-pointer">
              <IoMdAttach size={22} />
            </span>
          </button>
        </div>



        <div className="w-[95%] md:w-[80%] self-center bg-gray-300">
          <p className="font-bold">Add images and video</p>


          <input
            type="file"
            accept="image/*"
            multiple
            ref={imageInputRef}
            className="hidden "
            onChange={handleAddImages}
          />

          <div className="flex gap-4 p-2 flex-wrap ">

            {images.map((img, index) => (
              <div
                key={index}
                className="relative w-16 h-16 rounded-md overflow-hidden group cursor-pointer "
              >
                <img
                  src={img.preview}
                  alt="service"
                  className="w-full h-full object-cover"
                />


                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute inset-0 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                >
                  <IoMdClose size={24} className="cursor-pointer"/>
                </button>
              </div>
            ))}


            <button
              type="button"
              onClick={() => imageInputRef.current.click()}
              className="w-16 h-16 flex items-center justify-center bg-white hover:bg-stone-100 rounded-lg border-2 border-dashed border-gray-300 aspect-square cursor-pointer"
            >
              <IoMdAdd size={32} className="cursor-pointer "/>
            </button>
          </div>
        </div>


        <div className="w-[95%] md:w-[80%] self-center flex justify-between font-bold text-sm">
          <p>Terms and conditions</p>
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={service.termsAccepted}
              onChange={(e) => handleChange("termsAccepted", e.target.checked)}
              className="accent-black size-4"
            />
            <span>Accept</span>
          </div>
        </div>


        <button
  onClick={handleUpdate}
  disabled={!service.termsAccepted}
  className={`self-center w-[95%] md:w-[80%] h-12 rounded-full shadow font-bold
    ${
      service.termsAccepted
        ? "bg-black text-white cursor-pointer"
        : "bg-gray-800 text-white cursor-not-allowed"
    }
  `}
>
  Update
</button>

      </div>
      </div>

    </div>
  );
}


