import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {resourcesData} from '../data/resourcesData';
import researchData, {ResearchId} from '../data/researchData';
import {machinesData} from '../data/machinesData';
import {ResourceType, ResourceData, ResourceState, MachineType} from '../types';

const gain = 1;

// 0 = no storage carried over, 1 = all storage kept
const storageEfficiencyMultiplier = 0;

// 2 = multiply stoage by 2 when growing
const storageGrowthMultiplier = 2;

export const initialState = {
  research: researchData,
  resources: resourcesData as {[x in ResourceType]: ResourceData},
  resourceCount: Object.keys(ResourceType).reduce((result, current) => {
    const key = current as ResourceType;
    const resource = resourcesData[key] as ResourceData;

    result[key] = {
      perSecond: 0,
      perSecondDisplay: 0,
      current: 0,
      capacity: resource.baseCapacity,
      unlocked: resource.unlocked,
      category: resource.category,
      multiplier: 1,
    } as ResourceState;
    return result;
  }, {} as any) as {
    [x in ResourceType]: ResourceState;
  },
  machines: machinesData,
};

export type GameState = typeof initialState;

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    tick: (state, action: PayloadAction<number>) => {
      Object.keys(state.resources).forEach((key: string) => {
        const id = key as ResourceType;
        state.resourceCount[id].current = Math.min(
          state.resourceCount[id].capacity,
          state.resourceCount[id].current +
            state.resourceCount[id].perSecond * action.payload,
        );
      });
      return state;
    },
    manualGain: (state, action: PayloadAction<ResourceType>) => {
      state.resourceCount[action.payload].current = Math.min(
        state.resourceCount[action.payload].capacity,
        state.resourceCount[action.payload].current + gain,
      );
    },
    developmentSetResource: (
      state,
      action: PayloadAction<{resource: ResourceType; amount: number}>,
    ) => {
      state.resourceCount[action.payload.resource].current =
        action.payload.amount;
    },
    upgradeStorage: (state, action: PayloadAction<ResourceType>) => {
      if (
        state.resourceCount[action.payload].current ===
        state.resourceCount[action.payload].capacity
      ) {
        state.resourceCount[
          action.payload
        ].current *= storageEfficiencyMultiplier;
        state.resourceCount[action.payload].capacity *= storageGrowthMultiplier;
      }
    },
    buyResearch: (state, action: PayloadAction<ResearchId>) => {
      const target = state.research[action.payload];

      if (
        state.resourceCount.science.current >= target.science &&
        (target.maxLevel ||
          target.maxLevel === -1 ||
          target.currentLevel < target.maxLevel)
      ) {
        // Buy it!

        // Set as bought
        target.currentLevel += 1;

        // Decrease science
        state.resourceCount.science.current -= target.science;

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
              state.resourceCount[unlockId as ResourceType].unlocked = true;
            }
            // TODO: handle the generic "resource"
          });
        }

        // Double a resource/machine
        if (target.effects.double) {
          target.effects.double.forEach((doubleId) => {
            if (state.resourceCount[doubleId as ResourceType]) {
              state.resourceCount[doubleId as ResourceType].multiplier *= 2;
            }
            // TODO: handle a machine
          });
        }
      }
    },
    buildMachine: (state, action: PayloadAction<MachineType>) => {
      const target = state.machines[action.payload];

      if (
        Object.keys(target.cost).map((type) => {
          return (
            target.cost[type as ResourceType]! >=
            state.resourceCount[type as ResourceType].current
          );
        })
      ) {
        // Pay all costs
        Object.keys(target.cost).map((type) => {
          state.resourceCount[type as ResourceType].current -= target.cost[
            type as ResourceType
          ]!;
        });
        // Add a machine
        target.current += 1;
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
} = gameSlice.actions;

export default gameSlice.reducer;
