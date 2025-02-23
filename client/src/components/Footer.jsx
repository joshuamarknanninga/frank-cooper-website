// frontend/src/components/Footer.jsx

import React from 'react';
import { Container, Segment, List, Icon } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ padding: '2em 0em' }}>
    <Container textAlign="center">
      <List horizontal inverted divided link>
        <List.Item as="a" href="#about">About</List.Item>
        <List.Item as="a" href="#services">Services</List.Item>
        <List.Item as="a" href="#testimonials">Testimonials</List.Item>
        <List.Item as="a" href="#media">Media</List.Item>
        <List.Item as="a" href="#contact">Contact</List.Item>
      </List>
      <List horizontal inverted divided link size="small" style={{ marginTop: '1em' }}>
        <List.Item as="a" href="https://twitter.com/yourprofile">
          <Icon name="twitter" /> Twitter
        </List.Item>
        <List.Item as="a" href="https://facebook.com/yourprofile">
          <Icon name="facebook" /> Facebook
        </List.Item>
        <List.Item as="a" href="https://instagram.com/yourprofile">
          <Icon name="instagram" /> Instagram
        </List.Item>
        <List.Item as="a" href="mailto:your.email@example.com">
          <Icon name="mail" /> Email
        </List.Item>
      </List>
      <p style={{ marginTop: '1em' }}>© {new Date().getFullYear()} Frank Cooper. All rights reserved.</p>
    </Container>
  </Segment>
);

export default Footer;
