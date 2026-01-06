import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical Error: #root element not found in DOM.");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Application rendered successfully.");
  } catch (error) {
    console.error("Runtime error during application startup:", error);
    rootElement.innerHTML = `
      <div style="color: #D4AF37; background: #1a1a1a; padding: 40px; text-align: center; font-family: sans-serif; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="font-size: 24px; margin-bottom: 10px;">Application Error</h1>
        <p style="color: #888; max-width: 400px;">The menu failed to load. Please check the browser console for more technical details.</p>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #D4AF37; color: black; border: none; cursor: pointer; border-radius: 4px; font-weight: bold;">Retry Load</button>
      </div>
    `;
  }
}