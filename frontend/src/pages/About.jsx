// frontend/src/pages/About.jsx

import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const About = () => (
  <Container text style={{ marginTop: '2em' }}>
    <Header as='h2'>About Frank Cooper</Header>
    <Segment>
      {/* Add your about page content here */}
      <p>Frank Cooper is a seasoned professional with expertise in...</p>
    </Segment>
  </Container>
);

export default About;
