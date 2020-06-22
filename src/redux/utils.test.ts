import {rootReducer, rootInitialState} from './store';
import {calcResourcePerSecond, calcRPS} from './utils';
import {buyMachine} from './machineSlice';
import {MachineType} from '../data/machinesData';
import {setResource} from './resourceSlice';
import {ResourceType} from '../types';

const emptyRPSList = {
  antimatter: 0,
  carbon: 0,
  energy: 0,
  gem: 0,
  gold: 0,
  helium: 0,
  hydrogen: 0,
  ice: 0,
  lava: 0,
  lunarite: 0,
  metal: 0,
  meteorite: 0,
  methane: 0,
  oil: 0,
  plasma: 0,
  rocket: 0,
  rocketFuel: 0,
  science: 0,
  silicon: 0,
  silver: 0,
  titanium: 0,
  uranium: 0,
  wood: 0,
};

describe('calculates rps', () => {
  let reducer = rootReducer(rootInitialState, {type: 'init'});
  beforeEach(() => {
    reducer = rootReducer(rootInitialState, {type: 'init'});
  });

  it('normally', () => {
    reducer = rootReducer(
      reducer,
      buyMachine({type: MachineType.metalT1, cost: {}}),
    );
    reducer = rootReducer(
      reducer,
      buyMachine({type: MachineType.gemT1, cost: {}}),
    );
    reducer = rootReducer(
      reducer,
      buyMachine({type: MachineType.gemT1, cost: {}}),
    );

    expect(calcRPS({metal: 0}, 1000, reducer, [])).toEqual({
      metal: 1,
      gem: 2,
    });
    expect(calcResourcePerSecond(reducer, 1000)).toEqual({
      metal: 1,
      gem: 2,
    });
  });

  it('in resource deficit', () => {
    reducer = rootReducer(
      reducer,
      setResource({resource: ResourceType.wood, amount: 1}),
    );
    reducer = rootReducer(
      reducer,
      buyMachine({type: MachineType.carbonT1, cost: {}}),
    );

    expect(calcResourcePerSecond(reducer, 1000)).toEqual({
      ...emptyRPSList,
      wood: 1,
    });
  });

  it('with consumers being supplied', () => {
    reducer = rootReducer(
      reducer,
      setResource({resource: ResourceType.wood, amount: 0}),
    );
    reducer = rootReducer(
      reducer,
      buyMachine({type: MachineType.carbonT1, cost: {}}),
    );

    expect(calcRPS({}, 1000, reducer, [])).toEqual({
      carbon: 1,
      wood: 0,
    });
    expect(calcRPS({wood: 1}, 1000, reducer, [])).toEqual({
      wood: 1,
    });

    expect(calcResourcePerSecond(reducer, 1000)).toEqual({
      ...emptyRPSList,
      wood: 1,
      carbon: 0,
    });
  });
});
