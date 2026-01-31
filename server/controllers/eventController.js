const Event = require('../models/Event');
const SubEvent = require('../models/SubEvent');

// --- Event Controllers ---

// Create a new event
const createEvent = async (req, res) => {
  try {
    const eventData = { ...req.body };

    // Sanitize icon field: if it's an object (and not a file path string), remove it
    if (typeof eventData.icon === 'object' && !req.file) {
      delete eventData.icon;
    }

    console.log('--- Create Event Debug ---');
    console.log('req.file:', req.file ? {
      fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      path: req.file.path
    } : 'undefined');
    console.log('req.body:', req.body);

    if (req.file) {
      console.log('File uploaded to Cloudinary:', req.file.path);
      eventData.icon = req.file.path; // Cloudinary URL
    } else {
      console.log('No file uploaded. req.body.icon:', req.body.icon);
    }
    const event = new Event(eventData);
    await event.save();
    res.status(201).json({ success: true, event });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all events (Public)
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find()
      .populate('subEvents')
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single event by ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('subEvents');
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.status(200).json({ success: true, event });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update event
const updateEvent = async (req, res) => {
  try {
    const updateData = { ...req.body };

    // Sanitize icon field: if it's an object and no new file uploaded, remove it from updateData
    // This prevented Mongoose "Cast to string failed" errors when req.body.icon is {}
    if (typeof updateData.icon === 'object' && !req.file) {
      delete updateData.icon;
    }

    console.log('--- Update Event Debug ---');
    console.log('req.file:', req.file ? {
      fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      path: req.file.path
    } : 'undefined');
    console.log('req.body:', req.body);

    if (req.file) {
      console.log('Update: File uploaded to Cloudinary:', req.file.path);
      updateData.icon = req.file.path; // Cloudinary URL
    } else {
      console.log('Update: No file uploaded. req.body.icon:', req.body.icon);
    }
    const event = await Event.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true
    });
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.status(200).json({ success: true, event });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete event
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    // Optional: Delete associated subevents
    await SubEvent.deleteMany({ event: event._id });

    await event.deleteOne();
    res.status(200).json({ success: true, message: 'Event and associated sub-events deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// --- SubEvent Controllers ---

// Create SubEvent
const createSubEvent = async (req, res) => {
  try {
    const { eventId } = req.body;
    // ensure event exists
    const eventExists = await Event.findById(eventId);
    if (!eventExists) {
      return res.status(404).json({ success: false, message: 'Parent Event not found' });
    }

    const subEvent = new SubEvent({ ...req.body, event: eventId });
    await subEvent.save();

    // Update parent event to have hasSubEvents: true if not already
    if (!eventExists.hasSubEvents) {
      eventExists.hasSubEvents = true;
      await eventExists.save();
    }

    res.status(201).json({ success: true, subEvent });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update SubEvent
const updateSubEvent = async (req, res) => {
  try {
    const subEvent = await SubEvent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!subEvent) {
      return res.status(404).json({ success: false, message: 'SubEvent not found' });
    }
    res.status(200).json({ success: true, subEvent });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete SubEvent
const deleteSubEvent = async (req, res) => {
  try {
    const subEvent = await SubEvent.findByIdAndDelete(req.params.id);
    if (!subEvent) {
      return res.status(404).json({ success: false, message: 'SubEvent not found' });
    }

    // Check if parent event still has subevents
    const remainingSubEvents = await SubEvent.countDocuments({ event: subEvent.event });
    if (remainingSubEvents === 0) {
      await Event.findByIdAndUpdate(subEvent.event, { hasSubEvents: false });
    }

    res.status(200).json({ success: true, message: 'SubEvent deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  createSubEvent,
  updateSubEvent,
  deleteSubEvent
};
