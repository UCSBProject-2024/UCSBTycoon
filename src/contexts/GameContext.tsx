import { Dispatch, createContext, useReducer } from 'react';
import { Game } from '../domains';

// const LOCAL_STORAGE_COOKIE_CLICKER_GAME_KEY = 'c1eabe78-8bc4-4fdc-9a2e-4aa39583fa15-timers';

export const GameContext = createContext<Game | null>(null);
export const GameDispatchContext = createContext<Dispatch<GameReducerAction> | null>(null);

type Props = {
  children: React.ReactNode;
};

export function TasksProvider({ children }: Props) {
  const [game, dispatch] = useReducer(gameReducer, {} as Game);

  return (
    <GameContext.Provider value={game}>
      <GameDispatchContext.Provider value={dispatch}>{children}</GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}

type GameReducerAction = { type: 'reload' };

function gameReducer(game: Game, action: GameReducerAction) {
  switch (action.type) {
    case 'reload': {
      return game;
    }
  }
}
