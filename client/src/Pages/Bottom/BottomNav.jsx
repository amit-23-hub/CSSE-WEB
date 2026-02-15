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
    <div className='h-16 w-auto mt-5'>
      <ul className='flex text-base gap-x-10 sm:flex sm:gap-x-12 text-zinc-500 w-1/2 justify-between sm:text-3xl items-center'>
        <Link to={'https://www.facebook.com/mmmut.ac.in/'}> <li className='hover:text-zinc-200 hover-rounded-full hover:scale-110 transition-transform duration-300'><FaFacebook /></li></Link>
        <Link to={'https://twitter.com/MmmutOfficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}><li className='hover:text-zinc-200 hover-rounded-full hover:scale-110 transition-transform duration-300'><FaTwitter /></li></Link>
        <Link to={'https://www.linkedin.com/school/madan-mohan-malaviya-university-of-technology/'}> <li className='hover:text-zinc-200 hover-rounded-full hover:scale-110 transition-transform duration-300'><FaLinkedinIn /></li></Link>
        <Link to={'https://www.instagram.com/cssemmmut?igsh=MXVnang2bTFnZjN3cQ=='}><li className='hover:text-zinc-200 hover-rounded-full hover:scale-110 transition-transform duration-300'><FaInstagram /></li></Link>
        <Link to={'https://www.youtube.com/@mmmut1'}> <li className='hover:text-zinc-200 hover-rounded-full hover:scale-110 transition-transform duration-300'><FaYoutube /></li></Link>      
        <Link to={'http://mmmut.ac.in/Contact_Us'}><li className='hover:text-zinc-200 hover-rounded-full hover:scale-110 transition-transform duration-300'><IoMdMail /></li></Link>    
      </ul>
    </div>
  )
}

export default BottomNav
