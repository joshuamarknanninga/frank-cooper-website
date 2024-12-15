// frontend/src/components/SubscriptionForm.jsx
import React, { useState } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import axios from 'axios';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = () => {
    axios.post('/api/subscribe', { email })
      .then(response => setStatus({ type: 'success', message: response.data.message }))
      .catch(error => setStatus({ type: 'error', message: error.response?.data?.message || 'Subscription failed.' }));
    setEmail('');
  };

  return (
    <Form success={status.type === 'success'} error={status.type === 'error'} onSubmit={handleSubmit}>
      <Form.Input
        label='Email'
        placeholder='Enter your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type='submit' primary>Subscribe</Button>
      {status.message && (
        <Message
          success={status.type === 'success'}
          error={status.type === 'error'}
          content={status.message}
        />
      )}
    </Form>
  );
};

export default SubscriptionForm;
