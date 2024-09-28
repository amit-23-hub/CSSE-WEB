import React  from 'react';
//  import locomotiveScroll from 'locomotive-scroll'; // Corrected import name
import ImageSlider from '../Society/Society';
import SocietyShowCard from '../Society/SocietyShow';
import Navbar from '../Navbar/Navbar';
import Bottom from '../Pages/Bottom/Bottom';
import Timeline from '../Pages/Timeline/timeline';
import SliderInfo from '../Pages/SliderInfo/sliderInfo';
import HomeContent from '../Pages/HomeContent/HomeContent' ;
const Hero = () => {
    // const scrollRef = useRef(null);

    // useEffect(() => {
    //     const scroll = new locomotiveScroll({
    //         el: scrollRef.current,
    //         smooth: true,
    //     });

    //     return () => {
    //         scroll.destroy(); // Properly call the destroy() method
    //     };
    // }, []);

    return (
        <>
           

            <div className='h-35 bg-slate-950'><Navbar/> </div>
            <div className=' bg-slate-950'>
            <ImageSlider /> 
            <SliderInfo/>
            <HomeContent className="overflow-hidden"/>
            <Timeline/>
            {/* <SocietyList/> */}
            {/* <SocietyShowCard/> */}
            <Bottom/>
    
             </div>
            
         
        </>
    );
};

export default Hero;
