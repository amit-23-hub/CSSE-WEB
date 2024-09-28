import React from 'react';
import { Link } from 'react-router-dom';
import HimanshuDubey from '../assets/HimanshuDubey.jpg';
import AlabhyaGoel from '../assets/AlabhyaGoel.jpg';
import KomalGupta from '../assets/KomalGupta.jpg';
import PerneetaAwasthi from '../assets/PerneetaAwasthi.jpg';
import ShristiSingh from '../assets/ShristiSingh.jpg';
import VaibhavGarg from '../assets/VaibhavGarg.jpg';

import DrDayaShankarSingh from '../assets/DrDayaShankarSingh.jpg';
import DrJayPrakash from '../assets/DrJayPrakash.jpg';
import DrRajendraKumar from '../assets/DrRajendraKumar.jpg';
import DrShivPrakash from '../assets/DrShivPrakash.jpg';



const SocietyRightSide = () => {
  return (
    <div>
      {/* Header */}
      <div className='h-13 text-white flex justify-center pt-3 pb-3 text-xl bg-blue-500 rounded-md font-medium'>
        Our Team
      </div>

      {/* Team Members */}
      <div className='text-sm'>
        {/* Final Year Member Section */}
        <div className='flex flex-col m-2'>
          <h4 className='text-zinc-400 font-bold'>Final Year Member</h4>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={HimanshuDubey} alt="Himanshu Dubey" />
            <span>Himanshu Dubey</span>
            <Link to='https://www.linkedin.com/in/himanshud2611?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={AlabhyaGoel} alt="Himanshu Dubey" />
            <span>Alabhya Goel</span>
            <Link to='https://www.linkedin.com/in/alabhya-goel'>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={KomalGupta} alt="Himanshu Dubey" />
            <span>Komal Gupta</span>
            <Link to='https://www.linkedin.com/in/komal-gupta'>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={PerneetaAwasthi} alt="Himanshu Dubey" />
            <span>Perneeta Awasthi</span>
            <Link to='https://www.linkedin.com/in/perneeta-awasthi'>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={ShristiSingh} alt="Himanshu Dubey" />
            <span>Shristi Singh</span>
            <Link to='https://www.linkedin.com/in/shristi-singh'>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={VaibhavGarg} alt="Himanshu Dubey" />
            <span>Vaibhav Garg</span>
            <Link to='https://www.linkedin.com/in/vaibhav-garg'>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
        </div>

        {/* Faculty Section */}
        <div className='flex flex-col m-2'>
          <h4 className='text-zinc-400 font-bold'>Faculty</h4>
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
      </div>
    </div>
  );
}

export default SocietyRightSide;
