import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import LOGOCSSE from '../assets/LOGOCSSE.png'


const Navbar = () => {
  return (
    <>
      <div className=" flex justify-between bg-slate-950">
        <div>
          <img src={LOGOCSSE} alt='logo'className="h-20 ml-5 mt-3"/>
        </div>
        <ul className="flex justify-end font-bold mt-3">
          <li className="p-4 cursor-pointer text-zinc-400 flex flex-col items-center gap-2 relative blink">
            
            <FaHome className="text-3xl animate-bounce blink" />{" "}
          </li>

          <Link to = "/events"> <li className="p-4 cursor-pointer text-zinc-400 flex flex-col items-center gap-2 relative blink">
            Events
          </li></Link>
          <li className="p-4  cursor-pointer text-zinc-400 flex flex-col items-center gap-2 relative blink">
          
          About
          </li>
          <Link to = "/members"> <li className="p-4 cursor-pointer text-zinc-400 flex flex-col items-center gap-2 relative blink">
            Team
          </li></Link>
          <li className="p-4 cursor-pointer text-zinc-400 flex flex-col items-center gap-2 relative blink">
            Contact
          </li>
          <Link to={"./auth"}>
            <button class=" text-cyan-600 mt-1 mr-4 ml-3 hover:bg-cyan-400 hover:text-white hover:rounded-lg p-3">
              Sign / Log
            </button>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;