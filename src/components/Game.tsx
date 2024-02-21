import { useEffect } from 'react';
import { useGameDispatch } from '../hooks/useGameDispatch';
import { Header } from './Header';
import { GameTitle } from './GameTitle';
import { GameCookie } from './GameCookie';
import { GameTools } from './GameTools';
import { GameReset } from './GameReset';
import React from 'react';

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
      <main className="md:container md:mx-auto">
        <GameTitle />
        <GameCookie />
        <GameTools />
        <GameReset />
      </main>
    </>
  );
}
