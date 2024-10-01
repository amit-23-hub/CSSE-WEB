import React from 'react';
import './Hero.css';
import ImageSlider from '../Society/Society';
import Navbar from '../Navbar/Navbar';
import Bottom from '../Pages/Bottom/Bottom';
import Timeline from '../Pages/Timeline/timeline';
import SliderInfo from '../Pages/SliderInfo/sliderInfo';
import HomeContent from '../Pages/HomeContent/HomeContent';
import Particle from '../components/particle';

const Hero = () => {
    return (
        <>
            <div className='h-35 bg-slate-950'>
                <Navbar />
            </div>
            <div className='bg-slate-950 relative'> {/* Set relative positioning for the parent */}
                <Particle />
                <div className="relative z-10"> {/* Ensure content is above particles */}
                    <ImageSlider />
                    <SliderInfo />
                    <HomeContent className="overflow-hidden" />
                    <Timeline />
                </div>
                <Bottom />
            </div>
        </>
    );
};

export default Hero;
