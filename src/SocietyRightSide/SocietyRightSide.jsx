import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.png';
import HimanshuDubey from '../assets/HimanshuDubey.jpg';
import AditiYadav from '../assets/AditiYadav.jpg';
import AkashGupta from '../assets/AkashGupta.jpg';
import RiyaSrivastava from '../assets/RiyaSrivastava.jpg';

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
        </div>

        {/* Faculty Section */}
        <div className='flex flex-col m-2'>
          <h4 className='text-zinc-400 font-bold'>Faculty</h4>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={img1} alt="R K Dwivedi" />
            <span>R K Dwivedi</span>
            <Link to='https://www.linkedin.com/in/aaditya-upadhyay-53341b299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={AditiYadav} alt="Dr. Shiv Prakash" />
            <span>Dr. Shiv Prakash</span>
            <Link to='https://www.linkedin.com/in/aditi-yadav-7b6bb0302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={AkashGupta} alt="Dr. D S Singh" />
            <span>Dr. D S Singh</span>
            <Link to='https://www.linkedin.com/in/akash-gupta-b33559278/'>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
          <div className='flex items-center justify-between text-zinc-200 font-bold hover:scale-105 transition duration ease-in-out-300'>
            <img className='h-12 w-12 m-2 rounded-full' src={RiyaSrivastava} alt="Dr. Shiv Prakash" />
            <span>Dr. Shiv Prakash</span>
            <Link to='https://www.linkedin.com/in/riya-srivastava-610629294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <button className='bg-sky-500 m-3 rounded-lg p-2'>Follow</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocietyRightSide;
