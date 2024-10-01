import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          <img className="w-full h-48 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_TrWm1I247bI2a2Hifre2DlpSJFGFtfvnA&s" alt="Slide 1" />
        </div>
        <div className="p-2">
          <img className="w-full h-48 object-cover" src="https://hire4event.com/blogs/wp-content/uploads/2019/02/hire4event.com_-1.jpg" alt="Slide 2" />
        </div>
        <div className="p-2">
          <img className="w-full h-48 object-cover" src="https://www.ticketleap.com/wp-content/uploads/2024/03/fbc316b9-10b3-4dcb-a9f2-8092d5c00d94.png" alt="Slide 3" />
        </div>
        <div className="p-2">
          <img className="w-full h-48 object-cover" src="https://artisthubhq.com/wp-content/uploads/2018/04/ultimate-guide.jpg" alt="Slide 4" />
        </div>
        <div className="p-2">
          <img className="w-full h-48 object-cover" src="https://www.yakubevents.com/assets/images/college_events/ce1.jpg" alt="Slide 5" />
        </div>
        <div className="p-2">
          <img className="w-full h-48 object-cover" src="https://hire4event.com/blogs/wp-content/uploads/2019/02/hire4event.com_-1.jpg" alt="Slide 6" />
        </div>
        <div className="p-2">
          <img className="w-full h-48 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_TrWm1I247bI2a2Hifre2DlpSJFGFtfvnA&s" alt="Slide 1" />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
