// backend/models/Podcast.js
const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  audioUrl: {
    type: String,
    required: true,
  },
  coverImageUrl: {
    type: String, // URL to the cover image
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  duration: {
    type: String, // e.g., "45:30"
  },
  author: {
    type: String,
    default: 'Frank Cooper',
  },
});

module.exports = mongoose.model('Podcast', podcastSchema);
