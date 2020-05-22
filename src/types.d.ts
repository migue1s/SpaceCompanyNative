type ResourceType = '';

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

interface ResourceData {
  id: string;
  name: string;
  category: string;
  baseCapacity: number;
  capacity: number;
  current: number;
  desc: string;
  emc: number;
  hidden: boolean;
  // icon: 'gemIcon';
  // iconExtension: 'png';
  // iconPath: 'Icons/';
  items: {[index: string]: Machine};
  manualGain: boolean;
  perSecond: number;
  perSecondDisplay: number;
  toggleable: boolean;
}
