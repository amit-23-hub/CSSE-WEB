import React from 'react';

import Logo from '../../assets/mmmutLogo.jpg';
import csselogo from '../../assets/csselogo.jpg';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav';

const Bottom = () => {
  return (
    <div className='relative z-10'> {/* Parent div with z-10 */}
      <footer className='h-80 w-full bg-slate-900 flex flex-col justify-center items-center border-t-4 border-gray-600 pt-3'>
        <div className='flex justify-between w-11/12 items-center'>
          <div className='flex-col justify-center w-28'>
            <Link to={'http://www.mmmut.ac.in/'} aria-label="MMMUT Website">
              <img className='rounded-full relative left-[2rem] transition-transform duration-300 hover:scale-110' src={Logo} alt="MMMUT Logo" />
            </Link>
            <h2 className='w-48 font-semibold text-white justify-center items-center border-b-2 border-r-2 rounded-xl border-gray-500 relative top-[0.2rem] p-1'>
              Madan Mohan Malaviya University Of Technology, Gorakhpur
            </h2>
          </div>
          <nav>
            <ul className='flex-col'>
              <li>
                <Link to={'https://csse-web-eight.vercel.app/'} aria-label="CSSE Home">
                  <span className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>Home</span>
                </Link>
              </li>
              <li>
                <span className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>Blog</span>
              </li>
              <li>
                <span className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>Club</span>
              </li>
              <li>
                <span className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>Society</span>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <Link to='/devTeam' aria-label="Team Members">
                  <span className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>Developer</span>
                </Link>
              </li>
              <li>
                <span className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>About</span>
              </li>
              <li>
                <span className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>CSSE</span>
              </li>
              <li>
                <Link to={'http://www.mmmut.ac.in/'} aria-label="About College">
                  <span className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 font-medium p-1 hover:scale-110 transition-transform duration-300'>About College</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <div className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 p-1 m-1 font-semibold hover:scale-110 transition-transform duration-300'>Feedback</div>
            <div className='cursor-pointer text-zinc-400 flex hover:bg-slate-800 hover:text-zinc-200 p-1 m-1 font-semibold hover:scale-110 transition-transform duration-300'>T&C</div>
          </div>
          <div className='w-28 mr-12'>
            <img className='rounded-full transition-transform duration-300 hover:scale-110' src={csselogo} alt="CSSE Logo" />
            <h2 className='w-48 font-semibold text-white justify-center items-center border-b-2 border-l-2 rounded-xl border-gray-500 relative top-[0.4rem] right-[2rem] p-1'>
              Computer Society of Software Engineers
            </h2>
          </div>
        </div>
        <BottomNav />
        <p className='text-zinc-400 mt-4 border-t w-full text-center'>
          This is the official website of Computer Society of Software Engineers, Departmental society of Information Technology at Madan Mohan Malaviya University of Technology.
        </p>
        <p className='text-white font-medium text-sm pb-2'>
          © Copyright 2024. All Rights Reserved. Powered by Team
        </p>
      </footer>
    </div>
  );
}

export default Bottom;
