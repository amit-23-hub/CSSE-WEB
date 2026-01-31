import React, { useState } from 'react';
import VerticalTimeline from './verticalTimeline';
import VerticalTimelineElement from './verticalTimelineElement';
import './Timeline.css';
import '../../components/button/Button'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import { csseEvents } from '../../utils/eventsArray';
import EventRegistrationModal from '../../components/Events/EventRegister/EventRegistrationModal';
import { useAuth } from '../../context/AuthContext';
import { eventAPI } from '../../utils/api';
import { useEffect } from 'react';

const Timeline = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registeringEventId, setRegisteringEventId] = useState(null);

  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await eventAPI.getAllEvents();
      if (response.data.success) {
        setEvents(response.data.events);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const isLoggedIn = () => {
    return isAuthenticated;
  };

  const handleRegisterClick = async (event) => {
    if (!isLoggedIn()) {
      navigate('/Login');
      return;
    }

    if (event.hasSubEvents) {
      setSelectedEvent(event);
      setIsModalOpen(true);
    } else {
      // Direct registration for single events (Solo)
      // For solo event, we still need to provide participant details if we want to follow the schema strictly,
      // OR the backend could auto-fill from user profile for solo events if we implement that convenience.
      // However, the requested schema change says "Registration should have participants array".
      // The user said: "frontend ... modal to fill details of participants ... team leader from logged in user"
      // So even for solo, we might want to confirm details or just auto-fill.
      // For UX, if it's a simple click-to-register, we can auto-fill strictly from User profile on backend or frontend.
      // But the prompt said: "if event is a single person event, then he/she will be directly registerd by just one click"

      // So I will assume for direct click (Solo), we auto-register the logged-in user.
      // BUT WAIT, the new schema requires `participants` array with `name, email, year, branch, phone`.
      // The backend `register` controller expects this array.
      // So I should construct it from the logged-in `user` context if available.

      if (!user) {
        // Should not happen if isLoggedIn check passes, but good safety
        alert("Please log in to register.");
        return;
      }

      setRegisteringEventId(event._id);
      try {
        const participantData = {
          name: user.name,
          email: user.email,
          year: user.year,
          branch: user.branch,
          phone: user.phone || '0000000000' // Phone might be missing if old user user
        };

        const payload = {
          eventId: event._id,
          participants: [participantData]
        };

        const response = await eventAPI.register(payload);

        if (response.data.success) {
          alert('Event registered successfully!');
        }
      } catch (err) {
        const errorMessage = err.response?.data?.message || 'Registration failed. Please try again.';
        alert(errorMessage);
        console.error('Registration Error:', err);
      } finally {
        setRegisteringEventId(null);
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
          events.map((event, index) => (
            <VerticalTimelineElement
              key={event._id}
              date={event.eventDate ? new Date(event.eventDate).toLocaleDateString() : new Date(event.createdAt).toLocaleDateString()}
              icon={
                event.icon && event.icon.startsWith('http') ? (
                  <img src={event.icon} alt="" className="timeline-icon-img" />
                ) : (
                  <span className="timeline-icon">{event.icon}</span>
                )
              }
              position={index % 2 === 0 ? 'left' : 'right'}
            >
              <h3 className='underline font-semibold'>• {event.name}</h3>
              <p>{event.description}</p>
              {event.status === 'open' ? (
                <button
                  className='mt-3 px-4 py-1 bg-green-600 rounded disabled:opacity-50 disabled:cursor-not-allowed text-white'
                  onClick={() => handleRegisterClick(event)}
                  disabled={registeringEventId === event._id}
                >
                  {registeringEventId === event._id ? 'Registering...' : 'Click to register!'}
                </button>
              ) : (
                <span className='mt-3 px-4 py-1 text-red-500 font-bold'>
                  {event.status === 'closed' ? 'Closed' : 'Coming Soon'}
                </span>
              )}
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
      {selectedEvent && (
        <EventRegistrationModal
          isOpen={isModalOpen}
          onClose={closeModal}
          event={selectedEvent}
          user={user}
        />
      )}
    </div>
  );
};

export default Timeline;
