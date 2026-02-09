import React, { useState, useEffect, useRef } from 'react';
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
    <div className="relative">
      {/* REMOVED overflow-hidden to prevent clipping the dropdown */}
      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100">
        <table className="w-full text-left border-separate border-spacing-0">
          <thead className="bg-gray-50">
            <tr>
              {/* Added rounded corners directly to the header cells */}
              <th className="p-4 text-sm font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 rounded-tl-[20px]">ID</th>
              <th className="p-4 text-sm font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Subject</th>
              <th className="p-4 text-sm font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">Customer</th>
              <th className="p-4 text-sm font-bold text-gray-500 uppercase tracking-wider text-center border-b border-gray-100">Logged At</th>
              <th className="p-4 text-sm font-bold text-gray-500 uppercase tracking-wider text-right border-b border-gray-100 rounded-tr-[20px]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {complaints.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                <td className={`p-4 text-sm font-semibold text-gray-700 ${index === complaints.length - 1 ? 'rounded-bl-[20px]' : ''}`}>{item.id}</td>
                <td className="p-4 text-sm text-gray-600">{item.subject}</td>
                <td className="p-4 text-sm text-gray-600">{item.customer}</td>
                <td className="p-4 text-sm text-gray-500 text-center">
                  <div className="flex flex-col items-center">
                    <span className="font-medium text-gray-700">{item.date}</span>
                    <span className="text-[11px] text-gray-400">{item.time}</span>
                  </div>
                </td>
                <td className={`p-4 text-right relative ${index === complaints.length - 1 ? 'rounded-br-[20px]' : ''}`}>
                  <button 
                    onClick={() => setOpenMenuId(openMenuId === item.id ? null : item.id)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                  >
                    <MoreVertical size={20} />
                  </button>

                  {openMenuId === item.id && (
                    <div 
                      ref={menuRef} 
                      className={`absolute right-4 w-40 bg-white border border-gray-100 rounded-xl shadow-xl z-[100] py-2 
                        ${index >= complaints.length - 2 ? 'bottom-full mb-2' : 'mt-2'}`}
                    >
                      {/* Logic above: If it's one of the last 2 items, open the menu UPWARDS instead of downwards */}
                      <button onClick={() => { setViewingComplaint(item); setOpenMenuId(null); }} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                        <Eye size={16} className="text-blue-500" /> Details
                      </button>
                      <button onClick={() => deleteRow(item.id)} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Modal remains same */}
      {viewingComplaint && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
          <div className="bg-white rounded-[24px] p-6 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 tracking-tight">Complaint Record</h3>
              <button onClick={() => setViewingComplaint(null)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} className="text-gray-400" />
              </button>
            </div>
            
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-1 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 text-blue-600 mb-1">
                    <Calendar size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Date</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">{viewingComplaint.date}</p>
                </div>
                <div className="flex-1 bg-purple-50/50 p-3 rounded-xl border border-purple-100">
                  <div className="flex items-center gap-2 text-purple-600 mb-1">
                    <Clock size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Time</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">{viewingComplaint.time}</p>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Subject & Customer</label>
                <p className="text-gray-800 font-semibold">{viewingComplaint.subject}</p>
                <p className="text-sm text-gray-500">Submitted by: {viewingComplaint.customer}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Description</label>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{viewingComplaint.detail}"</p>
              </div>
            </div>

            <button onClick={() => setViewingComplaint(null)} className="w-full mt-6 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-shadow">
              Close Record
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintsList;