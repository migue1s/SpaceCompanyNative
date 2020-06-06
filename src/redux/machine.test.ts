import {rootReducer, rootInitialState} from './store';
import {buyMachine} from './machineSlice';
import {setResource} from './resourceSlice';
import {MachineType, machinesData} from '../data/machinesData';
import {ResourceType} from '../types';
describe('machines', () => {
  let reducer = rootReducer(rootInitialState, {type: 'init'});
  beforeEach(() => {
    reducer = rootReducer(rootInitialState, {type: 'init'});
  });

  it('should buy correctly', () => {
    reducer = rootReducer(
      reducer,
      setResource({resource: ResourceType.metal, amount: 20}),
    );
    reducer = rootReducer(
      reducer,
      setResource({resource: ResourceType.wood, amount: 20}),
    );
    reducer = rootReducer(
      reducer,
      buyMachine({type: MachineType.metalT1, cost: machinesData.metalT1.cost}),
    );

    expect(reducer.resource.values.metal.perSecond).toEqual(1);
    expect(reducer.resource.values.metal.current).toEqual(10);
    expect(reducer.resource.values.wood.current).toEqual(15);
    expect(reducer.machine.metalT1.current).toEqual(1);
  });
});
