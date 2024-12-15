// frontend/src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Podcasts from '../components/Podcasts';
import Blogs from '../components/Blogs';
import SubscriptionForm from '../components/SubscriptionForm';

const Home = () => (
  <div>
    <Hero />
    <Cards />
    <Podcasts />
    <Blogs />
    <SubscriptionForm />
  </div>
);

export default Home;
