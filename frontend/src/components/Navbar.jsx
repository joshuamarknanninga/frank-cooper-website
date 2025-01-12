// src/components/Navbar.jsx

import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item as="a" href="#home">
        Frank Cooper
      </Menu.Item>
      <Menu.Item as="a" href="#about">
        About
      </Menu.Item>
      <Menu.Item as="a" href="#services">
        Services
      </Menu.Item>
      <Menu.Item as="a" href="#testimonials">
        Testimonials
      </Menu.Item>
      <Menu.Item as="a" href="#media">
        Media
      </Menu.Item>
      <Menu.Item as="a" href="#contact">
        Contact
      </Menu.Item>
    </Container>
  </Menu>
);

export default Navbar;