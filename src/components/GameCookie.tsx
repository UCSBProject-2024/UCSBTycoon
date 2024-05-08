import React, { useState } from 'react';
import { useGame } from '../hooks/useGame';
import { useGameDispatch } from '../hooks/useGameDispatch';
import { CakeIcon } from './CakeIcon';

import AMoney from "./AMoney.json";
import Lottie from "lottie-react";

export function GameCookie() {
  const game = useGame();
  const gameDispatch = useGameDispatch();
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

  return (
      <div style={{ position: 'relative' }}>
      <div className="my-8 flex flex-col items-center" style={{ position: 'absolute', top: '30px', zIndex: 2 }}>
        <CakeIcon onClick={handleClick} />
        <p className="text-xs text-gray-600" style={{ position: 'absolute', top: '100%' }}>Click on the Gaucho!</p>
        </div>
        <div className="my-8" style={{ position: 'absolute', left: '35%' }}>
        <h2 className="text-center text-3xl font-semibold text-orange-900 md:text-5xl">{game?.cash}</h2>
      </div>
      {isAnimationVisible && (
        <div className="absolute inset-0 flex items-center justify-center" onClick={handleAnimationClick}>
          <Lottie
            loop={false}
            animationData={AMoney}
            onComplete={onAnimationComplete}
            onAnimationStart={onAnimationStart}
            style={{ position: 'absolute',top: '-10px', zIndex: 1 }}
          />
        </div>
      )}
    </div>
  );
}
