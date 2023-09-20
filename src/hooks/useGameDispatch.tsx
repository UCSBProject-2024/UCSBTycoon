import { useContext } from 'react';
import { GameDispatchContext } from '../contexts/GameContext';

export function useGameDispatch() {
  return useContext(GameDispatchContext);
}
