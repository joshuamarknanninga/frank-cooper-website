// frontend/src/components/Chat.jsx
import React, { useState, useEffect } from 'react';
import { Form, Button, Comment, Header } from 'semantic-ui-react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatId = 'default-chat-id'; // Replace with dynamic chat IDs as needed

  useEffect(() => {
    axios.get(`/api/messages/${chatId}`)
      .then(response => setMessages(response.data))
      .catch(error => console.error(error));
  }, [chatId]);

  const sendMessage = () => {
    const message = {
      chatId,
      sender: 'User', // Replace with actual user data
      content: input,
    };
    axios.post('/api/messages', message)
      .then(response => setMessages([...messages, response.data]))
      .catch(error => console.error(error));
    setInput('');
  };

  return (
    <div>
      <Header as='h3' dividing>
        Chat Room
      </Header>
      <Comment.Group>
        {messages.map(msg => (
          <Comment key={msg._id}>
            <Comment.Content>
              <Comment.Author as='a'>{msg.sender}</Comment.Author>
              <Comment.Metadata>
                <div>{new Date(msg.sentAt).toLocaleTimeString()}</div>
              </Comment.Metadata>
              <Comment.Text>{msg.content}</Comment.Text>
            </Comment.Content>
          </Comment>
        ))}
        <Form reply onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
          <Form.TextArea value={input} onChange={(e) => setInput(e.target.value)} />
          <Button content='Send' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>
    </div>
  );
};

export default Chat;
