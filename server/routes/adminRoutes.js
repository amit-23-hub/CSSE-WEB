const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticateToken, isAdmin } = require('../middlewares/auth');

// All admin routes require authentication and admin role
router.get('/events', authenticateToken, isAdmin, adminController.getAllEvents);
router.get('/registrations', authenticateToken, isAdmin, adminController.getEventRegistrations);

module.exports = router;

