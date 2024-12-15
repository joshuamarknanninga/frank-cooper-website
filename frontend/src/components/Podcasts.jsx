// frontend/src/components/Podcasts.jsx
import React, { useEffect, useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    axios.get('/api/podcasts')
      .then(response => setPodcasts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Card.Group itemsPerRow={3} stackable>
      {podcasts.map(podcast => (
        <Card key={podcast._id}>
          <Image src={podcast.coverImageUrl || 'placeholder.jpg'} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{podcast.title}</Card.Header>
            <Card.Meta>{new Date(podcast.publishedAt).toLocaleDateString()}</Card.Meta>
            <Card.Description>
              {podcast.description}
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
  );
};

export default Podcasts;
