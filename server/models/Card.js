// backend/models/Chat.js
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  participants: {
    type: [String], // User identifiers (e.g., emails or user IDs)
    required: true,
    validate: [arrayLimit, '{PATH} must have at least two participants'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

function arrayLimit(val) {
  return val.length >= 2;
}

module.exports = mongoose.model('Chat', chatSchema);
