// frontend/src/pages/BlogDetail.jsx
import React, { useEffect, useState } from 'react';
import { Header, Image, Container } from 'semantic-ui-react';
import axios from 'axios';

const BlogDetail = ({ match }) => {
  const [blog, setBlog] = useState(null);
  const blogId = match.params.id;

  useEffect(() => {
    axios.get(`/api/blogs/${blogId}`)
      .then(response => setBlog(response.data))
      .catch(error => console.error(error));
  }, [blogId]);

  if (!blog) return <div>Loading...</div>;

  return (
    <Container>
      <Header as='h2'>{blog.title}</Header>
      <Image src={blog.coverImageUrl || 'placeholder.jpg'} size='medium' />
      <p>{blog.content}</p>
    </Container>
  );
};

export default BlogDetail;
