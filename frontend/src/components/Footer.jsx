// frontend/src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Frank Cooper. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
