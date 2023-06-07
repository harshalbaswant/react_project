import React, { useState } from 'react'
import{AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
export default function Header() {
  const [toggle,setToggle] = useState(false)
  return (
    <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 p-4">
        <div className="max-w-screen-xl items-center py-2  mx-auto flex justify-between">
            <div className="text-3xl font-bold outline-2 text-pur">
                EDU-TECH
            </div>
            {
              toggle ?
                <AiOutlineClose onClick={()=> setToggle(!toggle)} className='text-white text-xl md:hidden block'/>
                :
                 <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white text-xl md:hidden block'/>
            }
           
            <ul className="hidden md:flex gap-5 text-white text-lg">
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {/* responsive menu */}
            <ul className={` duration-300 md:hidden fixed text-white text-lg bg-black  top-[83px] w-full h-screen ${toggle ? 'left-0' : 'left-[-100%]'}` }>
                <li className='p-5'>Home</li>
                <li className='p-5'>Company</li>
                <li className='p-5'>Resources</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Contact</li>
            </ul>
        </div>
    </div>
  )
}
