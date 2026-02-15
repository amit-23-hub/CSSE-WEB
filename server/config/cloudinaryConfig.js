const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log('Cloudinary Configured with cloud_name:', process.env.CLOUDINARY_CLOUD_NAME);

// Storage for event icons/images
const eventStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'csse_events',
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    },
});

// Storage for profile pictures
const profileStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'csse_profile_pics',
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    },
});

// Create multer upload instances
const uploadEvent = multer({ storage: eventStorage });
const uploadProfile = multer({ storage: profileStorage });

module.exports = {
    uploadEvent,
    uploadProfile,
    cloudinary
};
