import React from 'react'
import Nav from './Nav'
import ReactPlayer from 'react-player'
import { FcRating } from "react-icons/fc";
import Logo from '../assets/csselogo.jpg'

const Mid = () => {
  return (
    <>
    <div className=' bg-white flex h-96'>
      
    <div className='h-96 w-64 bg-slate-900 border-4 border-gray-600 text-zinc-400 p-3 text-l font-bold flex flex-col'>
                <span className='text-zinc-400'>Introduction ...</span>
                <div className='w-full h-1/2 bg-black'>
                <img className='h-full w-full' src={Logo} alt="" />
                </div>


                <div className='flex flex-col items-start gap-5 m-4 text-zinc-200'>
                <div className='flex'>
                    <span>Computer Society of Software Engineering</span>
                </div>
                <div className='flex'>
                    <span>Collage Name MMMUT</span>
                </div>
                <div className='flex'>
                    <span>Rating</span>
                    <span className='flex'> <FcRating /> <FcRating />  <FcRating /> <FcRating /></span>
                </div>
                </div>
    </div>

            <div className=' h-96 w-3/4 bg-slate-900 border-4 border-gray-600'>
            <ReactPlayer url='https://youtu.be/fKCt-Uzoy8Y?si=GIeCaWSg77tgBdBY' width='100%'
          height='100%' controls />
        </div>
    </div>
    <Nav/>
    
    </>
  )
}

export default Mid


