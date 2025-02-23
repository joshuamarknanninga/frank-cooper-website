// frontend/src/components/Media.jsx

import React, { useEffect, useState } from 'react';
import { Container, Header, Card, Image, Loader, Message } from 'semantic-ui-react';
import axios from 'axios';

const Media = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('/api/media') // Ensure this endpoint exists in backend
      .then(response => {
        setMedia(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching media:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader active inline="centered" content="Loading Media..." />;
  if (error) return <Message negative header="Error" content="Failed to load media." />;

  return (
    <Container textAlign="center" id="media" style={{ padding: '4em 0em' }}>
      <Header as="h2">Featured Media</Header>
      <Card.Group itemsPerRow={3} stackable>
        {media.map(item => (
          <Card key={item.id}>
            {item.type === 'video' ? (
              <div className="ui embed">
                <iframe title={item.title} src={item.url} allowFullScreen></iframe>
              </div>
            ) : (
              <Image src={item.thumbnail || '/images/default-media.png'} wrapped ui={false} />
            )}
            <Card.Content>
              <Card.Header>{item.title}</Card.Header>
              <Card.Description>{item.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              {item.type === 'video' ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Watch Now
                </a>
              ) : (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Listen Now
                </a>
              )}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};

export default Media;
