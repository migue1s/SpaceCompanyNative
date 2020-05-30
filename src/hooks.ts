import {useSelector} from 'react-redux';
import {chain} from 'lodash';
import {ReduxState} from './redux/store';
import {ResourceType} from './types';
import {useContext} from 'react';
import {ThemeContext} from './';

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useResource = (resourceId: ResourceType) => {
  return useSelector((state: ReduxState) => state.game.resources[resourceId]);
};

export const useResourceCount = (resourceId: ResourceType) => {
  return useSelector(
    (state: ReduxState) => state.game.resourceCount[resourceId],
  );
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
