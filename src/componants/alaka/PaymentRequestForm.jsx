// import React, { useState } from "react";
// import { PaperClipIcon } from "@heroicons/react/24/outline";
// import { useNavigate } from "react-router-dom"; // ✅ ADDED

// function PaymentRequest() {
//   const navigate = useNavigate(); // ✅ ADDED

//   const initialState = {
//     fullName: "",
//     email: "",
//     contact: "",
//     amount: "",
//     method: "",
//     bankName: "",
//     holderName: "",
//     accountNumber: "",
//     branch: "",
//     ifsc: "",
//     documentType: "Invoice",
//   };

//   const [formData, setFormData] = useState(initialState);
//   const [files, setFiles] = useState([]);

//   const handleChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFiles(Array.from(e.target.files));
//   };

//   const handleConfirm = () => {
//     console.log("Payment Request Submitted:", formData, files);

//     navigate("/TransactionalDetails", {
//       state: {
//         formData,
//         files,
//       },
//     }); // ✅ NAVIGATION
//   };

//   const handleCancel = () => {
//     if (!window.confirm("Are you sure you want to cancel?")) return;
//     setFormData(initialState);
//     setFiles([]);
//   };

//   const fields = [
//     { label: "Full Name", key: "fullName" },
//     { label: "Email Address", key: "email" },
//     { label: "Contact Number", key: "contact" },
//     { label: "Payment Amount", key: "amount" },
//     { label: "Payment Method", key: "method", type: "select" },
//     { label: "Bank Name", key: "bankName" },
//     { label: "Account Holder Name", key: "holderName" },
//     { label: "Account Number", key: "accountNumber" },
//     { label: "Bank Branch", key: "branch" },
//     { label: "IFSC Code", key: "ifsc" },
//   ];

//   return (
//     <div className="bg-white w-full max-w-[760px] rounded-2xl shadow-sm p-6 md:p-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
//         {fields.map((field, index) => (
//           <div key={index}>
//             <label className="block text-sm text-gray-600 mb-1">
//               {field.label}
//             </label>

//             {field.type === "select" ? (
//               <select
//                 value={formData[field.key]}
//                 onChange={(e) => handleChange(field.key, e.target.value)}
//                 className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm"
//               >
//                 <option value="">Select</option>
//                 <option value="UPI">UPI</option>
//                 <option value="Bank Transfer">Bank Transfer</option>
//                 <option value="Cash">Cash</option>
//               </select>
//             ) : (
//               <input
//                 type="text"
//                 value={formData[field.key]}
//                 onChange={(e) => handleChange(field.key, e.target.value)}
//                 className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm"
//               />
//             )}
//           </div>
//         ))}

//         <div>
//           <label className="block text-sm text-gray-600 mb-1">
//             Document Type
//           </label>
//           <select
//             value={formData.documentType}
//             onChange={(e) => handleChange("documentType", e.target.value)}
//             className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm"
//           >
//             <option>Invoice</option>
//             <option>Work Proof</option>
//           </select>
//         </div>

//         <div>
//           <label className="text-sm text-gray-600 block mb-1">
//             Upload Supporting Document
//           </label>

//           <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
//             <label className="flex items-center gap-2 cursor-pointer text-sm text-indigo-600 font-medium">
//               <PaperClipIcon className="w-5 h-5 text-gray-400" />
//               Choose File
//               <input
//                 type="file"
//                 multiple
//                 className="hidden"
//                 onChange={handleFileChange}
//               />
//             </label>

//             <span className="text-sm text-gray-400 truncate">
//               {files.length
//                 ? `${files.length} file(s) selected`
//                 : "No file chosen"}
//             </span>
//           </div>
//         </div>
//       </div>

//       {files.length > 0 && (
//         <div className="mt-5">
//           <label className="text-sm text-gray-600 block mb-2">
//             Uploaded Documents
//           </label>
//           <ul className="text-sm text-gray-700 list-disc pl-5">
//             {files.map((file, index) => (
//               <li key={index}>{file.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <div className="flex justify-center md:justify-end gap-6 mt-10">
//         <button
//           onClick={handleCancel}
//           className="w-40 bg-[#B3261E] text-white py-2 rounded-full text-sm"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={handleConfirm}
//           className="w-40 bg-[#65558F] text-white py-2 rounded-full text-sm"
//         >
//           Confirm
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PaymentRequest;

import React, { useState } from "react"; 
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function PaymentRequest() {
  const navigate = useNavigate();

  const initialState = {
    fullName: "",
    email: "",
    contact: "",
    amount: "",
    method: "",
    bankName: "",
    holderName: "",
    accountNumber: "",
    branch: "",
    ifsc: "",
    documentType: "Invoice",
  };

  const [formData, setFormData] = useState(initialState);
  const [files, setFiles] = useState([]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleConfirm = () => {
    console.log("Payment Request Submitted:", formData, files);

    // ✅ Alert first
    alert("Payment request submitted successfully");

    // ✅ Navigate after clicking OK
    navigate("/TransactionView", {
      state: {
        formData,
        files,
      },
    });
  };

  const handleCancel = () => {
    if (!window.confirm("Are you sure you want to cancel?")) return;
    setFormData(initialState);
    setFiles([]);
  };

  const fields = [
    { label: "Full Name", key: "fullName" },
    { label: "Email Address", key: "email" },
    { label: "Contact Number", key: "contact" },
    { label: "Payment Amount", key: "amount" },
    { label: "Payment Method", key: "method", type: "select" },
    { label: "Bank Name", key: "bankName" },
    { label: "Account Holder Name", key: "holderName" },
    { label: "Account Number", key: "accountNumber" },
    { label: "Bank Branch", key: "branch" },
    { label: "IFSC Code", key: "ifsc" },
  ];

  return (
    <div className="bg-white w-full max-w-[760px] rounded-2xl shadow-sm p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
        {fields.map((field, index) => (
          <div key={index}>
            <label className="block text-sm text-gray-600 mb-1">
              {field.label}
            </label>

            {field.type === "select" ? (
              <select
                value={formData[field.key]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm"
              >
                <option value="">Select</option>
                <option value="UPI">UPI</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Cash">Cash</option>
              </select>
            ) : (
              <input
                type="text"
                value={formData[field.key]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm"
              />
            )}
          </div>
        ))}

        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Document Type
          </label>
          <select
            value={formData.documentType}
            onChange={(e) =>
              handleChange("documentType", e.target.value)
            }
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm"
          >
            <option>Invoice</option>
            <option>Work Proof</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600 block mb-1">
            Upload Supporting Document
          </label>

          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-indigo-600 font-medium">
              <PaperClipIcon className="w-5 h-5 text-gray-400" />
              Choose File
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            <span className="text-sm text-gray-400 truncate">
              {files.length
                ? `${files.length} file(s) selected`
                : "No file chosen"}
            </span>
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-5">
          <label className="text-sm text-gray-600 block mb-2">
            Uploaded Documents
          </label>
          <ul className="text-sm text-gray-700 list-disc pl-5">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-center md:justify-end gap-6 mt-10">
        <button
          onClick={handleCancel}
          className="w-40 bg-[#B3261E] text-white py-2 rounded-full text-sm"
        >
          Cancel
        </button>

        <button
          onClick={handleConfirm}
          className="w-40 bg-[#65558F] text-white py-2 rounded-full text-sm"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default PaymentRequest;

