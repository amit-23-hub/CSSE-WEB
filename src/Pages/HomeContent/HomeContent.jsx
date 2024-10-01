import React from "react";
import './HomeContent.css';
import img1 from '../../assets/planet1.png'
import Gallery from "../triCard/triCard";
import FaqComponent from "../FAQ/Faqs";
const Section = () => {
  return (
    <div className="container">
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
  <div className="w-full md:w-1/2 mb-6 md:mb-0 text-white">
    <h2 className="text-3xl font-bold mb-4">About CSSE</h2>
    <p className="text-lg ml-10">
      About the society or description goes here. This is where you can add more details about the society or event.
      About the society or description goes here. This is where you can add more details about the society or event.
      About the society or description goes here. This is where you can add more details about the society or event.
    </p>
  </div>

  <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
    <div className="relative hexagon overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out mr-0 md:mr-20">
      <img
        src={img1}
        alt="Hexagonal Image"
        className="w-70 h-70 md:w-70 md:h-70 object-cover"
      />
    </div>
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
  <div className="md:w-1/2 w-full p-4">
    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
    <p className="text-lg">
      Our vision is to empower individuals and organizations by providing high-quality services that foster growth, innovation, and sustainability. We aim to be leaders in our field, setting benchmarks in excellence and contributing positively to society.
    </p>
  </div>
  <div className="md:w-1/2 w-full p-4">
    <img 
      src={img1} 
      alt="Vision" 
      className="w-full h-auto object-cover rounded-lg shadow-lg"
    />
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

      <section className="col3 ss-style-double-diagonal pt-3 pb-5">
        
       <Gallery/>
        
      </section>


      <section className="color ss-style-bigtriangle overflow-hidden">
        <FaqComponent/>
      </section>

      <svg id="bigtrianglecolor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
        <path d="M0 0 L50 100 L100 0 Z" />
      </svg>

      

      
    </div>
  );
};

export default Section;
