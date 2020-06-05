import {Research} from '../types';

const researchData = {
  unlockStorage: {
    name: 'Storage Upgrades',
    desc:
      'This will allow you to build storage upgrades to increase the maximum on the amount of resource you can have at once.',
    buttonText: 'Unlock Storage',
    unlocked: true,
    science: 5,
    newTechs: ['unlockOil'],
    tabAlerts: ['resources'],
    effects: {
      unlock: ['storageUpgrade'],
    },
  },

  unlockBasicEnergy: {
    name: 'Basic Energy Production',
    desc:
      'You will be able to produce power from steam engines using Carbon made from wood in a furnace.',
    buttonText: 'Unlock Basic Energy Production',
    unlocked: true,
    science: 20,
    newTechs: ['unlockSolar', 'unlockMachines', 'upgradeEngineTech'],
    tabAlerts: ['resources'],
    effects: {
      unlock: ['energy', 'carbon', 'energyT1', 'carbonT1'],
    },
  },

  unlockOil: {
    name: 'Oil Processing',
    desc:
      'Oil used to fuel more advanced machines that gather resources and also to produce more power than basic means. Unlocking Oil Processing allows you to extract it from the ground.',
    buttonText: 'Unlock Oil',
    science: 30,
    tabAlerts: ['resources'],
    effects: {
      unlock: ['oil', 'oilT1'],
    },
  },

  unlockSolar: {
    name: 'Solar Panels',
    desc:
      'Solar Panels produce Energy without the need for fuel, but they do it slower than other forms of Energy production.',
    buttonText: 'Unlock Solar Panels',
    science: 50,
    newTechs: ['upgradeSolarTech'],
    tabAlerts: ['resources'],
    effects: {
      unlock: ['energyT2'],
    },
  },

  unlockMachines: {
    name: 'Resource Machines',
    desc:
      'Resource Machines produce more resources than simple methods but require a constant supply of power to work.',
    buttonText: 'Unlock Resource Machines',
    science: 100,
    newTechs: ['unlockSolarSystem', 'upgradeResourceTech', 'unlockDestruction'],
    tabAlerts: ['resources'],
    effects: {
      unlock: ['resourceT2'],
    },
  },

  unlockDestruction: {
    name: 'Destruction of Machines',
    desc:
      "This allows you to destroy machines you have already created. It can be useful when there are more efficient methods of gaining resources, or if you don't have enough energy to support your machines.",
    buttonText: 'Unlock Destruction',
    science: 500,
    tabAlerts: ['resources'],
    effects: {
      unlock: ['destroy'],
    },
  },

  unlockSolarSystem: {
    name: 'Space',
    desc:
      'Unlocking space-travel allows for launching of rockets and opens a whole new field of research.',
    buttonText: 'Unlock Space Travel',
    notifyTitle: 'new Tab!',
    notifyText: "You've unlocked the Solar System Tab!",
    science: 500,
    newTechs: ['unlockLabT2', 'unlockRocketFuelT2'],
    tabAlerts: ['solar'],
    effects: {
      unlock: ['solarTab', 'rocketT1', 'rocketFuelT1'],
    },
  },

  unlockRocketFuelT2: {
    name: 'Oxidisation',
    desc: 'Oxidisation is a more efficient process of creating Rocket Fuel.',
    buttonText: 'Unlock Oxidisation',
    science: 450000,
    newTechs: ['unlockRocketFuelT3'],
    tabAlerts: ['solar'],
    effects: {
      unlock: ['rocketFuelT2'],
    },
  },

  unlockRocketFuelT3: {
    name: 'Hydrazine',
    desc:
      'Hydrazine is a compound created by Methane that increases the speed at which rocket fuel can be produced in a Hydrazine Catalyst Machine.',
    buttonText: 'Unlock Hydrazine',
    science: 3200000,
    tabAlerts: ['solar'],
    effects: {
      unlock: ['rocketFuelT3'],
    },
  },

  unlockLabT2: {
    name: 'Tier 2 Science',
    desc:
      'Researching this will allow you to increase your science production drastically.',
    buttonText: 'Unlock Tier 2 Science',
    science: 500,
    newTechs: ['unlockLabT3'],
    tabAlerts: ['tech'],
    effects: {
      unlock: ['scienceT2'],
    },
  },

  unlockLabT3: {
    name: 'Tier 3 Science',
    desc:
      'Researching this will allow you to access the third tier of science production, creating much more science than the previous tiers.',
    buttonText: 'Unlock Tier 3 Science',
    science: 3000,
    newTechs: ['unlockLabT4'],
    tabAlerts: ['tech'],
    effects: {
      unlock: ['scienceT3'],
    },
  },

  unlockLabT4: {
    name: 'Tier 4 Science',
    desc:
      'Researching this will allow you to access the fourth tier of science production, creating 10 times as much science as the previous tier.',
    buttonText: 'Unlock Tier 4 Science',
    science: 50000000,
    tabAlerts: ['tech'],
    effects: {
      unlock: ['scienceT4'],
    },
  },

  unlockBatteries: {
    name: 'Tier 1 Batteries',
    desc:
      'Tier 1 Batteries improve the amount of energy you can store at once.',
    buttonText: 'Unlock Batteries',
    science: 15000,
    newTechs: ['unlockBatteriesT2'],
    tabAlerts: ['resources'],
    effects: {
      unlock: ['energyStorage', 'energyStorageT1'],
    },
  },

  unlockBatteriesT2: {
    name: 'Tier 2 Batteries',
    desc: 'Tier 2 Batteries improve the amount of energy you can store at once',
    buttonText: 'Unlock T2 Batteries',
    science: 300000,
    newTechs: ['unlockBatteriesT3'],
    tabAlerts: ['resources'],
    effects: {
      unlock: ['energyStorageT2'],
    },
  },

  unlockBatteriesT3: {
    name: 'Tier 3 Batteries',
    desc: 'Tier 3 Batteries improve the amount of energy you can store at once',
    buttonText: 'Unlock T3 Batteries',
    science: 3000000,
    newTechs: ['unlockBatteriesT4'],
    tabAlerts: ['resources'],
    effects: {
      unlock: ['energyStorageT3'],
    },
  },

  unlockBatteriesT4: {
    name: 'Tier 4 Batteries',
    desc: 'Tier 4 Batteries improve the amount of energy you can store at once',
    buttonText: 'Unlock T4 Batteries',
    science: 30000000,
    tabAlerts: ['resources'],
    effects: {
      unlock: ['energyStorageT4'],
    },
  },

  unlockPlasma: {
    name: 'Plasma Tier 1 Technology',
    desc: 'This allows you to turn your energy and hydrogen into Plasma',
    buttonText: 'Unlock Plasma',
    science: 40000,
    newTechs: ['unlockPlasmaTier2', 'unlockPSU'],
    tabAlerts: ['resources'],
    effects: {
      unlock: ['plasma', 'plasmaT1'],
    },
  },

  unlockPlasmaTier2: {
    name: 'Plasma Tier 2 Technology',
    desc:
      'This research unlocks the second tier of Plasma production, the Plasmatic Pit',
    buttonText: 'Unlock Plasma Tier 2',
    science: 60000,
    tabAlerts: ['resources'],
    effects: {
      unlock: ['plasmaT2'],
    },
  },

  unlockPSU: {
    name: 'Plasma Storage Units',
    desc: 'PSUs increase the limit on plasma you can store at once.',
    buttonText: 'Unlock PSUs',
    science: 9500000,
    newTechs: ['unlockPSUT2'],
    tabAlerts: ['resources'],
    effects: {
      unlock: ['plasmaStorage', 'plasmaStorageT1'],
    },
  },

  unlockPSUT2: {
    name: 'Tier 2 Plasma Storage Units',
    desc:
      'Tier 2 PSUs are more efficient at storing plasma but they are significantly larger and require more resources to make.',
    buttonText: 'Unlock T2 PSUs',
    science: 37000000,
    tabAlerts: ['resources'],
    effects: {
      unlock: ['plasmaStorageT2'],
    },
  },

  unlockEmc: {
    name: 'Energy-Mass Conversion',
    desc:
      'This power technology not only lets you create existing resources, but allows you to make new, and only creatable elements, such as meteorite.',
    buttonText: 'Unlock EMC',
    science: 60000,
    newTechs: ['unlockMeteorite'],
    tabAlerts: ['solCenter'],
    effects: {
      unlock: ['emcConv'],
    },
  },

  unlockMeteorite: {
    name: 'Meteorite',
    desc:
      'Meteorite is one of the rare resources in the Galaxy as it is an artificial one. All of the pre-existing Meteorite that once was in the Kuiper Belt, and similar asteroid fields in other solar systems, has all been mined away. Now, the only way to get is to make it in machines from energy.',
    buttonText: 'Unlock Meteorite',
    science: 100000,
    newTechs: ['unlockMeteoriteTier1'],
    tabAlerts: ['resources', 'wonder'],
    effects: {
      unlock: ['meteorite'],
    },
  },

  unlockMeteoriteTier1: {
    name: 'Meteorite Tier 1',
    desc:
      "Research an automated way to gather Meteorite so that you don't have to worry about losing out when you're not around.",
    buttonText: 'Unlock Meteorite Tier 1',
    science: 75000,
    tabAlerts: ['resources'],
    effects: {
      unlock: ['meteoriteT1'],
    },
  },

  unlockMeteoriteTier2: {
    name: 'Meteorite Tier 2',
    desc:
      'Research a more efficient method of getting meteorite than creating it artificially.',
    buttonText: 'Unlock Meteorite Tier 2',
    science: 100000,
    tabAlerts: ['resources'],
    effects: {
      unlock: ['meteoriteT2'],
    },
  },

  unlockDyson: {
    name: 'Dyson Ring',
    desc:
      'Dyson Rings produce huge amounts of energy by surrounding the sun in solar stations.',
    buttonText: 'Unlock Dyson Rings',
    science: 100000,
    newTechs: ['unlockDysonSphere'],
    tabAlerts: ['solCenter'],
    effects: {
      unlock: ['segment', 'ring'],
    },
  },

  unlockDysonSphere: {
    name: 'Dyson Swarms and Spheres',
    desc:
      'The Dyson Swarms encapsulate the sun in rings of solar stations, whereas Spheres completely encompasses it to allows you to harness enough energy to go interstellar.',
    buttonText: 'Unlock Dyson Swarms/Spheres',
    science: 500000,
    tabAlerts: ['solCenter'],
    effects: {
      unlock: ['swarm', 'sphere'],
    },
  },

  unlockNanoswarm: {
    name: 'Nanoswarms',
    desc:
      "The nanoswarm is an interesting creation, capable of copying other machines' forms and taking up their role in resource production. Each boosts a single resource but can change at the flick of a button.",
    buttonText: 'Unlock Nanoswarms',
    science: 1.5e7,
    tabAlerts: ['solCenter'],
    effects: {
      unlock: ['nanoswarm'],
    },
  },

  //Upgrades

  upgradeResourceTech: {
    name: 'Upgrade Resource Technology',
    desc:
      'Make your resource machines produce even more resources than before. This upgrade doubles the amount they produce for each unit of Energy.',
    buttonText: 'Upgrade Resource Tech',
    science: 300,
    tabAlerts: ['resources'],
    effects: {
      double: ['oilT2', 'metalT2', 'gemT2', 'carbonT2', 'woodT2'],
    },
  },

  upgradeEngineTech: {
    name: 'Upgrade Engine Technology',
    desc:
      'Upgrading Engine Technology will make Carbon engines produce 4 Energy per second instead of 2.',
    buttonText: 'Upgrade Carbon Engines',
    science: 1000,
    tabAlerts: ['resources'],
    effects: {
      double: ['energyT1'],
    },
  },

  upgradeSolarTech: {
    name: 'Upgrade Solar Technology',
    desc:
      'Upgrading Solar Technology will make solar panels produce 3 Energy per second instead of 1.5.',
    buttonText: 'Upgrade Solar Panels',
    science: 5000,
    newTechs: ['unlockBatteries'],
    tabAlerts: ['resources'],
    effects: {
      double: ['energyT2'],
    },
  },

  resourceEfficiencyResearch: {
    name: 'Resource Efficiency',
    desc:
      'Resource Efficiency increases the income of resources by 1%/s per purchase.',
    buttonText: 'Upgrade Resource Efficiency',
    maxLevel: -1,
    science: 100000,
    effects: {
      efficiency: 'resource',
    },
  },

  scienceEfficiencyResearch: {
    name: 'Science Efficiency',
    desc:
      'Science Efficiency increases the science production by 2% per purchase.',
    buttonText: 'Upgrade Science Efficiency',
    maxLevel: -1,
    science: 10000000,
    effects: {
      efficiency: 'science',
    },
  },

  energyEfficiencyResearch: {
    name: 'Energy Efficiency',
    desc:
      'Energy Efficiency decreases the energy consumption of all machines by 1%/s per purchase.',
    buttonText: 'Upgrade Energy Efficiency',
    maxLevel: 25,
    science: 10000000,
    effects: {
      efficiency: 'energy',
    },
  },

  batteryEfficiencyResearch: {
    name: 'Battery Efficiency',
    desc:
      'Battery Efficiency improves the storage capabilities of your batteries by 1% per upgrade.',
    buttonText: 'Upgrade Battery Efficiency',
    maxLevel: 200,
    science: 100000000,
    effects: {
      efficiency: 'battery',
    },
  },
};

export type ResearchId = keyof typeof researchData;

const researchWithDefaults = Object.keys(researchData).reduce(
  (result, current) => {
    result[current] = {
      unlocked: false,
      maxLevel: 1,
      ...researchData[current as ResearchId],
    } as Research;

    return result;
  },
  {} as {[index: string]: Research},
);

export default researchWithDefaults as {[x in ResearchId]: Research};
