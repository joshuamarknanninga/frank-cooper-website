// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import MissionaryWork from './components/MissionaryWork';
import SubscriptionForm from './components/SubscriptionForm';
import Footer from './components/Footer';
import About from './pages/About';
import Podcast from './pages/Podcast';
import Books from './pages/Books';
import Classes from './pages/Classes';
import Blog from './pages/Blog';
import Shop from './pages/Shop';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cards />
              <MissionaryWork />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/books" element={<Books />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <SubscriptionForm />
      <Footer />
    </Router>
  );
};

export default App;
