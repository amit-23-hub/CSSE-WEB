import React, { useState, useEffect } from 'react';
import { eventAPI } from '../../../utils/api';

const EventRegistrationModal = ({ isOpen, onClose, eventName }) => {
  const [event, setEvent] = useState('');
  const [numberOfMembers, setNumberOfMembers] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Initialize team members array when number of members changes (only for > 1 members)
  useEffect(() => {
    const numMembers = parseInt(numberOfMembers) || 0;
    if (numMembers > 1) {
      setTeamMembers((prevMembers) => {
        const newMembers = Array.from({ length: numMembers }, (_, index) => {
          // Keep existing data if available, otherwise create new member object
          return prevMembers[index] || { name: '', branch: '', mobile: '' };
        });
        return newMembers;
      });
    } else {
      setTeamMembers([]);
    }
  }, [numberOfMembers]);

  const handleEventChange = (e) => {
    setEvent(e.target.value);
  };

  const handleNumberOfMembersChange = (e) => {
    setNumberOfMembers(e.target.value);
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = {
      ...updatedMembers[index],
      [field]: value,
    };
    setTeamMembers(updatedMembers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = {
        event,
        numberOfMembers: parseInt(numberOfMembers),
        teamMembers: parseInt(numberOfMembers) === 1 ? [] : teamMembers,
      };

      const response = await eventAPI.register(formData);
      
      if (response.data.success) {
        alert('Event registration successful!');
        // Reset form
        setEvent('');
        setNumberOfMembers('');
        setTeamMembers([]);
        onClose();
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Registration failed. Please try again.';
      setError(errorMessage);
      console.error('Registration Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    // Reset form when closing
    setEvent('');
    setNumberOfMembers('');
    setTeamMembers([]);
    setError('');
    setLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#1e293b] rounded-2xl shadow-xl p-8 overflow-y-auto">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-cyan-400 text-2xl font-bold transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Event Registration
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Select Event */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Select Event</label>
            <select
              name="event"
              value={event}
              onChange={handleEventChange}
              className="bg-[#334155] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            >
              <option value="">Choose</option>
              {eventName && eventName.toLowerCase().includes('technokratos') && (
                <optgroup label="Technokratos">
                  <option value="technocratos_dance">• Dance (Solo)</option>
                  <option value="technocratos_dance-g">• Dance (Group)</option>
                  <option value="technocratos_singing">• Singing (Solo)</option>
                  <option value="technocratos_singing-g">• Singing (Group)</option>
                  <option value="technocratos_openmic">• Open Mic</option>
                  <option value="technocratos_drama">• Drama</option>
                  <option value="technocratos_craft">• Craft making</option>
                  <option value="technocratos_paperdance">• Paper dance</option>
                  <option value="technocratos_fashion">• Fashion show</option>
                  <option value="technocratos_sketching">• Sketching</option>
                  <option value="technocratos_mehendi">• Mehendi</option>
                </optgroup>
              )}
              {eventName && eventName.toLowerCase().includes('formal') && (
                <optgroup label="Formal Events">
                  <option value="formal_technical_presentation">• Technical presentation</option>
                  <option value="formal_debate">• Debate</option>
                  <option value="formal_extempore">• Extempore</option>
                  <option value="formal_group_discussion">• Group Discussion</option>
                  <option value="formal_webwonders">• WebWonders</option>
                  <option value="formal_creative_writing">• Creative Writing</option>
                  <option value="formal_hackthon_byteburst">• Hackthon-Byteburst</option>
                  <option value="formal_codebuggers">• Codebuggers</option>
                </optgroup>
              )}
            </select>
          </div>

          {/* Number of Members */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Number of Members</label>
            <select
              name="numberOfMembers"
              value={numberOfMembers}
              onChange={handleNumberOfMembersChange}
              className="bg-[#334155] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            >
              <option value="">Select</option>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Member' : 'Members'}
                </option>
              ))}
            </select>
          </div>

          {/* Team Member Details - Only show when more than 1 member */}
          {parseInt(numberOfMembers) > 1 && teamMembers.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white border-b border-gray-600 pb-2">
                Team Member Details
              </h3>
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-[#334155] p-4 rounded-lg space-y-4">
                  <h4 className="text-cyan-400 font-medium mb-3">
                    Member {index + 1}
                  </h4>
                  <div className="flex flex-col">
                    <label className="text-white mb-1">Name</label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      value={member.name}
                      onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                      className="bg-[#475569] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white mb-1">Branch</label>
                    <select
                      value={member.branch}
                      onChange={(e) => handleMemberChange(index, 'branch', e.target.value)}
                      className="bg-[#475569] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                    >
                      <option value="">Select Branch</option>
                      <option value="IT">IT</option>
                      <option value="CSE">CSE</option>
                      <option value="ECE">ECE</option>
                      <option value="EE">EE</option>
                      <option value="ME">ME</option>
                      <option value="CE">CE</option>
                      <option value="MCA">MCA</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="9876543210"
                      value={member.mobile}
                      onChange={(e) => handleMemberChange(index, 'mobile', e.target.value)}
                      className="bg-[#475569] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Info message when 1 member is selected */}
          {parseInt(numberOfMembers) === 1 && (
            <div className="bg-cyan-500/20 border border-cyan-500/50 rounded-lg p-4">
              <p className="text-cyan-300 text-sm">
                Your profile details will be used for registration.
              </p>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={handleClose}
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

