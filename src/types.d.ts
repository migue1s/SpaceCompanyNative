interface Resource {
  name: string;
  category: string;
  baseStorage: number;
  desc: string;
  emc: number;
  manualGain: boolean;
  page: string;
  unlocked: boolean;
}

interface Machine {
  category: string;
  cost: {[x in ResourceType]?: number};
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

type ResourceType =
  | 'energy'
  | 'plasma'
  | 'meteorite'
  | 'carbon'
  | 'oil'
  | 'metal'
  | 'gem'
  | 'wood'
  | 'silicon'
  | 'uranium'
  | 'lava'
  | 'lunarite'
  | 'methane'
  | 'titanium'
  | 'gold'
  | 'silver'
  | 'hydrogen'
  | 'helium'
  | 'ice'
  | 'science'
  | 'rocketFuel'
  | 'rocket'
  | 'antimatter';

interface ResourceData {
  name: string;
  category: string;
  baseCapacity: number;
  page: string;
  capacity: number;
  current: number;
  desc: string;
  emc?: number;
  // icon: 'gemIcon';
  // iconExtension: 'png';
  // iconPath: 'Icons/';
  gainCost?: {[index: string]: number};
  manualGain: boolean;
  perSecond: number;
  perSecondDisplay: number;
  toggleable: boolean;
  unlocked: boolean;
}
