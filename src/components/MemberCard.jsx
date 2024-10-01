import React from 'react';
import './MemberCard.scss'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const MemberCard = ({ name, branch, designation, image, linkedin }) => {
  return (
    <div className="card-container bg-slate-950 text-white shadow-lg rounded-xl transition-all duration-300 ease-in-out hover:shadow-xl m-4">
      <div className="card relative w-80 h-96 flex flex-col items-center justify-center rounded-lg overflow-hidden backdrop-filter backdrop-blur-lg">
        <div className="content flex flex-col items-center justify-center opacity-50 transition-opacity duration-300 hover:opacity-100">
          <div className="img w-36 h-36 rounded-full border-8 border-white overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="cardContent text-center mt-4">
            <h3 className="text-lg font-semibold uppercase tracking-wide">
              {name}
              <br />
              <span className="text-sm font-light capitalize">{designation}</span>
            </h3>
            <p className="text-gray-400 mt-2">{branch}</p>
          </div>
        </div>
        <ul className="sci flex justify-center mt-6 space-x-4 opacity-0 transform translate-y-10 transition-all duration-500 hover:opacity-100 hover:translate-y-0">
          <li className="i1 transition-all duration-300 hover:text-blue-500">
            <a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a>
          </li>
          <li className="i2 transition-all duration-300 hover:text-pink-500">
            <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li className="i3 transition-all duration-300 hover:text-gray-700">
            <a href="#"><i className="fab fa-github" aria-hidden="true"></i></a>
          </li>
          <li className="linkedin transition-all duration-300 hover:text-blue-700">
            <a href={linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MemberCard;
