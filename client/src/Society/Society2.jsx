import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
import gallery5 from '../assets/gallery5.jpg'
import { useRef } from 'react';

const ImageSlider2 = () => {
    const sliderRef = useRef(null);

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
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
        <div className="slider-container mx-auto pt-10 px-8 w-full text-center">
            <Slider ref={sliderRef} {...settings}>
                {[gallery1, gallery2, gallery3, gallery4, gallery5].map((img, i) => (
                    <div key={i} className="p-2">
                        <img className="w-full h-48 object-cover rounded-xl" src={img} alt={`Slide ${i + 1}`} />
                    </div>
                ))}
            </Slider>
            <div className="flex flex-row gap-10 z-20 justify-center items-center mb-10">
                <div className="">
                    <button
                        className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
                        title="Go Back"
                        onClick={handlePrev}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60px"
                            height="60px"
                            viewBox="0 0 24 24"
                            className="stroke-blue-300"
                        >
                            <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="1.5"
                                d="M11 6L5 12M5 12L11 18M5 12H19"
                            ></path>
                        </svg>
                        {/* </button> */}
                    </button>
                </div>
                <div className="">
                    <button
                        className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
                        title="Go Forward"
                        onClick={handleNext}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60px"
                            height="60px"
                            viewBox="0 0 24 24"
                            className="stroke-blue-300"
                        >
                            <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="1.5"
                                d="M13 6L19 12M19 12L13 18M19 12H5"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ImageSlider2;