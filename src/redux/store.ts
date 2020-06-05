import {combineReducers, configureStore} from '@reduxjs/toolkit';
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

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

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

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const canAfford = (cost: ResourceAmount, state: ReduxState) => {
  return Object.keys(cost).reduce((result, current) => {
    const key = current as ResourceType;
    const canAffordCost = cost[key]! <= state.resource[key].current;
    return canAffordCost && result;
  }, true);
};

export default () => {
  const store = configureStore({
    reducer: persistedReducer,
    preloadedState: rootInitialState,
    middleware: [thunk],
  });
  let persistor = persistStore(store);
  return {store, persistor};
};
