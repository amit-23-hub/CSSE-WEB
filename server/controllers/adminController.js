const EventRegistration = require('../models/EventRegistration');
const User = require('../models/User');

// Get all event registrations for a specific event
const getEventRegistrations = async (req, res) => {
  try {
    const { eventName } = req.query;

    if (!eventName) {
      return res.status(400).json({
        success: false,
        message: 'Event name is required'
      });
    }

    // Find all registrations for the specified event
    const registrations = await EventRegistration.find({ eventName })
      .populate('registeredBy', 'name email year branch')
      .sort({ registrationDate: -1 });

    // Format the response to include team member details
    const formattedRegistrations = registrations.map(reg => {
      const registration = reg.toObject();
      
      // If single member, add user details as first team member
      if (registration.numberOfMembers === 1 && registration.registeredBy) {
        registration.teamMembers = [{
          name: registration.registeredBy.name,
          branch: registration.registeredBy.branch,
          email: registration.registeredBy.email,
          year: registration.registeredBy.year
        }];
      }

      return {
        _id: registration._id,
        eventName: registration.eventName,
        numberOfMembers: registration.numberOfMembers,
        teamMembers: registration.teamMembers,
        registeredBy: registration.registeredBy,
        status: registration.status,
        registrationDate: registration.registrationDate
      };
    });

    res.status(200).json({
      success: true,
      count: formattedRegistrations.length,
      registrations: formattedRegistrations
    });

  } catch (error) {
    console.error('Get Event Registrations Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get all unique event names
const getAllEvents = async (req, res) => {
  try {
    const events = await EventRegistration.distinct('eventName');
    
    res.status(200).json({
      success: true,
      events: events.sort()
    });

  } catch (error) {
    console.error('Get All Events Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

module.exports = {
  getEventRegistrations,
  getAllEvents
};

