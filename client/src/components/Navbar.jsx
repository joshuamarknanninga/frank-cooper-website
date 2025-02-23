// src/components/Navbar.jsx

import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => (
  <Menu fixed="top" inverted className="bg-blue-900 shadow-lg">
    <Container className="flex justify-between items-center">
      {/* Logo */}
      <Menu.Item as={HashLink} smooth to="#home" header className="text-white font-bold text-2xl drop-shadow-lg">
        Frank Cooper
      </Menu.Item>
      
      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Menu.Item as={HashLink} smooth to="#about" className="text-white hover:scale-105 transition-transform duration-300">
          About
        </Menu.Item>
        <Menu.Item as={HashLink} smooth to="#services" className="text-white hover:scale-105 transition-transform duration-300">
          Services
        </Menu.Item>
        <Menu.Item as={HashLink} smooth to="#testimonials" className="text-white hover:scale-105 transition-transform duration-300">
          Testimonials
        </Menu.Item>
        <Menu.Item as={HashLink} smooth to="#media" className="text-white hover:scale-105 transition-transform duration-300">
          Media
        </Menu.Item>
        <Menu.Item as={HashLink} smooth to="#contact" className="text-white hover:scale-105 transition-transform duration-300">
          Contact
        </Menu.Item>
      </div>
    </Container>
  </Menu>
);

export default Navbar;