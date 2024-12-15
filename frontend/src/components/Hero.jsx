// frontend/src/components/Hero.jsx
import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero-placeholder.jpg'; // Ensure the image exists

const Hero = () => (
  <Container text style={{ marginTop: '3em' }}>
    <Header as='h1' content="Welcome to Frank Cooper's Teachings" style={{ fontSize: '2em' }} />
    <p style={{ fontSize: '1.33em' }}>
      Discover profound insights and deepen your understanding of the Bible through engaging teachings and resources.
    </p>
    <Button primary size='huge' as={Link} to="/about">
      Get Started
    </Button>
    <img src={heroImage} alt="Frank Cooper" style={{ width: '100%', marginTop: '2em' }} />
  </Container>
);

export default Hero;
