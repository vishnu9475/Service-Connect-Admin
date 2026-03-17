import React from 'react'
import { HiOutlinePencil } from "react-icons/hi";

const Notificationitem_48 = () => {
    return (
        <div>
            <div className="w-full max-w-md mx-auto mt-3 ">
                <div
                    className="flex items-center gap-4
                   bg-white rounded-2xl px-4 py-3
                   shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
                >
                    {/* Icon */}
                    <div
                        className="w-10 h-10 flex items-center justify-center
                     bg-gray-100 rounded-full"
                    >
                        <HiOutlinePencil className="text-gray-600 text-lg" />
                    </div>

                    {/* Text */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                            Today’s Special Offers
                        </h4>
                        <p className="text-xs text-gray-500">
                            You Have made a Course Payment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notificationitem_48;