import React from 'react';
import ReactDOM from 'react-dom/client';
import { Game } from './components/Game';
import { ContextProvider } from './contexts/ContextProvider';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <Game />
    </ContextProvider>
  </React.StrictMode>
);
