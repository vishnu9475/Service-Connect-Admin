import React from 'react'
import { FaFacebookF, FaHeadphones, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const contactItems = [
  { label: "Customer Services", icon: <FaHeadphones /> },
  { label: "WhatsApp", icon: <FaWhatsapp /> },
  { label: "Facebook", icon: <FaFacebookF /> },
  { label: "Twitter", icon: <FaTwitter /> },
  { label: "Instagram", icon: <FaInstagram /> },
];

const ContactUs_51 = () => {
  return (
    <div className="min-h-100 bg-gray-100 px-4 py-6 flex justify-center">
      {/* <div className="w-full max-w-md space-y-4"> */}
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl space-y-4">

        {contactItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white px-4 py-4
                       rounded-xl cursor-pointer
                       shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
          >
            {/* Icon */}
            <div className="text-black text-lg">
              {item.icon}
            </div>

            {/* Text */}
            <p className="text-sm font-medium text-gray-900">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </div>)
}

export default ContactUs_51;