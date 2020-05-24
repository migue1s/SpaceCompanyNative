import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {resourcesData} from '../data/resourcesData';

const gain = 1;

// 0 = no storage carried over, 1 = all storage kept
const storageEfficiencyMultiplier = 0;

// 2 = multiply stoage by 2 when growing
const storageGrowthMultiplier = 2;

export const initialState = {
  resources: resourcesData,
};

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
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
    manualGain: (state, action: PayloadAction<ResourceType>) => {
      state.resources[action.payload].current = Math.min(
        state.resources[action.payload].capacity,
        state.resources[action.payload].current + gain,
      );
    },
    upgradeStorage: (state, action: PayloadAction<ResourceType>) => {
      if (
        state.resources[action.payload].current ===
        state.resources[action.payload].capacity
      ) {
        state.resources[action.payload].current *= storageEfficiencyMultiplier;
        state.resources[action.payload].capacity *= storageGrowthMultiplier;
      }
    },
  },
});

export const {tick, manualGain, upgradeStorage} = gameSlice.actions;

export default gameSlice.reducer;
