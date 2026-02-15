const Registration = require('../models/Registration');
const Event = require('../models/Event');
const SubEvent = require('../models/SubEvent');

// Register for an event
const register = async (req, res) => {
    try {
        const { eventId, subEventId, participants } = req.body;
        const teamLeaderId = req.user.userId;

        // 1. Basic Validation
        if (!eventId) {
            return res.status(400).json({ success: false, message: 'Event ID is required' });
        }

        if (!participants || !Array.isArray(participants) || participants.length === 0) {
            return res.status(400).json({ success: false, message: 'At least one participant is required' });
        }

        // 2. Fetch Event and SubEvent details
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }

        let subEvent = null;
        if (subEventId) {
            subEvent = await SubEvent.findById(subEventId);
            if (!subEvent) {
                return res.status(404).json({ success: false, message: 'SubEvent not found' });
            }
            // Verify subEvent belongs to event
            if (subEvent.event.toString() !== eventId) {
                return res.status(400).json({ success: false, message: 'SubEvent does not belong to the specified Event' });
            }
        }

        // 3. Logic Validation (Solo vs Team, Max Participants)
        // Determine which rules to apply (SubEvent rules override Event rules if applicable, or we use Event rules for structure)
        // Actually, design says SubEvents have their own rules.
        const ruleSource = subEvent || event;

        // Check if registration is open
        if (ruleSource.status !== 'open') {
            return res.status(400).json({ success: false, message: 'Registration for this event is closed' });
        }

        const minParticipants = ruleSource.minParticipants || 1;
        const maxParticipants = ruleSource.maxParticipants || 100; // Default large if not set

        if (participants.length < minParticipants) {
            return res.status(400).json({ success: false, message: `Minimum ${minParticipants} participants required` });
        }
        if (participants.length > maxParticipants) {
            return res.status(400).json({ success: false, message: `Maximum ${maxParticipants} participants allowed` });
        }

        // 4. Duplicate Check
        // Check if this leader already registered for this Event/SubEvent combo
        const existingRegistration = await Registration.findOne({
            event: eventId,
            subEvent: subEventId || null,
            teamLeader: teamLeaderId
        });

        if (existingRegistration) {
            return res.status(400).json({ success: false, message: 'You have already registered for this event/sub-event' });
        }

        // 5. Create Registration
        const registration = new Registration({
            event: eventId,
            subEvent: subEventId || null,
            teamLeader: teamLeaderId,
            participants: participants // Array of {name, email, year, branch, phone}
        });

        await registration.save();

        // 6. Populate for response
        await registration.populate(['event', 'subEvent', 'teamLeader']);

        res.status(201).json({
            success: true,
            message: 'Registration successful',
            registration
        });

    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error during registration',
            error: error.message
        });
    }
};

// Get My Registrations
const getMyRegistrations = async (req, res) => {
    try {
        const userId = req.user.userId;

        const registrations = await Registration.find({ teamLeader: userId })
            .populate('event', 'name icon')
            .populate('subEvent', 'name')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            registrations
        });

    } catch (error) {
        console.error('Get My Registrations Error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

// Get Registrations for an Event (Admin)
const getEventRegistrations = async (req, res) => {
    try {
        const { eventId } = req.params;
        const registrations = await Registration.find({ event: eventId })
            .populate('teamLeader', 'name email phone year branch')
            .populate('subEvent', 'name')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            registrations
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = {
    register,
    getMyRegistrations,
    getEventRegistrations
};
