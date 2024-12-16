// frontend/src/components/Contact.jsx

import React, { useState } from 'react';
import { Container, Header, Form, Button, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setSuccess('');
    setError('');

    axios.post('/api/contact', formData)
      .then(response => {
        setSuccess(response.data.message);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(err => {
        console.error('Error submitting contact form:', err);
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError('An error occurred. Please try again.');
        }
      });
  };

  return (
    <Segment vertical id="contact" style={{ padding: '4em 0em' }}>
      <Container textAlign="center">
        <Header as="h2">Get in Touch</Header>
        <Form onSubmit={handleSubmit} success={!!success} error={!!error}>
          <Form.Input
            label="Name"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Form.Input
            label="Email"
            placeholder="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.TextArea
            label="Message"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" primary>Submit</Button>
          {success && <Message success header="Success" content={success} />}
          {error && <Message error header="Error" content={error} />}
        </Form>
      </Container>
    </Segment>
  );
};

export default Contact;
