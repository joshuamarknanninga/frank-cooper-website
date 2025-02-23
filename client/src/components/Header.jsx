// frontend/src/components/Header.jsx

import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => (
  <Menu inverted>
    <Container>
      <Menu.Item header as={Link} to="/">
        Frank Cooper
      </Menu.Item>
      <Menu.Item as={Link} to="/podcasts">
        Podcasts
      </Menu.Item>
      <Menu.Item as={Link} to="/blogs">
        Blogs
      </Menu.Item>
      <Menu.Item as={Link} to="/cards">
        Courses
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item as={Link} to="/subscribe">
          Subscribe
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default HeaderComponent;
