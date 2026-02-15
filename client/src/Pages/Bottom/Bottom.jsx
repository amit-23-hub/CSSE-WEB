import React from 'react';
import Logo from '../../assets/mmmutLogo.jpg';
import csselogo from '../../assets/csselogo.jpg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import BottomNav from './BottomNav';

const Bottom = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to scroll to a section by ID
  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      // Already on home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Function to handle page navigation and scroll to top
  const handlePageNavigation = (path) => {
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className='relative z-10'>
      <footer className='w-full bg-slate-900 flex flex-col justify-center items-center border-t-4 border-gray-600 pt-8 lg:pt-12 pb-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-11/12 max-w-7xl'>

          {/* MMMUT Logo */}
          <div className='flex flex-col justify-start items-center sm:items-start'>
            <Link to={'http://www.mmmut.ac.in/'} aria-label="MMMUT Website">
              <img
                className='rounded-full transition-transform duration-300 hover:scale-110 w-24 lg:w-32 mb-3'
                src={Logo}
                alt="MMMUT Logo"
              />
            </Link>
            <h3 className='text-zinc-300 font-semibold text-xs lg:text-sm text-center sm:text-left max-w-[200px]'>
              Madan Mohan Malaviya University of Technology
            </h3>
          </div>

          {/* Quick Links Column 1 */}
          <div className='flex flex-col items-center sm:items-start'>
            <h3 className='text-zinc-200 font-bold text-base lg:text-lg mb-4'>Quick Links</h3>
            <nav>
              <ul className='flex flex-col gap-3'>
                <li>
                  <Link to={'/'} aria-label="CSSE Home">
                    <span className='cursor-pointer text-zinc-400 hover:text-cyan-400 text-sm lg:text-[15px] font-normal transition-colors duration-300'>
                      Home
                    </span>
                  </Link>
                </li>
                <li onClick={() => scrollToSection('vision')}>
                  <span className='cursor-pointer text-zinc-400 hover:text-cyan-400 text-sm lg:text-[15px] font-normal transition-colors duration-300'>
                    Blog
                  </span>
                </li>
                <li onClick={() => scrollToSection('gallery')}>
                  <span className='cursor-pointer text-zinc-400 hover:text-cyan-400 text-sm lg:text-[15px] font-normal transition-colors duration-300'>
                    Society
                  </span>
                </li>
                <li onClick={() => scrollToSection('about')}>
                  <span className='cursor-pointer text-zinc-400 hover:text-cyan-400 text-sm lg:text-[15px] font-normal transition-colors duration-300'>
                    About
                  </span>
                </li>
              </ul>
            </nav>
          </div>

          {/* Quick Links Column 2 */}
          <div className='flex flex-col items-center sm:items-start'>
            <h3 className='text-zinc-200 font-bold text-base lg:text-lg mb-4'>More Links</h3>
            <nav>
              <ul className='flex flex-col gap-3'>
                <li onClick={() => handlePageNavigation('/events')}>
                  <span className='cursor-pointer text-zinc-400 hover:text-cyan-400 text-sm lg:text-[15px] font-normal transition-colors duration-300'>
                    Events
                  </span>
                </li>
                <li onClick={() => handlePageNavigation('/members')}>
                  <span className='cursor-pointer text-zinc-400 hover:text-cyan-400 text-sm lg:text-[15px] font-normal transition-colors duration-300'>
                    Our Team
                  </span>
                </li>
                <li onClick={() => handlePageNavigation('/devTeam')}>
                  <span className='cursor-pointer text-zinc-400 hover:text-cyan-400 text-sm lg:text-[15px] font-normal transition-colors duration-300'>
                    Developer
                  </span>
                </li>
                <li>
                  <Link to={'http://www.mmmut.ac.in/'} aria-label="About College">
                    <span className='cursor-pointer text-zinc-400 hover:text-cyan-400 text-sm lg:text-[15px] font-normal transition-colors duration-300'>
                      About College
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* CSSE Logo */}
          <div className='flex flex-col justify-start items-center sm:items-start lg:items-end'>
            <Link to={'/'} aria-label="CSSE Home">
              <img
                className='rounded-full transition-transform duration-300 hover:scale-110 w-24 lg:w-32 mb-3'
                src={csselogo}
                alt="CSSE Logo"
              />
            </Link>
            <h3 className='text-zinc-300 font-semibold text-xs lg:text-sm text-center sm:text-left lg:text-right max-w-[200px]'>
              Computer Society of Software Engineers
            </h3>
          </div>
        </div>

        <BottomNav />
        <div className='w-11/12 max-w-7xl mt-6'>
          <p className='text-zinc-400 border-t border-gray-600 pt-4 w-full text-center text-xs lg:text-sm leading-relaxed'>
            This is the official website of Computer Society of Software Engineers, Departmental society of Information Technology at Madan Mohan Malaviya University of Technology.
          </p>
          <p className='text-zinc-300 text-center font-medium text-xs lg:text-sm pt-3 pb-2'>
            © Copyright 2024. All Rights Reserved. Powered by CSSE Team
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Bottom;
