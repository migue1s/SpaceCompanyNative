import {ImageURISource} from 'react-native';
import {ResourceType} from '../types';

export const resourceIcons: {[x in ResourceType]: ImageURISource} = {
  energy: require('./energyIcon.png'),
  plasma: require('./plasmaIcon.png'),
  meteorite: require('./meteoriteIcon.png'),
  carbon: require('./carbonIcon.png'),
  oil: require('./oilIcon.png'),
  metal: require('./metalIcon.png'),
  gem: require('./gemIcon.png'),
  wood: require('./woodIcon.png'),
  silicon: require('./siliconIcon.png'),
  uranium: require('./uraniumIcon.png'),
  lava: require('./lavaIcon.png'),
  lunarite: require('./lunariteIcon.png'),
  methane: require('./methaneIcon.png'),
  titanium: require('./titaniumIcon.png'),
  gold: require('./goldIcon.png'),
  silver: require('./silverIcon.png'),
  hydrogen: require('./hydrogenIcon.png'),
  helium: require('./heliumIcon.png'),
  ice: require('./iceIcon.png'),
  science: require('./scienceIcon.png'),
  rocketFuel: require('./rocketFuelIcon.png'),
  rocket: require('./rocketIcon.png'),
  antimatter: require('./antimatterIcon.png'),
};
