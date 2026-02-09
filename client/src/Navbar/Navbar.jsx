import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import LOGOCSSE from '../assets/LOGOCSSE.png';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const scrollToAbout = () => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      // Already on home page, just scroll
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMenuOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <div className="flex justify-between items-center bg-slate-950 px-5 py-3">
        <div>
          <Link to="/">
            <img src={LOGOCSSE} alt="logo" className="h-12 sm:h-20" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            className="text-zinc-400 text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links for Larger Screens */}
        <ul className="hidden sm:flex font-bold items-center space-x-6">
          <li className="flex items-center gap-2 text-zinc-400">
            <Link to="/" className="flex items-center gap-2">
              <FaHome className="text-2xl" />
              <span>Home</span>
            </Link>
          </li>
          <li className="p-2 cursor-pointer text-zinc-400">
            <Link to="/events">Events</Link>
          </li>
          <li className="p-2 cursor-pointer text-zinc-400" onClick={scrollToAbout}>
            About
          </li>
          <li className="p-2 cursor-pointer text-zinc-400">
            <Link to="/members">Team</Link>
          </li>
          {/* <li className="p-2 cursor-pointer text-zinc-400">Contact</li> */}
          {!user ? (
            <li>
              <Link
                to="/Login"
                className="text-cyan-600 hover:bg-cyan-400 hover:text-white hover:rounded-lg px-4 py-2"
              >
                Sign / Log
              </Link>
            </li>
          ) : (
            <li className="relative flex items-center gap-2">
              {user.role === 'admin' && (
                <Link
                  to="/admin/dashboard"
                  className="text-cyan-400 hover:text-cyan-300 px-3 py-1 rounded text-sm"
                >
                  Dashboard
                </Link>
              )}
              <button onClick={() => navigate(user.role === 'admin' ? '/admin/dashboard' : '/profile')} className="flex items-center gap-2 text-zinc-200">
                <img src={user.profilePic || 'https://via.placeholder.com/36'} alt="avatar" className="w-9 h-9 rounded-full object-cover border" />
                <span className="text-sm">{user.name?.split(' ')[0] || 'Profile'}</span>
              </button>
              <button
                onClick={handleLogout}
                className="ml-2 text-sm text-red-400 hover:text-red-300 px-3 py-1 rounded"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <ul className="sm:hidden bg-slate-950 text-zinc-400 font-bold flex flex-col items-start px-5 py-3 space-y-3">
          <li className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <FaHome className="text-2xl" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
          </li>
          <li onClick={scrollToAbout}>
            About
          </li>
          <li>
            <Link to="/members" onClick={() => setMenuOpen(false)}>Team</Link>
          </li>

          {!user ? (
            <li>
              <Link
                to="/Login"
                className="text-cyan-600 hover:bg-cyan-400 hover:text-white hover:rounded-lg py-2 mt-2 inline-block"
                onClick={() => setMenuOpen(false)}
              >
                Sign / Log
              </Link>
            </li>
          ) : (
            <>
              {user.role === 'admin' && (
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="text-cyan-400 hover:text-cyan-300 py-1 block"
                    onClick={() => setMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              <li className="flex flex-col gap-3 mt-2 pt-2 border-t border-slate-800 w-full">
                <button
                  onClick={() => {
                    navigate(user.role === 'admin' ? '/admin/dashboard' : '/profile');
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 text-zinc-200"
                >
                  <img src={user.profilePic || 'https://via.placeholder.com/36'} alt="avatar" className="w-10 h-10 rounded-full object-cover border border-slate-600" />
                  <span className="text-base">{user.name || 'Profile'}</span>
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="text-left text-red-400 hover:text-red-300 py-1"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </>
  );
};

export default Navbar;
