import { useEffect } from 'react';
import { useGameDispatch } from '../hooks/useGameDispatch';
import MapWindow from './UCSBMap/MapWindow';
import { Header } from './Header';
import { GameCookie } from './GameCookie';
import { GameTools } from './GameTools';
import { GameReset } from './GameReset';
import React from 'react';
import './Game.css';

export function Game() {
  const gameDispatch = useGameDispatch();

  useEffect(() => {
    if (gameDispatch) {
      gameDispatch({ type: 'reload' });
    }
  }, [gameDispatch]);

  return (
    <>
      <Header />
      <div className="SplitScreen">
        <div className="MapLeft">
          <MapWindow />
        </div>
        <div className="ControlsRight">
          <GameCookie />
          <GameTools />
          <GameReset />
        </div>
      </div>
    </>
  );
}
