// backend/routes/media.js

const express = require('express');
const router = express.Router();

// Example: Static Media Data
const media = [
  {
    id: 1,
    title: 'Interview with Tech Leaders',
    description: 'Frank discusses industry trends with top tech executives.',
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example YouTube embed link
    thumbnail: '/images/media1.jpg',
  },
  {
    id: 2,
    title: 'Podcast Episode 1',
    description: 'An insightful conversation about software development.',
    type: 'podcast',
    url: 'https://open.spotify.com/episode/xyz', // Example Spotify link
    thumbnail: '/images/media2.jpg',
  },
  // Add more media items as needed
];

/**
 * @route   GET /api/media
 * @desc    Retrieve all media
 * @access  Public
 */
router.get('/', (req, res) => {
  res.json(media);
});

module.exports = router;
