// backend/controllers/podcastController.js
const Podcast = require('../models/Podcast');

// Get all podcasts
exports.getAllPodcasts = async (req, res) => {
  try {
    const podcasts = await Podcast.find().sort({ publishedAt: -1 });
    res.json(podcasts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Other controller functions...
