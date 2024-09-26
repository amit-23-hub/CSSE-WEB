import React from 'react'
import BottomNav from './BottomNav/BottomNav'
import Logo from '../../assets/mmmutLogo.jpg'
import csselogo from '../../assets/csselogo.jpg'
import { Link } from 'react-router-dom'

const Bottom = () => {
  return (
    <div className='h-80 w-full bg-slate-900 flex flex-col justify-center items-center border-t-4 border-gray-600 pt-3'>
      <div className='flex justify-between w-11/12 items-center'>
        <div className='flex-col justify-center w-28'>
          <Link to={'http://www.mmmut.ac.in/'}>
            <img className='rounded-full relative left-[2rem]' src={Logo} alt="MMMUT Logo" />
          </Link>
          <h1 className='w-48 font-semibold text-white justify-center items-center border-b-2 border-r-2 rounded-xl border-gray-500 relative top-[0.2rem] p-1'>
            Madan Mohan Malaviya University Of Technology, Gorakhpur
          </h1>
        </div>
        <ul>
          <Link to={'https://csse-web-eight.vercel.app/'}>
            <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>Home</li>
          </Link>
          <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>Blog</li>
          <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>Club</li>
          <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>Society</li>
        </ul>
        <ul>
          <Link to='/members'>
            <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>Team</li>
          </Link>
          <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>About</li>
          <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>CSSE</li>
          <Link to={'http://www.mmmut.ac.in/'}>
            <li className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>About College</li>
          </Link>
        </ul>
        <div>
          <div className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 p-1 m-1 font-semibold hover:scale-110 transition-transform duration-300'>Feedback</div>
          <div className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 p-1 m-1 font-semibold hover:scale-110 transition-transform duration-300'>T&C</div>
        </div>
        <div className='w-28 mr-12'>
          <img className='rounded-full' src={csselogo} alt="CSSE Logo" />
          <h1 className='w-48 font-semibold text-white justify-center items-center border-b-2 border-l-2 rounded-xl border-gray-500 relative top-[0.4rem] right-[2rem] p-1'>
            Computer Society of Software Engineers
          </h1>
        </div>
      </div>
      <BottomNav />
      <p className='text-zinc-400 mt-4 border-t w-full text-center'>
        This is the official website of Computer Society of Software Engineers, Departmental society of Information Technology at Madan Mohan Malaviya University of Technology
      </p>
      <p className='text-white font-medium text-sm pb-2'>
        © Copyright 2024. All Rights Reserved. Powered by Team
      </p>
    </div>
  )
}

export default Bottom
