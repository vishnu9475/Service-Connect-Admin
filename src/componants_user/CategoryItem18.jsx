import React from 'react'

const CategoryItem18 = ({image,tittle}) => {
  return (
   
  <div className='flex items-center justify-center mt-3'>
   
   <button className='bg-white flex-col w-23 h-23  md:w-26 md:h-26 lg:w-36 lg:h-36 flex items-center justify-center rounded-2xl shadow-md shadow-gray-500'>
       <img className='px-5 mt-2' src={image} alt="" />
       <h3 className='md:text-xs text-[8px]  font-semibold text-center leading-tight line-clamp-2' >{tittle}</h3>
    </button>
  </div> 
  )
}

export default CategoryItem18
 