import { GameToolDetail } from './GameToolDetail';
import { Tool } from '../domains.ts';

export function GameTools() {
  const defaultTools: Tool[] = [
    { id: 1, multiplicator: 2, price: 1_000, active: false },
    { id: 2, multiplicator: 4, price: 10_000, active: false },
    { id: 3, multiplicator: 8, price: 100_000, active: false },
    { id: 4, multiplicator: 16, price: 1_000_000, active: false },
    { id: 5, multiplicator: 32, price: 10_000_000, active: false },
    { id: 6, multiplicator: 64, price: 100_000_000, active: true }
  ];

  const tools = defaultTools.map((tool) => <GameToolDetail key={tool.id} tool={tool} />);

  return (
    <>
      <div className="flex justify-center gap-1">{tools}</div>
      <div className="my-2">
        <p className="text-center text-sm">Buy some items and multiply your production.</p>
      </div>
    </>
  );
}
