// frontend/src/components/Cards.jsx
import React, { useEffect, useState } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('/api/cards') // Define this endpoint in backend or use static data
      .then(response => setCards(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Card.Group itemsPerRow={3} stackable>
      {cards.map(card => (
        <Card as={Link} to={card.link} key={card.id}>
          <Icon name={card.icon} size='huge' />
          <Card.Content>
            <Card.Header>{card.title}</Card.Header>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default Cards;
