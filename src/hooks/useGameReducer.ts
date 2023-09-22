import { useImmerReducer } from 'use-immer';
import { Game } from '../domains';

export type GameReducerAction =
  | { type: 'reload' | 'reset' }
  | { type: 'update'; subtype: 'title'; title: string }
  | { type: 'update'; subtype: 'cookies' };

export function useGameReducer() {
  return useImmerReducer(gameReducer, null as unknown as Game);
}

const LOCAL_STORAGE_COOKIE_CLICKER_GAME_KEY = 'c1eabe78-8bc4-4fdc-9a2e-4aa39583fa15-cookie-clicker-game';

const INITIAL_GAME = {
  title: 'The Bakery',
  tools: [
    { id: 1, multiplicator: 2, price: 1_000, active: false },
    { id: 2, multiplicator: 4, price: 10_000, active: false },
    { id: 3, multiplicator: 8, price: 100_000, active: false },
    { id: 4, multiplicator: 16, price: 1_000_000, active: false },
    { id: 5, multiplicator: 32, price: 10_000_000, active: false },
    { id: 6, multiplicator: 64, price: 100_000_000, active: false }
  ],
  cookies: 0
};

function gameReducer(draft: Game, action: GameReducerAction) {
  switch (action.type) {
    case 'reload': {
      return getGameFromLocalStorage();
    }
    case 'update': {
      switch (action.subtype) {
        case 'title': {
          draft.title = action.title;
          setGameToLocalStorage(draft);
          return draft;
        }
        case 'cookies': {
          draft.cookies = draft.cookies + 1;
          setGameToLocalStorage(draft);
          return draft;
        }
      }
      break;
    }
    case 'reset': {
      setGameToLocalStorage(INITIAL_GAME);
      return INITIAL_GAME;
    }
  }
}

function getGameFromLocalStorage() {
  const loadedGame = localStorage.getItem(LOCAL_STORAGE_COOKIE_CLICKER_GAME_KEY);
  if (loadedGame) {
    return JSON.parse(loadedGame) as Game;
  }
  return INITIAL_GAME;
}

function setGameToLocalStorage(game: Game) {
  localStorage.setItem(LOCAL_STORAGE_COOKIE_CLICKER_GAME_KEY, JSON.stringify(game));
}
