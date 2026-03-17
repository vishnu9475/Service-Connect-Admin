import React from 'react'
   
const items=[
{ id:1,
  name:"delivery",
  image: <img src="/image1.png" alt="" />   ,
},
{ id:2,
  name:"sirvices",
   image: <img src="/image2.png" alt="" />  , 
}

];

const Trial = () => {
  return (
    
  
    <div className='flex items-center justify-center'>
        <div className='flex gap-2'>
         {items.map((item)=>(
           <div className='w-20 h-20 rounded-2xl bg-amber-50 flex-col flex items-center '>
           <div className='p-3'>{item.image} </div> 
            <p className='text-xs'>{item.name}</p>
          </div>

         ))}
          </div>
    </div>
  
   
  )
}

export default Trial
