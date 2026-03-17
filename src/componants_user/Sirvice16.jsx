import React from 'react'
import * as Icons from "lucide-react";
import { BookmarkMinus,Star } from 'lucide-react';

const Sirvice16 = () => {
  return (
   <div className='flex items-center justify-center mt-9'>
 {/* card */}
     <div className=' w-72  rounded-2xl overflow-hidden'>
 {/* black div */}
           <div className='bg-black h-30'>
          </div>
{/* white div */}
           <div className=' bg-white w-74  px-3 py-1'>
             {/* first row */}
               <div className='flex justify-between'>
                    <p className='text-sm'>Plumbing</p>
                    <span> <BookmarkMinus className='text-[#167F71]'/></span>
               </div>
             {/* second row */}
                <div>
                  <h3 className='font-semibold'>Complete Resedential Plumbing</h3>
                </div>
            {/* third div */}
                <div className='flex justify-between mb-4 mt-1 text-sm py-1'>
                   <p>₹100-200</p>  
                   <span>|</span>  
                   <span className='flex justify-between'> <Star className='text-yellow-500 fill-yellow-400'/> 4.2</span>
                   <span>|</span>
                   <span>7830 Reviews</span>
               </div>
           </div>
    </div>
        </div>
        )
      }

export default Sirvice16
