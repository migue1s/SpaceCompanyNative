import {configureStore} from '@reduxjs/toolkit';
import {startLoop} from '../utils/TickLoop';
import gameSlice, {tick, GameState} from './gameSlice';
import globalSlice, {GlobalState} from './globalSlice';
export interface ReduxState {
  game: GameState;
  global: GlobalState;
}

const store = configureStore({
  reducer: {
    game: gameSlice,
    global: globalSlice,
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
