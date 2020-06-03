import {useSelector} from 'react-redux';
import {chain} from 'lodash';
import {ReduxState} from './redux/store';
import {ResourceType} from './types';
import {useContext} from 'react';
import {ThemeContext} from './';
import {machinesData} from './data/machinesData';

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useResource = (resourceId: ResourceType) => {
  return useSelector((state: ReduxState) => state.game.resources[resourceId]);
};

export const useResources = () => {
  const resources = useSelector((state: ReduxState) => state.game.resources);

  const resourceGroups = chain(Object.values(resources))
    .pickBy((r) => r.unlocked)
    .filter(
      (r) =>
        r !== undefined &&
        r.category !== 'rocketFuel' &&
        r.category !== 'spacecraft' &&
        r.category !== 'science',
    )
    .groupBy((r) => r && r.category)
    .value();

  return Object.keys(resourceGroups).map((key) => {
    return {
      header: key,
      data: resourceGroups[key],
    };
  });
};

export const useMachines = (resourceId: ResourceType) => {
  const machines = useSelector((state: ReduxState) => state.game.machines);
  return Object.values(machines)
    .filter(
      (machine) =>
        machine.unlocked && machinesData[machine.id].resource === resourceId,
    )
    .sort((a, b) => machinesData[a.id].tier - machinesData[b.id].tier)
    .map((machine) => machine.id);
};
