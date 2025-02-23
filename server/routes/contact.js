// backend/routes/contact.js

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer'); // For sending emails
const Contact = require('../models/Contact'); // Optional: Store contacts in DB

// Configure Nodemailer transporter (example using Gmail)
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

/**
 * @route   POST /api/contact
 * @desc    Handle contact form submissions
 * @access  Public
 */
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Optional: Save contact to database
  /*
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
  } catch (err) {
    console.error('Error saving contact:', err);
    return res.status(500).json({ message: 'Server error.' });
  }
  */

  // Send email notification
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your email address
    subject: `New Contact Form Submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ message: 'Failed to send your message. Please try again later.' });
  }
});

module.exports = router;
