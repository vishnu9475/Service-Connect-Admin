import React from "react";
import { Share2, Download, Printer } from "lucide-react";

export default function HeaderDropDown({ onClose }) {

  // ✅ SHARE
  const handleShare = async () => {
    const data = {
      title: "E-Receipt",
      text: "Check out this receipt",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch (err) {
        console.log("Share failed", err);
      }
    } else {
      const msg = encodeURIComponent(data.text + " " + data.url);
      window.open(`https://wa.me/?text=${msg}`, "_blank");
    }
    onClose();
  };

  // ✅ DOWNLOAD PDF (Fixed for oklch error)
  const handleDownload = async () => {
    const element = document.getElementById("pdf-content");

    if (!element) {
      alert("PDF content not found");
      return;
    }

    try {
      // 1. Dynamically import library
      const html2pdf = (await import("html2pdf.js")).default;

      // 2. CRITICAL FIX: Temporarily add a class or style to the element 
      // to force standard colors and avoid oklch interpretation errors.
      const originalStyle = element.style.cssText;
      element.style.color = "#000000";
      element.style.backgroundColor = "#ffffff";

      const options = {
        margin: 10,
        filename: "ereceipt.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          // Force the canvas to ignore problematic modern CSS features
          letterRendering: true,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
      };

      // 3. Generate PDF
      await html2pdf()
        .set(options)
        .from(element)
        .toPdf()
        .get('pdf')
        .save();

      // 4. Restore original styles
      element.style.cssText = originalStyle;
      
    } catch (error) {
      console.error("PDF Generation Error:", error);
      alert("Error generating PDF. This is often due to modern CSS colors (oklch). Ensure your receipt uses standard hex codes.");
    }

    onClose();
  };

  return (
    <div className="absolute right-3 top-16 z-50 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden p-1">
      <Item label="Share" icon={<Share2 size={18} />} onClick={handleShare} />
      <Item label="Download PDF" icon={<Download size={18} />} onClick={handleDownload} />
      <Item label="Print" icon={<Printer size={18} />} onClick={() => { window.print(); onClose(); }} />
    </div>
  );
}

const Item = ({ label, icon, onClick }) => (
  <button
    onClick={onClick}
    className="flex justify-between items-center w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
  >
    <span>{label}</span>
    <span className="text-gray-400">{icon}</span>
  </button>
);