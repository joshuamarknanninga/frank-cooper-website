// backend/models/Blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String, // Can be in Markdown or HTML
    required: true,
  },
  author: {
    type: String,
    default: 'Frank Cooper',
  },
  categories: [String],
  coverImageUrl: String,
  publishedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Blog', blogSchema);
