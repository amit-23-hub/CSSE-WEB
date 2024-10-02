import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpg'
import gallery5 from '../../assets/gallery5.jpg'



 
const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container mx-auto w-full">
      <Slider {...settings}>
        <div className="p-2">
          <img className="w-full h-48 object-cover rounded-xl" src={gallery1} alt="Slide 1" />
        </div>
        <div className="p-2">
          <img className="w-full h-48 object-cover rounded-xl" src={gallery2} alt="Slide 2" />
        </div>
        <div className="p-2">
          <img className="w-full h-48 object-cover rounded-xl" src={gallery3} alt="Slide 3" />
        </div>
        <div className="p-2">
          <img className="w-full h-48 object-cover rounded-xl" src={gallery4} alt="Slide 4" />
        </div>
        <div className="p-2">
          <img className="w-full h-48 object-cover rounded-xl" src={gallery5} alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
