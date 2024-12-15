// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Podcasts from './pages/Podcasts';
import PodcastDetail from './pages/PodcastDetail';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import ChatRoom from './pages/ChatRoom';
import Subscribe from './pages/Subscribe';
import NotFound from './pages/NotFound'; // Create a 404 page

const App = () => (
  <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Podcasts Routes */}
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/podcasts/:id" element={<PodcastDetail />} />
        
        {/* Blogs Routes */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/subscribe" element={<Subscribe />} />
        
        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
