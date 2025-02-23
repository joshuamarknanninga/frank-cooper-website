import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';  // Add this
import Footer from './components/Footer';  // Add this

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}