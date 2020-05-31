import {Machine, MachineType} from '../types';

export const machinesData: {[x in MachineType]: Machine} = {
  miner: {
    category: 'earth',
    cost: {
      metal: 10,
      wood: 5,
    },
    current: 0,
    desc: 'Build a pickaxe for your miner.',
    destroyable: true,
    // iconExtension: "png"
    // iconPath: "Icons/"
    id: 'miner',
    name: 'Miner',
    resource: 'metal',
    tier: 1,
  },

  // export interface Machine {
  //     category: string;
  //     cost: ResourceAmount;
  //     current: number;
  //     desc: string;
  //     destroyable: true;
  //     // iconExtension: "png"
  //     // iconPath: "Icons/"
  //     id: string;
  //     name: string;
  //     resource: string;
  //     tier: number;
  //   }
};
