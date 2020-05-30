import {ResearchId} from './data/researchData';

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

export interface Machine {
  category: string;
  cost: ResourceAmount;
  current: number;
  desc: string;
  destroyable: true;
  // iconExtension: "png"
  // iconPath: "Icons/"
  id: string;
  name: string;
  resource: string;
  tier: number;
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

export interface ResourceData {
  id: ResourceType;
  name: string;
  category: string;
  baseCapacity: number;
  page: string;
  desc: string;
  emc?: number;
  // icon: 'gemIcon';
  // iconExtension: 'png';
  // iconPath: 'Icons/';
  gainCost?: ResourceAmount;
  manualGain: boolean;
  toggleable: boolean;
  unlocked: boolean;
}

export interface ResourceState {
  perSecond: number;
  perSecondDisplay: number;
  current: number;
  capacity: number;
  category: string;
  unlocked: boolean;
  multiplier: number;
}

export interface Research {
  name: string;
  desc: string;
  buttonText: string;
  unlocked: boolean;
  currentLevel: number;
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