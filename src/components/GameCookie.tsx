import React from 'react';
import { useGame } from '../hooks/useGame';
import { useGameDispatch } from '../hooks/useGameDispatch';
import { CakeIcon } from './CakeIcon';

export function GameCookie() {
  const game = useGame();
  const gameDispatch = useGameDispatch();

  function handleClick() {
    if (!gameDispatch) return;
  }

  return (
    <>
      <div className="my-8 flex flex-col items-center">
        <CakeIcon onClick={handleClick} />
        <p className="text-xs text-gray-600">Click on the Gaucho!</p>
      </div>
      </div>
    </>
  );
}
