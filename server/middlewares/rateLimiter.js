const rateLimit = require('express-rate-limit');

// Rate limiter for sending OTP
// Max 3 requests per 15 minutes per IP
const otpSendLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3, // Limit each IP to 3 requests per windowMs
    message: {
        success: false,
        message: 'Too many OTP requests from this IP, please try again after 15 minutes.'
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Rate limiter for verifying OTP
// Max 5 attempts per 15 minutes per IP
const otpVerifyLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 verification attempts per windowMs
    message: {
        success: false,
        message: 'Too many verification attempts from this IP, please try again after 15 minutes.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Rate limiter for password reset requests
// Max 3 requests per 15 minutes per IP
const passwordResetLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3, // Limit each IP to 3 password reset requests per windowMs
    message: {
        success: false,
        message: 'Too many password reset requests from this IP, please try again after 15 minutes.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = {
    otpSendLimiter,
    otpVerifyLimiter,
    passwordResetLimiter
};
