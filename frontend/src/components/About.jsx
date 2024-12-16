// frontend/src/components/About.jsx

import React from 'react';
import { Container, Header, Image, Grid, Segment } from 'semantic-ui-react';

const About = () => (
  <Segment vertical id="about" style={{ padding: '4em 0em' }}>
    <Container>
      <Header as="h2" textAlign="center">
        About Frank Cooper
      </Header>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8}>
            <Image src="/images/about.jpg" size="large" rounded />
          </Grid.Column>
          <Grid.Column width={8}>
            <p>
              Frank Cooper is a seasoned software engineer with over a decade of experience in developing scalable web applications. His passion for technology and dedication to excellence have empowered countless businesses to achieve their digital goals.
            </p>
            <p>
              Beyond development, Frank is a dedicated mentor, guiding aspiring developers to unlock their full potential through comprehensive courses and one-on-one coaching.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default About;
