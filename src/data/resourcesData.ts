import {ResourceType, ResourceData} from '../types';

export const categoriesData = {
  energy: {
    title: 'Energy',
    category: 'energy',
    page: 'resources',
    order: 1, // 1st category item of the resources page
    unlocked: false,
  },

  fabricated: {
    title: 'Fabricated',
    category: 'fabricated',
    page: 'resources',
    order: 2,
    unlocked: false,
  },

  earth: {
    title: 'Earth Resources',
    category: 'earth',
    page: 'resources',
    order: 3,
    unlocked: true,
  },

  innerSol: {
    title: 'Inner Planetary Resources',
    category: 'innerSol',
    page: 'resources',
    order: 4,
    unlocked: false,
  },

  outerSol: {
    title: 'Outer Planetary Resources',
    category: 'outerSol',
    page: 'resources',
    order: 5,
    unlocked: false,
  },

  science: {
    title: 'Science',
    category: 'science',
    page: 'tech',
    order: 1, // 1st category item on the tech page
    unlocked: false,
  },

  spacecraft: {
    title: 'Spacecraft',
    category: 'spacecraft',
    page: 'solar',
    order: 1, // 1st category item on the solar page
    unlocked: true,
  },

  rocketFuel: {
    title: 'Rocket Fuel',
    category: 'rocketFuel',
    page: 'solar',
    order: 2,
    unlocked: true,
  },
};

const baseResource = {
  current: 0,
  perSecond: 0,
  perSecondDisplay: 0,
};

