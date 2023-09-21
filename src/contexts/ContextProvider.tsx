import { Dispatch, createContext } from 'react';
import { GameReducerAction, useGameReducer } from '../hooks/useGameReducer';
import { Game } from '../domains';

export const GameContext = createContext<Game | null>(null);
export const GameDispatchContext = createContext<Dispatch<GameReducerAction> | null>(null);

type Props = {
  children: React.ReactNode;
};

export function ContextProvider({ children }: Props) {
  const [game, dispatch] = useGameReducer();

  return (
    <GameContext.Provider value={game}>
      <GameDispatchContext.Provider value={dispatch}>{children}</GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}
