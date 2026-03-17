import React from 'react'
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import InvitationItem_57 from './InvitationItem_57';

const InvitationList_68 = () => {
    return (
        <div>

            <div>
                <InvitationItem_57 />
            </div>


            <div className="bg-gray-300 py-4 flex flex-col items-start  w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto gap-2">
                {/* Title */}
                <p className="text-sm font-medium text-gray-700">
                    Share Invite Via
                </p>

                {/* Icons */}
                <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center cursor-pointer">
                        <FaFacebookF className="text-blue-600 text-sm" />
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center cursor-pointer">
                        <FaTwitter className="text-sky-500 text-sm" />
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center cursor-pointer">
                        <FaGooglePlusG className="text-red-500 text-sm" />
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center cursor-pointer">
                        <FaWhatsapp className="text-green-500 text-sm" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InvitationList_68;