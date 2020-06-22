import {
  ResourceType,
  ResourceData,
  ResourceCategory,
  ResourceCategoryType,
  ResourceAmount,
} from '../types';

export const categoriesData: {[x in ResourceCategoryType]: ResourceCategory} = {
  energy: {
    title: 'Energy',
    category: 'energy',
    page: 'resources',
    order: 1,
  },

  fabricated: {
    title: 'Fabricated',
    category: 'fabricated',
    page: 'resources',
    order: 2,
  },

  earth: {
    title: 'Earth Resources',
    category: 'earth',
    page: 'resources',
    order: 3,
  },

  innerSol: {
    title: 'Inner Planetary Resources',
    category: 'innerSol',
    page: 'resources',
    order: 4,
  },

  outerSol: {
    title: 'Outer Planetary Resources',
    category: 'outerSol',
    page: 'resources',
    order: 5,
  },

  science: {
    title: 'Science',
    category: 'science',
    page: 'tech',
    order: 1, // 1st category item on the tech page
  },

  spacecraft: {
    title: 'Spacecraft',
    category: 'spacecraft',
    page: 'solar',
    order: 1, // 1st category item on the solar page
  },

  rocketFuel: {
    title: 'Rocket Fuel',
    category: 'rocketFuel',
    page: 'solar',
    order: 2,
  },
};

