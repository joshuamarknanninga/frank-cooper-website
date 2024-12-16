// frontend/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Podcasts from './pages/Podcasts';
import PodcastDetail from './pages/PodcastDetail';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Cards from './pages/Cards';
import Subscribe from './pages/Subscribe';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const App = () => (
  <Router>
    <HeaderComponent />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Podcasts Routes */}
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/podcasts/:id" element={<PodcastDetail />} />

        {/* Blogs Routes */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />

        {/* Cards Route */}
        <Route path="/cards" element={<Cards />} />

        {/* Subscribe Route */}
        <Route path="/subscribe" element={<Subscribe />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
