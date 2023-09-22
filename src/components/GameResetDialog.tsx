import { useGameDispatch } from '../hooks/useGameDispatch';
import { ModalDialog } from './ModalDialog';
import { CloseIcon } from './CloseIcon';

export type Props = {
  onClose: () => void;
};

export function GameResetDialog({ onClose }: Props) {
  const gameDispatch = useGameDispatch();

  function handleDelete() {
    if (!gameDispatch) return;
    gameDispatch({ type: 'reset' });
    onClose();
  }

  return (
    <ModalDialog className="rounded-xl border-2 border-orange-600" show={true} onHide={onClose}>
      <div className="border-b p-3">
        <div className="flex justify-between">
          <h1 className="font-semibold">Game</h1>
          <CloseIcon onClick={onClose} />
        </div>
      </div>
      <div className="p-3">
        <p>Do you really want to reset the game?</p>
      </div>
      <div className="border-t p-3">
        <div className="flex justify-end gap-1">
          <button className="rounded-lg bg-orange-300 px-6 py-1" onClick={onClose}>
            Close
          </button>
          <button className="rounded-lg bg-orange-900 px-6 py-1 text-white" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </ModalDialog>
  );
}
