import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {resourcesData} from '../data/resourcesData';
import researchData, {ResearchId} from '../data/researchData';
import {
  ResourceType,
  ResourceState,
  MachineType,
  MachineState,
  Machine,
} from '../types';
import {machinesData} from '../data/machinesData';

const gain = 1;

// 0 = no storage carried over, 1 = all storage kept
const storageEfficiencyMultiplier = 0;

// 2 = multiply stoage by 2 when growing
const storageGrowthMultiplier = 2;

export const initialState = {
  research: researchData,
  resources: Object.keys(ResourceType).reduce((result, current) => {
    const key = current as ResourceType;
    const resource = resourcesData[key];

    result[key] = {
      perSecond: 0,
      perSecondDisplay: 0,
      current: 0,
      multiplier: 1,
      id: resource.id,
      capacity: resource.baseCapacity,
      unlocked: resource.unlocked,
      category: resource.category,
    } as ResourceState;
    return result;
  }, {} as any) as {
    [x in ResourceType]: ResourceState;
  },
  machines: Object.keys(machinesData).reduce((result, current) => {
    const key = current as MachineType;
    result[key] = {
      current: 0,
      unlocked: ((machinesData as any)[key] as Machine).unlocked || false,
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
    developmentSetResource: (
      state,
      action: PayloadAction<{resource: ResourceType; amount: number}>,
    ) => {
      state.resources[action.payload.resource].current = action.payload.amount;
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
        if (target.effects.double) {
          target.effects.double.forEach((doubleId) => {
            if (state.resources[doubleId as ResourceType]) {
              state.resources[doubleId as ResourceType].multiplier *= 2;
            }
            // TODO: handle a machine
          });
        }
      }
    },
    // buildMachine: (state, action: PayloadAction<MachineType>) => {
    //   const machineMeta = machinesData[action.payload];
    //   const target = state.machines[action.payload];
    //   if (
    //     Object.keys(target.cost).map((type) => {
    //       return (
    //         target.cost[type as ResourceType]! >=
    //         state.resources[type as ResourceType].current
    //       );
    //     })
    //   ) {
    //     // Pay all costs
    //     Object.keys(target.cost).map((type) => {
    //       state.resources[type as ResourceType].current -= target.cost[
    //         type as ResourceType
    //       ]!;
    //     });
    //     // Add a machine
    //     target.current += 1;
    //   }
    // },
  },
});

export const {
  tick,
  manualGain,
  upgradeStorage,
  buyResearch,
  developmentSetResource,
} = gameSlice.actions;

export default gameSlice.reducer;
