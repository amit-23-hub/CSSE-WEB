import React from "react";
import "./Developer.css";
import { FaTwitter, FaPinterest, FaFacebook, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import amit from "../../assets/amitkumarsahani.jpeg";
import AdityaTripathi from "../../assets/AdityaTripathi.jpg";
import Akash from "../../assets/AkashGupta.jpg";


const Developer = () => {
  const message = `There are many variations of passages of Lorem Ipsum available but the
      majority have suffered alteration in some injected humour.`;
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="text-center col-md-12">
            <h2 className="section-title">The Team Behind Website</h2>
          </div>
          <div className="team-col">
            <div className="team-item">
              <img
                src={amit}
                className="team-img"
                alt="Amit"
              />
              <h3>Amit Kumar Sahani</h3>
              <div className="team-info">
                <p>Student Secretary</p>
              </div>


              <ul className="team-icon">
                <li>
                  <span className="twitter">
                    <FaTwitter />
                  </span>
                </li>

                <li>
                  <span className="linkedin">
                    <FaLinkedin />
                  </span>
                </li>

                <li>
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </li>

                <li>
                  <span className="instagram">
                    <FaInstagram />
                  </span>
                </li>
              </ul>
            </div>
            <div className="team-item">
              <img
                src={AdityaTripathi}
                className="team-img"
                alt="aditya"
              />
              <h3>Aditya Tripathi</h3>
              <div className="team-info">
                <p>Executive Member</p>
              </div>


              <ul className="team-icon">
                <li>
                  <span className="twitter">
                    <FaTwitter />
                  </span>
                </li>

                <li>
                  <span className="linkedin">
                    <FaLinkedin />
                  </span>
                </li>

                <li>
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </li>

                <li>
                  <span className="instagram">
                    <FaInstagram />
                  </span>
                </li>
              </ul>
            </div>
            <div className="team-item">
              <img
                src={Akash}
                className="team-img"
                alt="akash"
              />
              <h3>Akash Gupta</h3>
              <div className="team-info">
                <p>Technical Head</p>
              </div>


              <ul className="team-icon">
                <li>
                  <span className="twitter">
                    <FaTwitter />
                  </span>
                </li>

                <li>
                  <span className="linkedin">
                    <FaLinkedin />
                  </span>
                </li>

                <li>
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </li>

                <li>
                  <span className="instagram">
                    <FaInstagram />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;