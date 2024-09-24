import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className='h-16 w-full flex justify-center'>
      <ul className='flex text-zinc-500 w-1/2 justify-between text-3xl items-center'>
        <Link to={'https://www.facebook.com/mmmut.ac.in/'}> <li className='hover:bg-slate-800 hover:text-zinc-200'><FaFacebook /></li></Link>
        <Link to={'https://twitter.com/MmmutOfficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}><li className='hover:bg-slate-800 hover:text-zinc-200'><FaTwitter /></li></Link>
        <Link to={'https://www.linkedin.com/school/madan-mohan-malaviya-university-of-technology/'}> <li className='hover:bg-slate-800 hover:text-zinc-200'><FaLinkedinIn /></li></Link>
        <Link to={'https://www.instagram.com/mmmut_fresher/'}><li className='hover:bg-slate-800 hover:text-zinc-200'><FaInstagram /></li></Link>
        <Link to={'https://www.youtube.com/@mmmut1'}> <li className='hover:bg-slate-800 hover:text-zinc-200'><FaYoutube /></li></Link>      
        <Link to={'http://mmmut.ac.in/Contact_Us'}><li className='hover:bg-slate-800 hover:text-zinc-200'><IoMdMail /></li></Link>    
      </ul>
    </div>
  )
}

export default BottomNav
