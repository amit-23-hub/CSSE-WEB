import React from 'react';
import Logo from '../../assets/mmmutLogo.jpg';
import csselogo from '../../assets/csselogo.jpg';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav';

const Bottom = () => {
  return (
    <div className='relative z-10'>
      <footer className='w-full bg-slate-900 flex flex-col justify-center items-center border-t-4 border-gray-600 pt-6 lg:pt-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-11/12 items-center lg:gap-12'>
          <div className='hidden sm:flex flex-col justify-center items-center lg:items-start'>
            <Link to={'http://www.mmmut.ac.in/'} aria-label="MMMUT Website">
              <img
                className='rounded-full transition-transform duration-300 hover:scale-110 w-20 lg:w-36'
                src={Logo}
                alt="MMMUT Logo"
              />
            </Link>
            <h2 className='font-semibold text-center border-b-2 border-r-2 border-gray-400 text-gray-50 rounded-lg mt-2 text-sm sm:hidden'>MADAN MOHAN MALAVIYA UNIVERSITY OF TECHNOLOGY</h2>
          </div>

          <div className='flex flex-wrap justify-center lg:justify-start gap-8'>
            <nav>
              <ul className='flex flex-col gap-2'>
                <li>
                  <Link to={'https://csse-web-eight.vercel.app/'} aria-label="CSSE Home">
                    <span className='cursor-pointer text-zinc-400 hover:bg-slate-800 hover:text-zinc-200 text-[15px] font-normal p-1 hover:scale-110 transition-transform duration-300'>
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <span className='cursor-pointer text-zinc-400 hover:bg-slate-800 hover:text-zinc-200 text-[15px] font-normal p-1 hover:scale-110 transition-transform duration-300'>
                    Blog
                  </span>
                </li>
                <li>
                  <span className='cursor-pointer text-zinc-400 hover:bg-slate-800 hover:text-zinc-200 text-[15px] font-normal p-1 hover:scale-110 transition-transform duration-300'>
                    Club
                  </span>
                </li>
                <li>
                  <span className='cursor-pointer text-zinc-400 hover:bg-slate-800 hover:text-zinc-200 text-[15px] font-normal p-1 hover:scale-110 transition-transform duration-300'>
                    Society
                  </span>
                </li>
              </ul>
            </nav>

            <nav>
              <ul className='flex flex-col gap-2'>
                <li>
                  <Link to='/devTeam' aria-label="Team Members">
                    <span className='cursor-pointer text-zinc-400 hover:bg-slate-800 hover:text-zinc-200 text-[15px] font-normal p-1 hover:scale-110 transition-transform duration-300'>
                      Developer
                    </span>
                  </Link>
                </li>
                <li>
                  <span className='cursor-pointer text-zinc-400 hover:bg-slate-800 hover:text-zinc-200 text-[15px] font-normal p-1 hover:scale-110 transition-transform duration-300'>
                    About
                  </span>
                </li>
                <li>
                  <span className='cursor-pointer text-zinc-400 hover:bg-slate-800 hover:text-zinc-200 text-[15px] font-normal p-1 hover:scale-110 transition-transform duration-300'>
                    CSSE
                  </span>
                </li>
                <li>
                  <Link to={'http://www.mmmut.ac.in/'} aria-label="About College">
                    <span className='cursor-pointer text-zinc-400 hover:bg-slate-800 hover:text-zinc-200 text-[15px] font-normal p-1 hover:scale-110 transition-transform duration-300'>
                      About College
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className='flex flex-col gap-2'>
              <div className='cursor-pointer text-zinc-400 hover:bg-slate-800 hover:text-zinc-200 text-[15px] font-normal p-1 hover:scale-110 transition-transform duration-300'>
                Feedback
              </div>
              <div className='cursor-pointer text-zinc-400 hover:bg-slate-800 hover:text-zinc-200 text-[15px] font-normal p-1 hover:scale-110 transition-transform duration-300'>
                T&C
              </div>
            </div>
          </div>

          <div className='hidden sm:flex flex-col justify-center items-center lg:items-end'>
            <img
              className='rounded-full transition-transform duration-300 hover:scale-110 w-20 lg:w-36'
              src={csselogo}
              alt="CSSE Logo"
            />
            <h2 className='font-semibold text-center border-b-2 border-r-2 border-gray-400 text-gray-50 rounded-lg px-2 py-2 mt-2 text-sm sm:hidden'>COMPUTER SOCIETY OF SOFTWARE ENGINEERS</h2>

          </div>
        </div>

        <BottomNav />
        <div className='px-1'>
          <p className='text-zinc-400 border-t w-full text-center text-xs lg:text-base'>
            This is the official website of Computer Society of Software Engineers, Departmental society of Information Technology at Madan Mohan Malaviya University of Technology.
          </p>
          <p className='text-white text-center font-medium text-xs lg:text-sm pb-4'>
            © Copyright 2024. All Rights Reserved. Powered by Team
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Bottom;
