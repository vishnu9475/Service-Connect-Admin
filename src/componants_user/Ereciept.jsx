import React from 'react';

const Ereciept = ({ 
  data = {
    name: "Scott R. Shoemake",
    email: "shoemake.redial@gmail.com",
    course: "3d Character Illustration Cre..",
    category: "Web Development",
    transactionId: "SK345680976",
    price: "$55.00",
    date: "Nov 20, 202X / 15:45",
    status: "Paid"
  } 
}) => {

  const handleCopyId = () => {
    navigator.clipboard.writeText(data.transactionId);
    alert("Transaction ID copied!");
  };

  return (
    /* ✅ FIX: Added hardcoded styles to bypass OKLCH errors */
    <div 
      id="pdf-content" 
      className="w-full max-w-sm mx-auto rounded-[24px] p-6 shadow-sm font-sans relative overflow-hidden"
      style={{ backgroundColor: '#ffffff', color: '#000000' }}
    >
      
      {/* 1. Header Icon */}
      <div className="flex justify-center mb-6">
        <div className="relative">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <rect x="12" y="4" width="40" height="50" rx="4" fill="#E8E9EB" />
              <rect x="18" y="12" width="28" height="4" rx="2" fill="#D1D5DB" />
              <rect x="18" y="20" width="16" height="4" rx="2" fill="#D1D5DB" />
              <circle cx="20" cy="36" r="3" fill="#60A5FA" />
              <rect x="26" y="34" width="6" height="4" rx="1" fill="#60A5FA" />
              <circle cx="20" cy="46" r="3" fill="#9CA3AF" />
              <rect x="26" y="44" width="6" height="4" rx="1" fill="#9CA3AF" />
              <text x="36" y="24" fontSize="14" fill="#047857" fontWeight="bold">$</text>
            </svg>
            <div className="absolute -bottom-1 -right-1 bg-[#10B981] rounded-full p-1.5 border-4 border-white">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
        </div>
      </div>

      {/* 2. Barcode Graphic */}
      <div className="flex flex-col items-center mb-8">
        <svg width="100%" height="60" viewBox="0 0 300 60" fill="none">
          <path d="M10 15V5H40" stroke="#1A1C22" strokeWidth="4" strokeLinecap="round"/>
          <path d="M290 15V5H260" stroke="#1A1C22" strokeWidth="4" strokeLinecap="round"/>
          <g stroke="#1A1C22" strokeWidth="3">
              <line x1="20" y1="20" x2="20" y2="45" /><line x1="30" y1="20" x2="30" y2="40" strokeWidth="4" />
              <line x1="40" y1="20" x2="40" y2="45" /><line x1="50" y1="20" x2="50" y2="40" strokeWidth="1"/>
              <line x1="60" y1="20" x2="60" y2="45" strokeWidth="4"/><line x1="75" y1="20" x2="75" y2="40" />
              <line x1="85" y1="20" x2="85" y2="45" /><line x1="95" y1="20" x2="95" y2="40" strokeWidth="4"/>
              <line x1="110" y1="20" x2="110" y2="55" strokeWidth="4" strokeLinecap="round"/>
              <line x1="125" y1="20" x2="125" y2="40" /><line x1="135" y1="20" x2="135" y2="45" strokeWidth="4"/>
              <line x1="150" y1="20" x2="150" y2="40" /><line x1="160" y1="20" x2="160" y2="45" strokeWidth="1"/>
              <line x1="170" y1="20" x2="170" y2="40" strokeWidth="4"/><line x1="185" y1="20" x2="185" y2="45" />
              <line x1="190" y1="20" x2="190" y2="55" strokeWidth="4" strokeLinecap="round"/>
              <line x1="205" y1="20" x2="205" y2="40" /><line x1="215" y1="20" x2="215" y2="45" strokeWidth="4"/>
              <line x1="225" y1="20" x2="225" y2="40" /><line x1="240" y1="20" x2="240" y2="45" strokeWidth="1"/>
              <line x1="250" y1="20" x2="250" y2="40" strokeWidth="4"/><line x1="265" y1="20" x2="265" y2="45" />
              <line x1="280" y1="20" x2="280" y2="40" strokeWidth="4"/>
          </g>
          <path d="M10 45V55H40" stroke="#1A1C22" strokeWidth="4" strokeLinecap="round"/>
          <path d="M290 45V55H260" stroke="#1A1C22" strokeWidth="4" strokeLinecap="round"/>
        </svg>
        <div className="flex justify-between w-full px-8 mt-1 text-[10px] font-bold tracking-widest" style={{ color: '#1A1C22' }}>
            <span>25234567</span><span>28646345</span>
        </div>
      </div>

      {/* 3. Details Section */}
      <div className="space-y-4 mb-8">
        <Row label="Name" value={data.name} />
        <Row label="Email ID" value={data.email} />
        <Row label="Course" value={data.course} />
        <Row label="Category" value={data.category} />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm" style={{ color: '#1A233A' }}>TransactionID</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium" style={{ color: '#6B7280' }}>{data.transactionId}</span>
            <button onClick={handleCopyId} className="hover:opacity-70">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A233A" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
        </div>
        <Row label="Price" value={data.price} />
        <Row label="Date" value={data.date} />
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm" style={{ color: '#1A233A' }}>Status</span>
          <span className="text-white text-xs font-bold px-3 py-1 rounded-[4px]" style={{ backgroundColor: '#0F766E' }}>{data.status}</span>
        </div>
      </div>
    </div>
  );
};

const Row = ({ label, value }) => (
  <div className="flex justify-between items-start gap-4">
    <span className="font-bold text-sm whitespace-nowrap" style={{ color: '#1A233A' }}>{label}</span>
    <span className="text-sm font-medium text-right truncate max-w-[200px]" style={{ color: '#6B7280' }}>{value}</span>
  </div>
);

export default Ereciept;