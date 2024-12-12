// backend/models/Chat.js
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  participants: [{
    type: String, // User identifiers, e.g., email or user ID
    required: true,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Chat', chatSchema);
