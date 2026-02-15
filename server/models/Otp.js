const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        index: true
    },
    otp: {
        type: String,
        required: [true, 'OTP is required']
    },
    type: {
        type: String,
        required: [true, 'OTP type is required'],
        enum: ['EMAIL_VERIFY', 'PASSWORD_RESET']
    },
    expiresAt: {
        type: Date,
        required: [true, 'Expiration time is required'],
        index: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// TTL index - MongoDB will automatically delete documents when expiresAt is reached
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('Otp', otpSchema);
