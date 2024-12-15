// frontend/src/pages/PodcastDetail.jsx
import React, { useEffect, useState } from 'react';
import { Header, Image, Button } from 'semantic-ui-react';
import axios from 'axios';

const PodcastDetail = ({ match }) => {
  const [podcast, setPodcast] = useState(null);
  const podcastId = match.params.id;

  useEffect(() => {
    axios.get(`/api/podcasts/${podcastId}`)
      .then(response => setPodcast(response.data))
      .catch(error => console.error(error));
  }, [podcastId]);

  if (!podcast) return <div>Loading...</div>;

  return (
    <div>
      <Header as='h2'>{podcast.title}</Header>
      <Image src={podcast.coverImageUrl || 'placeholder.jpg'} size='medium' />
      <p>{podcast.description}</p>
      <audio controls src={podcast.audioUrl}>
        Your browser does not support the audio element.
      </audio>
      <Button as='a' href={podcast.audioUrl} target='_blank' rel='noopener noreferrer' primary style={{ marginTop: '1em' }}>
        Download
      </Button>
    </div>
  );
};

export default PodcastDetail;
