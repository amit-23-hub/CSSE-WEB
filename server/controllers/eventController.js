const EventRegistration = require('../models/EventRegistration');
const User = require('../models/User');

// Register for an event
const registerEvent = async (req, res) => {
  try {
    const { event, numberOfMembers, teamMembers } = req.body;
    const userId = req.user.userId;

    // Validate required fields
    if (!event || !numberOfMembers) {
      return res.status(400).json({
        success: false,
        message: 'Event name and number of members are required'
      });
    }

    // Validate number of members
    const numMembers = parseInt(numberOfMembers);
    if (numMembers < 1 || numMembers > 10) {
      return res.status(400).json({
        success: false,
        message: 'Number of members must be between 1 and 10'
      });
    }

    // Get user details for single member registration
    let finalTeamMembers = [];
    if (numMembers === 1) {
      // Fetch user details from profile
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }
      // For single member, we'll store empty array as user info is in registeredBy
      finalTeamMembers = [];
    } else {
      // Validate team members array
      if (!teamMembers || !Array.isArray(teamMembers) || teamMembers.length !== numMembers) {
        return res.status(400).json({
          success: false,
          message: `Team members array must contain exactly ${numMembers} members`
        });
      }

      // Validate each team member has required fields
      for (let i = 0; i < teamMembers.length; i++) {
        const member = teamMembers[i];
        if (!member.name || !member.branch || !member.mobile) {
          return res.status(400).json({
            success: false,
            message: `Team member ${i + 1} is missing required fields (name, branch, mobile)`
          });
        }
      }

      finalTeamMembers = teamMembers;
    }

    // Check if user has already registered for this event
    const existingRegistration = await EventRegistration.findOne({
      registeredBy: userId,
      eventName: event
    });

    if (existingRegistration) {
      return res.status(400).json({
        success: false,
        message: 'You have already registered for this event'
      });
    }

    // Create event registration
    const eventRegistration = new EventRegistration({
      eventName: event,
      numberOfMembers: numMembers,
      teamMembers: finalTeamMembers,
      registeredBy: userId
    });

    await eventRegistration.save();

    // Populate registeredBy to return user details
    await eventRegistration.populate('registeredBy', 'name email year branch');

    res.status(201).json({
      success: true,
      message: 'Event registration successful',
      registration: eventRegistration
    });

  } catch (error) {
    console.error('Event Registration Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during event registration',
      error: error.message
    });
  }
};

// Get all registrations for the logged-in user
const getMyRegistrations = async (req, res) => {
  try {
    const userId = req.user.userId;

    const registrations = await EventRegistration.find({ registeredBy: userId })
      .populate('registeredBy', 'name email year branch')
      .sort({ registrationDate: -1 });

    res.status(200).json({
      success: true,
      registrations
    });

  } catch (error) {
    console.error('Get Registrations Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get a specific registration by ID
const getRegistrationById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const registration = await EventRegistration.findOne({
      _id: id,
      registeredBy: userId
    }).populate('registeredBy', 'name email year branch');

    if (!registration) {
      return res.status(404).json({
        success: false,
        message: 'Registration not found'
      });
    }

    res.status(200).json({
      success: true,
      registration
    });

  } catch (error) {
    console.error('Get Registration Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

module.exports = {
  registerEvent,
  getMyRegistrations,
  getRegistrationById
};

