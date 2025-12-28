import React, { useState, useEffect } from 'react';
import { adminAPI } from '../utils/api';
import Navbar from '../Navbar/Navbar';
import Bottom from '../Pages/Bottom/Bottom';

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      loadRegistrations(selectedEvent);
    } else {
      setRegistrations([]);
    }
  }, [selectedEvent]);

  const loadEvents = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await adminAPI.getAllEvents();
      if (response.data.success) {
        setEvents(response.data.events);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load events');
      console.error('Error loading events:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadRegistrations = async (eventName) => {
    setLoading(true);
    setError('');
    try {
      const response = await adminAPI.getEventRegistrations(eventName);
      if (response.data.success) {
        setRegistrations(response.data.registrations);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load registrations');
      console.error('Error loading registrations:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0f172a] p-6">
        <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Admin Dashboard</h1>

        {/* Event Selection */}
        <div className="bg-[#1e293b] rounded-2xl shadow-xl p-6 mb-6">
          <label className="block text-white text-lg font-semibold mb-4">
            Select Event
          </label>
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="w-full max-w-md bg-[#334155] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="">-- Select an event --</option>
            {events.map((event, index) => (
              <option key={index} value={event}>
                {event}
              </option>
            ))}
          </select>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6 text-red-400">
            {error}
          </div>
        )}

        {/* Registrations List */}
        {selectedEvent && (
          <div className="bg-[#1e293b] rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Registrations for: {selectedEvent}
              <span className="text-lg font-normal text-zinc-400 ml-2">
                ({registrations.length} {registrations.length === 1 ? 'registration' : 'registrations'})
              </span>
            </h2>

            {loading ? (
              <div className="text-white text-center py-8">Loading...</div>
            ) : registrations.length === 0 ? (
              <div className="text-zinc-400 text-center py-8">
                No registrations found for this event.
              </div>
            ) : (
              <div className="space-y-4">
                {registrations.map((registration, index) => (
                  <div
                    key={registration._id}
                    className="bg-[#334155] rounded-lg p-6 border border-[#475569]"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Registration #{index + 1}
                        </h3>
                        <p className="text-zinc-400 text-sm">
                          Registered on: {new Date(registration.registrationDate).toLocaleString()}
                        </p>
                       
                        <p className="text-zinc-400 text-sm mt-1">
                          Number of Members: {registration.numberOfMembers}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">
                          {registration.registeredBy?.name || 'N/A'}
                        </p>
                        <p className="text-zinc-400 text-sm">
                          {registration.registeredBy?.email || 'N/A'}
                        </p>
                      </div>
                    </div>

                    {/* Team Members */}
                    <div className="mt-4 pt-4 border-t border-[#475569]">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Team Members:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {registration.teamMembers.map((member, memberIndex) => (
                          <div
                            key={memberIndex}
                            className="bg-[#475569] rounded-lg p-4"
                          >
                            <p className="text-white font-semibold mb-2">
                              {member.name}
                            </p>
                            <p className="text-zinc-300 text-sm">
                              Branch: {member.branch}
                            </p>
                            {member.email && (
                              <p className="text-zinc-300 text-sm">
                                Email: {member.email}
                              </p>
                            )}
                            {member.year && (
                              <p className="text-zinc-300 text-sm">
                                Year: {member.year}
                              </p>
                            )}
                            {member.mobile && (
                              <p className="text-zinc-300 text-sm">
                                Mobile: {member.mobile}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {!selectedEvent && !loading && (
          <div className="bg-[#1e293b] rounded-2xl shadow-xl p-6 text-center">
            <p className="text-zinc-400 text-lg">
              Please select an event to view registrations.
            </p>
          </div>
        )}
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default AdminDashboard;

