import React from 'react';

export const WelcomePageComponent: React.FC = () => {
  return (
    <div>
      <h1>Welcome to UCSB Tycoon!</h1>
      <p>This is the welcome page component.</p>
      <a href="/game.html">Click here to start playing!</a>
    </div>
  );
};

export default WelcomePageComponent;
