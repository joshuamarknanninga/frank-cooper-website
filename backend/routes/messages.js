// backend/routes/messages.js
const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const Chat = require('../models/Chat');

// @route   GET /api/messages/:chatId
// @desc    Get all messages for a specific chat room
// @access  Private (Implement authentication as needed)
router.get('/:chatId', async (req, res) => {
  try {
    const messages = await Message.find({ chatId: req.params.chatId }).sort({ sentAt: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/messages
// @desc    Send a new message in a chat room
// @access  Private (Implement authentication as needed)
router.post('/', async (req, res) => {
  const { chatId, sender, content } = req.body;

  if (!chatId || !sender || !content) {
    return res.status(400).json({ message: 'chatId, sender, and content are required.' });
  }

  // Optionally verify that the chat exists
  const chat = await Chat.findById(chatId);
  if (!chat) {
    return res.status(404).json({ message: 'Chat room not found.' });
  }

  const message = new Message({
    chatId,
    sender,
    content,
  });

  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   DELETE /api/messages/:id
// @desc    Delete a message
// @access  Private (Implement authentication as needed)
router.delete('/:id', async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found.' });
    }

    await message.remove();
    res.json({ message: 'Deleted Message' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
