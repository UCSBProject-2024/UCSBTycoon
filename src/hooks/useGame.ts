import { useContext } from 'react';
import { GameContext } from '../contexts/ContextProvider';

export function useGame() {
  return useContext(GameContext);
}
