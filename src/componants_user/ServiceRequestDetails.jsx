import { CircleAlert, Images } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import user from "../assets/user.jpg"

export default function ServiceRequestDetails() {
    const tiles = "bg-gray-300 text-sm font-semibold rounded-md px-3 shadow-lg";
    const fieldName = "text-sm text-gray-500";

    return (
        <div className='bg-gray-100 min-h-screen pb-10 sm:px-4'>
            {/* ---------- Profile Part ---------- */}
            {/* Mobile: 95% width | Laptop: 65% width */}
            <div className='flex justify-between p-4 w-[95%] lg:w-[65%] mx-auto'>
                <div className='flex items-center'>
                    <div className='bg-black h-10 w-10 rounded-full overflow-hidden'>
                        <img src={user} alt="profile" />
                    </div>
                    <div className='px-3'>
                        <p className='font-semibold'>Arjun R</p>
                        <p className='text-sm text-gray-600'>Electrician</p>
                    </div>
                </div>
            </div>

            {/* ------- Booking Card ------------ */}
            <div className='bg-white p-4 md:p-6 rounded-xl shadow-md shadow-gray-400 w-[95%] lg:w-[65%] mx-auto '>
                <div className={fieldName}>
                    <span>Booking Id: </span>
                    <span className="font-mono">12aa21w</span>
                </div>

                <div className='text-sm font-semibold mt-3 space-y-2'>
                    <p>Title: <span className='font-normal block ml-2'>Bulb change</span></p>
                    <p>Description: <span className='font-normal block ml-2 text-gray-600'>blah blah blah blah</span></p>
                </div>

                <h2 className='font-bold mt-4'>Appointment</h2> 
                <div className='flex gap-2 justify-center my-3'>
                    <div className={tiles}>Jan 10, 2024</div>
                    <div className={tiles}>9:45 am</div>
                </div>

                <h4 className='text-sm font-semibold mt-4 mb-2'>Invoice</h4>
                {/* Scrollable container for the table on very small screens */}
                <div className='overflow-x-auto'>
                    <div className='min-w-[300px]'>
                        <div className='flex justify-between px-2 border-b pb-1'>
                            <div className={`${fieldName} w-1/5 text-center`}>SI.no</div>
                            <div className={`${fieldName} w-2/5`}>Description</div>
                            <div className={`${fieldName} w-1/5 text-center`}>Qty</div>
                            <div className={`${fieldName} w-1/5 text-right`}>Total</div>
                        </div>
                        <div className='flex justify-between px-2 py-2'>
                            <div className={`${fieldName} w-1/5 text-center`}>1</div>
                            <div className={`${fieldName} w-2/5 text-gray-800`}>Bulb Change</div>
                            <div className={`${fieldName} w-1/5 text-center`}>1</div>
                            <div className={`${fieldName} w-1/5 text-right text-gray-800`}>300</div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-2 justify-end px-2 mt-4 pt-2 border-t'>
                    <div className="font-bold text-sm">Grand Total:</div>
                    <div className="font-bold text-sm text-gray-900">300</div>
                </div> 

                <div className='mt-4 pt-4 border-t border-dashed'>
                    <p className='text-[10px] text-gray-400 uppercase font-bold'>Terms and conditions</p>
                    <p className='text-xs text-gray-500'>Valid up to 1 month</p>
                    
                    <div className='flex items-center gap-2 mt-3 text-red-600'>
                        <p className='text-sm font-semibold'>Additional Requirement</p>
                        <CircleAlert size={16}/>
                    </div>
                    <ul className='text-sm text-gray-500 list-disc ml-5 mt-1'>
                        <li>Provide Ladder</li>
                        <li>Bulb should be provided</li>
                    </ul> 
                </div>
            </div>

            {/* ---------- Action Buttons ---------- */}
            {/* Mobile: 90% width | Laptop: 25% width */}
            <div className='p-4 w-[90%] md:w-[50%] lg:w-[25%] mx-auto space-y-3'>
                <Link to='/pageM33' className='block'>
                    <button className='bg-gray-900 hover:bg-gray-800 py-3 rounded-full shadow-lg text-white w-full transition-transform active:scale-95 text-sm'>
                        Service Status
                    </button>
                </Link>
                <Link to='/page32' className='block'>
                    <button className='bg-gray-900 hover:bg-gray-800 py-3 rounded-full shadow-lg text-white w-full transition-transform active:scale-95 text-sm'>
                        Payment Method
                    </button>
                </Link>
            </div>

            {/* ---------- Complaint Section ---------- */}
            <div className="bg-gray-200 flex flex-col items-center p-6 md:p-8 w-[95%] lg:w-[65%] mx-auto rounded-xl mt-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="e.g. Miss Behave"
                        className="peer w-full bg-white rounded-md px-4 pt-5 pb-2 shadow-sm outline-none focus:ring-1 ring-gray-400"
                    />
                    <label className="absolute left-4 top-2 text-[10px] uppercase font-bold text-gray-400">
                        Title
                    </label>
                </div>

                <div className="mt-4 relative w-full">
                    <textarea
                        placeholder="Describe your issue..."
                        rows="3"
                        className="peer w-full bg-white rounded-md px-4 pt-6 pb-2 shadow-sm outline-none focus:ring-1 ring-gray-400 resize-none"
                    />
                    <label className="absolute left-4 top-2 text-[10px] uppercase font-bold text-gray-400">
                        Description
                    </label>
                </div>

                <label className="mt-4 block w-full cursor-pointer">
                    <div className="w-full flex justify-between items-center bg-white rounded-md px-4 py-4 shadow-sm hover:bg-gray-50">
                        <span className="text-gray-400 text-sm">Upload Images & Videos</span>
                        <Images className="text-gray-400" size={20}/>
                    </div>
                    <input type="file" className="hidden" />
                </label>

                {/* Confirm Button: Wider on mobile */}
                <div className='w-full md:w-[60%] lg:w-[40%]'>
                    <Link to="/page30">
                        <button className="mt-6 w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-full flex justify-center shadow-lg font-bold tracking-wide active:scale-95 transition-all">
                            Confirm Complaint
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}