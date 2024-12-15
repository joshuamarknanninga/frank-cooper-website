// frontend/src/pages/Blogs.jsx
import React, { useEffect, useState } from 'react';
import { Card, Image, Button, Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/api/blogs') // Ensure this endpoint is correctly set up in your backend
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <Container>
      <Header as='h2' dividing>
        Blogs
      </Header>
      <Card.Group itemsPerRow={3} stackable>
        {blogs.map(blog => (
          <Card key={blog._id}>
            <Image src={blog.coverImageUrl || '/images/blog-placeholder.jpg'} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{blog.title}</Card.Header>
              <Card.Meta>{new Date(blog.publishedAt).toLocaleDateString()}</Card.Meta>
              <Card.Description>
                {blog.content.substring(0, 100)}...
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button as={Link} to={`/blogs/${blog._id}`} primary>
                Read More
              </Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};

export default Blogs;
