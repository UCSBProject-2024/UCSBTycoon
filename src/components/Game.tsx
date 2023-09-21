import { useEffect } from 'react';
import { useGameDispatch } from '../hooks/useGameDispatch';
import { Header } from './Header';
import { CakeIcon } from './CakeIcon';
import { GameTitle } from './GameTitle';
import { GameTools } from './GameTools';

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
        <div className="my-8 flex flex-col items-center">
          <CakeIcon />
          <p className="text-xs text-gray-600">Click on the cookie!</p>
        </div>
        <div className="my-8">
          <h2 className="text-center text-3xl font-semibold text-orange-900 md:text-5xl">0</h2>
        </div>
        <GameTools />
        <div className="my-4 text-center">
          <button className="rounded-lg bg-orange-900 px-8 py-2 text-white">Restart Game!</button>
        </div>
      </main>
    </>
  );
}
