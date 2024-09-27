import React from 'react';
import CsseTextAnimation from '../../Components/csseTextAnimation/csseTextAnimation'

export default function SliderInfo() {
  return (
    <div className="flex flex-col items-center text-white">
      <div className='flex items-center text-white gap-10'>
        <CsseTextAnimation />
        <div>
        <p className=" flex text-3xl mb-4 text-center flex-wrap">
          Computer Society of Software Engineers
        </p>
        <p className=" flex text-xl mb-4 text-center flex-wrap italic">
          Departmental society of <span className='italic underline mx-2'> Information Technology,</span> MMMUT Gorakhpur
        </p>
        </div>
      </div>
    </div>
  );
}
