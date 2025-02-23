import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
  <Router>
    {/* <ErrorBoundary> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    {/* </ErrorBoundary> */}
  </Router>
);

export default App;
