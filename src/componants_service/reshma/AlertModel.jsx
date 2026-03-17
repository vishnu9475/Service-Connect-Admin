import { ArrowRight } from "lucide-react";

const AlertModal = ({
  open,
  variant = "payment", // "payment" | "account"
  title,
  message,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-[320px] bg-white rounded-3xl p-6 text-center shadow-2xl">

        {/* Decorative Top Section */}
        <div className="flex flex-col items-center gap-3 mb-4">

          {/* Stars for payment */}
          {variant === "payment" && (
            <div className="flex gap-1 text-yellow-400 text-xl">
              ★ ★ ★
            </div>
          )}

          {/* Icon Section */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
            {variant === "payment" ? (
              <div className="text-green-600 text-3xl">✓</div>
            ) : (
              <div className="text-red-500 text-3xl">🔒</div>
            )}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900">
          {title}
        </h2>

        {/* Message */}
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          {message}
        </p>

        {/* PAYMENT VERSION */}
        {variant === "payment" && (
          <>
            {/* Watch Course Link */}
            <button
              onClick={onSecondaryClick}
              className="mt-3 text-green-600 font-medium text-sm underline"
            >
              Watch the Course
            </button>

            {/* E-Receipt Button */}
            <button
              onClick={onPrimaryClick}
              className="mt-4 w-full bg-black text-white py-2 rounded-full flex items-center justify-between px-4"
            >
              <span>E - Receipt</span>
              <span className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center">
                <ArrowRight size={16} />
              </span>
            </button>
          </>
        )}

        {/* ACCOUNT READY VERSION */}
        {variant === "account" && (
          <div className="mt-5 flex justify-center">
            <div className="w-6 h-6 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertModal;
