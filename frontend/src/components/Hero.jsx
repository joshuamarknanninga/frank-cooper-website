// frontend/src/components/Hero.jsx

import React from 'react';
import { Button, Container, Header } from 'semantic-ui-react';
import './Hero.css'; // Custom CSS for Hero

const Hero = () => (
  <div className="hero-section">
    <Container text>
      <Header as="h1" inverted>
        Empowering Your Success
      </Header>
      <Header as="h2" inverted>
        Unlock your potential with expert guidance and resources.
      </Header>
      <Button primary size="huge" href="#contact">
        Get Started
      </Button>
      <Button secondary size="huge" href="#services">
        Learn More
      </Button>
    </Container>
  </div>
);

export default Hero;
