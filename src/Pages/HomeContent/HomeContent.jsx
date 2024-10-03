import React from "react";
import edTech from '../../assets/edTech.png'
import FaqComponent from "../FAQ/Faqs";
import LOGOCSSE from '../../assets/LOGOCSSE.png'
import styles from './HomeContent.module.css';
import Gallery from "../triCard/triCard";

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

<section className="col2 color ss-style-curvedown overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between p-8">
<div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
    <div className="logo-div relative overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out mr-0 md:mr-60">
      <img
        src={LOGOCSSE}
        alt="Hexagonal Image"
        className="w-60 h-70 md:w-70 md:h-70 object-cover"
      />
    </div>
</div>
  
  <div className="w-full md:w-1/2 mb-6 md:mb-0 text-white mr-20">
    <h2 className="text-3xl font-bold mb-4 underline">About CSSE</h2>
    <p className="text-lg ml-10 text-left">
    ▪ Founded in the year 2013, by Alumni Respected Ankit Porwal and Vivek Samele.<br/>
    ▪ The basic OBJECTIVES of the society are:<br/>
    ▪ to develop the managerial and soft skills of the students<br/>
    ▪ to organize activities for social awareness and social benefits.<br/>
    ▪ Toincrease mutual bonding among each other.<br/>
    ▪ The Society organizes Events(Formal and Informal)for the students of all MCA & B.
      Tech (IT) Students.<br/>
    ▪ The Society organizes personality development programs such as seminars, 
      workshops, and Language classes for the students to learn from their seniors.
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



<svg id="curveupcolor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 C 20 0 50 0 100 100 Z" />
      </svg>
      <section className="color overflow-hidden flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 w-full p-4  hover:scale-105 transition-transform duration-300 ease-in-out">
          <img 
            src={edTech} 
            alt="Vision" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 w-full p-4">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">
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
