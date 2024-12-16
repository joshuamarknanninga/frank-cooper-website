// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const testimonialsRoute = require('./routes/testimonials');
const contactRoute = require('./routes/contact');
const mediaRoute = require('./routes/media');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware Setup
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(bodyParser.json());
// app.use(helmet());

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use('/api/', apiLimiter);

// Serve Static Files (if any)
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Import Routes
const podcastsRoute = require('./routes/podcasts');
const blogsRoute = require('./routes/blogs');
const cardsRoute = require('./routes/cards');
const subscribeRoute = require('./routes/subscribe');

// Use Routes
app.use('/api/podcasts', podcastsRoute);
app.use('/api/blogs', blogsRoute);
app.use('/api/cards', cardsRoute);
app.use('/api/subscribe', subscribeRoute);
app.use('/api/testimonials', testimonialsRoute);
app.use('/api/media', mediaRoute);
app.use('/api/contact', contactRoute);

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1);
});
