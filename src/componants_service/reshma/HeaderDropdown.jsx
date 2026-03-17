import React, { useState } from "react";
import Ereciept from "./Ereciept";
import { Share2, Download, Printer, MoreVertical } from "lucide-react";
// import html2canvas from "html2canvas";
import { toPng } from "html-to-image";

import jsPDF from "jspdf";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

export default function HeaderDropdown({ receiptRef }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openShare, setOpenShare] = useState(false);

  // SHARE TEXT & URL
  const shareText = "Check this receipt!";
  const shareUrl = window.location.href;

  // PRINT
  const handlePrint = () => {
    navigate("/ereciept");
    setTimeout(() => {
      window.print();
      const goBack = () => navigate("/65");
      window.onafterprint = goBack;
      setTimeout(goBack, 1500);
    }, 100);
  };

  



  const handleDownload = async () => {
  if (!receiptRef?.current) {
    toast.error("Receipt not found!");
    return;
  }

  try {
    const dataUrl = await toPng(receiptRef.current, {
      cacheBust: true,
      backgroundColor: "#ffffff",
    });

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const img = new Image();
    img.src = dataUrl;

    img.onload = () => {
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (img.height * pdfWidth) / img.width;

      pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("E-Receipt.pdf");

      toast.success("Successfully downloaded receipt!");
    };
  } catch (error) {
    console.error("Download failed:", error);
    toast.error("Failed to download receipt");
  }
};


  const gmailShare = `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(
    shareText
  )}&body=${encodeURIComponent(shareUrl)}`;

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;

  return (
    <>
      <Toaster position="top-right" />

      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <MoreVertical size={22} />
        </button>

        {open && (
          <div className="mt-2 w-44 bg-gray-200 rounded-xl shadow-xl absolute right-0 overflow-hidden">
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
              onClick={handlePrint}
            />
          </div>
        )}
      </div>

      {/* SHARE MODAL */}
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
              {/* WhatsApp */}
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

              {/* Gmail */}
              <a
                href={gmailShare}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
                  className="w-12 h-12"
                />
                <span className="text-xs mt-1">Gmail</span>
              </a>

              {/* Telegram */}
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(
                  shareUrl
                )}&text=${encodeURIComponent(shareText)}`}
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

              {/* Facebook */}
              <a
                href={facebookShare}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  className="w-12 h-12"
                />
                <span className="text-xs mt-1">Facebook</span>
              </a>
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
      className="flex justify-between items-center gap-3 w-full px-4 py-2 text-sm hover:bg-gray-300 transition"
    >
      {label}
      {icon}
    </button>
  );
};