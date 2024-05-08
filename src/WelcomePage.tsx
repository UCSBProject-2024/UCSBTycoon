import React from 'react';
import ReactDOM from 'react-dom/client';
import { WelcomePageComponent } from './WelcomePageComponent';
import { ContextProvider } from './contexts/ContextProvider';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ContextProvider>
        <WelcomePageComponent />
      </ContextProvider>
    </React.StrictMode>
  );
});
