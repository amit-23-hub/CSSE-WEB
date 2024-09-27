import React from "react";
import './HomeContent.css';

const Section = () => {
  return (
    <div className="container">
      <section className="col2 ss-style-triangles overflow-hidden">
        <div className="column text">
          <h2>TITLE</h2>
          <p>About the society or discription</p>
        </div>
      </section>

      <section className="color overflow-hidden">
        <p>Vision</p>
      </section>

      <section className="col3 ss-style-double-diagonal">
        <div className="column">
        <p>Videos & Gallery</p>
        </div>
      </section>

      <section className="col2 ss-style-half-circle overflow-hidden">
        <div className="column text">
          <p>Videos & Gallery</p>
        </div>
      </section>

      <section className="color ss-style-bigtriangle overflow-hidden">
        <p>Frequently Asked Questions</p>
      </section>

      <svg id="bigtrianglecolor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
        <path d="M0 0 L50 100 L100 0 Z" />
      </svg>

      <svg id="curveupcolor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 C 20 0 50 0 100 100 Z" />
      </svg>

      <section className="col2 color ss-style-curvedown overflow-hidden">
        <div className="column text">
          <p>Something More</p>
        </div>
      </section>

      <svg id="curvedowncolor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0 C 50 100 80 100 100 0 Z" />
      </svg>

      <section className="col2 overflow-hidden">
        <p>Curve Up</p>
      </section>

      <section className="col2 color ss-style-multi-triangles overflow-hidden">
        <div className="column text">
          <p>Big Section</p>
        </div>
      </section>

      <section className="col2 color ss-style-rounded-split">
        <div className="column text">
          <p>Big Section</p>
        </div>
      </section>

      <section className="col3 ss-style-inverted-rounded">
        <div className="column">
          <p>Inverted Round</p>
        </div>
      </section>

      <svg id="bigtriangleshadow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path id="trianglePath1" d="M0 0 L50 100 L100 0 Z" />
        <path id="trianglePath2" d="M50 100 L100 40 L100 0 Z" />
      </svg>

      <section className="color col3 ss-style-inczigzag">
        <div className="column">
          <p>Ending</p>
        </div>
      </section>
    </div>
  );
};

export default Section;
