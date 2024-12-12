// backend/models/Blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String, // Consider using Markdown or rich text
    required: true,
  },
  author: {
    type: String,
    default: 'Frank Cooper',
  },
  categories: [{
    type: String,
  }],
  coverImageUrl: {
    type: String, // URL to the cover image
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Blog', blogSchema);
