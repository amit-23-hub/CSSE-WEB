const mongoose = require('mongoose');

// Participant info schema - stores full details as users might not be registered on the platform
const participantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Participant name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Participant email is required'],
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    year: {
        type: String,
        required: [true, 'Participant year is required'],
        trim: true
    },
    branch: {
        type: String,
        required: [true, 'Participant branch is required'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Participant phone number is required'],
        trim: true
    }
}, { _id: false }); // sub-schema, doesn't need its own ID usually unless we want to address individual participants directly

const registrationSchema = new mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
        index: true
    },
    subEvent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubEvent',
        default: null,
        index: true
    },
    teamLeader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
        // Fetched from logged-in user
    },
    participants: {
        type: [participantSchema],
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'A registration must have at least one participant.'
        }
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'confirmed'
    }
}, {
    timestamps: true
});

// Prevent duplicate registration by the same leader for the same event/subEvent.
registrationSchema.index({ event: 1, subEvent: 1, teamLeader: 1 }, { unique: true });

module.exports = mongoose.model('Registration', registrationSchema);
