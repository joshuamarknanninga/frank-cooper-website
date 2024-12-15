// backend/models/Podcast.js
const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  audioUrl: {
    type: String,
    required: true,
  },
  coverImageUrl: String,
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  duration: String, // e.g., "45:30"
  author: {
    type: String,
    default: 'Frank Cooper',
  },
});

module.exports = mongoose.model('Podcast', podcastSchema);
