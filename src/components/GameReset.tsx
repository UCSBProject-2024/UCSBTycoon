import { useState } from 'react';
import { GameResetDialog } from './GameResetDialog';
import React from 'react';

export function GameReset() {
  const [show, setShow] = useState(false);

  return (
    <div className="my-4 text-center">
      <button className="rounded-lg bg-orange-900 px-8 py-2 text-white" onClick={() => setShow(true)}>
        Restart Game!
      </button>
      {show && <GameResetDialog onClose={() => setShow(false)} />}
    </div>
  );
}
