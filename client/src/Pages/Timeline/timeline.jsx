import React, { useState } from 'react';
import VerticalTimeline from './verticalTimeline';
import VerticalTimelineElement from './verticalTimelineElement';
import './Timeline.css'; // Make sure to import the CSS
import '../../components/button/Button'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import { csseEvents } from '../../utils/eventsArray';
import EventRegistrationModal from '../../components/Events/EventRegister/EventRegistrationModal';
import { useAuth } from '../../context/AuthContext';
import { eventAPI } from '../../utils/api';

const Timeline = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registeringEvent, setRegisteringEvent] = useState(null); // Track which event is being registered

  // Check if user is logged in using AuthContext
  const { user, isAuthenticated } = useAuth();

  const isLoggedIn = () => {
    return isAuthenticated;
  };

  // Check if event requires modal (Technokratos or Formal Events)
  const requiresModal = (eventName) => {
    const name = eventName.toLowerCase();
    return name.includes('technokratos') || name.includes('formal');
  };

  const handleRegisterClick = async (eventName) => {
    // Check if user is logged in
    if (!isLoggedIn()) {
      navigate('/Login');
      return;
    }

    // If Technokratos or Formal Event, show modal
    if (requiresModal(eventName)) {
      setSelectedEvent(eventName);
      setIsModalOpen(true);
    } else {
      // For other events (single member), register directly
      setRegisteringEvent(eventName);
      try {
        const formData = {
          event: eventName,
          numberOfMembers: 1,
          teamMembers: [] // Empty array for single member - backend will use logged-in user's details
        };

        const response = await eventAPI.register(formData);
        
        if (response.data.success) {
          alert('Event registered successfully!');
        }
      } catch (err) {
        const errorMessage = err.response?.data?.message || 'Registration failed. Please try again.';
        alert(errorMessage);
        console.error('Registration Error:', err);
      } finally {
        setRegisteringEvent(null);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      <div className='w-full items-center flex justify-center mt-10'>
        <Link to='/csse'>
          <Button text={"Explore CSSE"} />
        </Link>
      </div>
      <VerticalTimeline layout="2-columns" animate={true} className="timeline-container">
        {
          csseEvents?.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              icon={<span className="timeline-icon">{item.icon}</span>}
              position={item.position}
            >
              <h3 className='underline font-semibold'>• {item.name}</h3>
              <p>{item.description}</p>
              <button 
                className='mt-3 px-4 py-1 bg-green-600 rounded disabled:opacity-50 disabled:cursor-not-allowed' 
                onClick={() => handleRegisterClick(item.name)}
                disabled={registeringEvent === item.name}
              >
                {registeringEvent === item.name ? 'Registering...' : 'Click to register!'}
              </button>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
      <EventRegistrationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        eventName={selectedEvent}
      />
    </div>
  );
};

export default Timeline;
