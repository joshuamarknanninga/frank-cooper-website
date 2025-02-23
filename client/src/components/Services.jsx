// frontend/src/components/Services.jsx

import React, { useEffect, useState } from 'react';
import { Container, Header, Card, Icon, Loader, Message, Button } from 'semantic-ui-react';
import axios from 'axios';
import ServiceModal from './ServiceModal';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios.get('/api/cards') // Assuming 'cards' represent services
      .then(response => {
        setServices(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching services:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleOpen = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleClose = () => {
    setSelectedService(null);
    setModalOpen(false);
  };

  if (loading) return <Loader active inline="centered" content="Loading Services..." />;
  if (error) return <Message negative header="Error" content="Failed to load services." />;

  return (
    <Container textAlign="center" id="services" style={{ padding: '4em 0em' }}>
      <Header as="h2">Our Services</Header>
      <Card.Group itemsPerRow={3} stackable>
        {services.map(service => (
          <Card key={service.id}>
            <Card.Content>
              <Icon name={service.icon} size="huge" />
              <Card.Header>{service.title}</Card.Header>
              <Card.Description>{service.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button onClick={() => handleOpen(service)} primary>
                Learn More
              </Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      {selectedService && (
        <ServiceModal
          open={modalOpen}
          onClose={handleClose}
          service={selectedService}
        />
      )}
    </Container>
  );
};

export default Services;
