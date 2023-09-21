import { useState } from 'react';
import { PencilIcon } from './PencilIcon';
import { GameTitleEditDialog } from './GameTitleEditDialog';
import { useGame } from '../hooks/useGame';

export function GameTitle() {
  const [show, setShow] = useState(false);
  const game = useGame();

  return (
    <div className="relative m-8 rounded-lg border-2 border-orange-600 bg-orange-200 text-orange-900">
      <h1 className="p-2 pe-10 text-center text-3xl font-semibold md:p-4 md:pe-14 md:text-5xl">{game?.title}</h1>
      <PencilIcon onClick={() => setShow(true)} />
      {show && <GameTitleEditDialog onClose={() => setShow(false)} />}
    </div>
  );
}
