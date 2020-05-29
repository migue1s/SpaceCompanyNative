import {configureStore} from '@reduxjs/toolkit';
import {startLoop} from '../utils/TickLoop';
import {GameState, tick} from './gameSlice';
import {GlobalState} from './globalSlice';
import rootReducer from './rootReducer';
export interface ReduxState {
  game: GameState;
  global: GlobalState;
}

const store = configureStore(rootReducer);

startLoop(
  (delta: number) => {
    store.dispatch(tick(delta));
  },
  undefined,
  10000,
);

export default store;
