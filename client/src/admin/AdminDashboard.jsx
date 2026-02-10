// import React, { useState, useEffect } from 'react';
// import { adminAPI } from '../utils/api';
// import Navbar from '../Navbar/Navbar';
// import Bottom from '../Pages/Bottom/Bottom';

import React, { useState, useEffect } from 'react';
import { adminAPI } from '../utils/api';
import Navbar from '../Navbar/Navbar';
import Bottom from '../Pages/Bottom/Bottom';
import ManageEvents from './ManageEvents';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('registrations'); // 'registrations' or 'events'
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState('');
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch events on mount to populate dropdown
  useEffect(() => {
    loadEvents();
  }, [activeTab]); // Reload when switching tabs to ensure freshness

  const loadEvents = async () => {
    try {
      const response = await adminAPI.getAllEvents();
      if (response.data.success) {
        setEvents(response.data.events);
      }
    } catch (err) {
      console.error('Error loading events:', err);
    }
  };

  useEffect(() => {
    if (selectedEventId && activeTab === 'registrations') {
      loadRegistrations(selectedEventId);
    } else {
      setRegistrations([]);
    }
  }, [selectedEventId, activeTab]);


  const loadRegistrations = async (eventId) => {
    setLoading(true);
    setError('');
    try {
      const response = await adminAPI.getEventRegistrations(eventId);
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

  const handleExport = () => {
    if (!registrations.length) return;

    const eventName = events.find(e => e._id === selectedEventId)?.name || 'Event';
    const headers = [
      'Event Name',
      'Sub-Event',
      'Registration Date',
      'Team Leader Name',
      'Team Leader Email',
      'Participant Phone',
      'Branch',
      'Year'
    ];

    const csvRows = [headers.join(',')];

    registrations.forEach(reg => {
      const subEventName = reg.subEvent?.name || 'N/A';
      const regDate = new Date(reg.createdAt).toLocaleString().replace(/,/g, '');
      const leaderName = reg.teamLeader?.name || 'N/A';
      const leaderEmail = reg.teamLeader?.email || 'N/A';

      reg.participants?.forEach(p => {
        const row = [
          `"${eventName}"`,
          `"${subEventName}"`,
          `"${regDate}"`,
          `"${leaderName}"`,
          `"${leaderEmail}"`,
          `"${p.phone || ''}"`,
          `"${p.branch || ''}"`,
          `"${p.year || ''}"`
        ];
        csvRows.push(row.join(','));
      });
    });

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${eventName.replace(/\s+/g, '_')}_registrations.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredRegistrations = registrations.filter(reg => {
    if (!searchTerm) return true;
    const lowerTerm = searchTerm.toLowerCase();

    // Search in team leader details
    if (reg.teamLeader?.name?.toLowerCase().includes(lowerTerm) ||
      reg.teamLeader?.email?.toLowerCase().includes(lowerTerm)) {
      return true;
    }

    // Search in participants
    return reg.participants?.some(p =>
      p.name?.toLowerCase().includes(lowerTerm) ||
      p.email?.toLowerCase().includes(lowerTerm)
    );
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0f172a] p-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('registrations')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'registrations' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'}`}
              >
                View Registrations
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'events' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'}`}
              >
                Manage Events
              </button>
            </div>
          </div>

          {/* EVENT MANAGEMENT VIEW */}
          {activeTab === 'events' && (
            <ManageEvents />
          )}

          {/* REGISTRATIONS VIEW */}
          {activeTab === 'registrations' && (
            <div>
              {/* Event Selection */}
              <div className="bg-[#1e293b] rounded-2xl shadow-xl p-6 mb-6">
                <label className="block text-white text-lg font-semibold mb-4">
                  Select Event to View Registrations
                </label>
                <select
                  value={selectedEventId}
                  onChange={(e) => setSelectedEventId(e.target.value)}
                  className="w-full max-w-md bg-[#334155] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="">-- Select an event --</option>
                  {events.map((event) => (
                    <option key={event._id} value={event._id}>
                      {event.name}
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
              {selectedEventId && (
                <div className="bg-[#1e293b] rounded-2xl shadow-xl p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex flex-wrap items-center gap-2 justify-between">
                    <div className="flex items-center gap-2">
                      Registrations
                      <span className="text-base md:text-lg font-normal text-zinc-400 bg-slate-700 px-2 py-0.5 rounded-full">
                        {filteredRegistrations.length} / {registrations.length}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                      <input
                        type="text"
                        placeholder="Search by name or email..."
                        className="bg-slate-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 w-full sm:w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button
                        onClick={handleExport}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                      >
                        Export CSV
                      </button>
                    </div>
                  </h2>

                  {loading ? (
                    <div className="text-white text-center py-8">Loading...</div>
                  ) : filteredRegistrations.length === 0 ? (
                    <div className="text-zinc-400 text-center py-8">
                      {searchTerm ? 'No matches found for your search.' : 'No registrations found for this event.'}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredRegistrations.map((registration, index) => (
                        <div
                          key={registration._id}
                          className="bg-[#334155] rounded-lg p-4 md:p-6 border border-[#475569]"
                        >
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                            <div>
                              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                                Registration #{index + 1}
                                {registration.subEvent && <span className="text-cyan-400 ml-2 block md:inline text-sm md:text-base">({registration.subEvent.name})</span>}
                              </h3>
                              <p className="text-zinc-400 text-sm break-all">
                                <span className="font-semibold text-zinc-300">By:</span> {registration.teamLeader?.name} <br className="sm:hidden" /> &lt;{registration.teamLeader?.email}&gt;
                              </p>
                              <p className="text-zinc-400 text-sm mt-1">
                                <span className="font-semibold text-zinc-300">Date:</span> {new Date(registration.createdAt).toLocaleString()}
                              </p>
                            </div>
                          </div>

                          {/* Participants Table */}
                          <div className="mt-4 pt-4 border-t border-[#475569]">
                            <h4 className="text-lg font-semibold text-white mb-3">
                              Participants ({registration.participants?.length || 0})
                            </h4>
                            <div className="overflow-x-auto">
                              <table className="w-full text-left text-sm text-gray-300">
                                <thead className="text-xs uppercase bg-slate-700 text-gray-200">
                                  <tr>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Phone</th>
                                    <th className="px-4 py-2">Branch / Year</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {registration.participants?.map((p, idx) => (
                                    <tr key={idx} className="border-b border-slate-600 hover:bg-slate-700/50">
                                      <td className="px-4 py-2 font-medium text-white">{p.name}</td>
                                      <td className="px-4 py-2">{p.email}</td>
                                      <td className="px-4 py-2">{p.phone}</td>
                                      <td className="px-4 py-2">{p.branch} - {p.year}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {!selectedEventId && activeTab === 'registrations' && (
                <div className="bg-[#1e293b] rounded-2xl shadow-xl p-12 text-center mt-6">
                  <p className="text-zinc-400 text-lg">
                    Please select an event from the dropdown to view its registrations.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default AdminDashboard;

