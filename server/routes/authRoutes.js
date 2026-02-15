const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middlewares/auth');
const { uploadProfile } = require('../config/cloudinaryConfig');

// Public routes - OTP verification
router.post('/send-otp', authController.sendOTP);
router.post('/verify-otp', authController.verifyOTP);

// Public routes - Authentication
router.post('/register', authController.register);
router.post('/login', authController.login);

// Public routes - Password reset
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);

// Protected routes
router.get('/profile', authenticateToken, authController.getProfile);
router.put('/profile', authenticateToken, uploadProfile.single('profilePic'), authController.updateProfile);
router.post('/logout', authenticateToken, authController.logout);

module.exports = router;

