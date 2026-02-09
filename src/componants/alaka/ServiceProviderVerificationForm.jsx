// import React, { useState } from "react";
// import { PaperClipIcon, EyeIcon } from "@heroicons/react/24/outline";

// function ServiceProviderVerificationForm() {
//   const [formData, setFormData] = useState({
//     inspectorName: "",
//     inspectorRole: "",
//     memberName: "",
//     branchName: "",
//     date: "",
//     documentType: "",
//     status: "",
//     rejectionReason: "",
//   });

//   const [files, setFiles] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setFiles((prev) => [...prev, ...selectedFiles]);
//   };

//   const handleViewFile = (file) => {
//     const fileURL = URL.createObjectURL(file);
//     window.open(fileURL, "_blank");
//   };

//   const handleConfirm = () => {
//     console.log("Form Data:", formData);
//     console.log("Uploaded Files:", files);
//     alert("Verification submitted successfully");
//   };

//   const handleCancel = () => {
//     if (!window.confirm("Are you sure you want to cancel?")) return;

//     setFormData({
//       inspectorName: "",
//       inspectorRole: "",
//       memberName: "",
//       branchName: "",
//       date: "",
//       documentType: "",
//       status: "",
//       rejectionReason: "",
//     });
//     setFiles([]);
//   };

//   return (
//     <div className="bg-white w-full max-w-sm rounded-2xl shadow-sm p-5 sm:p-6">

//       <div className="space-y-5">

//         {/* Inspector Name */}
//         <div>
//           <label className="text-sm text-gray-600 block mb-1">Inspector Name</label>
//           <input
//             name="inspectorName"
//             value={formData.inspectorName}
//             onChange={handleChange}
//             className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
//           />
//         </div>

//         {/* Inspector Role */}
//         <div>
//           <label className="text-sm text-gray-600 block mb-1">Inspector Role</label>
//           <input
//             name="inspectorRole"
//             value={formData.inspectorRole}
//             onChange={handleChange}
//             className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
//           />
//         </div>

//         {/* Member Name */}
//         <div>
//           <label className="text-sm text-gray-600 block mb-1">Member&apos;s Name</label>
//           <input
//             name="memberName"
//             value={formData.memberName}
//             onChange={handleChange}
//             className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
//           />
//         </div>

//         {/* Branch Name */}
//         <div>
//           <label className="text-sm text-gray-600 block mb-1">Branch Name</label>
//           <select
//             name="branchName"
//             value={formData.branchName}
//             onChange={handleChange}
//             className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
//           >
//             <option value="">Select Branch</option>
//             <option>Kochi</option>
//             <option>Edappally</option>
//             <option>Aluva</option>
//             <option>Kakkanad</option>
//             <option>Thrippunithura</option>
//             <option>Perumbavoor</option>
//             <option>Angamaly</option>
//           </select>
//         </div>

//         {/* Date */}
//         <div>
//           <label className="text-sm text-gray-600 block mb-1">Date of Verification</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
//           />
//         </div>

//         {/* Document Type */}
//         <div>
//           <label className="text-sm text-gray-600 block mb-1">Document Type</label>
//           <select
//             name="documentType"
//             value={formData.documentType}
//             onChange={handleChange}
//             className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
//           >
//             <option value="">Select</option>
//             <option>ID Proof</option>
//             <option>Address Proof</option>
//           </select>
//         </div>

//         {/* Upload Documents */}
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

//         {/* Uploaded Documents */}
//         {files.length > 0 && (
//           <div>
//             <label className="text-sm text-gray-600 block mb-2">
//               Uploaded Documents
//             </label>

//             <div className="space-y-2">
//               {files.map((file, index) => (
//                 <div
//                   key={index}
//                   onClick={() => handleViewFile(file)}
//                   className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
//                 >
//                   <EyeIcon className="w-4 h-4 text-indigo-500" />
//                   <span className="text-indigo-600 truncate">
//                     View {file.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Verification Status */}
//         <div>
//           <label className="text-sm text-gray-600 block mb-1">Verification Status</label>
//           <select
//             name="status"
//             value={formData.status}
//             onChange={handleChange}
//             className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
//           >
//             <option value="">Select</option>
//             <option>Verified</option>
//             <option>Rejected</option>
//             <option>Pending</option>
//           </select>
//         </div>

        
//         {formData.status === "Rejected" && (
//           <div>
//             <label className="text-sm text-gray-600 block mb-1">
//               Reason for Rejection{" "}
//               <span className="text-gray-400 text-xs">(required if rejected)</span>
//             </label>
//             <textarea
//               name="rejectionReason"
//               value={formData.rejectionReason}
//               onChange={handleChange}
//               rows={3}
//               className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
//             />
//           </div>
//         )}

