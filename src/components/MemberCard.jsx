import React from 'react';

const MemberCard = ({ name, branch, designation, image, linkedin }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out max-w-sm overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-br-lg">
          {designation}
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-400 mb-4">{branch}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default MemberCard;
