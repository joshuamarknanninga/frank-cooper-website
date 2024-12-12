// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const subscribeRoute = require('./routes/subscribe');
const podcastsRoute = require('./routes/podcasts');
const blogsRoute = require('./routes/blogs');
const chatsRoute = require('./routes/chats');
const messagesRoute = require('./routes/messages');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL in production
}));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/subscribe', subscribeRoute);
app.use('/api/podcasts', podcastsRoute);
app.use('/api/blogs', blogsRoute);
app.use('/api/chats', chatsRoute);
app.use('/api/messages', messagesRoute);

// Root Route
app.get('/', (req, res) => {
  res.send('Frank Cooper Backend API');
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Frontend URL
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('joinChat', (chatId) => {
    socket.join(chatId);
    console.log(`User joined chat: ${chatId}`);
  });

  socket.on('sendMessage', (message) => {
    io.to(message.chatId).emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
