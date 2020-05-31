// var baseProducerBuilding = {
//   type: BUILDING_TYPE.PRODUCER,
//   unlocked: false,
//   destroyable: true,
//   maxCount: Number.MAX_VALUE,
//   costType: COST_TYPE.FIXED,
// };

export const machinesData = {
  energyT1: {
    name: 'Carbon Engine',
    desc: 'Burns Carbon to produce a steady source of Energy.',
    resource: 'energy',
    resourcePerSecond: {
      energy: 2,
      carbon: -1,
    },
    cost: {
      metal: 50,
      gem: 25,
    },
  },

  energyT2: {
    name: 'Solar Panel',
    desc: 'Gains Energy slowly from the sun without using any resources.',
    resource: 'energy',
    resourcePerSecond: {
      energy: 1.5,
    },
    cost: {
      metal: 30,
      gem: 35,
    },
  },

  energyT3: {
    name: 'Methane Power Station',
    desc: 'Burn powerful methane from Venus to satisfy all your power needs.',
    resource: 'energy',
    resourcePerSecond: {
      energy: 23,
      methane: -6,
    },
    cost: {
      lunarite: 110,
      titanium: 90,
    },
  },

  energyT4: {
    name: 'Nuclear Power Station',
    desc: 'Uses fission to create large amounts of power.',
    resource: 'energy',
    resourcePerSecond: {
      energy: 153,
      uranium: -7,
    },
    cost: {
      lunarite: 20000,
      titanium: 10000,
    },
  },

  energyT5: {
    name: 'Magmatic Dynamo',
    desc:
      'The Magmatic Dynamo is a method of producing power by using lava as a fuel. Because of the extreme temperature of lava, a lot of Energy can be produced at once.',
    resource: 'energy',
    resourcePerSecond: {
      energy: 191,
      lava: -11,
    },
    cost: {
      lunarite: 25000,
      gem: 30000,
      silver: 20000,
    },
  },

  energyT6: {
    name: 'Fusion Reactor',
    desc:
      'In a fusion reaction, Energy is released when two light atomic nuclei are fused together to form one heavier atom. This is the same reaction that occurs in stars and produces a lot of power.',
    resource: 'energy',
    resourcePerSecond: {
      energy: 273,
      hydrogen: -10,
      helium: -10,
    },
    cost: {
      lunarite: 30000,
      titanium: 20000,
      silicon: 15000,
    },
  },

  ////////////
  // Plasma //
  ////////////
  plasmaT1: {
    name: 'Super-Heater',
    desc:
      'The Super-Heater throws electricity at Hydrogen to turn it into a plasmatic substance.',
    resource: 'plasma',
    resourcePerSecond: {
      energy: -1000,
      hydrogen: -10,
      plasma: 1,
    },
    cost: {
      lunarite: 75000,
      gem: 68000,
      silicon: 59000,
    },
  },

  plasmaT2: {
    name: 'Plasmatic Pit',
    desc:
      'This contraption converts Helium into Plasma by firing intensive energy bolts at the gas cloud.',
    resource: 'plasma',
    resourcePerSecond: {
      energy: -8500,
      helium: -85,
      plasma: 13,
    },
    cost: {
      lunarite: 810000,
      silicon: 720000,
      meteorite: 970,
    },
  },

  plasmaT3: {
    name: 'Electron Bath',
    desc: 'Bathing in Electrons. What could go wrong?',
    resource: 'plasma',
    resourcePerSecond: {
      energy: -71000,
      helium: -750,
      hydrogen: -650,
      plasma: 160,
    },
    cost: {
      lunarite: 6200000,
      silicon: 5900000,
      meteorite: 12100,
    },
  },

  plasmaT4: {
    name: 'Q.R.S',
    desc:
      'The Quasar Redirection System is a colossal space station built from graphene, used to redirect quasar activity towards gas giants, to instantaneously convert the gases into plasma for collection.',
    resource: 'plasma',
    resourcePerSecond: {
      energy: -600000,
      helium: -5800,
      hydrogen: -6000,
      plasma: 2000,
    },
    cost: {
      carbon: 51000000,
      silicon: 44000000,
      meteorite: 147000,
    },
  },

  /////////////
  // Uranium //
  /////////////
  uraniumT1: {
    name: 'Grinder',
    desc: 'Pulverizes Uranium for easy transportation out of deep mineshafts.',
    resource: 'uranium',
    resourcePerSecond: {
      uranium: 1,
    },
    cost: {
      lunarite: 4000,
      titanium: 2000,
      gold: 2000,
    },
  },

  uraniumT2: {
    name: 'Cubic Teleposer',
    desc:
      'This teleposes blocks of rock from far underground to the surface so that Uranium can be mined more easily.',
    resource: 'uranium',
    resourcePerSecond: {
      energy: -40,
      uranium: 9,
    },
    cost: {
      lunarite: 10000,
      uranium: 80,
      oil: 10000,
    },
  },

  uraniumT3: {
    name: 'Uranium Enricher',
    desc:
      'The Enricher increases the quality of uranium mined and thus allows more of the uranium in rocks to be used in your company.',
    resource: 'uranium',
    resourcePerSecond: {
      energy: -180,
      uranium: 61,
    },
    cost: {
      lunarite: 21700,
      titanium: 23000,
      silicon: 13500,
    },
  },

  uraniumT4: {
    name: 'Yellowcake Recycler',
    desc:
      'Recycles used-up Uranium to provide the resources with a second use. This greatly increases the amount of Uranium you can use per second.',
    resource: 'uranium',
    resourcePerSecond: {
      energy: -436,
      uranium: 235,
    },
    cost: {
      lunarite: 93100,
      methane: 47000,
      meteorite: 830,
    },
  },

  uraniumT5: {
    name: 'Planetary Nuclear Plant',
    desc:
      'This huge factory is as large as a planet, fusing together Uranium from common elements.',
    resource: 'uranium',
    resourcePerSecond: {
      energy: -2719,
      uranium: 2412,
    },
    cost: {
      titanium: 486000,
      silicon: 266000,
      ice: 364000,
    },
  },

  //////////
  // Lava //
  //////////
  lavaT1: {
    name: 'Heat Resistant Crucible',
    desc:
      'You can use a modified crucible to pick up lava and to store it for later use.',
    resource: 'lava',
    resourcePerSecond: {
      lava: 1,
    },
    cost: {
      lunarite: 4000,
      gem: 7000,
    },
  },

  lavaT2: {
    name: 'Lava Extractor',
    desc: 'This extracts lava from volcanoes automatically and quickly.',
    resource: 'lava',
    resourcePerSecond: {
      energy: -58,
      lava: 7,
    },
    cost: {
      lunarite: 16000,
      titanium: 14000,
      silicon: 6000,
    },
  },

  lavaT3: {
    name: 'Igneous Extruder',
    desc:
      'Instead of going out and finding lava, it can be more convenient to make it yourself with heat and pressure.',
    resource: 'lava',
    resourcePerSecond: {
      energy: -237,
      lava: 43,
    },
    cost: {
      lunarite: 69000,
      titanium: 57000,
      silicon: 39000,
    },
  },

  lavaT4: {
    name: 'Volcanic Veluptuator',
    desc: 'A melting pot of misery, pouring lava out from mined rock.',
    resource: 'lava',
    resourcePerSecond: {
      energy: -689,
      lava: 187,
    },
    cost: {
      lunarite: 298000,
      gold: 121000,
      meteorite: 750,
    },
  },

  lavaT5: {
    name: 'Jupitonian Condensator',
    desc: 'Condenses gases from the heart of Jupiter into liquid magma.',
    resource: 'lava',
    resourcePerSecond: {
      energy: -4142,
      lava: 2103,
    },
    cost: {
      lunarite: 288000,
      gem: 210000,
      ice: 238000,
    },
  },

  /********************
   * Earth Resources  *
   ********************/

  /////////
  // Oil //
  /////////
  oilT1: {
    name: 'Small Pump',
    desc: 'Build a small pump to extract Oil from the ground.',
    resource: 'oil',
    resourcePerSecond: {
      oil: 1,
    },
    cost: {
      metal: 60,
      gem: 20,
    },
  },

  oilT2: {
    name: 'Pumpjack',
    desc:
      'Pumpjacks are much bigger than small pumps and produce Oil on an industrial scale but they require a lot of Energy.',
    resource: 'oil',
    resourcePerSecond: {
      energy: -4,
      oil: 10,
    },
    cost: {
      metal: 250,
      gem: 80,
      oil: 50,
    },
  },

  oilT3: {
    name: 'Oil Field',
    desc:
      'Oil Fields are large open spaces, usually found in deserts where vast oil wells can be found under the ground.',
    resource: 'oil',
    resourcePerSecond: {
      energy: -17,
      oil: 127,
    },
    cost: {
      lunarite: 2400,
      titanium: 2700,
      silicon: 3900,
    },
  },

  oilT4: {
    name: 'Offshore Rig',
    desc:
      'Offshore Rigs are megastructures floating in the oceans, extracting Oil from under the sea-beds.',
    resource: 'oil',
    resourcePerSecond: {
      energy: -44,
      oil: 498,
    },
    cost: {
      lunarite: 19400,
      titanium: 16800,
      meteorite: 760,
    },
  },

  oilT5: {
    name: 'Fossilator 9000',
    desc:
      'Much better than the 8000 version, this fossilator reverses the fossil fuel cycle. Instead of burning, it creates them from carbon in the air.',
    resource: 'oil',
    resourcePerSecond: {
      energy: -258,
      oil: 4444,
    },
    cost: {
      uranium: 110000,
      carbon: 96000,
      lava: 167000,
    },
  },

  ///////////
  // Metal //
  ///////////
  metalT1: {
    name: 'Miner',
    desc: 'Build a pickaxe for your miner.',
    resource: 'metal',
    unlocked: true,
    resourcePerSecond: {
      metal: 1,
    },
    cost: {
      metal: 10,
      wood: 5,
    },
    onApply: function () {
      if (!Game.tech.tabUnlocked) {
        Game.buildings.unlock('scienceT1');
        Game.tech.unlockTech('unlockStorage');
        Game.tech.unlockTech('unlockBasicEnergy');
        // Unlock the science resourceCategory
        Game.resourceCategoryData.science.unlocked = true;
        // Unlock the science resource
        Game.resources.entries.science.unlocked = true;
        // Unlock scienceT1
        Game.buildings.entries.scienceT1.unlocked = true;
        // Unlock the research category
        Game.techCategoryData.unlocked = true;
        Game.techCategoryData.research.unlocked = true;
        // Unlock the technology type of research items
        Game.techCategoryData.research.items.technology.unlocked = true;
        newUnlock('tech');
        Game.notifySuccess('New Tab!', "You've unlocked the Research Tab!");
        Game.tech.tabUnlocked = true;
      }
    },
  },

  metalT2: {
    name: 'Heavy Drill',
    desc: 'Heavy Drills mine Metal at mass.',
    resource: 'metal',
    resourcePerSecond: {
      energy: -2,
      metal: 8,
    },
    cost: {
      metal: 160,
      gem: 60,
      oil: 50,
    },
  },

  metalT3: {
    name: 'Giga Drill',
    desc: 'Giga Drills extract Metal at colossal speeds.',
    resource: 'metal',
    resourcePerSecond: {
      energy: -9,
      metal: 108,
    },
    cost: {
      lunarite: 2800,
      gem: 3400,
      silicon: 4100,
    },
  },

  metalT4: {
    name: 'Quantum Drill',
    desc:
      'Quantum Drills bend the space-time continuum to get metal faster than physically possible.',
    resource: 'metal',
    resourcePerSecond: {
      energy: -24,
      metal: 427,
    },
    cost: {
      lunarite: 29000,
      gold: 18700,
      meteorite: 900,
    },
  },

  metalT5: {
    name: 'Multiverse Drill',
    desc: 'Drills metal from alternate realities where metal is plentiful.',
    resource: 'metal',
    resourcePerSecond: {
      energy: -131,
      metal: 4768,
    },
    cost: {
      titanium: 184000,
      gold: 133000,
      oil: 170000,
    },
  },

  /////////
  // Gem //
  /////////
  gemT1: {
    name: 'Gem Miner',
    desc: 'Build an improved pickaxe to mine Gems.',
    resource: 'gem',
    unlocked: true,
    resourcePerSecond: {
      gem: 1,
    },
    cost: {
      metal: 15,
      gem: 10,
    },
  },

  gemT2: {
    name: 'Advanced Drill',
    desc:
      'Advanced Drills mine gem at mass. Because of the toughness of the drill needed it is slower than the heavy drill.',
    resource: 'gem',
    resourcePerSecond: {
      energy: -2,
      gem: 4,
    },
    cost: {
      metal: 120,
      gem: 200,
      oil: 60,
    },
  },

  gemT3: {
    name: 'Diamond Encrusted Drill',
    desc:
      'The Diamond Encrusted Drill is one of the strongest drills in the solar system, and as such, can collect Gems faster than anything before it.',
    resource: 'gem',
    resourcePerSecond: {
      energy: -15,
      gem: 89,
    },
    cost: {
      lunarite: 3400,
      gem: 8000,
      silicon: 4500,
    },
  },

  gemT4: {
    name: 'Carbyne Drill',
    desc:
      'Carbyne Drills one of the strongest drills in the solar system, and as such, can collect Gems faster than anything before it.',
    resource: 'gem',
    resourcePerSecond: {
      energy: -40,
      gem: 358,
    },
    cost: {
      lunarite: 21000,
      gem: 27000,
      meteorite: 800,
    },
  },

  gemT5: {
    name: 'Diamond Accretion Chamber',
    desc:
      'This special container condenses carbon dioxide gas into diamonds, creating gems at a faster rate than any drill.',
    resource: 'gem',
    resourcePerSecond: {
      energy: -260,
      gem: 3747,
    },
    cost: {
      uranium: 181000,
      carbon: 185000,
      meteorite: 12500,
    },
  },

  //////////////
  // Carbon //
  //////////////
  carbonT1: {
    name: 'Charred Wood Plant',
    desc:
      'All the wood that has been put to use is brought here to be cleaned of carbon traces and then repurposed',
    resource: 'carbon',
    resourcePerSecond: {
      wood: -2,
      carbon: 1,
    },
    cost: {
      metal: 10,
      wood: 5,
    },
  },

  carbonT2: {
    name: 'Blast Furnace',
    desc:
      'Burns wood at very high temperatures to turn it into a finer type of carbon than Charred Wood Plants.',
    resource: 'carbon',
    resourcePerSecond: {
      energy: -3,
      wood: -6,
      carbon: 4,
    },
    cost: {
      metal: 80,
      wood: 40,
      oil: 100,
    },
  },

  carbonT3: {
    name: 'Magmatic Incinerator',
    desc:
      'Uses lava to melt wood and then the mixture is cooled off, resulting in moderately pure carbon. The leftovers are re-used in the process',
    resource: 'carbon',
    resourcePerSecond: {
      energy: -13,
      wood: -56,
      lava: -2,
      carbon: 53,
    },
    cost: {
      lunarite: 3500,
      gem: 6200,
      silicon: 3800,
    },
  },

  carbonT4: {
    name: 'Plasma Furnace',
    desc:
      'This plasma-fueled furnace burns so hot it turns wood into almost perfectly pure carbon, ready to be turned into high-purity carbon materials such as graphene.',
    resource: 'carbon',
    resourcePerSecond: {
      energy: -34,
      wood: -148,
      plasma: -1,
      carbon: 210,
    },
    cost: {
      lunarite: 15800,
      lava: 12500,
      meteorite: 560,
    },
  },

  carbonT5: {
    name: 'Super Massive Pencil Sharpener',
    desc: 'Who knew broken pencil tips would yield this much carbon?',
    resource: 'carbon',
    resourcePerSecond: {
      energy: -187,
      wood: -950,
      carbon: 2267,
    },
    cost: {
      metal: 133000,
      wood: 189000,
      lava: 160000,
    },
  },

  //////////
  // Wood //
  //////////
  woodT1: {
    name: 'Woodcutter',
    desc: 'Build an axe for your woodcutter.',
    resource: 'wood',
    unlocked: true,
    resourcePerSecond: {
      wood: 1,
    },
    cost: {
      metal: 10,
      wood: 5,
    },
  },

  woodT2: {
    name: 'Laser Cutter',
    desc:
      'Laser Cutters slice trees (and fingers) quicker than axes and produce a lot more wood.',
    resource: 'wood',
    resourcePerSecond: {
      energy: -4,
      wood: 6,
    },
    cost: {
      metal: 50,
      gem: 90,
      oil: 40,
    },
  },

  woodT3: {
    name: 'Mass Deforester',
    desc:
      "This machine is the reason we're losing our rainforests. At least we get lots of wood!",
    resource: 'wood',
    resourcePerSecond: {
      energy: -16,
      wood: 74,
    },
    cost: {
      lunarite: 3000,
      titanium: 2700,
      silicon: 2500,
    },
  },

  woodT4: {
    name: 'Biomass Infuser',
    desc:
      'Creates Wood using old, useless materials found everywhere on Earth by crushing them and packing what remains as densely as possible until it can be used as Wood again.',
    resource: 'wood',
    resourcePerSecond: {
      energy: -43,
      wood: 297,
    },
    cost: {
      lunarite: 16000,
      oil: 31200,
      meteorite: 490,
    },
  },

  woodT5: {
    name: 'Russian Forest',
    desc:
      'The great Russian forests span thousands of miles. More than enough for at least your lifetime. Let the younger generation deal with running out.',
    resource: 'wood',
    resourcePerSecond: {
      energy: -244,
      wood: 3278,
    },
    cost: {
      metal: 122000,
      gem: 151000,
      hydrogen: 183000,
    },
  },

  /////////////
  // Silicon //
  /////////////
  siliconT1: {
    name: 'Empowered Blowtorch',
    desc:
      'This type of blowtorch instantly turns sand into Silicon, but only on a small scale. To make it, extraterrestrial resources are required.',
    resource: 'silicon',
    resourcePerSecond: {
      silicon: 1,
    },
    cost: {
      lunarite: 150,
      titanium: 30,
    },
  },

  siliconT2: {
    name: 'Seaside Scorcher',
    desc:
      'This tool almost melts parts of beaches to get silicon at a larger scale.',
    resource: 'silicon',
    resourcePerSecond: {
      energy: -18,
      silicon: 9,
    },
    cost: {
      lunarite: 500,
      gem: 1200,
      oil: 1600,
    },
  },

  siliconT3: {
    name: 'Beach Annihilator',
    desc:
      'This weapon of mass destruction has been re-labelled and now hovers above coast-lines, or what is now left of them.',
    resource: 'silicon',
    resourcePerSecond: {
      energy: -53,
      silicon: 40,
    },
    cost: {
      lunarite: 3000,
      gem: 8300,
      silver: 2400,
    },
  },

  siliconT4: {
    name: 'Desert Destroyer',
    desc:
      'This large ship orbits around the planet, focused in the Sahara Desert, tearing up sand from Earth and turning it into Silicon under intense heat.',
    resource: 'silicon',
    resourcePerSecond: {
      energy: -138,
      silicon: 157,
    },
    cost: {
      lunarite: 20000,
      silicon: 17700,
      meteorite: 400,
    },
  },

  siliconT5: {
    name: 'Time And Relative Dimensions In Sand',
    desc:
      "The TARDIS, for short, harnesses the power of stars from far away in space-time to heat sand into Silicon at record speeds. Don't ask why it has a polished wooden interior.",
    resource: 'silicon',
    resourcePerSecond: {
      energy: -746,
      silicon: 1487,
    },
    cost: {
      titanium: 204000,
      wood: 205000,
      meteorite: 17800,
    },
  },

  /******************************
   * Inner Planetary Resources  *
   ******************************/

  //////////////
  // Lunarite //
  //////////////
  lunariteT1: {
    name: 'Native Moon Worker',
    desc: 'Bribe local workers to mine your Lunarite.',
    resource: 'lunarite',
    resourcePerSecond: {
      lunarite: 1,
    },
    cost: {
      gem: 500,
    },
  },

  lunariteT2: {
    name: 'Low-Gravity Drill',
    desc: 'These drills practically float!',
    resource: 'lunarite',
    resourcePerSecond: {
      energy: -20,
      lunarite: 10,
    },
    cost: {
      metal: 1000,
      gem: 600,
      oil: 400,
    },
  },

  lunariteT3: {
    name: 'Moon Quarry',
    desc:
      'This quarry tears up the surface of the moon so much that it can be seen from Earth.',
    resource: 'lunarite',
    resourcePerSecond: {
      energy: -70,
      lunarite: 53,
    },
    cost: {
      lunarite: 8000,
      gem: 5000,
      silicon: 3500,
    },
  },

  lunariteT4: {
    name: 'Planetary Excavator',
    desc:
      'This large machine dives deep into the Earth to find large pools of Lunarite found near the core. This is originally where the metal on the Moon comes from.',
    resource: 'lunarite',
    resourcePerSecond: {
      energy: -182,
      lunarite: 207,
    },
    cost: {
      titanium: 45000,
      ice: 37000,
      meteorite: 500,
    },
  },

  lunariteT5: {
    name: 'Moon Cloner',
    desc: 'And you wondered why we have a hundred moons in the sky?',
    resource: 'lunarite',
    resourcePerSecond: {
      energy: -1216,
      lunarite: 2122,
    },
    cost: {
      titanium: 204000,
      gold: 150000,
      methane: 195000,
    },
  },

  /////////////
  // Methane //
  /////////////
  methaneT1: {
    name: 'Vacuum Cleaner',
    desc: 'Sucks in methane and cleans the planet at the same time!',
    resource: 'methane',
    resourcePerSecond: {
      methane: 1,
    },
    cost: {
      lunarite: 50,
    },
  },

  methaneT2: {
    name: 'Suction Excavator',
    desc: 'Sucks more than anything!',
    resource: 'methane',
    resourcePerSecond: {
      energy: -16,
      methane: 8,
    },
    cost: {
      lunarite: 100,
      gem: 800,
      oil: 600,
    },
  },

  methaneT3: {
    name: 'Space Cow Plantation',
    desc: 'These hold cows genetically moodified to produce methane constantly',
    resource: 'methane',
    resourcePerSecond: {
      energy: -49,
      methane: 37,
    },
    cost: {
      lunarite: 10000,
      titanium: 9000,
      silicon: 4100,
    },
  },

  methaneT4: {
    name: 'Hydrothermal Vent',
    desc: 'Collect gas from deep sea vents on the ocean floor of Titan.',
    resource: 'methane',
    resourcePerSecond: {
      energy: -132,
      methane: 149,
    },
    cost: {
      lunarite: 52000,
      helium: 47000,
      meteorite: 390,
    },
  },

  methaneT5: {
    name: 'Interstellar Cow',
    desc: 'An interdimoonsional bovine.',
    resource: 'methane',
    resourcePerSecond: {
      energy: -899,
      methane: 1393,
    },
    cost: {
      lunarite: 140000,
      gold: 202000,
      hydrogen: 158000,
    },
  },

  //////////////
  // Titanium //
  //////////////
  titaniumT1: {
    name: 'Explorer',
    desc:
      'Hire explorers to search for Titanium on the surface, uncovered by winds on Mars.',
    resource: 'titanium',
    resourcePerSecond: {
      titanium: 1,
    },
    cost: {
      gem: 1000,
    },
  },

  titaniumT2: {
    name: 'Lunarite Drill',
    desc:
      "These Lunarite Drills are extremely powerful, needed to mine out Titanium from inside Mars' crust.",
    resource: 'titanium',
    resourcePerSecond: {
      energy: -13,
      titanium: 9,
    },
    cost: {
      lunarite: 200,
      gem: 800,
      oil: 1000,
    },
  },

  titaniumT3: {
    name: 'Penta-Drill',
    desc:
      'This is a mining machine modified to have 5 drills on its face. This allows for a massive increase in resources gained per second.',
    resource: 'titanium',
    resourcePerSecond: {
      energy: -46,
      titanium: 49,
    },
    cost: {
      lunarite: 14000,
      gem: 11000,
      silicon: 5600,
    },
  },

  titaniumT4: {
    name: 'Drill of Titans',
    desc:
      'This mighty drill is said to have been wielded by Titans themselves, many milennia ago.',
    resource: 'titanium',
    resourcePerSecond: {
      energy: -123,
      titanium: 197,
    },
    cost: {
      lunarite: 63000,
      gold: 27000,
      meteorite: 600,
    },
  },

  titaniumT5: {
    name: "David Guetta's Club",
    desc: "You shoot me down, but I won't fall. I am Titanium.",
    resource: 'titanium',
    resourcePerSecond: {
      energy: -690,
      titanium: 2106,
    },
    cost: {
      uranium: 175000,
      wood: 164000,
      helium: 156000,
    },
  },

  //////////
  // Gold //
  //////////
  goldT1: {
    name: 'Rocket Droid',
    desc:
      'Powered by Methane, this droid scouts the asteroids for gold deposits.',
    resource: 'gold',
    resourcePerSecond: {
      gold: 1,
    },
    cost: {
      gem: 200,
      methane: 50,
    },
  },

  goldT2: {
    name: 'Asteroid Destroyer',
    desc:
      'Mines through asteroids to find Gold. It is much more effective than the simple droid.',
    resource: 'gold',
    resourcePerSecond: {
      energy: -19,
      gold: 8,
    },
    cost: {
      lunarite: 500,
      gem: 1500,
      oil: 1000,
    },
  },

  goldT3: {
    name: 'Death Star Jr',
    desc:
      "That's no moon! That's a Space Station! This cuts through asteroids to expose all of the Gold in the centers.",
    resource: 'gold',
    resourcePerSecond: {
      energy: -81,
      gold: 51,
    },
    cost: {
      lunarite: 17000,
      silver: 11500,
      silicon: 8200,
    },
  },

  goldT4: {
    name: 'Chronal Actuator',
    desc:
      'Speeds up time through quantum physics in order to produce even more Gold.',
    resource: 'gold',
    resourcePerSecond: {
      energy: -223,
      gold: 211,
    },
    cost: {
      lunarite: 61000,
      helium: 15700,
      meteorite: 600,
    },
  },

  goldT5: {
    name: "Philospher's stone",
    desc:
      'Transmuation has progressed to being able to turn thin air into gold!',
    resource: 'gold',
    resourcePerSecond: {
      energy: -1324,
      gold: 2422,
    },
    cost: {
      metal: 208000,
      silver: 167000,
      meteorite: 18000,
    },
  },

  ////////////
  // Silver //
  ////////////
  silverT1: {
    name: 'Scout Ship',
    desc:
      'The Scout Ship searches through the asteroid field for pieces of silver embedded in asteroids.',
    resource: 'silver',
    resourcePerSecond: {
      silver: 1,
    },
    cost: {
      lunarite: 100,
      titanium: 20,
    },
  },

  silverT2: {
    name: 'Interplanetary Laser',
    desc: 'Cuts through asteroids to find silver deposits in their cores.',
    resource: 'silver',
    resourcePerSecond: {
      energy: -24,
      silver: 13,
    },
    cost: {
      lunarite: 350,
      gem: 900,
      oil: 1200,
    },
  },

  silverT3: {
    name: 'Big Bertha',
    desc:
      'This large, space drill, named after the World War One Howitzer built almost a milienia ago, is a silver seeking machine specially designed for mining asteroids.',
    resource: 'silver',
    resourcePerSecond: {
      energy: -65,
      silver: 53,
    },
    cost: {
      lunarite: 19500,
      silver: 18200,
      silicon: 11000,
    },
  },

  silverT4: {
    name: 'Atomic Cannon',
    desc:
      'This powerful cannon orbits Neptune and can atomise the surface of asteroids, revealing the silver within.',
    resource: 'silver',
    resourcePerSecond: {
      energy: -170,
      silver: 208,
    },
    cost: {
      lunarite: 85100,
      oil: 93800,
      meteorite: 520,
    },
  },

  silverT5: {
    name: 'Dead Werewolf Finder',
    desc:
      'The Silver bullets used to kill werewolfs are made from silver that has been compressed well over 1000 times. Extracting them will prove beneficial for your production.',
    resource: 'silver',
    resourcePerSecond: {
      energy: -1008,
      silver: 2261,
    },
    cost: {
      uranium: 165000,
      gem: 209000,
      methane: 170000,
    },
  },

  /******************************
   * Outer Planetary Resources  *
   ******************************/

  //////////////
  // Hydrogen //
  //////////////
  hydrogenT1: {
    name: 'Hydrogen Collector',
    desc:
      'This collector travels around Jupiter seeking Hydrogen to store to bring back to Earth.',
    resource: 'hydrogen',
    resourcePerSecond: {
      hydrogen: 1,
    },
    cost: {
      lunarite: 6000,
      titanium: 4800,
    },
  },

  hydrogenT2: {
    name: 'Gaseous Magnet',
    desc:
      'The magnet attracts the Hydrogen to it to increase the amount collected per second.',
    resource: 'hydrogen',
    resourcePerSecond: {
      energy: -63,
      hydrogen: 5,
    },
    cost: {
      lunarite: 10800,
      titanium: 9600,
      silicon: 6600,
    },
  },

  hydrogenT3: {
    name: 'Electrolytic Cell',
    desc:
      'These are made here on Earth and can turn water into hydrogen with a constant supply of Energy.',
    resource: 'hydrogen',
    resourcePerSecond: {
      energy: -234,
      hydrogen: 28,
    },
    cost: {
      silver: 37200,
      gold: 34200,
      silicon: 25800,
    },
  },

  hydrogenT4: {
    name: 'Hindenburg Excavation',
    desc: 'Somehow, it works.',
    resource: 'hydrogen',
    resourcePerSecond: {
      energy: -613,
      hydrogen: 113,
    },
    cost: {
      lunarite: 172000,
      methane: 134000,
      meteorite: 710,
    },
  },

  hydrogenT5: {
    name: 'Star Harvester',
    desc:
      "'Stealing' is such a strong word. I prefer 'borrowing without return' when we harvest the outer regions of stars.",
    resource: 'hydrogen',
    resourcePerSecond: {
      energy: -4581,
      hydrogen: 3562,
    },
    cost: {
      lunarite: 250000,
      wood: 184000,
      oil: 146000,
    },
  },

  ////////////
  // Helium //
  ////////////
  heliumT1: {
    name: 'Helium Drone',
    desc:
      'The Helium Drone scouts out the area on Saturn and picks out spots high in Helium which are then mined slowly by it.',
    resource: 'helium',
    resourcePerSecond: {
      helium: 1,
    },
    cost: {
      lunarite: 8400,
      titanium: 6000,
    },
  },

  heliumT2: {
    name: 'Helium Tanker',
    desc:
      'This huge tanker holds large amounts of Helium and transports it from Saturn to Earth through the vacuum of space.',
    resource: 'helium',
    resourcePerSecond: {
      energy: -72,
      helium: 11,
    },
    cost: {
      lunarite: 12600,
      titanium: 10200,
      silicon: 8400,
    },
  },

  heliumT3: {
    name: 'Morphic Compressor',
    desc:
      'The Compressor packs helium densely into a small space so that it can be easily transported back to Earth.',
    resource: 'helium',
    resourcePerSecond: {
      energy: -248,
      helium: 57,
    },
    cost: {
      lunarite: 63000,
      titanium: 43800,
      silicon: 35400,
    },
  },

  heliumT4: {
    name: 'Gas Giant Skimmer',
    desc:
      "Flying into Gas Giants' atmospheres with a big bucket is the best plan we've had yet!",
    resource: 'helium',
    resourcePerSecond: {
      energy: -670,
      helium: 232,
    },
    cost: {
      lunarite: 255000,
      titanium: 173000,
      meteorite: 770,
    },
  },

  heliumT5: {
    name: 'Caged Star',
    desc:
      'A contained miniature version of the sun uses nuclear fusion to create massive amounts of helium.',
    resource: 'helium',
    resourcePerSecond: {
      energy: -4075,
      helium: 2369,
    },
    cost: {
      lunarite: 171000,
      silicon: 165000,
      meteorite: 18600,
    },
  },

  /////////
  // Ice //
  /////////
  iceT1: {
    name: 'Ice Pickaxe',
    desc:
      'The Ice Pickaxe is the simplest way of mining frozen water, and although it is the cheapest, it is the slowest.',
    resource: 'ice',
    resourcePerSecond: {
      ice: 1,
    },
    cost: {
      lunarite: 17800,
      gem: 19300,
    },
  },

  iceT2: {
    name: 'Ice Drill',
    desc:
      'The Ice Drill is more effective than the Pickaxe and gains much more Ice every second. However, it does use electricity.',
    resource: 'ice',
    resourcePerSecond: {
      energy: -83,
      ice: 9,
    },
    cost: {
      lunarite: 23900,
      titanium: 21200,
      silicon: 19600,
    },
  },

  iceT3: {
    name: 'Ocean Freezer',
    desc:
      "With advanced technology, you are now able to turn Earth's water into high-quality Ice, previously only found on Pluto.",
    resource: 'ice',
    resourcePerSecond: {
      energy: -397,
      ice: 65,
    },
    cost: {
      lunarite: 117000,
      titanium: 86000,
      silicon: 73000,
    },
  },

  iceT4: {
    name: 'Mr Freeze',
    desc: 'This robot is the coolest guy in the solar system.',
    resource: 'ice',
    resourcePerSecond: {
      energy: -1135,
      ice: 278,
    },
    cost: {
      wood: 379000,
      helium: 14000,
      meteorite: 1500,
    },
  },

  iceT5: {
    name: 'Overexchange Condenser',
    desc:
      "Drain heat out of the ingredients so fast that you're not sure how to process it safely, but you managed to do it properly anyway.",
    resource: 'ice',
    resourcePerSecond: {
      energy: -7397,
      ice: 2973,
    },
    cost: {
      metal: 210000,
      silver: 188000,
      helium: 205000,
    },
  },

  ///////////////
  // Meteorite //
  ///////////////
  meteoriteT1: {
    name: 'Meteorite Printer',
    desc:
      'Contruct an automated way of producing meteorite without you having to do anything.',
    resource: 'meteorite',
    resourcePerSecond: {
      plasma: -3,
      meteorite: 1,
    },
    cost: {
      lunarite: 100000,
      silicon: 60000,
    },
  },

  meteoriteT2: {
    name: 'Meteorite Web',
    desc:
      'The Meteorite Web uses nano-fibres made while submerged in highly radioactive liquids to become strong enough to physically catch meteors from the Asteroid Belt. Plasma is required to refine the asteroids into Meteorite Ore, which can be usable.',
    resource: 'meteorite',
    resourcePerSecond: {
      plasma: -21,
      meteorite: 8,
    },
    cost: {
      lunarite: 940000,
      uranium: 490000,
      silicon: 510000,
    },
  },

  meteoriteT3: {
    name: 'Planet Smasher',
    desc:
      'Get meteorites the old-fashioned way: demolishing uninhabited exoplanets by firing high-energy particle beams at them, then collect the debris.',
    resource: 'meteorite',
    resourcePerSecond: {
      plasma: -111,
      meteorite: 72,
    },
    cost: {
      silicon: 3230000,
      silver: 5890000,
      gem: 8340000,
    },
  },

  meteoriteT4: {
    name: 'Nebulous Synthesizer',
    desc:
      'Bypass the need for demolishing planets entirely by building your own nebula to create meteorites instead!',
    resource: 'meteorite',
    resourcePerSecond: {
      plasma: -135,
      meteorite: 142,
    },
    cost: {
      lunarite: 25800000,
      lava: 19700000,
      gold: 21900000,
    },
  },

  //////////////
  // Research //
  //////////////
  scienceT1: {
    name: 'Home Science Kit',
    desc:
      'Build a small laboratory of your very own to start producing science. Each one produces 0.1 science per second.',
    resource: 'science',
    resourcePerSecond: {
      science: 0.1,
    },
    cost: {
      metal: 20,
      gem: 15,
      wood: 10,
    },
  },

  scienceT2: {
    name: 'High School Science',
    desc:
      'Build a more effective laboratory to continue your quest into the realm of science at a significantly faster speed. Each one produces 1 science per second.',
    resource: 'science',
    resourcePerSecond: {
      science: 1,
    },
    cost: {
      metal: 1000,
      gem: 200,
      wood: 500,
    },
  },

  scienceT3: {
    name: 'University Laboratory',
    desc:
      'Build an even better version of the old laboratory to further your exploration of the realm of science. Each one produces 10 science per second.',
    resource: 'science',
    resourcePerSecond: {
      science: 10,
    },
    cost: {
      metal: 17000,
      gem: 4700,
      wood: 9600,
    },
  },

  scienceT4: {
    name: 'Scientific Observatory',
    desc:
      'Create an observatory to gaze upon the stars and acquire knowledge from them.',
    resource: 'science',
    resourcePerSecond: {
      science: 100,
    },
    cost: {
      metal: 610000,
      gem: 370000,
      wood: 926000,
    },
  },

  scienceT5: {
    name: 'Space Scientific Satellite Station',
    desc:
      "From outside Earth's orbit, the universe can be understood much more efficiently without an atmosphere obstructing the lab's view.",
    resource: 'science',
    resourcePerSecond: {
      science: 1000,
    },
    cost: {
      metal: 12400000,
      gem: 7300000,
      wood: 15900000,
    },
  },

  //////////////////
  // Solar System //
  //////////////////
  rocketFuelT1: {
    name: 'Chemical Plant',
    desc: 'Chemical plants are used to make rocket fuel automatically.',
    resource: 'rocketFuel',
    resourcePerSecond: {
      rocketFuel: 0.2,
      carbon: -20,
      oil: -20,
    },
    cost: {
      metal: 1000,
      gem: 750,
      wood: 500,
    },
  },

  rocketFuelT2: {
    name: 'Oxidisation Chamber',
    desc:
      'Oxidisation Chambers make rocket fuel faster and more efficiently than chemical plants.',
    resource: 'rocketFuel',
    resourcePerSecond: {
      rocketFuel: 1.5,
      carbon: -100,
      oil: -100,
    },
    cost: {
      metal: 12000,
      gem: 8300,
      wood: 6800,
    },
  },

  rocketFuelT3: {
    name: 'Hydrazine Catalyst',
    desc:
      'These speed up the chemical reactions needed to make rocket fuel by using greenhouse gases such as methane.',
    resource: 'rocketFuel',
    resourcePerSecond: {
      rocketFuel: 20,
      methane: -520,
    },
    cost: {
      titanium: 140000,
      silicon: 96300,
      gold: 78600,
    },
  },

  rocketT1: {
    name: 'Rocket',
    desc: 'To launch the rocket into space, it must first be built.',
    category: 'rocket',
    resource: 'rocket',
    cost: {
      metal: 1200,
      gem: 900,
      oil: 1000,
    },
    order: 2,
    unlocked: true,
    onApply: function () {
      Game.resources.entries.rocket.current = 1;
      Game.buildings.entries.rocketT1.current = 1;
      Templates.uiFunctions.unlock('rocketT2');
      Templates.uiFunctions.hide('rocketT1');
    },
  },

  rocketT2: {
    name: 'Launch Rocket',
    desc:
      'Launching the rocket into space will unlock space mining, exploration and other planets. This requires a satellite for navigation.',
    category: 'rocket',
    resource: 'rocket',
    cost: {
      rocket: 1,
      rocketFuel: 20,
    },
    order: 3,
    unlocked: false,
    onApply: function () {
      Game.buildings.entries.rocketT2.current = 1;
      Templates.uiFunctions.hide('rocketT2');
      Templates.uiFunctions.hideCategory('spacecraft', 'solarTab');
      Templates.uiFunctions.unlock('moon');
      Templates.uiFunctions.unlock('mercury');
      Templates.uiFunctions.unlock('venus');
      Templates.uiFunctions.unlock('mars');
      Templates.uiFunctions.unlock('asteroidBelt');
      // Unlock moon
    },
  },
};

