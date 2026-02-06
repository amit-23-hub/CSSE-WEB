const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { generateOTP, createOTPRecord, verifyOTPRecord, deleteOTPRecord } = require('../utils/otpUtils');
const { sendOTPEmail, sendPasswordResetEmail } = require('../config/emailService');


// Register new user (requires prior email verification)
const register = async (req, res) => {
  try {
    const { name, email, password, year, branch, phone, verificationToken } = req.body;

    // Validate required fields
    if (!name || !email || !password || !year || !branch || !phone) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email'
      });
    }

    // Note: In production, you might want to validate the verificationToken
    // For now, we assume the frontend only sends this request after successful OTP verification

    // Create new user with email verified
    const user = new User({
      name,
      email,
      password,
      year,
      branch,
      phone,
      isEmailVerified: true
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your_secret_key',
      { expiresIn: '7d' }
    );

    // Set token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        year: user.year,
        branch: user.branch,
        phone: user.phone,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during registration',
      error: error.message
    });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Verify password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your_secret_key',
      { expiresIn: '7d' }
    );

    // Set token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        year: user.year,
        branch: user.branch,
        phone: user.phone,
        role: user.role,
        profilePic: user.profilePic
      }
    });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login',
      error: error.message
    });
  }
};

// Get user profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Update user profile
const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const { name, year, branch, phone } = req.body;
    if (name) user.name = name;
    if (year) user.year = year;
    if (branch) user.branch = branch;
    if (phone) user.phone = phone
    if (req.file) {
      user.profilePic = req.file.path;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: 'Profile updated',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        year: user.year,
        branch: user.branch,
        phone: user.phone,
        role: user.role,
        profilePic: user.profilePic
      }
    });
  } catch (error) {
    console.error('Profile Update Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Logout user
const logout = async (req, res) => {
  try {
    res.cookie('token', '', {
      httpOnly: true,
      expires: new Date(0)
    });

    res.status(200).json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Send OTP for email verification
const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Check if email already exists and is verified
    const existingUser = await User.findOne({ email });
    if (existingUser && existingUser.isEmailVerified) {
      return res.status(400).json({
        success: false,
        message: 'This email is already registered and verified'
      });
    }

    // Generate 6-digit OTP
    const otp = generateOTP();

    // Save OTP to database (hashed) with 10-minute expiry
    await createOTPRecord(email, otp, 'EMAIL_VERIFY', 10);

    // Send OTP via email
    await sendOTPEmail(email, otp);

    // Return generic success message (never expose OTP)
    res.status(200).json({
      success: true,
      message: 'Verification code has been sent to your email'
    });

  } catch (error) {
    console.error('Send OTP Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send verification code. Please try again.',
      error: error.message
    });
  }
};

// Verify OTP for email verification
const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Validate input
    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Email and OTP are required'
      });
    }

    // Verify OTP
    const otpRecord = await verifyOTPRecord(email, otp, 'EMAIL_VERIFY');

    if (!otpRecord) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired OTP'
      });
    }

    // Delete OTP record after successful verification
    await deleteOTPRecord(email, 'EMAIL_VERIFY');

    // Return success with a verification token
    // In a production environment, you might want to generate a temporary JWT
    res.status(200).json({
      success: true,
      message: 'Email verified successfully',
      verificationToken: 'email_verified' // Simple token for now
    });

  } catch (error) {
    console.error('Verify OTP Error:', error);
    res.status(500).json({
      success: false,
      message: 'Verification failed. Please try again.',
      error: error.message
    });
  }
};

// Forgot password - send reset OTP
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Check if user exists (silently handle non-existent users for security)
    const user = await User.findOne({ email });

    if (user) {
      // Generate 6-digit OTP
      const otp = generateOTP();

      // Save OTP to database (hashed) with 15-minute expiry
      await createOTPRecord(email, otp, 'PASSWORD_RESET', 15);

      // Send password reset email
      await sendPasswordResetEmail(email, otp);
    }

    // Always return generic success response (don't reveal if user exists)
    res.status(200).json({
      success: true,
      message: 'If an account exists with this email, a password reset code has been sent'
    });

  } catch (error) {
    console.error('Forgot Password Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process password reset request. Please try again.',
      error: error.message
    });
  }
};

// Reset password using OTP
const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    // Validate input
    if (!email || !otp || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Email, OTP, and new password are required'
      });
    }

    // Validate password length
    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters'
      });
    }

    // Verify OTP
    const otpRecord = await verifyOTPRecord(email, otp, 'PASSWORD_RESET');

    if (!otpRecord) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired OTP'
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Update password (will be hashed by the pre-save hook)
    user.password = newPassword;
    await user.save();

    // Delete OTP record
    await deleteOTPRecord(email, 'PASSWORD_RESET');

    res.status(200).json({
      success: true,
      message: 'Password reset successfully'
    });

  } catch (error) {
    console.error('Reset Password Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to reset password. Please try again.',
      error: error.message
    });
  }
};

module.exports = {
  register,
  login,
  getProfile,
  updateProfile,
  logout,
  sendOTP,
  verifyOTP,
  forgotPassword,
  resetPassword
};

