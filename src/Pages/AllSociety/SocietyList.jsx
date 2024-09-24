import React from 'react';
import city1 from "../../assets/sae1.jpg";
import city2 from "../../assets/sae2.png";
import city3 from "../../assets/sae3.png";
import planet1 from "../../assets/sae4.png";
import planet2 from "../../assets/sae5.png";
import CSSE from './CSSE'; // Make sure CSSE is properly imported and is a functional component
import { Link } from 'react-router-dom'; // Ensure correct usage of Link

const SocietyList = () => {
  const slides = [city1, city2, city3, planet1, planet2];

  return (
    <div className='w-full h-full flex justify-center'>
      <div className='w-4/5'>
        <p className='text-white text-7xl flex justify-center m-6' style={{ fontFamily: 'HelveticaNeueCyr', fontWeight: 400 }}>
          Computer Society Of Software Engineers
        </p>

        <div className='flex flex-col items-center w-full'>
          <CSSE autoSlide={true}>
            {slides.map((s, index) => (
              <img key={index} src={s} alt={`Slide ${index}`} />
            ))}
          </CSSE>

          <div className='flex flex-col font-sans font-bold justify-between w-96 mt-4'>
            <p className='text-4xl text-white'>CSSE</p>
            <div className='flex justify-between items-center'>
              <p className='text-xl text-zinc-500'>Explore Society: Album</p>
              <Link to='/csse'>
                <button className='text-white text-2xl underline'>Open</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietyList;
