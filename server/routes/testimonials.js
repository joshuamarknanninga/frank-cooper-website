// backend/routes/testimonials.js

const express = require('express');
const router = express.Router();

// Example: Static Testimonials Data
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    quote: 'Frank helped me transform my business with his insightful strategies.',
    avatar: '/images/testimonial1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    quote: 'The courses provided by Frank are top-notch and incredibly effective.',
    avatar: '/images/testimonial2.jpg',
  },
  // Add more testimonials as needed
];

/**
 * @route   GET /api/testimonials
 * @desc    Retrieve all testimonials
 * @access  Public
 */
router.get('/', (req, res) => {
  res.json(testimonials);
});

module.exports = router;
