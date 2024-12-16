// frontend/src/pages/Subscribe.jsx

import React, { useState } from 'react';
import { Form, Button, Container, Header, Message } from 'semantic-ui-react';
import axios from 'axios';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    try {
      const response = await axios.post('/api/subscribe', { email });
      setSuccess(response.data.message);
      setEmail('');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <Container text style={{ marginTop: '2em' }}>
      <Header as='h2'>Subscribe to Our Newsletter</Header>
      <Form onSubmit={handleSubscribe} success={!!success} error={!!error}>
        <Form.Input
          label='Email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type='email'
        />
        <Button type='submit' primary>Subscribe</Button>
        {success && <Message success header='Success' content={success} />}
        {error && <Message error header='Error' content={error} />}
      </Form>
    </Container>
  );
};

export default Subscribe;
