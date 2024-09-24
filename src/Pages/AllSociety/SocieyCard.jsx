import React from 'react'
import city1 from "../assets/sae1.jpg";
import city2 from "../assets/sae2.png";
import city3 from "../assets/sae3.png";
import planet1 from "../assets/sae4.png";
import planet2 from "../assets/sae5.png";
import CSSE from './CSSE';
import SAE from './SAE';

const SocieyCard = () => {
  const slides = [city1, city2, city3, planet1, planet2];

  return (
    <>
    <div className='flex justify-around items-center h-96'>
    <div className=''>
      <CSSE autoSlide={true}>
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`Slide ${index}`} />
        ))}                       
      </CSSE>
    </div>
     
    <div className=''>
      <SAE autoSlide={true}>
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`Slide ${index}`} />
        ))}
      </SAE>
    </div>

    <div className=''>
      <CSSE autoSlide={true}>
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`Slide ${index}`} />
        ))}                       
      </CSSE>
    </div>

    <div className=''>
      <SAE autoSlide={true}>
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`Slide ${index}`} />
        ))}
      </SAE>
    </div>
    </div>
    
    </>
    
  );
};

export default SocieyCard;