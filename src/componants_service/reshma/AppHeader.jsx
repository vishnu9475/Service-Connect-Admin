import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import {
 
  ChevronLeft,
   Search,
  Phone,
  SlidersHorizontal,
  MoreVertical,
  Share2,
  Download,
  Printer,
} from "lucide-react"

export default function AppHeader ({
  title,
  showBack="false",
  showSearch="false",
  showPhone="false",
  showFilter="false",
  showMenu="false",
 
backTo= -1,
theme="black",
rightAction = null 
}){
      const [openMenu, setOpenMenu] = useState(false);
    const navigate=useNavigate()

 const bgColor = theme === "white" ? "bg-white" : "bg-gray-900";
const textColor = theme === "white" ? "text-black" : "text-white";



    return(

<div className={`${bgColor} ${textColor} h-18 flex items-center px-4 py-4 justify-between cursor-pointer`}>


     
{/* Left Section */}
<div className="flex items-center gap-2">
   { showBack &&( <ChevronLeft size={30} className="border rounded-full"
    onClick={()=>navigate(backTo)}/>)}
    <h1 className="uppercase  text-nowrap text-lg font-semibold">{title}</h1>
</div>
{/* Right Section */}


<div className="flex justify-center gap-3 items-center">
    {showMenu &&(<MoreVertical    onClick={() => setOpenMenu(!openMenu)}/>)}
   {showFilter &&(<SlidersHorizontal  onClick={() =>navigate("/filter")}/>)} 
    {showPhone &&(<Phone/>)}
    {showSearch &&(<Search onClick={() => navigate("/search")}/>)}
      {rightAction}
</div>
    </div>
    )
}