//       </div>

//       {/* Buttons */}
//       <div className="flex gap-4 mt-6">
//         <button
//           onClick={handleCancel}
//           className="flex-1 bg-[#B3261E] text-white py-2 rounded-full text-sm"
//         >
//           Cancel
//         </button>
//         <button
//           onClick={handleConfirm}
//           className="flex-1 bg-[#65558F] text-white py-2 rounded-full text-sm"
//         >
//           Confirm
//         </button>
//       </div>

//     </div>
//   );
// }

// export default ServiceProviderVerificationForm;
import React, { useState } from "react";
import { PaperClipIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function ServiceProviderVerificationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    inspectorName: "",
    inspectorRole: "",
    memberName: "",
    branchName: "",
    date: "",
    documentType: "",
    status: "",
    rejectionReason: "",
  });

  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleViewFile = (file) => {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, "_blank");
  };

  const handleConfirm = () => {
    console.log("Form Data:", formData);
    console.log("Uploaded Files:", files);

    alert("Verification submitted successfully");

    // ✅ Navigate after success
    navigate("/ServiceProviderList");
  };

  const handleCancel = () => {
    if (!window.confirm("Are you sure you want to cancel?")) return;

    setFormData({
      inspectorName: "",
      inspectorRole: "",
      memberName: "",
      branchName: "",
      date: "",
      documentType: "",
      status: "",
      rejectionReason: "",
    });
    setFiles([]);
  };

  return (
    <div className="bg-white w-full max-w-sm rounded-2xl shadow-sm p-5 sm:p-6">
      <div className="space-y-5">
        {/* Inspector Name */}
        <div>
          <label className="text-sm text-gray-600 block mb-1">
            Inspector Name
          </label>
          <input
            name="inspectorName"
            value={formData.inspectorName}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
          />
        </div>

        {/* Inspector Role */}
        <div>
          <label className="text-sm text-gray-600 block mb-1">
            Inspector Role
          </label>
          <input
            name="inspectorRole"
            value={formData.inspectorRole}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
          />
        </div>

        {/* Member Name */}
        <div>
          <label className="text-sm text-gray-600 block mb-1">
            Member&apos;s Name
          </label>
          <input
            name="memberName"
            value={formData.memberName}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
          />
        </div>

        {/* Branch Name */}
        <div>
          <label className="text-sm text-gray-600 block mb-1">
            Branch Name
          </label>
          <select
            name="branchName"
            value={formData.branchName}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
          >
            <option value="">Select Branch</option>
            <option>Kochi</option>
            <option>Edappally</option>
            <option>Aluva</option>
            <option>Kakkanad</option>
            <option>Thrippunithura</option>
            <option>Perumbavoor</option>
            <option>Angamaly</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="text-sm text-gray-600 block mb-1">
            Date of Verification
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
          />
        </div>

        {/* Document Type */}
        <div>
          <label className="text-sm text-gray-600 block mb-1">
            Document Type
          </label>
          <select
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
          >
            <option value="">Select</option>
            <option>ID Proof</option>
            <option>Address Proof</option>
          </select>
        </div>

        {/* Upload Documents */}
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

        {/* Uploaded Documents */}
        {files.length > 0 && (
          <div>
            <label className="text-sm text-gray-600 block mb-2">
              Uploaded Documents
            </label>
            <div className="space-y-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  onClick={() => handleViewFile(file)}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                >
                  <EyeIcon className="w-4 h-4 text-indigo-500" />
                  <span className="text-indigo-600 truncate">
                    View {file.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verification Status */}
        <div>
          <label className="text-sm text-gray-600 block mb-1">
            Verification Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
          >
            <option value="">Select</option>
            <option>Verified</option>
            <option>Rejected</option>
            <option>Pending</option>
          </select>
        </div>

        {formData.status === "Rejected" && (
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Reason for Rejection{" "}
              <span className="text-gray-400 text-xs">
                (required if rejected)
              </span>
            </label>
            <textarea
              name="rejectionReason"
              value={formData.rejectionReason}
              onChange={handleChange}
              rows={3}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200"
            />
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleCancel}
          className="flex-1 bg-[#B3261E] text-white py-2 rounded-full text-sm"
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          className="flex-1 bg-[#65558F] text-white py-2 rounded-full text-sm"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ServiceProviderVerificationForm;

