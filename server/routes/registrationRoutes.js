const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');
const { authenticateToken } = require('../middlewares/auth');

// All registration routes require authentication
router.post('/', authenticateToken, registrationController.register);
router.get('/my', authenticateToken, registrationController.getMyRegistrations);

// Admin route to view registrations for an event
router.get('/event/:eventId', authenticateToken, registrationController.getEventRegistrations);

module.exports = router;
