// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PodcastDetail from './pages/PodcastDetail';
import BlogDetail from './pages/BlogDetail';
import ChatRoom from './pages/ChatRoom';
import Subscribe from './pages/Subscribe';

const App = () => (
  <Router>
    <Header />
    <Container style={{ marginTop: '7em', minHeight: '80vh' }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/podcasts/:id" component={PodcastDetail} />
        <Route path="/podcasts" component={Home} /> {/* Or a separate Podcasts page */}
        <Route path="/blogs/:id" component={BlogDetail} />
        <Route path="/blogs" component={Home} /> {/* Or a separate Blogs page */}
        <Route path="/chat" component={ChatRoom} />
        <Route path="/subscribe" component={Subscribe} />
        {/* Add more routes as needed */}
      </Switch>
    </Container>
    <Footer />
  </Router>
);

export default App;
