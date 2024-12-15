// backend/routes/podcasts.js
const express = require('express');
const router = express.Router();
const Podcast = require('../models/Podcast');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Multer Configuration for Podcast Audio Uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = 'uploads/podcasts/';
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // e.g., 1234567890.mp3
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    const filetypes = /mp3|wav|m4a/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
  
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only audio files are allowed!'));
    }
  },
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB
});

// @route   GET /api/podcasts
// @desc    Get all podcasts
router.get('/', async (req, res) => {
  try {
    const podcasts = await Podcast.find().sort({ publishedAt: -1 });
    res.json(podcasts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET /api/podcasts/:id
// @desc    Get a single podcast by ID
router.get('/:id', getPodcast, (req, res) => {
  res.json(res.podcast);
});

// @route   POST /api/podcasts
// @desc    Create a new podcast
router.post('/', upload.single('audio'), async (req, res) => {
  const { title, description, coverImageUrl, duration, author } = req.body;
  
  if (!req.file) {
    return res.status(400).json({ message: 'Audio file is required.' });
  }

  const audioUrl = `${req.protocol}://${req.get('host')}/uploads/podcasts/${req.file.filename}`;

  const podcast = new Podcast({
    title,
    description,
    audioUrl,
    coverImageUrl,
    duration,
    author,
  });

  try {
    const newPodcast = await podcast.save();
    res.status(201).json(newPodcast);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   PUT /api/podcasts/:id
// @desc    Update a podcast
router.put('/:id', upload.single('audio'), getPodcast, async (req, res) => {
  const { title, description, coverImageUrl, duration, author } = req.body;

  if (title != null) res.podcast.title = title;
  if (description != null) res.podcast.description = description;
  if (coverImageUrl != null) res.podcast.coverImageUrl = coverImageUrl;
  if (duration != null) res.podcast.duration = duration;
  if (author != null) res.podcast.author = author;

  if (req.file) {
    // Optionally delete the old audio file
    // fs.unlinkSync(path.join(__dirname, '..', res.podcast.audioUrl));
    res.podcast.audioUrl = `${req.protocol}://${req.get('host')}/uploads/podcasts/${req.file.filename}`;
  }

  try {
    const updatedPodcast = await res.podcast.save();
    res.json(updatedPodcast);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   DELETE /api/podcasts/:id
// @desc    Delete a podcast
router.delete('/:id', getPodcast, async (req, res) => {
  try {
    // Optionally delete the audio file
    // fs.unlinkSync(path.join(__dirname, '..', res.podcast.audioUrl));
    await res.podcast.remove();
    res.json({ message: 'Podcast deleted.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get podcast by ID
async function getPodcast(req, res, next) {
  let podcast;
  try {
    podcast = await Podcast.findById(req.params.id);
    if (podcast == null) {
      return res.status(404).json({ message: 'Podcast not found.' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.podcast = podcast;
  next();
}

module.exports = router;
