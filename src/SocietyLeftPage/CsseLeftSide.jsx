import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome } from "react-icons/fi";
import { BsCalendarEvent } from "react-icons/bs";
import { TiNews } from "react-icons/ti";
import { IoImages } from "react-icons/io5";
import { FaWpexplorer } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FaWpforms } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";

const CsseLeftSide = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-start h-1/2 m-3'>
        <p className=' text-zinc-500 text-xl'>Menu</p>
        <ul className='text-white'>
           <Link to={'/'}> <li className='p-4 cursor-pointer text-zinc-400 flex gap-2 hover:bg-slate-800 hover:text-zinc-200'><FiHome />Home</li></Link>
            <li className='p-4 cursor-pointer text-zinc-400 flex gap-2 hover:bg-slate-800 hover:text-zinc-200'><BsCalendarEvent />Event</li>
            <li className='p-4 cursor-pointer text-zinc-400 flex gap-2 hover:bg-slate-800 hover:text-zinc-200'><TiNews />Latest News</li>
            <li className='p-4 cursor-pointer text-zinc-400 flex gap-2 hover:bg-slate-800 hover:text-zinc-200'><IoImages />Galary</li>
            <li className='p-4 cursor-pointer text-zinc-400 flex gap-2 hover:bg-slate-800 hover:text-zinc-200'><FaWpexplorer />Explore</li>
            <li className='p-4 cursor-pointer text-zinc-400 flex gap-2 hover:bg-slate-800 hover:text-zinc-200'><IoMdContacts />Contact</li>
        </ul>
        <p className=' text-zinc-500 text-xl mt-4'>Become Part Of The Society</p>
        <ul className='text-white'>
           
            <li className='p-4 cursor-pointer text-zinc-400 flex gap-2 hover:bg-slate-800 hover:text-zinc-200'><FaWpforms />Form</li>
            <li className='p-4 cursor-pointer text-zinc-400 flex gap-2 hover:bg-slate-800 hover:text-zinc-200'><CiCalendarDate />Form Release Date</li>
            <li className='p-4 cursor-pointer text-zinc-400 flex gap-2 hover:bg-slate-800 hover:text-zinc-200'><MdDateRange />Last Date</li>
        </ul>
    </div>

    </>
  )
}

export default CsseLeftSide
