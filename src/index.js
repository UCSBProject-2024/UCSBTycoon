import React from 'react';
import ReactDOM from 'react-dom/client';
import { Game } from './components/Game.tsx';
import { ContextProvider } from './contexts/ContextProvider.tsx';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ContextProvider>
        <Game />
      </ContextProvider>
    </React.StrictMode>
  );
});
