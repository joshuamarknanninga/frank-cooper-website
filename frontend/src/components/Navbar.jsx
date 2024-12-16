// frontend/src/components/Navbar.jsx

import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item as={HashLink} smooth to="#home" header>
        Frank Cooper
      </Menu.Item>
      <Menu.Item as={HashLink} smooth to="#about">
        About
      </Menu.Item>
      <Menu.Item as={HashLink} smooth to="#services">
        Services
      </Menu.Item>
      <Menu.Item as={HashLink} smooth to="#testimonials">
        Testimonials
      </Menu.Item>
      <Menu.Item as={HashLink} smooth to="#media">
        Media
      </Menu.Item>
      <Menu.Item as={HashLink} smooth to="#contact">
        Contact
      </Menu.Item>
    </Container>
  </Menu>
);

export default Navbar;
