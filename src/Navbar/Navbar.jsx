import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <div className="h-16">
        <ul className="flex justify-end font-bold">
          <li className="p-4 cursor-pointer text-zinc-400 flex flex-col items-center gap-2 relative blink">
            
            <FaHome className="text-3xl animate-bounce blink" />{" "}
          </li>

          <li className="p-4 cursor-pointer text-zinc-400 flex flex-col items-center gap-2 relative blink">
            
            Event
          </li>
          <li className="p-4  cursor-pointer text-zinc-400 flex flex-col items-center gap-2 relative blink">
          
          About
          </li>
          <li className="p-4 cursor-pointer text-zinc-400 flex flex-col items-center gap-2 relative blink">
            Latest News
          </li>
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
