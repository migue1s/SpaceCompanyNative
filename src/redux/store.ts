import {configureStore} from '@reduxjs/toolkit';
import {startLoop} from '../utils/TickLoop';
import gameSlice, {tick, GameState} from './gameSlice';
export interface ReduxState {
  game: GameState;
}
const store = configureStore({
  reducer: {
    game: gameSlice,
  },
});

startLoop(
  (delta: number) => {
    store.dispatch(tick(delta));
  },
  undefined,
  10000,
);

export default store;
