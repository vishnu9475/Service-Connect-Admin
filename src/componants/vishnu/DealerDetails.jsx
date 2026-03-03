
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function DealerDetails() {
//   /* ===================== */
//   /* 🔹 DEALER DATA        */
//   /* ===================== */
// const [dealer] = useState({
//   name: "Dealer Name",
//   id: "3543324",
//   status: "ACTIVE",
//   image:null,
//   description:"We are a trusted dealer providing quality products and reliable customer support. Our focus is on long-term relationships, transparent service, and customer satisfaction.",
//   service:"We offer a wide range of professional services including product sales, installation support, maintenance, and after-sales assistance. Our team ensures timely delivery, genuine products, and quick issue resolution. We work closely with customers to understand their needs and provide customized solutions that add value to their business while maintaining high standards of quality and reliability.",
//   address: "Santha Street, Kanoor",
//   phone: "1244557875",
//   email: "Santha@email.com",
//   whatsapp: "125547883",
// });


//   const navigate = useNavigate();

//   /* ===================== */
//   /* 🔹 STATUS STYLES      */
//   /* ===================== */
//   const statusStyles = {
//     ACTIVE: {
//       bg: "bg-green-100",
//       text: "text-green-700",
//       dot: "bg-green-600",
//       label: "Active",
//     },
//     NOTACTIVE: {
//       bg: "bg-gray-200",
//       text: "text-gray-600",
//       dot: "bg-gray-500",
//       label: "Not Active",
//     },
//     SUSPENDED: {
//       bg: "bg-red-100",
//       text: "text-red-700",
//       dot: "bg-red-600",
//       label: "Suspended",
//     },
//   };

//   const currentStatus = statusStyles[dealer.status];

//   return (
//     <div className="bg-[#F3F4FF] min-h-[70vh] flex justify-center p-4 md:p-6">
//       {/* Card */}
//       <div className="bg-white w-full max-w-5xl rounded-2xl shadow-sm p-4 md:p-8">

//         {/* TOP SECTION */}
//         <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

//           {/* LEFT: IMAGE + INFO */}
//           <div className="flex flex-col sm:flex-row gap-6">

//             {/* Dealer Image */}
//             <div className="w-full sm:w-56 h-40 rounded-2xl overflow-hidden bg-indigo-100">
//               <img
//                 src={dealer.image}
//                 alt={dealer.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             {/* Dealer Info */}
//             <div>
//               {/* NAME + STATUS */}
//               <div className="flex items-center gap-3">
//                 <h2 className="text-indigo-900 font-semibold text-lg">
//                   {dealer.name}
//                 </h2>

//                 {/* STATUS PILL */}
//                 <span
//                   className={`flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full 
//                   ${currentStatus.bg} ${currentStatus.text}`}
//                 >
//                   <span className={`w-2 h-2 rounded-full ${currentStatus.dot}`} />
//                   {currentStatus.label}
//                 </span>
//               </div>

//               <p className="text-sm text-gray-400 mt-1">
//                 #Id: {dealer.id}
//               </p>

//               <p className="text-sm text-gray-400 mt-4 max-w-md leading-relaxed">
//                 {dealer.description}
//               </p>
//             </div>
//           </div>

//           {/* ACTION BUTTON */}
//           <button
//             onClick={() => navigate("/adddealer")}
//             className="self-start md:self-auto px-6 py-2 bg-indigo-600 text-white rounded-full text-sm cursor-pointer hover:bg-indigo-700 transition-colors"
//           >
//             Edit
//           </button>
//         </div>

//         {/* BOTTOM SECTION */}
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

//           {/* Service */}
//           <div>
//             <h3 className="text-indigo-900 font-semibold mb-3">
//               SERVICE
//             </h3>
//             <p className="text-sm text-gray-400 leading-relaxed">
//               {dealer.service}
//             </p>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h3 className="text-indigo-900 font-semibold mb-3">
//               Contact
//             </h3>

//             <div className="space-y-4 text-sm text-gray-400">
//               <ContactField label="Address" value={dealer.address} />
//               <ContactField label="Contact" value={dealer.phone} />
//               <ContactField label="Email" value={dealer.email} />
//               <ContactField label="Whatsapp" value={dealer.whatsapp} />
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------- HELPER ---------- */
// const ContactField = ({ label, value }) => (
//   <p>
//     <span className="font-medium text-gray-500">{label} :</span>{" "}
//     {value}
//   </p>
// );

// export default DealerDetails;

import React from "react";

const DealerDetails133 = ({
  name = "Rahul Dealer",
  id = "#Id:3543324",
  status = "Active",
  photo = "https://via.placeholder.com/300x200",

  about = "We provide professional hair, skin, and beauty services in a clean, friendly salon, delivering safe, stylish, relaxing care to keep you fresh, confident, and perfectly groomed every single day.",

  serviceDetails = "We are a customer-focused dealer dedicated to providing high-quality beauty and wellness services for both men and women in a comfortable, hygienic, and professionally managed environment. Our goal is to create a complete self-care destination where every client feels relaxed, valued, and confident after every visit.We continuously update our techniques and services to stay aligned with the latest industry standards and trends.Professional beauty and grooming for a neat, fresh and good look.",

  revenue = "10,00,500",
  branches = "2",
  branchNames = ["kochi", "chennai"],
  serviceProviders = "8",
  communityName = "Premium Salon Community",

  primaryPhone = "9876543210",
  alternatePhone = "9123456780",
  verificationType = "Aadhar",
  verificationNo = "1234 5678 9123",

  landmark = "Near Main Bus Stand",
  pincode = "641001",
  district = "Coimbatore",
  state = "Tamil Nadu",

  contact = {
    address: "Santha Street, Kanoor",
    phone: "9876543210",
    email: "santha@email.com",
  },

  fromDate = "2026-01-01",
  fromTime = "09:00",
  toDate = "2026-12-31",
  toTime = "21:00",

  onEdit = () => alert("Edit clicked"),
  onViewDashboard = () => alert("Go to dashboard"),
}) => {
  const isActive = status === "Active";

  return (
    <div className="w-full bg-[#F4F5FF] p-4 sm:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl pt-14 p-6 sm:p-8 shadow-sm relative">
        <button
          onClick={onEdit}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 px-5 py-2 text-sm bg-[#4D44B5] text-white rounded-full z-10">
          Edit
        </button>

        {/* TOP HEADER */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-64 h-40 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
            <img
              src={photo}
              alt="Dealer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold text-[#2D2D6E]">
                    {name}
                  </h2>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">{id}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              {about}
            </p>
          </div>
        </div>

        {/* SERVICE (full width, same position) */}
        <div className="mt-8 bg-white border border-gray-200 shadow-sm rounded-xl p-6">
          <h3 className="font-semibold text-[#2D2D6E] mb-3">Service</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {serviceDetails}
          </p>
        </div>

        {/* DETAILS + CONTACT (equal containers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          {/* LEFT : DETAILS */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 text-sm text-gray-700 space-y-2">
            <p><b>Revenue:</b> ₹ {revenue}</p>
            <div>
              <p><b>Branches:</b> {branches}</p>
              {branchNames.length > 0 && (
                <ul className="mt-2 list-disc list-inside text-gray-600 text-sm space-y-1">
                  {branchNames.map((branch, index) => (
                    <li key={index}>{branch}</li>
                  ))}
                </ul>
              )}
            </div>
            <p><b>Providers:</b> {serviceProviders}</p>
            <p><b>Community:</b> {communityName}</p>

            <hr className="my-2 border-gray-200" />

            <p><b>Verification Type:</b> {verificationType}</p>
            <p><b>Aadhar No:</b> {verificationNo}</p>

            <hr className="my-2 border-gray-200" />

            <p><b>Validity From:</b> {fromDate} {fromTime}</p>
            <p><b>Validity To:</b> {toDate} {toTime}</p>
          </div>

          {/* RIGHT : CONTACT */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h3 className="font-semibold text-[#2D2D6E] mb-3">Contact</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p><b>Address:</b> {contact.address}</p>
              <p>{landmark}, {district}, {state} - {pincode}</p>
              <p><b>Phone:</b> {contact.phone}</p>
              <p><b>Email:</b> {contact.email}</p>
              <p><b>Primary Phone:</b> {primaryPhone}</p>
              <p><b>Alternate Phone:</b> {alternatePhone}</p>
            </div>
          </div>

        </div>

        {/* DASHBOARD BUTTON */}
        <div className="mt-10 flex justify-end">
          <button
            onClick={onViewDashboard}
            className="px-8 py-3 bg-[#4D44B5] text-white text-sm rounded-lg font-medium"
          >
            VIEW DASHBOARD
          </button>
        </div>

      </div>
    </div>
  );
};

export default DealerDetails133;