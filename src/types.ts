import {ResearchId} from './data/researchData';
import {MachineType} from './data/machinesData';

export type TextVariant = 'heading' | 'title' | 'body' | 'caption';
export type ThemeVariant = 'dark' | 'light';
export interface Resource {
  name: string;
  category: string;
  baseStorage: number;
  desc: string;
  emc: number;
  manualGain: boolean;
  page: string;
  unlocked: boolean;
}

export type ResourceAmount = {
  [x in ResourceType]?: number;
};

export interface ResourceCategory {
  title: string;
  category: string;
  page: string;
  order: number;
}

export interface Machine {
  id: MachineType;
  tier: number;
  name: string;
  desc: string;
  resource: ResourceType;
  resourcePerSecond: ResourceAmount;
  cost: ResourceAmount;
  unlocked?: boolean;
}
export interface MachineState {
  id: MachineType;
  current: number;
  unlocked: boolean;
  multiplier: number;
}

export enum ResourceType {
  energy = 'energy',
  plasma = 'plasma',
  meteorite = 'meteorite',
  carbon = 'carbon',
  oil = 'oil',
  metal = 'metal',
  gem = 'gem',
  wood = 'wood',
  silicon = 'silicon',
  uranium = 'uranium',
  lava = 'lava',
  lunarite = 'lunarite',
  methane = 'methane',
  titanium = 'titanium',
  gold = 'gold',
  silver = 'silver',
  hydrogen = 'hydrogen',
  helium = 'helium',
  ice = 'ice',
  science = 'science',
  rocketFuel = 'rocketFuel',
  rocket = 'rocket',
  antimatter = 'antimatter',
}

export enum ResourceCategoryType {
  energy = 'energy',
  fabricated = 'fabricated',
  earth = 'earth',
  innerSol = 'innerSol',
  outerSol = 'outerSol',
  science = 'science',
  spacecraft = 'spacecraft',
  rocketFuel = 'rocketFuel',
}

export interface ResourceData {
  id: ResourceType;
  name: string;
  category: string;
  baseCapacity: number;
  page: string;
  desc: string;
  emc?: number;
  gainCost?: ResourceAmount;
  manualGain: boolean;
  toggleable: boolean;
  unlocked: boolean;
}

export interface ResourceState {
  id: ResourceType;
  perSecond: number;
  perSecondDisplay: number;
  current: number;
  capacity: number;
  category: string;
  unlocked: boolean;
}

export interface Research {
  name: string;
  desc: string;
  buttonText: string;
  unlocked: boolean;
  maxLevel: number;
  science: number;
  newTechs?: ResearchId[];
  tabAlerts?: string[];
  effects: {
    unlock?: string[];
    double?: string[];
    efficiency?: string;
  };
}

export interface ResearchState {
  id: string;
  unlocked: boolean;
  current: number;
  max: number;
}