export const resourcesData: {[x in ResourceType]: ResourceData} = {
  /*********************
   * Energy Resources  *
   *********************/

  energy: {
    id: ResourceType.energy,
    name: 'Energy',
    desc:
      'Energy is created by power sources such as steam engines and solar panels, eventually advancing to fusion and nuclear energy. You can hold a maximum of 100,000 energy, unlocking batteries allows you to increase this.',
    category: 'energy',
    page: 'resources',
    baseCapacity: 100000,
    toggleable: true,
    manualGain: false,
    unlocked: false,
  },

  /*********************
   * Fabricated Resources  *
   *********************/

  plasma: {
    id: ResourceType.plasma,
    name: 'Plasma',
    desc:
      'Plasma is the 4th state of matter and is used by Tier 4 machines and large space structures as an extreme power source for your company.',
    category: 'fabricated',
    page: 'resources',
    gainCost: {energy: 1000, hydrogen: 10},
    baseCapacity: 100000,
    toggleable: true,
    manualGain: true,
    unlocked: false,
  },

  meteorite: {
    id: ResourceType.meteorite,
    name: 'Meteorite',
    desc:
      'Creating Meteorite is only possible from purer forms of energy than those created with earth technology. Therefore, Plasma is necessary to make the strong resource.',
    category: 'fabricated',
    page: 'resources',
    baseCapacity: 50,
    emc: 3,
    gainCost: {plasma: 3},
    toggleable: true,
    manualGain: true,
    unlocked: false,
  },

  carbon: {
    id: ResourceType.carbon,
    name: 'Carbon',
    desc:
      'Carbon is a secondary tier resource and is used by Engines to produce power for your company. Carbon is created by burning wood',
    category: 'fabricated',
    page: 'resources',
    baseCapacity: 50,
    emc: 2,
    gainCost: {wood: 2},
    toggleable: true,
    manualGain: true,
    unlocked: true,
  },

  /********************
   * Earth Resources  *
   ********************/

  oil: {
    id: ResourceType.oil,
    name: 'Oil',
    desc:
      'Oil is pumped up from the ground and is used to build Tier 2 resource gatherers.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    emc: 3,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  metal: {
    id: ResourceType.metal,
    name: 'Metal',
    desc:
      'Metal is one of the primary resources. It is used for many things, including storage upgrades, machinery and most things in space.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    emc: 1,
    toggleable: false,
    manualGain: true,
    unlocked: true,
  },

  gem: {
    id: ResourceType.gem,
    name: 'Gem',
    desc:
      'Gems are one of the primary resources. They are used for advanced machines and for powerful tools and components. They are more useful in later game.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    emc: 3,
    toggleable: false,
    manualGain: true,
    unlocked: true,
  },

  wood: {
    id: ResourceType.wood,
    name: 'Wood',
    desc:
      'Wood is one of the primary resources. It is used more often in early game for tools and buildings.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    emc: 1,
    toggleable: false,
    manualGain: true,
    unlocked: true,
  },

  silicon: {
    id: ResourceType.silicon,
    name: 'Silicon',
    desc:
      'Silicon is useful for automatic mining systems of the third tier. These will be very useful in building your first wonder. Despite being a high tier resource, it is found mainly on Earth by heating sand.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    emc: 23,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  uranium: {
    id: ResourceType.uranium,
    name: 'Uranium',
    desc:
      'Uranium is used for nuclear power generation because when it is split, it releases huge amounts of Energy. For this reason, it is prominent in many advanced machines and for propulsion technology as it is useful for inter-star-system travel. Unfortunately, it is hard to get and it requires a lot of resources to radiation-proof equipment.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    emc: 37,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  lava: {
    id: ResourceType.lava,
    name: 'Lava',
    desc:
      'Hard to handle and only found in volcanoes, Lava is one of the hardest resources to get.',
    category: 'earth',
    page: 'resources',
    baseCapacity: 50,
    emc: 42,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  /******************************
   * Inner Planetary Resources  *
   ******************************/

  lunarite: {
    id: ResourceType.lunarite,
    name: 'Lunarite',
    desc:
      'Lunarite is found on the Moon and is a rare type of resource not found on Earth. It is much stronger than regular metal but is a lot harder to get.',
    category: 'innerSol',
    page: 'resources',
    baseCapacity: 50,
    emc: 15,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  methane: {
    id: ResourceType.methane,
    name: 'Methane',
    desc:
      'Methane is a gas found in abundance on Venus. It can be used to power your company much more effectively than solid fuel.',
    category: 'innerSol',
    page: 'resources',
    baseCapacity: 50,
    emc: 12,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  titanium: {
    id: ResourceType.titanium,
    name: 'Titanium',
    desc:
      'Titanium is a metal found mostly on Mars. It is used for building strong machines and methane power plants.',
    category: 'innerSol',
    page: 'resources',
    baseCapacity: 50,
    emc: 17,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  gold: {
    id: ResourceType.gold,
    name: 'Gold',
    desc:
      'Gold is a metal found inside asteroids. It is used to build some Wonders and for complex machinery.',
    category: 'innerSol',
    page: 'resources',
    baseCapacity: 50,
    emc: 14,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  silver: {
    id: ResourceType.silver,
    name: 'Silver',
    desc: 'Silver is another metal most commonly found in the asteroid belt.',
    category: 'innerSol',
    page: 'resources',
    baseCapacity: 50,
    emc: 16,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  /******************************
   * Outer Planetary Resources  *
   ******************************/

  hydrogen: {
    id: ResourceType.hydrogen,
    name: 'Hydrogen',
    desc:
      'Hydrogen is extremely common on gas giants such as Jupiter and Saturn.',
    category: 'outerSol',
    page: 'resources',
    baseCapacity: 50,
    emc: 33,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  helium: {
    id: ResourceType.helium,
    name: 'Helium',
    desc:
      'Helium is the second most common element on gas giants such as Jupiter and Saturn.',
    category: 'outerSol',
    page: 'resources',
    baseCapacity: 50,
    emc: 39,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  ice: {
    id: ResourceType.ice,
    name: 'Ice',
    desc:
      'Ice, although it can be collected on Earth, is not nearly as profitable as flying to Pluto and back with space craft full of the stuff. It is mainly used for super-cooling technology necessary for Tier 4 machines.',
    category: 'outerSol',
    page: 'resources',
    baseCapacity: 50,
    emc: 44,
    toggleable: false,
    manualGain: true,
    unlocked: false,
  },

  /******************************
   *           Science           *
   ******************************/

  science: {
    id: ResourceType.science,
    name: 'Science',
    desc:
      'Science is used for researching new technologies to further your progress in the game.',
    category: 'science',
    page: 'tech',
    baseCapacity: -1,
    toggleable: false,
    manualGain: false,
    unlocked: false,
  },

  /********************
   * Rocket Fuel      *
   ********************/

  rocketFuel: {
    id: ResourceType.rocketFuel,
    name: 'Rocket Fuel',
    desc:
      'Rocket fuel is created in chemical plants and is used to allow rockets to launch off into space and to travel to other planets and star systems.',
    category: 'rocketFuel',
    page: 'solar',
    baseCapacity: -1,
    toggleable: true,
    manualGain: false,
    unlocked: true,
  },

  /********************
   * Rocket           *
   ********************/

  rocket: {
    id: ResourceType.rocket,
    name: 'Rocket',
    desc:
      'Building a rocket will allow for exploration around the solar system and will allow you to gather resources in space.',
    category: 'spacecraft',
    page: 'solar',
    baseCapacity: 0, // Important to hide the ps & storage
    toggleable: false,
    manualGain: false,
    unlocked: true,
  },

  /*****************************
   *        Interstellar        *
   *****************************/

  antimatter: {
    id: ResourceType.antimatter,
    name: 'Antimatter',
    desc:
      'Your fuel for interstellar travel is produced here. Unfortunately, you can only handle 100k Antimatter per Star System as it is incredibly volatile.',
    category: 'interstellar',
    baseCapacity: 100000,
    page: 'interstellar',
    toggleable: true,
    manualGain: false,
    unlocked: false,
  },
};

export const storageData: Partial<{[x in ResourceType]: ResourceAmount}> = {
  /*********************
   * Energy Resources  *
   *********************/

  plasma: {
    plasma: 50,
  },

  uranium: {
    uranium: 50,
    lunarite: 20,
  },

  lava: {
    lava: 50,
    lunarite: 20,
  },

  /********************
   * Earth Resources  *
   ********************/

  oil: {
    oil: 50,
    metal: 20,
  },

  metal: {
    metal: 50,
  },

  gem: {
    gem: 50,
    metal: 20,
  },

  carbon: {
    carbon: 50,
    metal: 20,
  },

  wood: {
    wood: 50,
    metal: 20,
  },

  silicon: {
    silicon: 50,
    lunarite: 20,
  },

  /******************************
   * Inner Planetary Resources  *
   ******************************/

  lunarite: {
    lunarite: 50,
    metal: 400,
  },

  methane: {
    methane: 50,
    lunarite: 20,
  },

  titanium: {
    titanium: 50,
    lunarite: 20,
  },

  gold: {
    gold: 50,
    lunarite: 20,
  },

  silver: {
    silver: 50,
    lunarite: 20,
  },

  /******************************
   * Outer Planetary Resources  *
   ******************************/

  hydrogen: {
    hydrogen: 50,
    lunarite: 20,
  },

  helium: {
    helium: 50,
    lunarite: 20,
  },

  ice: {
    ice: 50,
    lunarite: 20,
  },

  meteorite: {
    meteorite: 50,
    lunarite: 4,
  },
};
