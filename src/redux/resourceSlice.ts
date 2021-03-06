import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {ResourceType, ResourceState, ResourceAmount} from '../types';
import {resourcesData, storageData} from '../data/resourcesData';
import {buyResearch} from './researchSlice';
import {machinesData} from '../data/machinesData';
import {buyMachine} from './machineSlice';
import researchData from '../data/researchData';
import {ReduxState, canAfford} from './store';
import {calcResourcePerSecond, extractAmountFromState} from './utils';
import {resourceAmountKeys} from '../utils/ResourceOperations';

const gain = 1;

// 2 = multiply stoage by 2 when growing
const storageGrowthMultiplier = 2;

export type CanAffordPayload<T> = PayloadAction<
  T,
  string,
  {cost: ResourceAmount; canAfford: boolean}
>;

export const initialState = {
  values: Object.keys(ResourceType).reduce((result, current) => {
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
      storageCost: storageData[key],
    } as ResourceState;
    return result;
  }, {} as any) as {
    [x in ResourceType]: ResourceState;
  },
  recalculateRPS: false,
};

export type ReduxResourceState = typeof initialState;

const applyCost = (state: ReduxResourceState, cost: ResourceAmount) => {
  Object.keys(cost).forEach((element) => {
    const key = element as ResourceType;
    state.values[key].current -= cost[key]!;
  });
};

const resourceSlice = createSlice({
  name: 'resource',
  initialState,
  reducers: {
    tick: (state, action: PayloadAction<number>) => {
      Object.keys(state.values).forEach((key: string) => {
        const id = key as ResourceType;
        const value = Math.min(
          state.values[id].capacity === -1
            ? Number.POSITIVE_INFINITY
            : state.values[id].capacity,
          state.values[id].current +
            state.values[id].perSecond * (action.payload / 1000),
        );
        if (value < 0) {
          state.recalculateRPS = true;
          state.values[id].current = 0;
        } else {
          state.values[id].current = value;
        }
      });
      return state;
    },
    manualGain: (state, action: PayloadAction<ResourceType>) => {
      state.recalculateRPS = true;
      state.values[action.payload].current = Math.min(
        state.values[action.payload].capacity === -1
          ? Number.POSITIVE_INFINITY
          : state.values[action.payload].capacity,
        state.values[action.payload].current + gain,
      );
    },
    upgradeStorage: (
      state,
      action: PayloadAction<{type: ResourceType; cost: ResourceAmount}>,
    ) => {
      applyCost(state, action.payload.cost);

      state.values[action.payload.type].capacity *= storageGrowthMultiplier;

      // increment price of storage for next time
      Object.keys(state.values[action.payload.type].storageCost).forEach(
        (storageCostKey) => {
          (state.values[action.payload.type].storageCost as any)[
            storageCostKey
          ] *= 2;
        },
      );
    },
    setResource: (
      state,
      action: PayloadAction<{resource: ResourceType; amount: number}>,
    ) => {
      state.values[action.payload.resource].current = action.payload.amount;
    },
    applyRPS: (state, action: PayloadAction<ResourceAmount>) => {
      state.recalculateRPS = false;
      resourceAmountKeys(action.payload).forEach((resource) => {
        state.values[resource].perSecond = action.payload[resource]!;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buyResearch, (state, action) => {
      applyCost(state, action.payload.cost);
      const research = researchData[action.payload.type];
      if (research.effects.unlock) {
        research.effects.unlock.forEach((key) => {
          const unlockId = key as ResourceType;
          if (state.values[unlockId]) {
            state.values[unlockId].unlocked = true;
          }
        });
      }
    });
    builder.addCase(buyMachine, (state, action) => {
      applyCost(state, action.payload.cost);
      const machine = machinesData[action.payload.type];
      Object.keys(machine.resourcePerSecond).forEach((key) => {
        const resource = key as ResourceType;
        state.values[resource].perSecond += machine.resourcePerSecond[
          resource
        ]!;
      });
    });
  },
});

export const applyTick = createAsyncThunk(
  'global/applyTick',
  (delta: number, {getState, dispatch}) => {
    const state = getState() as ReduxState;
    dispatch(tick(delta));

    const amount = extractAmountFromState(state.resource);
    const deficit = resourceAmountKeys(amount).filter(
      (key) =>
        state.resource.values[key].current <= 0 &&
        state.resource.values[key].perSecond < 0,
    );

    if (state.resource.recalculateRPS || deficit) {
      dispatch(recalculateRPS(delta));
    }
  },
);
export const recalculateRPS = createAsyncThunk(
  'global/recalculateRPS',
  (delta: number, {getState, dispatch}) => {
    const state = getState() as ReduxState;
    const rps = calcResourcePerSecond(state, delta);
    dispatch(resourceSlice.actions.applyRPS(rps));
  },
);

export const tryUpgradeStorage = createAsyncThunk(
  'resource/tryUpgradeStorage',
  (type: ResourceType, {getState, dispatch}) => {
    const state = getState() as ReduxState;
    const cost = state.resource.values[type].storageCost;

    if (canAfford(cost, state)) {
      dispatch(upgradeStorage({type, cost}));
    }
  },
);

export const {
  manualGain,
  setResource,
  tick,
  upgradeStorage,
} = resourceSlice.actions;

export default resourceSlice.reducer;
