// client/src/index.js
import { createRoot } from 'react-dom/client';
import { MinistryProvider } from './components/context/MinistryContext'; // Fixed path
import App from './App';
import './styles/main.scss'; // Verify this path exists

// Initialize web-vitals (optional)
import { onCLS, onFID, onLCP } from 'web-vitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <MinistryProvider>
    <App />
  </MinistryProvider>
);

// Web Vitals reporting
onCLS(console.log);
onFID(console.log);
onLCP(console.log);