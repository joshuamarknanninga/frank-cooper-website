// backend/routes/cards.js

const express = require('express');
const router = express.Router();

// Example: Static Cards Data
const cards = [
  {
    id: 1,
    title: 'Learn JavaScript',
    description: 'Master the fundamentals of JavaScript, the most popular programming language.',
    icon: 'javascript',
    link: '/courses/javascript',
  },
  {
    id: 2,
    title: 'Build APIs',
    description: 'Learn how to build robust and scalable APIs using Node.js and Express.',
    icon: 'api',
    link: '/courses/api-development',
  },
  {
    id: 3,
    title: 'Frontend Frameworks',
    description: 'Dive into modern frontend frameworks like React, Vue, and Angular.',
    icon: 'frontend',
    link: '/courses/frontend-frameworks',
  },
  // Add more card objects as needed
];

/**
 * @route   GET /api/cards
 * @desc    Retrieve all cards
 * @access  Public
 */
router.get('/', (req, res) => {
  res.json(cards);
});

/**
 * @route   GET /api/cards/:id
 * @desc    Retrieve a single card by ID
 * @access  Public
 */
router.get('/:id', (req, res) => {
  const cardId = parseInt(req.params.id, 10);
  const card = cards.find((c) => c.id === cardId);

  if (!card) {
    return res.status(404).json({ message: 'Card not found.' });
  }

  res.json(card);
});

module.exports = router;
