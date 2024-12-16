// frontend/src/pages/Home.jsx

import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const Home = () => (
  <Container text style={{ marginTop: '2em' }}>
    <Header as='h1'>Welcome to Frank Cooper's Website</Header>
    <Segment>
      {/* Add your home page content here */}
      <p>Explore our podcasts, blogs, and courses to enhance your knowledge!</p>
    </Segment>
  </Container>
);

export default Home;
