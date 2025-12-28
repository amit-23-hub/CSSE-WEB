const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  branch: {
    type: String,
    required: true,
    trim: true
  },
  mobile: {
    type: String,
    required: true,
    trim: true
  }
}, { _id: false });

const eventRegistrationSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: [true, 'Event name is required'],
    trim: true
  },
  numberOfMembers: {
    type: Number,
    required: [true, 'Number of members is required'],
    min: [1, 'At least 1 member is required'],
    max: [10, 'Maximum 10 members allowed']
  },
  teamMembers: {
    type: [teamMemberSchema],
    required: true,
    validate: {
      validator: function(teamMembers) {
        // For single member, teamMembers should be empty (will use registeredBy user's info)
        // For multiple members, teamMembers length should match numberOfMembers
        if (this.numberOfMembers === 1) {
          return teamMembers.length === 0;
        }
        return teamMembers.length === this.numberOfMembers;
      },
      message: 'Team members array length must match number of members'
    }
  },
  registeredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for faster queries
eventRegistrationSchema.index({ registeredBy: 1, eventName: 1 });
eventRegistrationSchema.index({ registrationDate: -1 });

module.exports = mongoose.model('EventRegistration', eventRegistrationSchema);

