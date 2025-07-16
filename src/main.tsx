import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Dynamically set the favicon based on an environment variable.
// Falls back to the default Vite icon if none provided.
const iconPath = import.meta.env.VITE_SITE_ICON || '/vite.svg';
const favicon = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
if (favicon) {
  favicon.href = iconPath;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
