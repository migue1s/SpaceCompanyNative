import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import researchData from '../data/researchData';
import {ResourceAmount, MachineState} from '../types';
import {canAfford, ReduxState} from './store';
import {MachineType, machinesData} from '../data/machinesData';
import CostCalculator from '../utils/CostCalculator';
import {buyResearch} from './researchSlice';
import {recalculateRPS} from './resourceSlice';

export const initialState = Object.keys(machinesData).reduce(
  (result, current) => {
    const key = current as MachineType;
    result[key] = {
      current: 0,
      multiplier: 1,
      id: machinesData[key].id,
      unlocked: machinesData[key].unlocked || false,
    };
    return result;
  },
  {} as any,
) as {
  [x in MachineType]: MachineState;
};

export type ReduxMachineState = typeof initialState;

const machineSlice = createSlice({
  name: 'reseach',
  initialState: initialState,
  reducers: {
    buyMachine: (
      state,
      action: PayloadAction<{type: MachineType; cost: ResourceAmount}>,
    ) => {
      state[action.payload.type].current += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buyResearch, (state, action) => {
      const research = researchData[action.payload.type];
      if (research.effects.unlock) {
        research.effects.unlock.forEach((key) => {
          const unlockId = key as MachineType;
          if (state[unlockId]) {
            state[unlockId].unlocked = true;
          }
        });
      }
      if (research.effects.double) {
        research.effects.double.forEach((key) => {
          const unlockId = key as MachineType;
          if (state[unlockId]) {
            state[unlockId].multiplier *= 2;
          }
        });
      }
    });
  },
});

export const tryBuyMachine = createAsyncThunk(
  'machine',
  (type: MachineType, {getState, dispatch}) => {
    const state = getState() as ReduxState;
    const baseCost = machinesData[type].cost;
    const cost = CostCalculator(state.machine[type].current, baseCost);

    if (canAfford(cost, state)) {
      dispatch(machineSlice.actions.buyMachine({type, cost}));
      dispatch(recalculateRPS(0));
    }
  },
);

export const {buyMachine} = machineSlice.actions;

export default machineSlice.reducer;
