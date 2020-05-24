import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {resourcesData} from '../data/resourcesData';
import {ResourceType} from '../types';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    resources: resourcesData,
  },
  reducers: {
    tick: (state, action: PayloadAction<number>) => {
      Object.keys(state.resources).forEach((key: string) => {
        const id = key as ResourceType;
        state.resources[id].current = Math.min(
          state.resources[id].capacity,
          state.resources[id].current +
            state.resources[id].perSecond * action.payload,
        );
      });
      return state;
    },
    upgradeStorage: (state, action: PayloadAction<ResourceType>) => {
      if (
        state.resources[action.payload].current ===
        state.resources[action.payload].capacity
      ) {
        state.resources[action.payload].current = 0;
        state.resources[action.payload].capacity *= 2;
      }
    },
  },
});

export default gameSlice;
