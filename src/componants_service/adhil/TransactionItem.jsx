export default function TransactionItem({ transaction }) {
  if (!transaction) return null;

  return (
    <div className="w-[94%] md:w-[90%] mx-auto bg-white rounded-xl shadow-md p-3 flex items-center gap-3 mt-3">
      
      {/* Image placeholder */}
      <div className=" w-20 h-20 md:w-25 md:h-25 bg-black rounded-xl"></div>

      {/* Details */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">
          {transaction.title}
        </h3>
        <p className="text-sm text-gray-500">
          {transaction.category}
        </p>

        <span className="inline-block  md:w-[10%] text-center mt-2 px-3 py-1 text-xs font-medium text-white bg-teal-600 rounded">
          {transaction.status}
        </span>
      </div>
    </div>
  );
}
