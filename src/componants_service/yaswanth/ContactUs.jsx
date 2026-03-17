import React from 'react'
import { FaFacebookF, FaHeadphones, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const contactItems = [
  { label: "Customer Services", icon: <FaHeadphones /> },
  { label: "WhatsApp", icon: <FaWhatsapp /> },
  { label: "Facebook", icon: <FaFacebookF /> },
  { label: "Twitter", icon: <FaTwitter /> },
  { label: "Instagram", icon: <FaInstagram /> },
];

const ContactUs = () => {
  return (
 <div className="min-h-screen bg-[#D9D9DB] px-4 py-6">
      <div className="w-full  space-y-4">

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
    </div>  )
}

export default ContactUs;