import React from 'react';

const events = [
  {
    title: 'Tech Symposium',
    description: 'An event to showcase the latest in tech innovations. Come and see the latest tech projects by our society members.',
    image: './assets/poster-1.png', // Replace with your image path
  },
  {
    title: 'Cultural Fest',
    description: 'Experience the vibrant culture of our college with performances, art exhibitions, and much more!',
    image: 'path_to_image2.jpg', // Replace with your image path
  },
  {
    title: 'Annual Sports Meet',
    description: 'Showcase your athletic skills and compete for glory at the Annual Sports Meet.',
    image: 'path_to_image3.jpg', // Replace with your image path
  },
  {
    title: 'Entrepreneurship Summit',
    description: 'Interact with successful entrepreneurs and get insights on starting your own business.',
    image: 'path_to_image4.jpg', // Replace with your image path
  },
  {
    title: 'Coding Marathon',
    description: 'Join our 24-hour coding marathon to solve complex challenges and win amazing prizes!',
    image: 'path_to_image5.jpg', // Replace with your image path
  },
  {
    title: 'Art Workshop',
    description: 'Participate in a workshop led by professional artists to hone your artistic skills.',
    image: 'path_to_image6.jpg', // Replace with your image path
  },
  {
    title: 'Science Exhibition',
    description: 'Explore groundbreaking scientific experiments and presentations by students.',
    image: 'path_to_image7.jpg', // Replace with your image path
  },
  {
    title: 'Music Fest',
    description: 'End the year with a bang! Enjoy live performances by various bands at the annual Music Fest.',
    image: 'path_to_image8.jpg', // Replace with your image path
  },
];

export default function Events() {
  return (
    <div className="p-8 bg-slate-950 text-white space-y-12">
      {events.map((event, index) => (
        <div
          key={index}
          className={`flex items-center justify-between space-x-8 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
            <p className="text-lg">{event.description}</p>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="hexagon-container transform hover:scale-105 transition-transform duration-500">
              <div className="hexagon">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
