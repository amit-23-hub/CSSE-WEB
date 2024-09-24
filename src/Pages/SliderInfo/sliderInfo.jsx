import React from 'react';
import { Link } from 'react-router-dom';
export default function SliderInfo() {
  return (
    <div className="flex flex-col items-center text-white">
      <h3 className="text-4xl mb-2">CSSE</h3>
      <p className="text-lg mb-4 text-center">
        Computer Society of Software Engineers, Departmental society of Information Technology, MMMUT Gorakhpur
      </p>
      <Link to='/csse'>
                <button className='mt-4 mb-12 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded'>Start</button>
                
              </Link>
    </div>
  );
}
