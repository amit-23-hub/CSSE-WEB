import React, { useState, useEffect } from 'react';
import './Hero.css';
import ImageSlider from '../Society/Society';
import Navbar from '../Navbar/Navbar';
import Bottom from '../Pages/Bottom/Bottom';
import Timeline from '../Pages/Timeline/timeline';
import SliderInfo from '../Pages/SliderInfo/sliderInfo';
import HomeContent from '../Pages/HomeContent/HomeContent';
import Particle from '../components/particle';
import { HashLoader } from 'react-spinners';
import ImageSlider2 from '../Society/Society2';

const Hero = () => {
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        setTimeout(() => {
            setLoading(false);
        }, 7000);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <HashLoader color="#66129c" size={50} />
                </div>
            ) : (
                <>
                    <div className='h-35 bg-slate-950'>
                        <Navbar />
                    </div>
                    <div className='bg-slate-950 relative'>
                        <Particle />
                        <div className="relative z-10">
                            {isMobile ? <ImageSlider2 /> : <ImageSlider />}
                            <SliderInfo />
                            <HomeContent className="overflow-hidden" />
                            <Timeline />
                        </div>
                        <Bottom />
                    </div>
                </>
            )}
        </>
    );
};

export default Hero;
