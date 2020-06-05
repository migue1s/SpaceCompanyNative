import {rootInitialState, rootReducer} from './store';
import {ResourceType} from '../types';
import {setResource, manualGain, tick} from './resourceSlice';
import {buyMachine} from './machineSlice';
import {MachineType, machinesData} from '../data/machinesData';

describe('resources', () => {
  let reducer = rootReducer(rootInitialState, {type: 'init'});
  beforeEach(() => {
    reducer = rootReducer(rootInitialState, {type: 'init'});
  });

  it('ticks', () => {
    reducer = rootReducer(
      reducer,
      setResource({resource: ResourceType.metal, amount: 10}),
    );
    reducer = rootReducer(
      reducer,
      setResource({resource: ResourceType.wood, amount: 5}),
    );
    reducer = rootReducer(
      reducer,
      buyMachine({type: MachineType.metalT1, cost: machinesData.metalT1.cost}),
    );

    expect(reducer.resource.metal.current).toEqual(0);
    reducer = rootReducer(reducer, tick(1000));
    expect(reducer.resource.metal.current).toEqual(1);
    reducer = rootReducer(reducer, tick(1000));
    expect(reducer.resource.metal.current).toEqual(2);
    reducer = rootReducer(reducer, tick(18000));
    expect(reducer.resource.metal.current).toEqual(20);
  });

  describe('resources', () => {
    it('should increate by one', () => {
      expect(reducer.resource.metal.current).toEqual(0);
      reducer = rootReducer(reducer, manualGain(ResourceType.metal));
      expect(reducer.resource.metal.current).toEqual(1);
      reducer = rootReducer(reducer, manualGain(ResourceType.metal));
      expect(reducer.resource.metal.current).toEqual(2);
    });

    it('should get set', () => {
      expect(reducer.resource.metal.current).toEqual(0);
      reducer = rootReducer(
        reducer,
        setResource({resource: ResourceType.metal, amount: 20}),
      );
      expect(reducer.resource.metal.current).toEqual(20);
    });
  });
});
