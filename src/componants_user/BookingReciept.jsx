import React from 'react';
import { useNavigate } from 'react-router-dom';

const TableHeader = ({ children, className = "" }) => (
  <th className={`text-left text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 py-3 px-2 ${className}`}>
    {children}
  </th>
);

const TableCell = ({ children, className = "" }) => (
  <td className={`text-xs md:text-sm font-bold text-gray-900 py-4 px-2 border-b border-gray-200/50 ${className}`}>
    {children}
  </td>
);

const BookingReceipt = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Appointment Section */}
      <div className="space-y-3">
        <h2 className="text-gray-900 text-[10px] font-black uppercase tracking-[0.2em] opacity-50">
          Appointment
        </h2>
        <div className="flex flex-wrap gap-2">
          <div className="bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm font-bold text-xs">
            Jun 10, 2024
          </div>
          <div className="bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm font-bold text-xs">
            9:41 AM
          </div>
        </div>
      </div>

      {/* Invoice Section - FIXED for Mobile */}
      <div className="space-y-3">
        <h2 className="text-gray-900 text-[10px] font-black uppercase tracking-[0.2em] opacity-50">
          Invoice
        </h2>
        
        <div className="overflow-x-auto -mx-2">
          <table className="w-full min-w-[320px]">
            <thead>
              <tr className="border-b border-gray-300">
                <TableHeader>Sl.</TableHeader>
                <TableHeader>Description</TableHeader>
                <TableHeader className="text-center">Qty</TableHeader>
                <TableHeader className="text-right">Price</TableHeader>
                <TableHeader className="text-right">Total</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>01</TableCell>
                <TableCell className="min-w-[100px]">Bulb Change</TableCell>
                <TableCell className="text-center font-medium">1</TableCell>
                <TableCell className="text-right font-medium">300</TableCell>
                <TableCell className="text-right text-orange-600 font-black">300</TableCell>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end pt-4">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Grand Total
            </span>
            <span className="text-2xl font-black text-gray-900 underline decoration-orange-500 decoration-4 underline-offset-8">
              300
            </span>
          </div>
        </div>
      </div>

      {/* Terms & Requirements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
        <div>
          <h3 className="text-gray-900 text-[9px] font-black uppercase tracking-widest mb-2">Terms and conditions</h3>
          <p className="text-[11px] text-gray-500 font-medium">Valid for 1 month from the date of issue.</p>
        </div>
        <div>
          <h3 className="text-red-600 text-[9px] font-black uppercase tracking-widest mb-2">Additional Requirements</h3>
          <ul className="text-[11px] text-gray-600 font-bold space-y-1">
            <li>• Provide Ladder</li>
            <li>• Bulb should be provided</li>
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 pt-4 sm:max-w-[80%] mx-auto">
        <button
          onClick={() => navigate('/U21_PAYMENT_METHODS')}
          className="w-full bg-gray-900 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-between shadow-lg active:scale-95 transition-all"
        >
          <span className="text-xs uppercase tracking-widest">Complete Payment</span>
          <span className="bg-white/20 rounded-lg p-1">→</span>
        </button>

  
      </div>
    </div>
  );
};

export default BookingReceipt;