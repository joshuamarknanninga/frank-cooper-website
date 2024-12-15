// frontend/src/pages/Podcasts.jsx
import React, { useEffect, useState } from 'react';
import { Card, Image, Button, Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    axios.get('/api/podcasts') // Ensure this endpoint is correctly set up in your backend
      .then(response => setPodcasts(response.data))
      .catch(error => console.error('Error fetching podcasts:', error));
  }, []);

  return (
    <Container>
      <Header as='h2' dividing>
        Podcasts
      </Header>
      <Card.Group itemsPerRow={3} stackable>
        {podcasts.map(podcast => (
          <Card key={podcast._id}>
            <Image src={podcast.coverImageUrl || '/images/podcast-placeholder.jpg'} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{podcast.title}</Card.Header>
              <Card.Meta>{new Date(podcast.publishedAt).toLocaleDateString()}</Card.Meta>
              <Card.Description>
                {podcast.description.substring(0, 100)}...
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button as='a' href={podcast.audioUrl} target='_blank' rel='noopener noreferrer' primary>
                Listen
              </Button>
              <Button as={Link} to={`/podcasts/${podcast._id}`} secondary>
                Details
              </Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};

export default Podcasts;
