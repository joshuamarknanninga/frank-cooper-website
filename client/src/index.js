// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import App from './App';
import './index.css';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
