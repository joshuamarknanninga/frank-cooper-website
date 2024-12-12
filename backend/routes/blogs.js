// backend/routes/blogs.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// @route   GET /api/blogs
// @desc    Get all blog posts
// @access  Public
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ publishedAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET /api/blogs/:id
// @desc    Get a single blog post by ID
// @access  Public
router.get('/:id', getBlog, (req, res) => {
  res.json(res.blog);
});

// @route   POST /api/blogs
// @desc    Create a new blog post
// @access  Private (Implement authentication as needed)
router.post('/', async (req, res) => {
  const { title, content, author, categories, coverImageUrl } = req.body;

  const blog = new Blog({
    title,
    content,
    author,
    categories,
    coverImageUrl,
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   PUT /api/blogs/:id
// @desc    Update a blog post
// @access  Private (Implement authentication as needed)
router.put('/:id', getBlog, async (req, res) => {
  const { title, content, author, categories, coverImageUrl } = req.body;

  if (title != null) {
    res.blog.title = title;
  }
  if (content != null) {
    res.blog.content = content;
  }
  if (author != null) {
    res.blog.author = author;
  }
  if (categories != null) {
    res.blog.categories = categories;
  }
  if (coverImageUrl != null) {
    res.blog.coverImageUrl = coverImageUrl;
  }

  try {
    const updatedBlog = await res.blog.save();
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   DELETE /api/blogs/:id
// @desc    Delete a blog post
// @access  Private (Implement authentication as needed)
router.delete('/:id', getBlog, async (req, res) => {
  try {
    await res.blog.remove();
    res.json({ message: 'Deleted Blog' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get blog by ID
async function getBlog(req, res, next) {
  let blog;
  try {
    blog = await Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: 'Cannot find blog' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.blog = blog;
  next();
}

module.exports = router;
