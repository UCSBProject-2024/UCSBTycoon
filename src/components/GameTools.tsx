import { GameToolDetail } from './GameToolDetail';
import { useGame } from '../hooks/useGame';
import React from 'react';

export function GameTools() {
  const game = useGame();

  const tools = game?.tools.map((tool) => <GameToolDetail key={tool.id} tool={tool} />);

  return (
    <>
      <div className="flex justify-center gap-1">{tools}</div>
      <div className="my-2">
        <p className="text-center text-sm">Buy some items and multiply your production.</p>
      </div>
    </>
  );
}
