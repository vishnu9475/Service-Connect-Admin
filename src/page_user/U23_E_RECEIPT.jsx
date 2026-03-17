import React from "react";
import Component4 from "../componants_user/Component4";
import Ereciept from "../componants_user/Ereciept";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const U23EReceipt = () => {

  // ✅ DOWNLOAD → Opens system save dialog
  const handleDownload = async () => {
    const element = document.getElementById("receipt-content");
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 190; // A4 width
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("E-Receipt.pdf"); // 🔥 this opens save dialog

    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  // ✅ PRINT
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Component4
        title="E-RECEIPT"
        theme="black"
        showBack={true}
        backPath="/Page11"
        onDownload={handleDownload}
        onPrint={handlePrint}
      />

      <div className="p-4 flex justify-center">
        <Ereciept />
      </div>
    </div>
  );
};

export default U23EReceipt;