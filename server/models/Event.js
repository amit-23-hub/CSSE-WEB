const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Event name is required'],
        trim: true,
        index: true // Index for faster searching by name
    },
    description: {
        type: String,
        trim: true
    },
    icon: {
        type: String,
        // Can be an emoji or an image URL. Frontend should handle rendering accordingly.
    },
    eventDate: {
        type: Date,
    },
    hasSubEvents: {
        type: Boolean,
        default: false,
        // Why this field?
        // Optimization: Allows the frontend to immediately know if it needs to fetch sub-events or show a registration modal directly.
        // Avoids an extra query to the SubEvent collection just to check existence.
    },
    registrationType: {
        type: String,
        enum: ['solo', 'team'],
        required: true,
        // How it's handled:
        // 'solo' -> minParticipants & maxParticipants should ideally be 1.
        // 'team' -> minParticipants >= 2.
        // This explicit field simplifies logic vs inferring from participant counts.
    },
    minParticipants: {
        type: Number,
        default: 1,
        min: 1
    },
    maxParticipants: {
        type: Number,
        default: 1,
        // Scalability:
        // Allows defining team size limits dynamically. 
        // For solo events, this is 1. For teams, this sets the hard limit.
    },
    status: {
        type: String,
        enum: ['open', 'closed', 'draft'],
        default: 'draft',
        index: true // Index for filtering active events
        // Scalability:
        // 'draft' allows admins to prepare events without exposing them.
        // 'closed' allows archiving without deleting data.
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Virtual populate for SubEvents
// usage: await Event.find().populate('subEvents')
eventSchema.virtual('subEvents', {
    ref: 'SubEvent',
    localField: '_id',
    foreignField: 'event'
    // Scalability:
    // Keeps the Event document small. SubEvents are fetched only when needed.
    // Prevents the 16MB BSON limit issue if an event theoretically had thousands of sub-events (unlikely but good practice).
});

module.exports = mongoose.model('Event', eventSchema);
