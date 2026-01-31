import React, { useState, useEffect } from 'react';
import { eventAPI } from '../../../utils/api';

const EventRegistrationModal = ({ isOpen, onClose, event, user }) => {
  const [subEventId, setSubEventId] = useState('');
  const [numberOfMembers, setNumberOfMembers] = useState(1);
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Reset form when event changes or modal opens
  useEffect(() => {
    if (isOpen && event) {
      setSubEventId('');
      setNumberOfMembers(1);
      // Initialize first participant with logged-in user details
      if (user) {
        setParticipants([{
          name: user.name || '',
          email: user.email || '',
          year: user.year || '',
          branch: user.branch || '',
          phone: user.phone || ''
        }]);
      } else {
        setParticipants([]);
      }
      setError('');
    }
  }, [isOpen, event, user]);

  // Handle number of members change
  useEffect(() => {
    const num = parseInt(numberOfMembers) || 1;
    setParticipants(prev => {
      const newParticipants = [...prev];
      if (newParticipants.length < num) {
        // Add new empty participants
        for (let i = newParticipants.length; i < num; i++) {
          newParticipants.push({ name: '', email: '', year: '', branch: '', phone: '' });
        }
      } else if (newParticipants.length > num) {
        // Remove excess
        return newParticipants.slice(0, num);
      }
      return newParticipants;
    });
  }, [numberOfMembers]);

  const handleParticipantChange = (index, field, value) => {
    const newParticipants = [...participants];
    newParticipants[index] = { ...newParticipants[index], [field]: value };
    setParticipants(newParticipants);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validate required fields for all participants
      for (const p of participants) {
        if (!p.name || !p.email || !p.branch || !p.year || !p.phone) {
          setError('All fields are required for all participants');
          setLoading(false);
          return;
        }
      }

      const payload = {
        eventId: event._id,
        subEventId: subEventId || null,
        participants
      };

      const response = await eventAPI.register(payload);

      if (response.data.success) {
        alert('Event registration successful!');
        onClose();
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Registration failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !event) return null;

  // Determine subEvent selection options
  const subEvents = event.subEvents || [];

  // Determine max participants based on selected subEvent or default
  const selectedSubEvent = subEvents.find(se => se._id === subEventId);
  // Default max to 10 if not specified, or 1 if solo/no subevent logic (but here we are in modal so likely team or subevent)
  // If event has subevents, we must select one usually?
  // Let's assume if hasSubEvents is true, subEvent selection is mandatory unless logic says otherwise.
  // The schema says subEvent is optional in Registration, but logically for "Technokratos" user picks a sub-event.

  const currentMaxParticipants = selectedSubEvent ? (selectedSubEvent.maxParticipants || 10) : (event.maxParticipants || 10);
  const currentMinParticipants = selectedSubEvent ? (selectedSubEvent.minParticipants || 1) : (event.minParticipants || 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#1e293b] rounded-2xl shadow-xl p-8 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-cyan-400 text-2xl font-bold transition-colors"
        >
          ×
        </button>

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          {event.name} Registration
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* SubEvent Selection */}
          {event.hasSubEvents && (
            <div className="flex flex-col">
              <label className="text-white mb-1">Select Sub-Event</label>
              <select
                value={subEventId}
                onChange={(e) => setSubEventId(e.target.value)}
                className="bg-[#334155] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              >
                <option value="">Choose Sub-Event</option>
                {subEvents.map(se => (
                  <option key={se._id} value={se._id}>{se.name}</option>
                ))}
              </select>
            </div>
          )}

          {/* Number of Members */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Number of Participants</label>
            <select
              value={numberOfMembers}
              onChange={(e) => setNumberOfMembers(parseInt(e.target.value))}
              className="bg-[#334155] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            >
              {Array.from({ length: currentMaxParticipants - currentMinParticipants + 1 }, (_, i) => i + currentMinParticipants).map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Participant' : 'Participants'}
                </option>
              ))}
            </select>
          </div>

          {/* Participants Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-gray-600 pb-2">
              Participant Details
            </h3>
            {participants.map((member, index) => (
              <div key={index} className="bg-[#334155] p-4 rounded-lg space-y-4">
                <h4 className="text-cyan-400 font-medium mb-3">
                  {index === 0 ? "Team Leader (You)" : `Member ${index + 1}`}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="flex flex-col">
                    <label className="text-white mb-1 text-sm">Name</label>
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => handleParticipantChange(index, 'name', e.target.value)}
                      className="bg-[#475569] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                      disabled={index === 0} // Lock leader name? Optional, maybe allow edit if needed but usually leader is fixed
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white mb-1 text-sm">Email</label>
                    <input
                      type="email"
                      value={member.email}
                      onChange={(e) => handleParticipantChange(index, 'email', e.target.value)}
                      className="bg-[#475569] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                      disabled={index === 0}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white mb-1 text-sm">Phone</label>
                    <input
                      type="tel"
                      value={member.phone}
                      onChange={(e) => handleParticipantChange(index, 'phone', e.target.value)}
                      className="bg-[#475569] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white mb-1 text-sm">Year</label>
                    <input
                      type="text"
                      value={member.year}
                      onChange={(e) => handleParticipantChange(index, 'year', e.target.value)}
                      className="bg-[#475569] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                      disabled={index === 0}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white mb-1 text-sm">Branch</label>
                    <select
                      value={member.branch}
                      onChange={(e) => handleParticipantChange(index, 'branch', e.target.value)}
                      className="bg-[#475569] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                      disabled={index === 0}
                    >
                      <option value="">Select</option>
                      <option value="IT">IT</option>
                      <option value="CSE">CSE</option>
                      <option value="ECE">ECE</option>
                      <option value="EE">EE</option>
                      <option value="ME">ME</option>
                      <option value="CE">CE</option>
                      <option value="MCA">MCA</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventRegistrationModal;
