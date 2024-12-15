// frontend/src/pages/Subscribe.jsx
import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import SubscriptionForm from '../components/SubscriptionForm';

const Subscribe = () => (
  <Container>
    <Header as='h2'>Subscribe to Our Newsletter</Header>
    <SubscriptionForm />
  </Container>
);

export default Subscribe;
