import { useEffect } from 'react';
import { useGameDispatch } from '../hooks/useGameDispatch';
import MapWindow from './UCSBMap/MapWindow';
import { Header } from './Header';
import { GameCookie } from './GameCookie';
import React from 'react';
import './Game.css';
import DrawerRight from './Drawer';
import RankingDrawer from './RankingDrawer';

export function Game() {
  const gameDispatch = useGameDispatch();

  useEffect(() => {
    if (gameDispatch) {
      gameDispatch({ type: 'reload' });
      console.log('reloaded game');
    }
  }, [gameDispatch]);

  useEffect(() => {
    fetch('Data.json')
      .then((response) => response.json())
      .then((data) => {
        // Process the data here
        localStorage.setItem('gameData', JSON.stringify(data));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [gameDispatch]);

  return (
    <>
      <Header />
      <div className="SplitScreen">
        <div className="MapLeft">
          <MapWindow />
        </div>
        <div className="ControlsRight">
          <DrawerRight />
          <RankingDrawer />
          <GameCookie />
        </div>
      </div>
    </>
  );
}
