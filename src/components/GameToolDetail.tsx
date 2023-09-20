import classNames from 'classnames';
import { Tool } from '../domains';

type Props = { tool: Tool };

export function GameToolDetail({ tool }: Props) {
  return (
    <button
      className={classNames(
        'flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2',
        tool.active ? 'border-orange-600 bg-orange-300' : 'border-orange-900 bg-orange-200'
      )}
      onClick={() => console.log('PICO')}>
      <div>{tool.multiplicator}x</div>
      <div className="text-xs">{tool.price >= 1000000 ? `${tool.price / 1000000}M` : `${tool.price / 1000}K`}</div>
    </button>
  );
}
