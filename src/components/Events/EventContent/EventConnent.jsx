import React from 'react';
import './EventContent.css';

const events = [
  {
    title: 'Tech Symposium',
    description: 'An event to showcase the latest in tech innovations. Come and see the latest tech projects by our society members. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nihil? Ut voluptas et porro fuga nemo, nostrum quo molestias, nobis numquam tempora aliquam, soluta non? Quia autem aperiam iste minima.',
    image: './assets/poster-1.png', // Replace with your image path
  },
  {
    title: 'Cultural Fest',
    description: 'Experience the vibrant culture of our college with performances, art exhibitions, and much more! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nihil? Ut voluptas et porro fuga nemo, nostrum quo molestias, nobis numquam tempora aliquam, soluta non? Quia autem aperiam iste minima.',
    image: 'path_to_image2.jpg', // Replace with your image path
  },
  {
    title: 'Annual Sports Meet',
    description: 'Showcase your athletic skills and compete for glory at the Annual Sports Meet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nihil? Ut voluptas et porro fuga nemo, nostrum quo molestias, nobis numquam tempora aliquam, soluta non? Quia autem aperiam iste minima.',
    image: 'path_to_image3.jpg', // Replace with your image path
  },
  {
    title: 'Entrepreneurship Summit',
    description: 'Interact with successful entrepreneurs and get insights on starting your own business. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nihil? Ut voluptas et porro fuga nemo, nostrum quo molestias, nobis numquam tempora aliquam, soluta non? Quia autem aperiam iste minima.',
    image: 'path_to_image4.jpg', // Replace with your image path
  },
  {
    title: 'Coding Marathon',
    description: 'Join our 24-hour coding marathon to solve complex challenges and win amazing prizes! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nihil? Ut voluptas et porro fuga nemo, nostrum quo molestias, nobis numquam tempora aliquam, soluta non? Quia autem aperiam iste minima.',
    image: 'path_to_image5.jpg', // Replace with your image path
  },
  {
    title: 'Art Workshop',
    description: 'Participate in a workshop led by professional artists to hone your artistic skills. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nihil? Ut voluptas et porro fuga nemo, nostrum quo molestias, nobis numquam tempora aliquam, soluta non? Quia autem aperiam iste minima.',
    image: 'path_to_image6.jpg', // Replace with your image path
  },
  {
    title: 'Science Exhibition',
    description: 'Explore groundbreaking scientific experiments and presentations by students. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nihil? Ut voluptas et porro fuga nemo, nostrum quo molestias, nobis numquam tempora aliquam, soluta non? Quia autem aperiam iste minima.',
    image: 'path_to_image7.jpg', // Replace with your image path
  },
  {
    title: 'Music Fest',
    description: 'End the year with a bang! Enjoy live performances by various bands at the annual Music Fest. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nihil? Ut voluptas et porro fuga nemo, nostrum quo molestias, nobis numquam tempora aliquam, soluta non? Quia autem aperiam iste minima.',
    image: 'path_to_image8.jpg', // Replace with your image path
  },
];

const Boxes = () => {
  return (
    <div className='head'>
      <div className='container'>
        {events.map((event, index) => (
          <div className='w-full m-0 pt-0 pb-4 pr-0 pl-0 flex' key={index}>
            {index % 2 === 0 ?
            <div className='box flex p-4'>
              <div className='w-[50%] text-center items-center flex flex-col justify-center gap-5'>
                <p className=' text-white text-6xl'><span>{event.title}</span></p>
                <p className='text-white'>{event.description}</p>
              </div>
              <div className='w-[50%] top_section text-center flex justify-center items-center text-white text-6xl'>
              </div>
            </div> :
            <div className={`box box2 flex p-4`}>
              <div className='w-[50%] top_section text-center flex justify-center items-center text-white text-6xl'>
              </div>
              <div className='w-[50%] text-center items-center flex flex-col justify-center gap-5'>
                <p className=' text-white text-6xl'><span>{event.title}</span></p>
                <p className='text-white'>{event.description}</p>
              </div>
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxes;