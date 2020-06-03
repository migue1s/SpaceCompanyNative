import {configureStore} from '@reduxjs/toolkit';
import {startLoop} from '../utils/TickLoop';
import {GameState, tick} from './gameSlice';
import rootReducer from './rootReducer';
export interface ReduxState {
  game: GameState;
}

const store = configureStore(rootReducer);

// Slow down FPS in develop to minimize impact on development only tools
const FPS = __DEV__ ? 1 / 2 : 1 / 10;
startLoop(
  (delta: number) => {
    store.dispatch(tick(delta));
  },
  undefined,
  FPS * 1000,
);

export default store;
