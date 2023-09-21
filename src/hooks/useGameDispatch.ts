import { useContext } from 'react';
import { GameDispatchContext } from '../contexts/ContextProvider';

export function useGameDispatch() {
  return useContext(GameDispatchContext);
}
