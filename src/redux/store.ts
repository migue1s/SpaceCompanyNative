import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {ResourceType, ResourceAmount} from '../types';
import resourceSlice, {
  ReduxResourceState,
  initialState as resourceInitialState,
} from './resourceSlice';
import machineSlice, {
  ReduxMachineState,
  initialState as machineInitialState,
} from './machineSlice';
import researchSlice, {
  ReduxResearchState,
  initialState as researchInitialState,
} from './researchSlice';

export interface ReduxState {
  resource: ReduxResourceState;
  machine: ReduxMachineState;
  research: ReduxResearchState;
}

export const rootInitialState = {
  resource: resourceInitialState,
  machine: machineInitialState,
  research: researchInitialState,
};

export const rootReducer = combineReducers({
  machine: machineSlice,
  resource: resourceSlice,
  research: researchSlice,
});

const store = configureStore({
  preloadedState: rootInitialState,
  reducer: rootReducer,
});

export const canAfford = (cost: ResourceAmount, state: ReduxState) => {
  return Object.keys(cost).reduce((result, current) => {
    const key = current as ResourceType;
    const canAffordCost = cost[key]! <= state.resource[key].current;
    return canAffordCost && result;
  }, true);
};

export default store;
