import React from "react";
import "./Developer.css";
import { FaTwitter, FaPinterest, FaFacebook, FaDribbble } from "react-icons/fa";
import amit from "../../assets/amitkumarsahani.jpeg" ;
import AdityaTripathi from "../../assets/AdityaTripathi.jpg" ;


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
                <p>Executive Member</p>
              </div>
              

              <ul className="team-icon">
                <li>
                  <span className="twitter">
                    <FaTwitter />
                  </span>
                </li>

                <li>
                  <span className="pinterest">
                    <FaPinterest />
                  </span>
                </li>

                <li>
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </li>

                <li>
                  <span className="dribble">
                    <FaDribbble />
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
                  <span className="pinterest">
                    <FaPinterest />
                  </span>
                </li>

                <li>
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </li>

                <li>
                  <span className="dribble">
                    <FaDribbble />
                  </span>
                </li>
              </ul>
            </div>
            <div className="team-item">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                className="team-img"
                alt="pic"
                style={{ width: '500px', height: '145px' }}
              />
              <h3>ELISA JOHANSON</h3>
              <div className="team-info">
                <p>Marketing Manager</p>
              </div>
              

              <ul className="team-icon">
                <li>
                  <span className="twitter">
                    <FaTwitter />
                  </span>
                </li>

                <li>
                  <span className="pinterest">
                    <FaPinterest />
                  </span>
                </li>

                <li>
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </li>

                <li>
                  <span className="dribble">
                    <FaDribbble />
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