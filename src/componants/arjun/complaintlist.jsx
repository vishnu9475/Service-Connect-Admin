import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { MoreVertical, Trash2, Eye, X, Clock, Calendar } from 'lucide-react';

const ComplaintsList = () => {
  const [complaints, setComplaints] = useState([
    { id: 'C-102', subject: 'Delayed Delivery', customer: 'John Doe', date: '2026-01-30', time: '09:45 AM', detail: 'Package has been stuck at the sorting facility for 3 days.' },
    { id: 'C-101', subject: 'Faulty Item', customer: 'Jane Smith', date: '2026-01-29', time: '02:30 PM', detail: 'The screen of the tablet arrived with a hairline crack.' },
    { id: 'C-099', subject: 'Billing Error', customer: 'Mark Wilson', date: '2026-01-28', time: '11:15 AM', detail: 'User was charged twice for the monthly subscription.' },
    { id: 'C-098', subject: 'App Crash', customer: 'Sarah Lee', date: '2026-01-28', time: '08:05 AM', detail: 'App crashes immediately after login on iOS 17.' },
  ]);

  const [openMenuId, setOpenMenuId] = useState(null);
  const [viewingComplaint, setViewingComplaint] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const deleteRow = (id) => {
    if (window.confirm("Are you sure you want to delete this complaint?")) {
      setComplaints(complaints.filter(item => item.id !== id));
      setOpenMenuId(null);
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[1000px]">
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="px-6 py-5 text-[#303972] font-bold">ID</th>
              <th className="px-4 text-[#303972] font-bold">Subject</th>
              <th className="px-4 text-[#303972] font-bold">Customer</th>
              <th className="text-[#303972] font-bold text-center">Logged At</th>
              <th className="text-[#303972] font-bold text-center px-6">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {complaints.map((item, index) => (
              <tr key={item.id} className="transition-colors hover:bg-gray-50">
                {/* ID Styled like User ID */}
                <td className="px-6 py-4 text-[#4D44B5] font-bold whitespace-nowrap">
                  {item.id}
                </td>

                {/* Subject Styled like User Name */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className="text-[#303972] font-bold">{item.subject}</span>
                </td>

                {/* Customer Styled like Services/Location */}
                <td className="text-[#303972] px-4 whitespace-nowrap">
                  {item.customer}
                </td>

                {/* Logged At Details (Vertical Stack) */}
                <td className="text-center whitespace-nowrap">
                  <div className="flex flex-col items-center">
                    <span className="text-[#303972] font-bold">{item.time}</span>
                    <span className="text-[#A098AE] text-xs">{item.date}</span>
                  </div>
                </td>

                {/* Actions Styled like User List */}
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <div className="relative inline-block" ref={openMenuId === item.id ? menuRef : null}>
                    <button 
                      onClick={() => setOpenMenuId(openMenuId === item.id ? null : item.id)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <MoreVertical size={20} className="text-[#A098AE]" />
                    </button>

                    {openMenuId === item.id && (
                      <div className={`absolute right-0 w-44 bg-white rounded-xl shadow-xl border border-gray-100 z-50 py-2 ${
                        index >= complaints.length - 2 ? "bottom-full mb-2" : "mt-2"
                      }`}>
                        <button 
                          onClick={() => { setViewingComplaint(item); setOpenMenuId(null); }} 
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#303972] hover:bg-gray-50 font-semibold"
                        >
                          <Eye size={16} className="text-[#4D44B5]" /> Details
                        </button>
                        <button 
                          onClick={() => deleteRow(item.id)} 
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 font-semibold"
                        >
                          <Trash2 size={16} /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Styled to match the first component's brand colors */}
      {viewingComplaint && (
        <div className="fixed inset-0 bg-[#303972]/40 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#303972]">Complaint Record</h3>
              <button onClick={() => setViewingComplaint(null)} className="p-1 hover:bg-gray-100 rounded-full">
                <X size={20} className="text-[#A098AE]" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1 bg-[#F5F6FF] p-3 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 text-[#4D44B5] mb-1">
                    <Calendar size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Date</span>
                  </div>
                  <p className="text-sm font-bold text-[#303972]">{viewingComplaint.date}</p>
                </div>
                <div className="flex-1 bg-[#F5F6FF] p-3 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 text-[#4D44B5] mb-1">
                    <Clock size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Time</span>
                  </div>
                  <p className="text-sm font-bold text-[#303972]">{viewingComplaint.time}</p>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-[#A098AE] uppercase tracking-wider">Subject</label>
                <p className="text-[#303972] font-bold">{viewingComplaint.subject}</p>
                <p className="text-xs text-[#4D44B5] font-semibold">{viewingComplaint.customer}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-[#303972] text-sm italic">"{viewingComplaint.detail}"</p>
              </div>
            </div>

            <button onClick={() => setViewingComplaint(null)} className="w-full mt-6 bg-[#4D44B5] text-white py-3 rounded-xl font-bold hover:bg-[#3b348a] transition-all">
              Close Record
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintsList;