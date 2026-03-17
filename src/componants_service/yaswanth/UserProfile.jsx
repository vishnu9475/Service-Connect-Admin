import {  BellDot, ChevronRight, Eye, Image, Languages, ShieldAlert, ShieldUser, User, Wallet,BadgeQuestionMark, Send, LogOutIcon  } from 'lucide-react'
import person from "../../assets/person.jpg"
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function UserProfile() {


  const [vibrate,setVibrate] = useState(false)
  return (
    <div className='bg-gray-200 min-h-screen p-10 '>
      <div className='w-full  bg-white mx-auto px-4 pb-4 rounded-2xl'>
        {/* -------------------Profile Image---------------- */}
        <label>
          <div className='cursor-pointer  w-20 h-20  relative mx-auto -top-8 '>
            <img src={person} alt="Profile image" className='rounded-full border-2 border-cyan-600' />
          <div className=' flex  items-center justify-center h-7 w-9 bg-cyan-50 border-2 border-cyan-700 rounded-md absolute -right-1  bottom-1'>
           <Image className='text-cyan-700'/>
          </div>
          <input type="file" className='hidden' />
        </div>
        </label>
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-xl'>James S Hernandoz</h2>
          <p className='text-sm text-gray-700'>heranandz@gmail.com</p>
        </div>
        <div className='mt-5'>
          <Link to="/missing154"><ProfileOption  icons={<User size={22}/>} field_name={"Edit Profile"}/></Link>
          <Link to="/missing147"><ProfileOption  icons={<Wallet/>} field_name={"Payment Option"}/></Link>
          <Link to="/s48"><ProfileOption  icons={<BellDot/>} field_name={"Notification"}/></Link>
          <Link to="/S52_SECURITY"><ProfileOption  icons={<ShieldUser/>} field_name={"Security"}/></Link>
           {/* <input
        type="checkbox"
        checked={vibrate}
        onChange={() => setVibrate(!vibrate)}
      /> */}
          <ProfileOption  icons={<Languages/>} language="language" field_name={"Language"}/>
          <ProfileOption  icons={<Eye/>} darkmode="darkmode" field_name={"Dark Mode"}/>
          <Link to="/s47"><ProfileOption  icons={<ShieldAlert/>} field_name={"Teams & Conditions"}/></Link>
          <Link to="/s49"><ProfileOption  icons={<BadgeQuestionMark />} field_name={"Help Center"}/></Link>
          <Link to="/missing153"><ProfileOption  icons={<Send/>} field_name={"Invite Friends"}/></Link>
          <Link to="/missing152_logout"><ProfileOption  icons={<LogOutIcon/>} field_name={"Logout"}/></Link>
        </div>
      </div>
   </div>
  )
}

const ProfileOption =({icons,field_name,language,darkmode})=>{

  const [vibrate,setVibrate] = useState(false)
  return (
<div className='flex justify-between mt-4'>
          <div className='flex gap-4 items-center'>
            <span className='text-gray-500 '>{icons}</span>
          <span className='text-sm '>{field_name}</span>
          
          </div>
            <div className='flex'>
          {language && <select className="cursor-pointer text-sm  lg:text-md appearance-none outline-none">
            <option >English(US)</option>
            <option>Hindi</option>
            <option>French</option>
          </select>}
          {darkmode ? 
         <label className="switch">
      <input
        type="checkbox"
        checked={vibrate}
        onChange={() => setVibrate(!vibrate)}
      />
      <span className="slider"></span>
    </label> : 
          <span className='text-gray-500 '><ChevronRight/></span>}
                    </div>

        </div>
  )
}