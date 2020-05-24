import {configureStore} from '@reduxjs/toolkit';
import {startLoop} from '../utils/TickLoop';
import gameSlice from './gameSlice';

const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

startLoop(
  (delta: number) => {
    store.dispatch(gameSlice.actions.tick(delta));
  },
  undefined,
  1 / 10,
);

export default store;
