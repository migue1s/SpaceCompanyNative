import {useSelector} from 'react-redux';
import {pickBy, chain} from 'lodash';
import {ReduxState} from './redux/store';

export const useResourcesByCategory = (category: string) => {
  const res = useSelector((state: ReduxState) => state.game.resources);
  return pickBy(res, (data) => data.unlocked && data.category === category);
};

export const useResources = () => {
  const resources = useSelector(
    (state: ReduxState) => state.game.resourceCount,
  );

  return chain(resources)
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
};
