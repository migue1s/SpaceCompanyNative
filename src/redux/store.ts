import {configureStore} from '@reduxjs/toolkit';
import {startLoop} from '../utils/TickLoop';
import {GameState, tick} from './gameSlice';
import rootReducer from './rootReducer';
import {ResourceType, ResourceAmount} from '../types';

export interface ReduxState {
  game: GameState;
}

const store = configureStore(rootReducer);

export const canAfford = (cost: ResourceAmount) => {
  const state = store.getState() as ReduxState;
  return Object.keys(cost).reduce((result, current) => {
    const key = current as ResourceType;
    const canAffordCost = cost[key]! <= state.resources[key].current;
    return canAffordCost && result;
  }, true);
};

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
