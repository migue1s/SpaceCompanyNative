import {useSelector} from 'react-redux';
import {pickBy, chain} from 'lodash';
import {ReduxState} from './redux/store';

export const useResourcesByCategory = (category: string) => {
  const res = useSelector((state: ReduxState) => state.game.resources);
  return pickBy(res, (data) => data.unlocked && data.category === category);
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
