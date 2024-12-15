// frontend/src/pages/NotFound.jsx
import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Container text textAlign='center' style={{ marginTop: '5em' }}>
    <Header as='h2' icon>
      404 - Page Not Found
    </Header>
    <p>The page you're looking for doesn't exist.</p>
    <Button as={Link} to="/" primary>
      Go to Home
    </Button>
  </Container>
);

export default NotFound;
