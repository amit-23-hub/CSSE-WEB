import React, { useEffect, useState } from 'react'
import {ChevronLeft, ChevronRight} from 'react-feather'
import CsseLogo from '../../assets/csselogo.jpg'
import { Link } from 'react-router-dom';

const CSSE = ({children: slides, autoSlide = false, autoSlideInterval=3000}) => {
  const [curr,setCurr] = useState(0);
  const prev = () => setCurr(curr=>curr===0 ? slides.length-1 : curr-1)
  const next = () => setCurr(curr=>curr=== slides.length-1 ? 0 : curr+1)
  useEffect(()=>{
    if(!autoSlide) return
    const slideInterval = setInterval(next,autoSlideInterval)
    return () => clearInterval(slideInterval)
  })


  return (
    <div className='overflow-hidden relative h-full w-96 shadow-md'>
      <div className=' h-full flex transition-transform ease-out duration-500' style={{transform:`translateX(-${curr*100}%)`}}>{slides}</div>
      <div className='absolute inset-0 flex items-center justify-between p-4 '>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white cursor-pointer'>
          <ChevronLeft size={14}/>
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white cursor-pointer'>
          <ChevronRight size={14}/>
        </button>
      </div>
      <Link to={'./csse'}><div className='absolute bottom-4 ml-14 mb-8 h-24 w-24 right-0 left-0 flex items-center justify-center cursor-pointer' >
        <img className='rounded-full ' src={CsseLogo} alt="SAE Logo" />
      </div></Link>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((_,i)=>(
            <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr===i? "p-4" : "bg-opacity-50"}`}>

            </div>
          ))}
        </div>
        

      </div>
    </div>
  )
}

export default CSSE
