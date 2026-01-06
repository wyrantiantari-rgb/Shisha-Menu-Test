import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("Failed to render React app:", err);
    rootElement.innerHTML = `<div style="color: white; padding: 20px; text-align: center;">Failed to load menu. Check console for errors.</div>`;
  }
} else {
  console.error("Critical Error: #root element not found in DOM.");
}