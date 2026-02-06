const crypto = require('crypto');
const Otp = require('../models/Otp');

/**
 * Generate a 6-digit random OTP
 * @returns {string} 6-digit OTP
 */
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * Hash OTP using SHA-256
 * @param {string} otp - Plain text OTP
 * @returns {string} Hashed OTP
 */
const hashOTP = (otp) => {
    return crypto.createHash('sha256').update(otp).digest('hex');
};

/**
 * Create OTP record in database
 * @param {string} email - User email
 * @param {string} otp - Plain text OTP (will be hashed)
 * @param {string} type - 'EMAIL_VERIFY' or 'PASSWORD_RESET'
 * @param {number} expiryMinutes - Expiration time in minutes
 * @returns {Promise<Object>} Created OTP record
 */
const createOTPRecord = async (email, otp, type, expiryMinutes) => {
    // Delete any existing OTP records for this email and type
    await Otp.deleteMany({ email, type });

    // Hash the OTP before storing
    const hashedOTP = hashOTP(otp);

    // Calculate expiration time
    const expiresAt = new Date(Date.now() + expiryMinutes * 60 * 1000);

    // Create new OTP record
    const otpRecord = new Otp({
        email,
        otp: hashedOTP,
        type,
        expiresAt
    });

    await otpRecord.save();
    return otpRecord;
};

/**
 * Verify OTP record
 * @param {string} email - User email
 * @param {string} otp - Plain text OTP to verify
 * @param {string} type - 'EMAIL_VERIFY' or 'PASSWORD_RESET'
 * @returns {Promise<Object|null>} OTP record if valid, null otherwise
 */
const verifyOTPRecord = async (email, otp, type) => {
    // Hash the provided OTP
    const hashedOTP = hashOTP(otp);

    // Find OTP record
    const otpRecord = await Otp.findOne({
        email,
        otp: hashedOTP,
        type,
        expiresAt: { $gt: new Date() } // Check if not expired
    });

    return otpRecord;
};

/**
 * Delete OTP record
 * @param {string} email - User email
 * @param {string} type - 'EMAIL_VERIFY' or 'PASSWORD_RESET'
 * @returns {Promise<void>}
 */
const deleteOTPRecord = async (email, type) => {
    await Otp.deleteMany({ email, type });
};

module.exports = {
    generateOTP,
    hashOTP,
    createOTPRecord,
    verifyOTPRecord,
    deleteOTPRecord
};
