// frontend/src/pages/Cards.jsx

import React, { useEffect, useState } from 'react';
import { Card, Image, Button, Header, Container, Loader, Message } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('/api/cards')
      .then(response => {
        setCards(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader active inline='centered' content='Loading Cards...' />;
  if (error) return <Message negative header='Error' content='Failed to load cards.' />;

  return (
    <Container style={{ marginTop: '2em' }}>
      <Header as='h2' dividing>
        Our Courses
      </Header>
      {cards.length === 0 ? (
        <Message info header='No Courses' content='There are no courses available at the moment.' />
      ) : (
        <Card.Group itemsPerRow={3} stackable>
          {cards.map(card => (
            <Card key={card.id}>
              <Image src={`/images/${card.icon}-placeholder.png`} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{card.title}</Card.Header>
                <Card.Description>
                  {card.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button as={Link} to={card.link} primary>
                  Learn More
                </Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      )}
    </Container>
  );
};

export default Cards;
