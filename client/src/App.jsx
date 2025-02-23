import { Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Sermons from './pages/Sermons';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="page-container">
      <h1>About Frank Cooper</h1>
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    </div>
  );
}