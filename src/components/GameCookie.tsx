import React, { useEffect, useState } from 'react';
import { useGame } from '../hooks/useGame';
import { useGameDispatch } from '../hooks/useGameDispatch';
import { CakeIcon } from './CakeIcon';
import { Game, KnowledgeBuilding, MonetaryBuilding } from '../domains';

const LOCAL_STORAGE_COOKIE_CLICKER_GAME_KEY = 'c1eabe78-8bc4-4fdc-9a2e-4aa39583fa15-cookie-clicker-game';


import AMoney from "./AMoney.json";
import Lottie from "lottie-react";

export function GameCookie() {
  const game = useGame();
  const gameDispatch = useGameDispatch();
  const [data, setData] = useState(game?.knowledge);
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  function handleClick() {
    if (!gameDispatch) return;
    gameDispatch({ type: 'update', subtype: 'cash' });
    if (!isAnimationPlaying) {
      setIsAnimationVisible(true);
    }
  }

  function onAnimationStart() {
    setIsAnimationPlaying(true);
  }

  function onAnimationComplete() {
    setIsAnimationVisible(false);
    setIsAnimationPlaying(false);
  }

  function handleAnimationClick() {
    handleClick();
    setIsAnimationVisible(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const game = JSON.parse(localStorage.getItem(LOCAL_STORAGE_COOKIE_CLICKER_GAME_KEY)) as Game;
      setData(game?.knowledge); // Update data every second
    }, 1000);
  
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div className="my-8 flex flex-col items-center" style={{ position: 'absolute', top: '30px', zIndex: 2 }}>
        <CakeIcon onClick={handleClick} />
        <p className="text-xs text-gray-600" style={{ position: 'absolute', top: '100%' }}>Click on the Gaucho!</p>
      </div>
      <div className="my-8" style={{ position: 'absolute', left: '45%' }}>
        <h2 className="text-center text-3xl font-semibold text-orange-900 md:text-5xl">{game?.cash}</h2>
        <div className="my-8" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <h2 className="text-center text-3xl font-semibold text-blue-900 md:text-5xl">{data}</h2>
        </div>
      </div>
      {isAnimationVisible && (
        <div className="absolute inset-0 flex items-center justify-center" onClick={handleAnimationClick}>
          <Lottie
            loop={false}
            animationData={AMoney}
            onComplete={onAnimationComplete}
            onAnimationStart={onAnimationStart}
            style={{ position: 'absolute', top: '-10px', zIndex: 1 }}
          />
        </div>
      )}
    </div>
  );
}
