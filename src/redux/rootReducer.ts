import gameSlice from './gameSlice';
import globalSlice from './globalSlice';

export default {
  reducer: {
    game: gameSlice,
    global: globalSlice,
  },
};
