import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisH, FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function SubscriptionService() {
  const [page, setPage] = useState(1);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const menuRef = useRef(null);

  const data = [
    { name: "Samantha W.", role: "Franchasee" },
    { name: "Tony Soap", role: "Service Provider" },
    { name: "Jordan Nico", role: "Service Provider" },
    { name: "Karen Hope", role: "Franchasee" },
    { name: "Nadila Adja", role: "Franchasee" },
  ];

  const totalPages = 3;

  const prevPage = () => page > 1 && setPage(page - 1);
  const nextPage = () => page < totalPages && setPage(page + 1);

  // 👉 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenuIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full overflow-x-auto px-4">
        <div className="w-[700px] bg-white rounded-2xl shadow-md p-6 mx-auto">

          <h2 className="text-lg font-semibold text-[#2D2F7A] mb-6">
            Subscription Iaps Service/Franchasee
          </h2>

          <div className="space-y-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[60px_1.2fr_0.9fr_1fr_40px] items-center relative"
              >
                <div className="w-10 h-10 rounded-full bg-[#C7C4F2]" />

                <p className="font-medium text-[#2D2F7A]">{item.name}</p>

                <p className="text-sm text-[#4B4ACF]">ID 123456789</p>

                <p className="text-sm font-medium text-[#2D2F7A]">
                  {item.role}
                </p>

                {/* 3 DOT ICON */}
                <button
                  onClick={() =>
                    setOpenMenuIndex(openMenuIndex === index ? null : index)
                  }
                  className="justify-self-end"
                >
                  <FaEllipsisH className="text-gray-400 cursor-pointer" />
                </button>

                {/* DROPDOWN */}
                {openMenuIndex === index && (
                  <div
                    ref={menuRef}
                    className="absolute right-0 top-10 w-36 bg-white border rounded-lg shadow-lg z-10"
                  >
                    <button
                      onClick={() => setOpenMenuIndex(null)}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                    >
                      View More
                    </button>
                    <button
                      onClick={() => setOpenMenuIndex(null)}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setOpenMenuIndex(null)}
                      className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Showing 1–5 from 100 data
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={prevPage}
                disabled={page === 1}
                className="text-[#A098AE] disabled:opacity-40"
              >
                <FaCaretLeft size={16} />
              </button>

              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-9 h-9 rounded-full text-sm font-medium ${
                    page === p
                      ? "bg-[#4B4ACF] text-white"
                      : "border text-gray-400"
                  }`}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={nextPage}
                disabled={page === totalPages}
                className="text-[#A098AE] disabled:opacity-40"
              >
                <FaCaretRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
