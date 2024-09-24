import React from 'react'
import { FaPen } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div className='flex h-14 bg-slate-900 w-full justify-end'>
        <ul className='flex text-zinc-400 items-center justify-center w-3/4'>
            <li className='cursor-pointer p-4 hover:bg-slate-800 hover:text-zinc-200'>Timeline</li>
            <li className='cursor-pointer p-4 hover:bg-slate-800 hover:text-zinc-200'>Following</li>
            <li className='cursor-pointer p-4 hover:bg-slate-800 hover:text-zinc-200'>Followers</li>
            <li className='cursor-pointer p-4 hover:bg-slate-800 hover:text-zinc-200'>Photos</li>
            <li className='cursor-pointer p-4 hover:bg-slate-800 hover:text-zinc-200'>About</li>
           <Link to={'/infoform'}> <li className='cursor-pointer p-4 hover:bg-slate-800 hover:text-zinc-200'><FaPen /></li></Link>
        </ul>
    </div>
    
    </>
  )
}

export default Nav
