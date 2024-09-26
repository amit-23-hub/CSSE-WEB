import React from 'react'
import BottomNav from './BottomNav/BottomNav'
import Logo from '../../assets/mmmutLogo.jpg'
import { Link } from 'react-router-dom'

const Bottom = () => {
  return (
    <div className='h-80 w-full bg-slate-900 flex flex-col items-center'>
      <BottomNav/>
      <div className='flex justify-between w-11/12 items-center'>
        <div className='h-28 w-28'>
          <Link to={'http://www.mmmut.ac.in/'}><img className='rounded-full' src={Logo} alt="" /></Link>
        </div>
        <h1 className='w-48 font-bold text-zinc-500 justify-center items-center
        '>Madan Mohan Malaviya University Of Technology, Gorakhpur</h1>
          <ul>
            <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1'>Home</li>
            <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1'>Blog</li>
           
            <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1'>Society</li>
            <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1'>CSSE</li>
          </ul>
          <ul>
          <Link to='/members'> <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1'>Team</li> </Link>
            <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1'>About</li>
            <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1'>About College</li>
          </ul>
      
      </div>
      <p className='h-px w-full bg-zinc-400 mt-6'></p>
      <p className='text-zinc-400 mt-4'>This is the official website of Computer society of Software Engineers,  Departmental society of Information Technology at Madan Mohan Malaviya University of Technology</p>
      <p className='text-white font-medium text-sm'>© Copyright 2024. All Rights Reserved
       Powered by Team</p>
    </div>
  )
}

export default Bottom
