import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {resourcesData} from '../data/resourcesData';
import researchData, {ResearchId} from '../data/researchData';
import {
  ResourceType,
  ResourceState,
  MachineState,
  ResourceAmount,
} from '../types';
import {machinesData, MachineType} from '../data/machinesData';
import CostCalculator from '../utils/CostCalculator';
export const initialState = {
  research: researchData,
  machines: Object.keys(machinesData).reduce((result, current) => {
    const key = current as MachineType;
    result[key] = {
      current: 0,
      multiplier: 1,
      id: machinesData[key].id,
      unlocked: machinesData[key].unlocked || false,
    };
    return result;
  }, {} as any) as {
    [x in MachineType]: MachineState;
  },
};

export type GameState = typeof initialState;

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: 
    buyResearch: (state, action: PayloadAction<ResearchId>) => {
      const target = state.research[action.payload];

      if (
        state.resources.science.current >= target.science &&
        (target.maxLevel ||
          target.maxLevel === -1 ||
          target.currentLevel < target.maxLevel)
      ) {
        // Buy it!

        // Set as bought
        target.currentLevel += 1;

        // Decrease science
        state.resources.science.current -= target.science;

        // Unlock dependent techs
        if (target.newTechs) {
          target.newTechs.forEach((tech) => {
            state.research[tech].unlocked = true;
          });
        }

        // Unlock resources
        if (target.effects.unlock) {
          target.effects.unlock.forEach((unlockId) => {
            if (state.resources[unlockId as ResourceType]) {
              state.resources[unlockId as ResourceType].unlocked = true;
              state.resources[unlockId as ResourceType].unlocked = true;
            }
            // TODO: handle the generic "resource"
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
      }
    },
    buildMachine: (state, action: PayloadAction<MachineType>) => {
      const machineMeta = machinesData[action.payload];
      const target = state.machines[action.payload];
      const cost = CostCalculator(target.current, machineMeta.cost);
      if (canAfford(cost, state)) {
        // Remove cost
        Object.keys(cost).forEach((costType) => {
          const key = costType as ResourceType;
          state.resources[key].current -= cost[key]!;
        });

        target.current += 1;
        Object.keys(machineMeta.resourcePerSecond).forEach((resourceType) => {
          const key = resourceType as ResourceType;
          state.resources[key].perSecond += machineMeta.resourcePerSecond[key]!;
        });
      }
    },
  },
});

export const {
  tick,
  manualGain,
  upgradeStorage,
  buyResearch,
  developmentSetResource,
  buildMachine,
} = gameSlice.actions;

export default gameSlice.reducer;




