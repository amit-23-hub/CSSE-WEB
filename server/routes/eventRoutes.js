const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { uploadEvent } = require('../config/cloudinaryConfig');
// Public Routes
router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);

// Admin Routes (Should be protected)
router.post('/', uploadEvent.single('icon'), eventController.createEvent);
router.put('/:id', uploadEvent.single('icon'), eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

// SubEvent Routes
router.post('/sub-events', eventController.createSubEvent);
router.put('/sub-events/:id', eventController.updateSubEvent);
router.delete('/sub-events/:id', eventController.deleteSubEvent);

module.exports = router;