export const resourcesData: {[x in ResourceType]: ResourceData} = {
  /*********************
   * Energy Resources  *
   *********************/

  energy: {
    ...baseResource,
    name: 'Energy',
    desc:
      'Energy is created by power sources such as steam engines and solar panels, eventually advancing to fusion and nuclear energy. You can hold a maximum of 100,000 energy, unlocking batteries allows you to increase this.',
    category: 'energy',
    page: 'resources',
    baseCapacity: 100000,
    capacity: 100000,
    toggleable: true,
    manualGain: false,
    unlocked: false,
  },

  /*********************
   * Fabricated Resources  *
   *********************/

  plasma: {
    ...baseResource,
    name: 'Plasma',
    desc:
      'Plasma is the 4th state of matter and is used by Tier 4 machines and large space structures as an extreme power source for your company.',
    category: 'fabricated',
    page: 'resources',
    gainCost: {energy: 1000, hydrogen: 10},
    baseCapacity: 100000,
    capacity: 100000,
    toggleable: true,
    manualGain: true,
    unlocked: false,
  },

  meteorite: {
    ...baseResource,
    name: 'Meteorite',
    desc:
      'Creating Meteorite is only possible from purer forms of energy than those created with earth technology. Therefore, Plasma is necessary to make the strong resource.',
    category: 'fabricated',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 3,
    gainCost: {plasma: 3},
    toggleable: true,
    manualGain: true,
    unlocked: false,
  },

  carbon: {
    ...baseResource,
    name: 'Carbon',
    desc:
      'Carbon is a secondary tier resource and is used by Engines to produce power for your company. Carbon is created by burning wood',
    category: 'fabricated',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 2,
    gainCost: {wood: 2},
    toggleable: true,
    manualGain: true,
    unlocked: false,
  },

  /********************
   * Earth Resources  *
   ********************/

  oil: {
    ...baseResource,
    name: 'Oil',
    desc:
      'Oil is pumped up from the ground and is used to build Tier 2 resource gatherers.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 3,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  metal: {
    ...baseResource,
    name: 'Metal',
    desc:
      'Metal is one of the primary resources. It is used for many things, including storage upgrades, machinery and most things in space.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 1,
    toggleable: false,
    manualGain: true,
    unlocked: true,
  },

  gem: {
    ...baseResource,
    name: 'Gem',
    desc:
      'Gems are one of the primary resources. They are used for advanced machines and for powerful tools and components. They are more useful in later game.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 3,
    toggleable: false,
    manualGain: true,
    unlocked: true,
  },

  wood: {
    ...baseResource,
    name: 'Wood',
    desc:
      'Wood is one of the primary resources. It is used more often in early game for tools and buildings.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 1,
    toggleable: false,
    manualGain: true,
    unlocked: true,
  },

  silicon: {
    ...baseResource,
    name: 'Silicon',
    desc:
      'Silicon is useful for automatic mining systems of the third tier. These will be very useful in building your first wonder. Despite being a high tier resource, it is found mainly on Earth by heating sand.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 23,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  uranium: {
    ...baseResource,
    name: 'Uranium',
    desc:
      'Uranium is used for nuclear power generation because when it is split, it releases huge amounts of Energy. For this reason, it is prominent in many advanced machines and for propulsion technology as it is useful for inter-star-system travel. Unfortunately, it is hard to get and it requires a lot of resources to radiation-proof equipment.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 37,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  lava: {
    ...baseResource,
    name: 'Lava',
    desc:
      'Hard to handle and only found in volcanoes, Lava is one of the hardest resources to get.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 42,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  /******************************
   * Inner Planetary Resources  *
   ******************************/

  lunarite: {
    ...baseResource,
    name: 'Lunarite',
    desc:
      'Lunarite is found on the Moon and is a rare type of resource not found on Earth. It is much stronger than regular metal but is a lot harder to get.',
    category: 'innerSol',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 15,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  methane: {
    ...baseResource,
    name: 'Methane',
    desc:
      'Methane is a gas found in abundance on Venus. It can be used to power your company much more effectively than solid fuel.',
    category: 'innerSol',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 12,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  titanium: {
    ...baseResource,
    name: 'Titanium',
    desc:
      'Titanium is a metal found mostly on Mars. It is used for building strong machines and methane power plants.',
    category: 'innerSol',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 17,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  gold: {
    ...baseResource,
    name: 'Gold',
    desc:
      'Gold is a metal found inside asteroids. It is used to build some Wonders and for complex machinery.',
    category: 'innerSol',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 14,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  silver: {
    ...baseResource,
    name: 'Silver',
    desc: 'Silver is another metal most commonly found in the asteroid belt.',
    category: 'innerSol',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 16,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  /******************************
   * Outer Planetary Resources  *
   ******************************/

  hydrogen: {
    ...baseResource,
    name: 'Hydrogen',
    desc:
      'Hydrogen is extremely common on gas giants such as Jupiter and Saturn.',
    category: 'outerSol',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 33,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  helium: {
    ...baseResource,
    name: 'Helium',
    desc:
      'Helium is the second most common element on gas giants such as Jupiter and Saturn.',
    category: 'outerSol',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 39,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  ice: {
    ...baseResource,
    name: 'Ice',
    desc:
      'Ice, although it can be collected on Earth, is not nearly as profitable as flying to Pluto and back with space craft full of the stuff. It is mainly used for super-cooling technology necessary for Tier 4 machines.',
    category: 'outerSol',
    page: 'resources',
    baseCapacity: 50,
    capacity: 50,
    emc: 44,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  /******************************
   *           Science           *
   ******************************/

  science: {
    ...baseResource,
    name: 'Science',
    desc:
      'Science is used for researching new technologies to further your progress in the game.',
    category: 'science',
    page: 'tech',
    baseCapacity: -1,
    capacity: -1,
    toggleable: false,
    manualGain: false,
    unlocked: false,
  },

  /********************
   * Rocket Fuel      *
   ********************/

  rocketFuel: {
    ...baseResource,
    name: 'Rocket Fuel',
    desc:
      'Rocket fuel is created in chemical plants and is used to allow rockets to launch off into space and to travel to other planets and star systems.',
    category: 'rocketFuel',
    page: 'solar',
    baseCapacity: -1,
    capacity: -1,
    toggleable: true,
    manualGain: false,
    unlocked: true,
  },

  /********************
   * Rocket           *
   ********************/

  rocket: {
    ...baseResource,
    name: 'Rocket',
    desc:
      'Building a rocket will allow for exploration around the solar system and will allow you to gather resources in space.',
    category: 'spacecraft',
    page: 'solar',
    baseCapacity: 0, // Important to hide the ps & storage
    capacity: 0, // Important to hide the ps & storage
    toggleable: false,
    manualGain: false,
    unlocked: true,
  },

  /*****************************
   *        Interstellar        *
   *****************************/

  antimatter: {
    ...baseResource,
    name: 'Antimatter',
    desc:
      'Your fuel for interstellar travel is produced here. Unfortunately, you can only handle 100k Antimatter per Star System as it is incredibly volatile.',
    category: 'interstellar',
    baseCapacity: 100000,
    capacity: 100000,
    page: 'interstellar',
    toggleable: true,
    manualGain: false,
    unlocked: false,
  },
};

export const storageData = {
  // Storage Upgrades
  // var baseUpgradeData: {
  //     name: 'Storage Upgrade:',
  //     unlocked: true,
  //     costType: COST_TYPE.FIXED,
  //     current: 0,
  //     maxLevel: -1,
  //     resource: undefined,
  //     displayNeedsUpdate: true,
  //     entries: {},

  //     apply: function (self) {
  //         if (typeof self.resource === 'undefined') {
  //             return;
  //         }
  //         var res = Game.resources.getResourceData(self.resource);
  //         res.capacity *= 2;
  //         res.displayNeedsUpdate = true;
  //         self.displayNeedsUpdate = true;
  //     },
  // },

  /*********************
   * Energy Resources  *
   *********************/

  plasma: {
    desc: 'Upgrade your Plasma storage size to ',
    resource: 'plasma',
    cost: {
      plasma: 50,
    },
  },

  uranium: {
    desc: 'Upgrade your Uranium storage size to ',
    resource: 'uranium',
    cost: {
      uranium: 50,
      lunarite: 20,
    },
  },

  lava: {
    desc: 'Upgrade your Lava storage size to ',
    resource: 'lava',
    cost: {
      lava: 50,
      lunarite: 20,
    },
  },

  /********************
   * Earth Resources  *
   ********************/

  oil: {
    desc: 'Upgrade your Oil storage size to ',
    resource: 'oil',
    cost: {
      oil: 50,
      metal: 20,
    },
  },

  metal: {
    desc: 'Upgrade your Metal storage size to ',
    resource: 'metal',
    cost: {
      metal: 50,
    },
  },

  gem: {
    desc: 'Upgrade your Gem storage size to ',
    resource: 'gem',
    cost: {
      gem: 50,
      metal: 20,
    },
  },

  carbon: {
    desc: 'Upgrade your Carbon storage size to ',
    resource: 'carbon',
    cost: {
      carbon: 50,
      metal: 20,
    },
  },

  wood: {
    desc: 'Upgrade your Wood storage size to ',
    resource: 'wood',
    cost: {
      wood: 50,
      metal: 20,
    },
  },

  silicon: {
    desc: 'Upgrade your Silicon storage size to ',
    resource: 'silicon',
    cost: {
      silicon: 50,
      lunarite: 20,
    },
  },

  /******************************
   * Inner Planetary Resources  *
   ******************************/

  lunarite: {
    desc: 'Upgrade your Lunarite storage size to ',
    resource: 'lunarite',
    cost: {
      lunarite: 50,
      metal: 400,
    },
  },

  methane: {
    desc: 'Upgrade your Methane storage size to ',
    resource: 'methane',
    cost: {
      methane: 50,
      lunarite: 20,
    },
  },

  titanium: {
    desc: 'Upgrade your Titanium storage size to ',
    resource: 'titanium',
    cost: {
      titanium: 50,
      lunarite: 20,
    },
  },

  gold: {
    desc: 'Upgrade your Gold storage size to ',
    resource: 'gold',
    cost: {
      gold: 50,
      lunarite: 20,
    },
  },

  silver: {
    desc: 'Upgrade your Silver storage size to ',
    resource: 'silver',
    cost: {
      silver: 50,
      lunarite: 20,
    },
  },

  /******************************
   * Outer Planetary Resources  *
   ******************************/

  hydrogen: {
    desc: 'Upgrade your Hydrogen storage size to ',
    resource: 'hydrogen',
    cost: {
      hydrogen: 50,
      lunarite: 20,
    },
  },

  helium: {
    desc: 'Upgrade your Helium storage size to ',
    resource: 'helium',
    cost: {
      helium: 50,
      lunarite: 20,
    },
  },

  ice: {
    desc: 'Upgrade your Ice storage size to ',
    resource: 'ice',
    cost: {
      ice: 50,
      lunarite: 20,
    },
  },

  meteorite: {
    desc: 'Upgrade your Meteorite storage size to ',
    resource: 'meteorite',
    cost: {
      meteorite: 50,
      lunarite: 4,
    },
  },
};
