// backend/routes/subscribers.js
const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// @route   POST /api/subscribers
// @desc    Add a new subscriber
router.post('/', async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: 'Email is required.' });

  const subscriber = new Subscriber({ email });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json({ message: 'Subscribed successfully!' });
  } catch (err) {
    if (err.code === 11000) { // Duplicate key error
      res.status(400).json({ message: 'Email is already subscribed.' });
    } else {
      res.status(400).json({ message: err.message });
    }
  }
});

module.exports = router;
