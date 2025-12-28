const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { authenticateToken } = require('../middlewares/auth');

// All event routes require authentication
router.post('/register', authenticateToken, eventController.registerEvent);
router.get('/my-registrations', authenticateToken, eventController.getMyRegistrations);
router.get('/:id', authenticateToken, eventController.getRegistrationById);

module.exports = router;

