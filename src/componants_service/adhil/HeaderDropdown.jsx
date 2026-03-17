import { useState, useRef } from "react";
import { Share2, Download, Printer, MoreVertical } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import toast, { Toaster } from "react-hot-toast";

export default function HeaderDropDown() {
  const [open, setOpen] = useState(false);
  const [openShare, setOpenShare] = useState(false);

  // ✅ FIX: define ref
  const receiptRef = useRef(null);

  const handleDownload = async () => {
    if (!receiptRef.current) {
      toast.error("Receipt not found");
      return;
    }

    try {
      const canvas = await html2canvas(receiptRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("E-Receipt.pdf");

      toast.success("Receipt downloaded successfully!");
      setOpen(false);
    } catch (error) {
      console.error("Download failed:", error);
      toast.error("Failed to download receipt");
    }
  };

  const shareText = "Check this out!";
  const shareUrl = window.location.href;

  return (
    <>
      <Toaster position="top-right" />

      {/* ✅ THIS IS THE CONTENT THAT WILL BE DOWNLOADED */}
      <div ref={receiptRef} className="p-4 bg-white">
        <h2 className="text-xl font-bold mb-2">E-Receipt</h2>
        <p>Order ID: #12345</p>
        <p>Date: {new Date().toLocaleDateString()}</p>
        <p>Total: ₹999</p>
      </div>

      {/* Dropdown button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <MoreVertical size={22} />
        </button>

        {open && (
          <div className="mt-2 w-40 bg-gray-200 rounded-xl shadow-xl absolute right-0">
            <DropdownItem
              icon={<Share2 size={18} />}
              label="Share"
              onClick={() => {
                setOpen(false);
                setOpenShare(true);
              }}
            />

            <DropdownItem
              icon={<Download size={18} />}
              label="Download"
              onClick={handleDownload}
            />

            <DropdownItem
              icon={<Printer size={18} />}
              label="Print"
              onClick={() => window.print()}
            />
          </div>
        )}
      </div>

      {/* Share Modal */}
      {openShare && (
        <div
          className="fixed inset-0 z-[9999] bg-black/40 flex items-end md:items-center justify-center"
          onClick={() => setOpenShare(false)}
        >
          <div
            className="w-full md:w-[380px] bg-white rounded-t-3xl md:rounded-2xl p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Share via</h2>
              <button onClick={() => setOpenShare(false)}>✕</button>
            </div>

            <div className="grid grid-cols-4 gap-5 text-center">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  shareText + " " + shareUrl
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                  className="w-12 h-12"
                />
                <span className="text-xs mt-1">WhatsApp</span>
              </a>

              <a
                href={`mailto:?subject=Shared&body=${encodeURIComponent(
                  shareText + " " + shareUrl
                )}`}
                className="flex flex-col items-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
                  className="w-12 h-12"
                />
                <span className="text-xs mt-1">Gmail</span>
              </a>

              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                  className="w-12 h-12"
                />
                <span className="text-xs mt-1">Telegram</span>
              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  toast.success("Link copied!");
                }}
                className="flex flex-col items-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                  className="w-12 h-12"
                />
                <span className="text-xs mt-1">Instagram</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const DropdownItem = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-between items-center gap-3 w-full px-4 py-2 text-sm hover:bg-gray-400 rounded-xl"
    >
      {label}
      {icon}
    </button>
  );
};
