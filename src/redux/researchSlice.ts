import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import researchData, {ResearchId} from '../data/researchData';
import {ResearchState, ResourceAmount} from '../types';
import {CanAffordPayload} from './resourceSlice';
import {canAfford} from './store';

const initialState = Object.keys(researchData).reduce((result, current) => {
  const key = current as ResearchId;
  result[key] = {
    max: 1,
    current: 0,
    id: key,
    unlocked: researchData[key].unlocked,
  };
  return result;
}, {} as {[x in ResearchId]: ResearchState});

const researchSlice = createSlice({
  name: 'reseach',
  initialState: initialState,
  reducers: {
    buyResearch: {
      reducer: (state, action: CanAffordPayload<ResearchId>) => {
        if (!action.meta.canAfford) {
          return;
        }
        state[action.payload].current += 1;
      },
      prepare: (action: PayloadAction<ResearchId>) => {
        const cost: ResourceAmount = {
          science: researchData[action.payload].science,
        };
        return {
          payload: action.payload,
          meta: {
            cost,
            canAfford: canAfford(cost),
          },
        };
      },
    },
  },
});

export default researchSlice;
