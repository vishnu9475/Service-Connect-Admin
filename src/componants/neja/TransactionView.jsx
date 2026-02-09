import React from "react";

const transactionDetails = {
  transactionId: "FRDLSE1201",
  date: "March 25, 2021",
  type: "Ad",
  description: "Ad Posted",
  from: "R01A0SI002",
  to: "R01A0SI002",
  amount: 20001,
  status: "Active",
  accountHolderName: "Lasso Kayne",
  accountNumber: "455156678886",
  bankName: "ABC Bank",
  ifsc: "ABCD0123456",
  branch: "Mumbai Main",
  paymentMethod: "NEFT",
};

const TransactionDetailsView = ({ onBack }) => {


  

  const handleDelete = () => {
    alert("Transaction deleted (dummy action)");
  };

  return (
    <div className="w-full bg-white rounded-xl p-6 sm:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Payment Details
          </h2>
          <p className="text-sm text-gray-500">
            #{transactionDetails.transactionId}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="px-4 py-2 rounded-full border border-blue-700 text-gray-700 text-sm hover:bg-gray-100"
          >
            Back
          </button>

          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-full bg-red-600 text-white text-sm hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Status */}
      <div className="mb-6">
        <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
          {transactionDetails.status}
        </span>
      </div>

      {/* Two Containers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transaction Info Container */}
        <div className="border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-bold text-gray-700 mb-4">
            Transaction Info
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DetailItem label="Transaction ID" value={transactionDetails.transactionId} />
            <DetailItem label="Date" value={transactionDetails.date} />
            <DetailItem label="Type" value={transactionDetails.type} />
            <DetailItem label="Description" value={transactionDetails.description} />
            <DetailItem label="From" value={transactionDetails.from} />
            <DetailItem label="To" value={transactionDetails.to} />
            <DetailItem label="Amount" value={`₹ ${transactionDetails.amount}`} />
            <DetailItem label="Payment Method" value={transactionDetails.paymentMethod} />
          </div>
        </div>

        {/* Bank Info Container */}
        <div className="border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-bold text-gray-700 mb-4">
            Bank / Account Info
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DetailItem label="Account Holder Name" value={transactionDetails.accountHolderName} />
            <DetailItem label="Account Number" value={transactionDetails.accountNumber} />
            <DetailItem label="Bank Name" value={transactionDetails.bankName} />
            <DetailItem label="Branch" value={transactionDetails.branch} />
            <DetailItem label="IFSC Code" value={transactionDetails.ifsc} />
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-base text-gray-800">{value}</p>
    </div>
  );
};

export default TransactionDetailsView;
