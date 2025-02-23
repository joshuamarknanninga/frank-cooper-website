// backend/routes/subscribe.js

const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber'); // Ensure this path is correct

// @route   POST /api/subscribe
// @desc    Add a new subscriber
router.post('/', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
    // Check if the email is already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email is already subscribed.' });
    }

    const subscriber = new Subscriber({ email });
    await subscriber.save();
    res.status(201).json({ message: 'Subscribed successfully!' });
  } catch (error) {
    console.error('Error subscribing:', error);
    res.status(500).json({ message: 'Server error.' });
  }
});

module.exports = router;
