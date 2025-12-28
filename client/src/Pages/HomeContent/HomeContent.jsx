import React from "react";
import edTech from '../../assets/edTech.png'
import Mission from '../../assets/Mission.png'
import join from '../../assets/join.jpg'
import impact from '../../assets/impact.jpg'
import FaqComponent from "../FAQ/Faqs";
import LOGOCSSE from '../../assets/LOGOCSSE.png'
import styles from './HomeContent.module.css';
import Gallery from "../triCard/triCard";
import ReactPlayer from 'react-player'
const Section = () => {
  return (
    <div className={styles.container}>
      <svg
  id="curveupcolor"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="100%"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <path d="M0 100 C 20 0 50 0 100 100 Z" />
</svg>

<section className="col2 color ss-style-curvedown overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 bg-black">
<div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
    <div className="logo-div relative overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out mr-0 md:mr-60">
      <img
        src={LOGOCSSE}
        alt="society logo"
        className="w-60 h-70 md:w-70 md:h-70 object-cover"
      />
    </div>
</div>
  
  <div className="w-full md:w-1/2 text-white mr-10">
    <h2 className="text-3xl font-bold mb-4 underline">About CSSE</h2>
    <p className="text-lg ml-10 text-left">
    ▪ Founded in the year 2013, by Alumni Respected Ankit Porwal and Vivek Samele.<br/>
    ▪ The basic OBJECTIVES of the society are:<br/>
    ▪ to develop the managerial and soft skills of the students<br/>
    ▪ to organize activities for social awareness and social benefits.<br/>
    ▪ To increase mutual bonding among each other.<br/>
    </p>
  </div>

</section>

<svg
  id="curvedowncolor"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="100%"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <path d="M0 0 C 50 100 80 100 100 0 Z" />
</svg>


<svg
  id="curveupcolor"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="100%"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <path d="M0 100 C 20 0 50 0 100 100 Z" />
</svg>

<section className="col2 color ss-style-curvedown overflow-hidden flex flex-col md:flex-row-reverse items-center justify-between p-8 bg-black">
<div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
    <div className="logo-div relative overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out mr-0 md:mr-60">
      <img
      src={edTech} 
      alt="Vision" 
        className="w-80 h-auto object-cover rounded-full shadow-lg"
      />
    </div>
</div>
  
  <div className="w-full md:w-1/2 text-white mr-10">
    <h2 className="text-3xl font-bold mb-4 underline">Our Vision</h2>
    <p className="text-lg ml-10 text-left">
      Our vision is to empower individuals and organizations by providing high-quality services that foster growth, innovation, and sustainability. We aim to be leaders in our field, setting benchmarks in excellence and contributing positively to society.
    </p>
  </div>

</section>

<svg
  id="curvedowncolor"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="100%"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <path d="M0 0 C 50 100 80 100 100 0 Z" />
</svg>


<svg
  id="curveupcolor"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="100%"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <path d="M0 100 C 20 0 50 0 100 100 Z" />
</svg>

<section className="col2 color ss-style-curvedown overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 bg-black">
<div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
    <div className="logo-div relative overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out mr-0 md:mr-60">
    <img 
      src={join} 
      alt="join csse" 
     className="w-60 h-auto object-cover rounded-full shadow-lg"
     />
    </div>
</div>
  
  <div className="w-full md:w-1/2 text-white mr-10">
    <h2 className="text-3xl font-bold mb-4 underline">Why join CSSE ?</h2>
    <p className="text-lg ml-10 text-left">
      ▪ Joining CSSE offers students a chance to develop essential life skills such as leadership, communication, and teamwork.<br/>
      ▪ The society conducts various formal and informal events, including personality development programs, workshops, seminars, and language classes.<br/>
      ▪ By learning from seniors and participating in these activities, students enhance their professional and personal growth.
    </p>
  </div>

</section>

<svg
  id="curvedowncolor"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="100%"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <path d="M0 0 C 50 100 80 100 100 0 Z" />
</svg>


<svg
  id="curveupcolor"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="100%"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <path d="M0 100 C 20 0 50 0 100 100 Z" />
</svg>

<section className="col2 color ss-style-curvedown overflow-hidden flex flex-col md:flex-row-reverse items-center justify-between p-8 bg-black">
<div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
    <div className="logo-div relative overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out mr-0 md:mr-60">
    <img 
            src={impact} 
            alt="community"
            className="w-60 h-auto object-cover rounded-full shadow-lg"
          />
    </div>
</div>
  
  <div className="w-full md:w-1/2 text-white mr-10">
    <h2 className="text-3xl font-bold mb-4 underline ml-2">Community Impact</h2>
    <p className="text-lg ml-10 text-left">
      ▪ CSSE plays a vital role in fostering community awareness and social responsibility.<br/>
      ▪ The society organizes activities that not only benefit students but also contribute to the broader social good.<br/>
      ▪ Through events that encourage mutual cooperation and bonding, the society builds a strong, supportive network among students, creating a lasting impact on both the individual and community levels.<br/>
    </p>
  </div>

</section>

<svg
  id="curvedowncolor"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="100%"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <path d="M0 0 C 50 100 80 100 100 0 Z" />
</svg>

      <section className={`${styles.col3} ${styles.ssStyleDoubleDiagonal} pt-3 pb-5`}>
     
      </section>

      <section className={`${styles.col3} ${styles.ssStyleDoubleDiagonal} pt-3 pb-5`}>
        <Gallery/>
      </section>

      <section className={`${styles.color} ${styles.ssStyleBigtriangle} overflow-hidden`}>
        <FaqComponent/>
      </section>

      <svg id="bigtrianglecolor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
        <path d="M0 0 L50 100 L100 0 Z" />
      </svg>
    </div>
  );
};

export default Section;
