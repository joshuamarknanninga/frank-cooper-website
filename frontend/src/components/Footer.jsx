// frontend/src/components/Footer.jsx

import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ padding: '2em 0em', marginTop: '2em' }}>
    <Container textAlign='center'>
      © {new Date().getFullYear()} Frank Cooper. All rights reserved.
    </Container>
  </Segment>
);

export default Footer;
