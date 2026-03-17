import React, { useState } from "react";
import { Twitter, Facebook, Chrome, MessageCircle } from "lucide-react";

export default function Invite() {
  const [teamMembers] = useState([
    { id: 1, name: "Dominick S. Jenkins", phone: "(+1) 202-697-7365" },
    { id: 2, name: "Duncan E. Hoffman", phone: "(+1) 307-688-4052" },
    { id: 3, name: "Roy R. McCraney", phone: "(+1) 601-897-1714" },
    { id: 4, name: "Janice R. Morris", phone: "(+1) 802-312-9206" },
  ]);

  const handleInvite = (memberName) => {
    alert(`Invitation sent to ${memberName}`);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-start sm:items-center px-4">
      <div className="w-full max-w-md sm:max-w-lg">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-md divide-y shadow-lg shadow-gray-400">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-black" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    {member.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {member.phone}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleInvite(member.name)}
                className="bg-gray-900 text-white text-xs sm:text-sm px-4 py-1.5 rounded-full hover:bg-gray-700"
              >
                Invite
              </button>
            </div>
          ))}
        </div>

        {/* Share Section */}
        <div className="mt-6">
          <p className="text-sm sm:text-base font-semibold mb-3">
            Share Invite Via
          </p>

          <div className="flex gap-4">
            {[
              {
                Icon: Facebook,
                color: "text-blue-600",
                link: "https://www.facebook.com",
              },
              {
                Icon: Twitter,
                color: "text-sky-400",
                link: "https://twitter.com",
              },
              {
                Icon: Chrome,
                color: "text-red-500",
                link: "https://www.google.com",
              },
              {
                Icon: MessageCircle,
                color: "text-green-500",
                link: "https://wa.me/", // WhatsApp
              },
            ].map(({ Icon, color, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white shadow-md hover:shadow-gray-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition"
              >
                <Icon size={25} className={color} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