// var baseStorage = {
//   type: BUILDING_TYPE.PRODUCER,
//   unlocked: false,
//   maxCount: Number.MAX_VALUE,
//   costType: COST_TYPE.FIXED,
// };

const storage = {
  plasmaStorageT1: {
    name: 'Plasma Storage Unit',
    desc:
      'PSUs can hold plasma in a specially controlled casing that retains its intense heat.',
    resource: 'plasma',
    storage: {
      plasma: 50000,
    },
    cost: {
      silver: 770000,
      gold: 770000,
      uranium: 550000,
    },
  },

  plasmaStorageT2: {
    name: 'CY-B3RI4 Heat Sinker PSU',
    desc:
      'A Specially designed PSU which utilises ice and ventilation technology to allow more plasma to be condensed into the storage unit before it starts being damaged by the plasma.',
    resource: 'plasma',
    storage: {
      plasma: 500000,
    },
    cost: {
      silver: 9300000,
      gold: 9300000,
      uranium: 6800000,
    },
  },

  plasmaStorageT3: {
    name: 'L.V.C. PSU',
    desc:
      'The Localised Vacuum Caster separates the container itself from the inserted plasma, allowing for even more condensation of plasma due to the isolating strength of the vacuum.',
    resource: 'plasma',
    storage: {
      plasma: 5000000,
    },
    cost: {
      silver: 111600000,
      gold: 111600000,
      uranium: 81600000,
    },
  },

  energyStorageT1: {
    name: 'Batteries',
    desc:
      "And the Overlord said, 'let there be energy storage!', so these lousy batteries fell out of the sky. ¯\\_(ツ)_/¯",
    resource: 'energy',
    storage: {
      energy: 50000,
    },
    cost: {
      metal: 50000,
      gem: 50000,
      lunarite: 30000,
    },
  },

  energyStorageT2: {
    name: 'Mirrored Batteries',
    desc:
      'The mirrored structure of the batteries allows for storing energy in an electric field around the battery, storing more energy.',
    resource: 'energy',
    storage: {
      energy: 500000,
    },
    cost: {
      metal: 550000,
      gem: 550000,
      lunarite: 330000,
    },
  },

  energyStorageT3: {
    name: 'Clustered Batteries',
    desc:
      'Improved structure allows for better electric field storage and for structural deposits to occur, allowing more energy to be stored.',
    resource: 'energy',
    storage: {
      energy: 5000000,
    },
    cost: {
      metal: 5500000,
      gem: 5500000,
      lunarite: 3300000,
    },
  },

  energyStorageT4: {
    name: 'Syphon Battery',
    desc:
      'This battery uses magnetism to syphon and maintain electrons from objets surrounding it so that energy can be stored outside of it and tapped into when the battery itself empties, prioritising the strongest energetic supply, thus fitting much more energy than previous tiers.',
    resource: 'energy',
    storage: {
      energy: 50000000,
    },
    cost: {
      metal: 55000000,
      gem: 55000000,
      lunarite: 33000000,
    },
  },

  energyStorageT5: {
    name: 'NanoCluster Battery',
    desc:
      'Using nanotechnology, the Clustered Battery model has been improved at near-atomic scales to allow for overlapping Electric Fields to occur, exponentially increasing the amount of energy it can hold.',
    resource: 'energy',
    storage: {
      energy: 500000000,
    },
    cost: {
      metal: 550000000,
      gem: 550000000,
      lunarite: 330000000,
    },
  },

  energyStorageT6: {
    name: 'VoidTech Batteries',
    desc:
      'Using Vacuum Casting, the battery traps electrons within a vacuum inside itself, allowing never-before-seen levels of energy storage.',
    resource: 'energy',
    storage: {
      energy: 5000000000,
    },
    cost: {
      metal: 5500000000,
      gem: 5500000000,
      lunarite: 3300000000,
    },
  },
};
