import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';

const MessageList = () => {
  const navigate = useNavigate();

  // 1. Added image URLs to the data
  const allMessages = [
    { id: 1, name: 'Arjun', msg: 'Hey, is the booking confirmed?', time: '2 min ago', online: true, image: 'https://i.pravatar.cc/150?u=arjun' },
    { id: 2, name: 'Rahul', msg: 'Please update me on the status.', time: '10 min ago', online: true, image: 'https://i.pravatar.cc/150?u=rahul' },
    { id: 3, name: 'Asha', msg: 'Thank you for the quick response!', time: '1 hr ago', online: true, image: 'https://i.pravatar.cc/150?u=asha' },
    { id: 4, name: 'Kiran', msg: 'Can we reschedule the meeting?', time: 'Yesterday', online: true, image: 'https://i.pravatar.cc/150?u=kiran' },
    { id: 5, name: 'Meera', msg: 'The payment has been processed.', time: 'Yesterday', online: true, image: 'https://i.pravatar.cc/150?u=meera' },
    { id: 6, name: 'Siddharth', msg: 'Are you available for a quick call?', time: '2 days ago', online: false, image: 'https://i.pravatar.cc/150?u=sid' },
    { id: 7, name: 'Ananya', msg: 'I loved the service, thanks!', time: '2 days ago', online: true, image: 'https://i.pravatar.cc/150?u=ananya' },
    { id: 8, name: 'Vikram', msg: 'Sent you the location pin.', time: '3 days ago', online: false, image: 'https://i.pravatar.cc/150?u=vikram' },
    { id: 9, name: 'Priya', msg: 'Can I change my order details?', time: '4 days ago', online: true, image: 'https://i.pravatar.cc/150?u=priya' },
    { id: 10, name: 'Rohan', msg: 'Wait, I forgot to add the coupon.', time: '1 week ago', online: false, image: 'https://i.pravatar.cc/150?u=rohan' },
  ];

  return (
    <div className="w-full flex flex-col gap-2">
      {allMessages.map((chat) => (
        <div 
          key={chat.id} 
          className="flex items-center justify-between p-4 rounded-[24px] hover:bg-[#F8F7FD] transition-all cursor-pointer group"
          onClick={() => navigate(`/chat`)}
        >
          {/* Left Side */}
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative flex-shrink-0">
              {/* 2. Replaced div with img tag */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white shadow-sm overflow-hidden bg-gray-100">
                <img 
                  src={chat.image} 
                  alt={chat.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              {chat.online && (
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#22C55E] border-2 border-white rounded-full" />
              )}
            </div>
            
            <div className="min-w-0">
              <h4 className="font-bold text-[#313165] text-base leading-tight">{chat.name}</h4>
              <p className="text-sm text-gray-400 truncate w-32 sm:w-64 md:w-80">
                {chat.msg}
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-end gap-2 flex-shrink-0">
            <span className="text-[11px] font-medium text-gray-300">
              {chat.time}
            </span>
            
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation(); 
                navigate('/chat'); 
              }}
              className="w-10 h-10 flex items-center justify-center bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 transition-all active:scale-95"
            >
              <Mail size={18} color="#A0AEC0" strokeWidth={2} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;