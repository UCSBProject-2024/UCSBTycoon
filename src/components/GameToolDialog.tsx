import { ModalDialog } from './ModalDialog';
import { CloseIcon } from './CloseIcon';
import { useGame } from '../hooks/useGame';
import { useGameDispatch } from '../hooks/useGameDispatch';
import { Tool } from '../domains';

export type Props = {
  tool: Tool;
  onClose: () => void;
};

export function GameToolDialog({ tool, onClose }: Props) {
  const game = useGame();
  const gameDispatch = useGameDispatch();

  function handleActivate() {
    if (!gameDispatch) return;
    gameDispatch({ type: 'update', subtype: 'tools', id: tool.id });
    onClose();
  }

  const allowed = game ? game?.cookies >= tool.price : false;

  return (
    <ModalDialog className="rounded-xl border-2 border-orange-600" show={true} onHide={onClose}>
      <div className="border-b p-3">
        <div className="flex justify-between">
          <h1 className="font-semibold">Tool {tool.multiplicator}x</h1>
          <CloseIcon onClick={onClose} />
        </div>
      </div>
      <div className="p-3">
        {allowed ? <p>Do you really want to activate the tool?</p> : <p>You don't have enough cookies!</p>}
      </div>
      <div className="border-t p-3">
        <div className="flex justify-end gap-1">
          <button className="rounded-lg bg-orange-300 px-6 py-1" onClick={onClose}>
            Close
          </button>
          <button
            className="rounded-lg bg-orange-900 px-6 py-1 text-white"
            onClick={handleActivate}
            disabled={!allowed}>
            Activate
          </button>
        </div>
      </div>
    </ModalDialog>
  );
}
