import React, { useState, useEffect } from 'react';
import { adminAPI } from '../utils/api';

const ManageEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubEventModalOpen, setIsSubEventModalOpen] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);
    const [editingSubEvent, setEditingSubEvent] = useState(null); // If null, creating new subevent
    const [selectedParentEventId, setSelectedParentEventId] = useState(null);

    // Form States
    const [eventForm, setEventForm] = useState({
        name: '',
        description: '',
        icon: null, // Change to null for File object
        eventDate: '', // New field
        registrationType: 'solo',
        minParticipants: 1,
        maxParticipants: 1,
        status: 'draft'
    });

    const [subEventForm, setSubEventForm] = useState({
        name: '',
        registrationType: 'solo',
        minParticipants: 1,
        maxParticipants: 1,
        status: 'open'
    });

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        setLoading(true);
        try {
            const response = await adminAPI.getAllEvents();
            if (response.data.success) {
                setEvents(response.data.events);
            }
        } catch (err) {
            setError('Failed to load events');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // --- Event Handling ---

    const handleCreateEvent = () => {
        setEditingEvent(null);
        setEventForm({
            name: '',
            description: '',
            icon: null,
            eventDate: '',
            registrationType: 'solo',
            minParticipants: 1,
            maxParticipants: 1,
            status: 'draft'
        });
        setIsModalOpen(true);
    };

    const handleEditEvent = (event) => {
        setEditingEvent(event);
        setEventForm({
            name: event.name,
            description: event.description || '',
            icon: null, // Keep null unless user uploads a new one
            eventDate: event.eventDate ? new Date(event.eventDate).toISOString().split('T')[0] : '',
            registrationType: event.registrationType,
            minParticipants: event.minParticipants,
            maxParticipants: event.maxParticipants,
            status: event.status
        });
        setIsModalOpen(true);
    };

    const handleDeleteEvent = async (id) => {
        if (!window.confirm('Are you sure? This will delete all sub-events too.')) return;
        try {
            await adminAPI.deleteEvent(id);
            loadEvents();
        } catch (err) {
            alert('Failed to delete event');
        }
    };

    const handleEventSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            Object.keys(eventForm).forEach(key => {
                if (key === 'icon' && eventForm[key]) {
                    formData.append('icon', eventForm[key]);
                } else if (eventForm[key] !== null && eventForm[key] !== undefined) {
                    formData.append(key, eventForm[key]);
                }
            });

            if (editingEvent) {
                await adminAPI.updateEvent(editingEvent._id, formData);
            } else {
                await adminAPI.createEvent(formData);
            }
            setIsModalOpen(false);
            loadEvents();
        } catch (err) {
            alert(err.response?.data?.message || 'Operation failed');
        } finally {
            setLoading(false);
        }
    };

    // --- SubEvent Handling ---

    const handleAddSubEvent = (eventId) => {
        setSelectedParentEventId(eventId);
        setEditingSubEvent(null);
        setSubEventForm({
            name: '',
            registrationType: 'solo',
            minParticipants: 1,
            maxParticipants: 1,
            status: 'open'
        });
        setIsSubEventModalOpen(true);
    };

    const handleEditSubEvent = (subEvent, eventId) => {
        setSelectedParentEventId(eventId);
        setEditingSubEvent(subEvent);
        setSubEventForm({
            name: subEvent.name,
            registrationType: subEvent.registrationType,
            minParticipants: subEvent.minParticipants,
            maxParticipants: subEvent.maxParticipants,
            status: subEvent.status
        });
        setIsSubEventModalOpen(true);
    };

    const handleDeleteSubEvent = async (id) => {
        if (!window.confirm('Delete this sub-event?')) return;
        try {
            await adminAPI.deleteSubEvent(id);
            loadEvents(); // Refresh to update parent's subEvent list (populated)
        } catch (err) {
            alert('Failed to delete sub-event');
        }
    };

    const handleSubEventSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = { ...subEventForm, eventId: selectedParentEventId };
            if (editingSubEvent) {
                await adminAPI.updateSubEvent(editingSubEvent._id, payload);
            } else {
                await adminAPI.createSubEvent(payload);
            }
            setIsSubEventModalOpen(false);
            loadEvents();
        } catch (err) {
            alert(err.response?.data?.message || 'Operation failed');
        }
    }


    return (
        <div className="text-white">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Manage Events</h2>
                <button
                    onClick={handleCreateEvent}
                    className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                    + Add New Event
                </button>
            </div>

            {loading && <p>Loading events...</p>}

            <div className="space-y-6">
                {events.map(event => (
                    <div key={event._id} className="bg-[#334155] p-6 rounded-xl border border-[#475569]">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                                {event.icon && (event.icon.startsWith('http') ? (
                                    <img src={event.icon} alt={event.name} className="w-16 h-16 object-cover rounded-lg" />
                                ) : (
                                    <span className="text-4xl">{event.icon}</span>
                                ))}
                                <div>
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        {event.name}
                                        <span className={`text-xs px-2 py-1 rounded-full ${event.status === 'open' ? 'bg-green-500/20 text-green-300' :
                                            event.status === 'closed' ? 'bg-red-500/20 text-red-300' : 'bg-yellow-500/20 text-yellow-300'
                                            }`}>
                                            {event.status.toUpperCase()}
                                        </span>
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">
                                        Date: {event.eventDate ? new Date(event.eventDate).toLocaleDateString() : 'Not Set'}
                                    </p>
                                    <p className="text-gray-400 mt-1">{event.description}</p>
                                    <div className="mt-2 text-sm text-gray-300 grid grid-cols-2 gap-x-4">
                                        <p>Type: {event.registrationType}</p>
                                        <p>Participants: {event.minParticipants}-{event.maxParticipants}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEditEvent(event)}
                                    className="text-cyan-400 hover:text-cyan-300 px-3 py-1 rounded bg-slate-700 hover:bg-slate-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteEvent(event._id)}
                                    className="text-red-400 hover:text-red-300 px-3 py-1 rounded bg-slate-700 hover:bg-slate-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>

                        {/* Sub Events Section */}
                        <div className="mt-6 pl-4 border-l-2 border-slate-600">
                            <div className="flex justify-between items-center mb-3">
                                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Sub-Events</h4>
                                <button
                                    onClick={() => handleAddSubEvent(event._id)}
                                    className="text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded text-cyan-300"
                                >
                                    + Add Sub-Event
                                </button>
                            </div>

                            {event.subEvents && event.subEvents.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {event.subEvents.map(sub => (
                                        <div key={sub._id} className="bg-[#1e293b] p-3 rounded flex justify-between items-center">
                                            <div>
                                                <p className="font-medium text-sm">{sub.name}</p>
                                                <p className="text-xs text-gray-500 capitalize">{sub.status} • {sub.registrationType}</p>
                                            </div>
                                            <div className="flex gap-2 text-xs">
                                                <button
                                                    onClick={() => handleEditSubEvent(sub, event._id)}
                                                    className="text-cyan-400 hover:underline"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteSubEvent(sub._id)}
                                                    className="text-red-400 hover:underline"
                                                >
                                                    Del
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 text-sm italic">No sub-events created.</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* CREATE/EDIT EVENT MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#1e293b] p-6 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        <h3 className="text-xl font-bold mb-4">{editingEvent ? 'Edit Event' : 'Create Event'}</h3>
                        <form onSubmit={handleEventSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm mb-1">Event Name</label>
                                <input type="text" required className="w-full bg-slate-700 rounded p-2"
                                    value={eventForm.name} onChange={e => setEventForm({ ...eventForm, name: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Description</label>
                                <textarea className="w-full bg-slate-700 rounded p-2"
                                    value={eventForm.description} onChange={e => setEventForm({ ...eventForm, description: e.target.value })} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm mb-1">Event Date</label>
                                    <input type="date" required className="w-full bg-slate-700 rounded p-2"
                                        value={eventForm.eventDate} onChange={e => setEventForm({ ...eventForm, eventDate: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1">Icon / Image</label>
                                    <input type="file" accept="image/*" className="w-full bg-slate-700 rounded p-2 text-xs"
                                        onChange={e => setEventForm({ ...eventForm, icon: e.target.files[0] })} />
                                    {editingEvent && !eventForm.icon && (
                                        <p className="text-[10px] text-gray-400 mt-1">Leave empty to keep current</p>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm mb-1">Reg. Type</label>
                                    <select className="w-full bg-slate-700 rounded p-2"
                                        value={eventForm.registrationType} onChange={e => setEventForm({ ...eventForm, registrationType: e.target.value })}>
                                        <option value="solo">Solo</option>
                                        <option value="team">Team</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm mb-1">Status</label>
                                    <select className="w-full bg-slate-700 rounded p-2"
                                        value={eventForm.status} onChange={e => setEventForm({ ...eventForm, status: e.target.value })}>
                                        <option value="draft">Draft</option>
                                        <option value="open">Open</option>
                                        <option value="closed">Closed</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm mb-1">Min Participants</label>
                                    <input type="number" min="1" className="w-full bg-slate-700 rounded p-2"
                                        value={eventForm.minParticipants} onChange={e => setEventForm({ ...eventForm, minParticipants: parseInt(e.target.value) })} />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1">Max Participants</label>
                                    <input type="number" min="1" className="w-full bg-slate-700 rounded p-2"
                                        value={eventForm.maxParticipants} onChange={e => setEventForm({ ...eventForm, maxParticipants: parseInt(e.target.value) })} />
                                </div>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-slate-600 rounded py-2">Cancel</button>
                                <button type="submit" disabled={loading} className="flex-1 bg-cyan-600 rounded py-2 disabled:opacity-50">
                                    {loading ? 'Saving...' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* CREATE/EDIT SUB-EVENT MODAL */}
            {isSubEventModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#1e293b] p-6 rounded-xl w-full max-w-lg">
                        <h3 className="text-xl font-bold mb-4">{editingSubEvent ? 'Edit Sub-Event' : 'Add Sub-Event'}</h3>
                        <form onSubmit={handleSubEventSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm mb-1">Sub-Event Name</label>
                                <input type="text" required className="w-full bg-slate-700 rounded p-2"
                                    value={subEventForm.name} onChange={e => setSubEventForm({ ...subEventForm, name: e.target.value })} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm mb-1">Reg. Type</label>
                                    <select className="w-full bg-slate-700 rounded p-2"
                                        value={subEventForm.registrationType} onChange={e => setSubEventForm({ ...subEventForm, registrationType: e.target.value })}>
                                        <option value="solo">Solo</option>
                                        <option value="team">Team</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm mb-1">Status</label>
                                    <select className="w-full bg-slate-700 rounded p-2"
                                        value={subEventForm.status} onChange={e => setSubEventForm({ ...subEventForm, status: e.target.value })}>
                                        <option value="open">Open</option>
                                        <option value="closed">Closed</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm mb-1">Min Participants</label>
                                    <input type="number" min="1" className="w-full bg-slate-700 rounded p-2"
                                        value={subEventForm.minParticipants} onChange={e => setSubEventForm({ ...subEventForm, minParticipants: parseInt(e.target.value) })} />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1">Max Participants</label>
                                    <input type="number" min="1" className="w-full bg-slate-700 rounded p-2"
                                        value={subEventForm.maxParticipants} onChange={e => setSubEventForm({ ...subEventForm, maxParticipants: parseInt(e.target.value) })} />
                                </div>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button type="button" onClick={() => setIsSubEventModalOpen(false)} className="flex-1 bg-slate-600 rounded py-2">Cancel</button>
                                <button type="submit" className="flex-1 bg-cyan-600 rounded py-2">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ManageEvents;
