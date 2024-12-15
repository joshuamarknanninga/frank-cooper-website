// backend/routes/subscribe.js
const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// POST /api/subscribe
router.post('/', async (req, res) => {
  const { email } = req.body;

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  try {
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ success: false, message: 'Email already subscribed.' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.json({ success: true, message: 'Subscribed successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
