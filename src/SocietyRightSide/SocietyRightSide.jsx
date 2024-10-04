import React from 'react';
import { Link } from 'react-router-dom';
import HimanshuDubey from '../assets/HimanshuDubey.jpg';
import krishnaNand    from '../assets/KrishnaNand.jpg'

import DrDayaShankarSingh from '../assets/DrDayaShankarSingh.jpg';
import DrJayPrakash from '../assets/DrJayPrakash.jpg';
import DrRajendraKumar from '../assets/DrRajendraKumar.jpg';
import DrShivPrakash from '../assets/DrShivPrakash.jpg';



const SocietyRightSide = () => {
  return (
    <div>
      
      <div className='h-13 text-white flex justify-center pt-3 pb-3 text-xl bg-blue-500 rounded-md font-medium'>
        Team Lead
      </div>

      <div className='flex flex-col m-2'>
          <h4 className='text-zinc-400 font-bold'>Faculty Lead</h4>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={DrRajendraKumar} alt="R K Dwivedi" />
            <span>R K Dwivedi</span>
            <Link to=''>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={DrShivPrakash} alt="R K Dwivedi" />
            <span>Dr. Shiv Prakash</span>
            <Link to='https://www.linkedin.com/in/dr-shiva-prakash-080a0856?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={DrJayPrakash} alt="R K Dwivedi" />
            <span>Dr. Jay Prakash</span>
            <Link to=''>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={DrDayaShankarSingh} alt="R K Dwivedi" />
            <span>Dr. DayaShankar Singh</span>
            <Link to=''>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
        </div>
     
      <div className='text-sm'>
      
        <div className='flex flex-col m-2'>
          <h4 className='text-zinc-400 font-bold'>Student Lead</h4>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={HimanshuDubey} alt="Himanshu Dubey" />
            <span>Himanshu Dubey</span>
            <Link to='https://www.linkedin.com/in/himanshud2611?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={krishnaNand} alt="Krishna Nand" />
            <span>Krishna Nand </span>
            <Link to='https://www.linkedin.com/in/krishna-nand-kn'>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
          
         
          
          
        </div>

        {/* Faculty Section */}
       
      </div>
    </div>
  );
}

export default SocietyRightSide;
