import {useSelector} from 'react-redux';
import {GameState} from './redux/gameSlice';
import {pickBy, chain} from 'lodash';

export const useResourcesByCategory = (category: string) => {
  return useSelector((state: GameState) =>
    pickBy(
      state.resources,
      (data) => data.unlocked && data.category === category,
    ),
  );
};

export const useResources = () => {
  const resources = useSelector((state: GameState) => state.resourceCount);

  return chain(resources)
    .pickBy((r) => r.unlocked)
    .groupBy((r) => r && r.category)
    .value();
};
