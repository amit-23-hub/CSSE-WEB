const mongoose = require('mongoose');

const subEventSchema = new mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
        index: true
        // Why reference parent?
        // Belongs-to relationship. Efficiently find all sub-events for a parent event.
    },
    name: {
        type: String,
        required: [true, 'SubEvent name is required'],
        trim: true
    },
    registrationType: {
        type: String,
        enum: ['solo', 'team'],
        required: true
        // Flexibility:
        // A main event "Technokratos" might have a solo "Coding" contest and a team "Hackathon".
        // This schema allows that granularity.
    },
    minParticipants: {
        type: Number,
        default: 1,
        min: 1
    },
    maxParticipants: {
        type: Number,
        default: 1
    },
    status: {
        type: String,
        enum: ['open', 'closed'],
        default: 'open'
        // Granularity:
        // Allow closing specific sub-events while the main event remains open.
    }
}, {
    timestamps: true
});

// Scalability note:
// SubEvents are their own collection. This prevents the parent 'Event' document from growing indefinitely.
// It also allows independent scaling of reads/writes for specific popular sub-events.

module.exports = mongoose.model('SubEvent', subEventSchema);
