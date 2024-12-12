// backend/routes/chats.js
const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');

// @route   GET /api/chats
// @desc    Get all chat rooms
// @access  Private (Implement authentication as needed)
router.get('/', async (req, res) => {
  try {
    const chats = await Chat.find().sort({ createdAt: -1 });
    res.json(chats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET /api/chats/:id
// @desc    Get a single chat room by ID
// @access  Private (Implement authentication as needed)
router.get('/:id', getChat, (req, res) => {
  res.json(res.chat);
});

// @route   POST /api/chats
// @desc    Create a new chat room
// @access  Private (Implement authentication as needed)
router.post('/', async (req, res) => {
  const { participants } = req.body;

  if (!participants || !Array.isArray(participants) || participants.length < 2) {
    return res.status(400).json({ message: 'At least two participants are required to create a chat.' });
  }

  const chat = new Chat({
    participants,
  });

  try {
    const newChat = await chat.save();
    res.status(201).json(newChat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   DELETE /api/chats/:id
// @desc    Delete a chat room
// @access  Private (Implement authentication as needed)
router.delete('/:id', getChat, async (req, res) => {
  try {
    await res.chat.remove();
    res.json({ message: 'Deleted Chat Room' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get chat by ID
async function getChat(req, res, next) {
  let chat;
  try {
    chat = await Chat.findById(req.params.id);
    if (chat == null) {
      return res.status(404).json({ message: 'Cannot find chat room' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.chat = chat;
  next();
}

module.exports = router;
