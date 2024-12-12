// frontend/src/components/Chat.jsx (Example)
import React, { useEffect, useState } from 'react';
import socket from '../socket';

const Chat = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.emit('joinChat', chatId);

    socket.on('receiveMessage', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [chatId]);

  const sendMessage = () => {
    const message = { chatId, sender: 'Frank Cooper', content: input };
    socket.emit('sendMessage', message);
    setMessages((prev) => [...prev, message]);
    setInput('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}: </strong>{msg.content}
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
