import { TbAlertCircle } from "react-icons/tb";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

export default function InvoiceForm() {
  const [status, setStatus] = useState("IN_PROGRESS");
  const [showStatusPopup, setShowStatusPopup] = useState(false);

  const [items, setItems] = useState([
    { description: "", qty: 1, price: 0 },
  ]);

  const onStatusClick = () => {
    if (status === "COMPLETED") return;
    setShowStatusPopup(true);
  };

  const confirmCompletion = () => {
    setStatus("COMPLETED");
    setShowStatusPopup(false);
  };

  const cancelPopup = () => setShowStatusPopup(false);

  const addAnother = () => {
    setItems([...items, { description: "", qty: 1, price: 0 }]);
  };

  const updateItem = (index, field, value) => {
    if (status === "COMPLETED") return;
    setItems(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const deleteItem = (index) => {
    if (items.length === 1 || status === "COMPLETED") return;
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const grandTotal = items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  const handleConfirm = () => {
    const payload = { status, items, grandTotal };
    console.log("SEND TO BACKEND 👉", payload);
  };

  return (
    <div className="w-full p-3 bg-gray-300">

      {/* INVOICE ITEMS */}
      {items.map((item, index) => (
        <div
          key={index}
          className="w-[95%] mx-auto bg-white rounded-2xl shadow-md p-4 mb-4 relative"
        >
          <button
            onClick={() => deleteItem(index)}
            className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
          >
            <AiOutlineDelete size={18} />
          </button>

          <input
            type="text"
            value={item.description}
            onChange={(e) =>
              updateItem(index, "description", e.target.value)
            }
            placeholder="Service description"
            className="w-full mb-3 border p-2 rounded"
          />

          <div className="grid grid-cols-3 gap-3">
            <input
              type="number"
              value={item.qty}
              onChange={(e) =>
                updateItem(index, "qty", Number(e.target.value))
              }
              className="border p-2 rounded"
            />
            <input
              type="number"
              value={item.price}
              onChange={(e) =>
                updateItem(index, "price", Number(e.target.value))
              }
              className="border p-2 rounded"
            />
            <div className="bg-gray-100 p-2 rounded font-semibold">
              ₹ {item.qty * item.price}
            </div>
          </div>
        </div>
      ))}

      {/* ACTION BUTTONS */}
      <div className="w-[95%] mx-auto flex gap-3">
        <button
          onClick={addAnother}
          className="w-1/2 bg-gray-900 text-white py-3 rounded-full"
        >
          + Add Another
        </button>

        <button
          onClick={onStatusClick}
          disabled={status === "COMPLETED"}
          className={`w-1/2 py-3 rounded-full text-white ${
            status === "COMPLETED"
              ? "bg-gray-500"
              : "bg-green-900 hover:bg-green-950"
          }`}
        >
          {status === "COMPLETED" ? "Completed" : "Mark as Completed"}
        </button>
      </div>

      {/* GRAND TOTAL */}
      <div className="w-[95%] mx-auto mt-4 bg-white p-4 rounded-2xl">
        <div className="flex justify-end gap-2 font-semibold">
          <span>Grand Total:</span>
          <span>₹ {grandTotal}</span>
        </div>
      </div>

      {/* CONFIRM BUTTON */}
      <div className="w-full mt-4">
        <button
          onClick={handleConfirm}
          disabled={status !== "COMPLETED"}
          className={`w-[95%] mx-auto flex items-center justify-center rounded-full py-3 text-white ${
            status !== "COMPLETED"
              ? "bg-gray-400"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          Confirm
          <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* STATUS POPUP */}
      {showStatusPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-5 rounded-xl w-[90%] max-w-md">
            <h2 className="font-semibold text-lg mb-2">
              Confirm Job Completion
            </h2>

            <p className="text-sm mb-3">
              Invoice will be locked after completion.
            </p>

            <p className="text-sm mb-3">
              Total Amount: ₹ {grandTotal}
            </p>

            <div className="flex gap-3">
              <button
                onClick={cancelPopup}
                className="w-1/2 border rounded-full py-2"
              >
                Cancel
              </button>

              <button
                onClick={confirmCompletion}
                className="w-1/2 bg-green-900 text-white rounded-full py-2"
              >
                Mark Completed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
