import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ResourceType, ResourceState, ResourceAmount} from '../types';
import {resourcesData} from '../data/resourcesData';
import researchSlice from './researchSlice';

const gain = 1;

// 0 = no storage carried over, 1 = all storage kept
const storageEfficiencyMultiplier = 0;

// 2 = multiply stoage by 2 when growing
const storageGrowthMultiplier = 2;

export type CanAffordPayload<T> = PayloadAction<
  T,
  string,
  {cost: ResourceAmount; canAfford: boolean}
>;
const initialState = Object.keys(ResourceType).reduce((result, current) => {
  const key = current as ResourceType;
  const resource = resourcesData[key];

  result[key] = {
    perSecond: 0,
    perSecondDisplay: 0,
    current: 0,
    id: resource.id,
    capacity: resource.baseCapacity,
    unlocked: resource.unlocked,
    category: resource.category,
  } as ResourceState;
  return result;
}, {} as any) as {
  [x in ResourceType]: ResourceState;
};

export type ReduxResourceState = typeof initialState;

const resourceSlice = createSlice({
  name: 'resource',
  initialState,
  reducers: {
    tick: (state, action: PayloadAction<number>) => {
      Object.keys(state).forEach((key: string) => {
        const id = key as ResourceType;
        state[id].current = Math.max(
          0,
          Math.min(
            state[id].capacity === -1
              ? Number.POSITIVE_INFINITY
              : state[id].capacity,
            state[id].current + state[id].perSecond * (action.payload / 1000),
          ),
        );
      });
      return state;
    },
    manualGain: (state, action: PayloadAction<ResourceType>) => {
      state[action.payload].current = Math.min(
        state[action.payload].capacity === -1
          ? Number.POSITIVE_INFINITY
          : state[action.payload].capacity,
        state[action.payload].current + gain,
      );
    },
    upgradeStorage: (state, action: PayloadAction<ResourceType>) => {
      if (state[action.payload].current === state[action.payload].capacity) {
        state[action.payload].current *= storageEfficiencyMultiplier;
        state[action.payload].capacity *= storageGrowthMultiplier;
      }
    },
    developmentSetResource: (
      state,
      action: PayloadAction<{resource: ResourceType; amount: number}>,
    ) => {
      state[action.payload.resource].current = action.payload.amount;
    },
  },
  extraReducers: {
    [researchSlice.actions.buyResearch]:
  }
});

export default resourceSlice;
