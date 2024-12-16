// frontend/src/components/Testimonials.jsx

import React, { useEffect, useState } from 'react';
import { Container, Header, List, Image, Loader, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('/api/testimonials') // Ensure this endpoint exists in backend
      .then(response => {
        setTestimonials(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching testimonials:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader active inline="centered" content="Loading Testimonials..." />;
  if (error) return <Message negative header="Error" content="Failed to load testimonials." />;

  return (
    <Segment vertical id="testimonials" style={{ padding: '4em 0em', backgroundColor: '#f9f9f9' }}>
      <Container textAlign="center">
        <Header as="h2">What Our Clients Say</Header>
        <List divided relaxed>
          {testimonials.map(testimonial => (
            <List.Item key={testimonial.id}>
              <Image avatar src={testimonial.avatar || '/images/default-avatar.png'} />
              <List.Content>
                <List.Header>{testimonial.name}</List.Header>
                <List.Description>{testimonial.quote}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Container>
    </Segment>
  );
};

export default Testimonials;
