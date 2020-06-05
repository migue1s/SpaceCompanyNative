import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import researchData, {ResearchId} from '../data/researchData';
import {ResearchState, ResourceAmount} from '../types';
import {canAfford, ReduxState} from './store';
import CostCalculator from '../utils/CostCalculator';

export const initialState = Object.keys(researchData).reduce(
  (result, current) => {
    const key = current as ResearchId;
    result[key] = {
      max: 1,
      current: 0,
      id: key,
      unlocked: researchData[key].unlocked,
    };
    return result;
  },
  {} as {[x in ResearchId]: ResearchState},
);

export type ReduxResearchState = typeof initialState;

const researchSlice = createSlice({
  name: 'reseach',
  initialState: initialState,
  reducers: {
    buyResearch: (
      state,
      action: PayloadAction<{type: ResearchId; cost: ResourceAmount}>,
    ) => {
      const meta = researchData[action.payload.type];
      const target = state[action.payload.type];

      // Set as bought
      target.current += 1;

      // Unlock dependent techs
      if (meta.newTechs) {
        meta.newTechs.forEach((tech) => {
          state[tech].unlocked = true;
        });
      }

      // Double a resource/machine
      // if (target.effects.double) {
      //   target.effects.double.forEach((doubleId) => {
      //     if (state.resources[doubleId as ResourceType]) {
      //       state.resources[doubleId as ResourceType].multiplier *= 2;
      //     }
      //     // TODO: handle a machine
      //   });
      // }
    },
  },
});

export const tryBuyResearch = createAsyncThunk(
  'Research',
  (type: ResearchId, {getState, dispatch}) => {
    const state = getState() as ReduxState;
    const baseCost = {science: researchData[type].science};
    const cost = CostCalculator(state.research[type].current, baseCost);
    const target = state.research[type];

    if (
      canAfford(cost, state) &&
      (target.max === -1 || target.current < target.max)
    ) {
      dispatch(researchSlice.actions.buyResearch({type, cost}));
    }
  },
);

export const {buyResearch} = researchSlice.actions;

export default researchSlice.reducer;
