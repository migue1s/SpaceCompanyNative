import {ReduxState} from './store';
import {MachineType, machinesData} from '../data/machinesData';
import {ResourceAmount, ResourceType, Machine, MachineState} from '../types';
import {ReduxMachineState} from './machineSlice';
import {ReduxResourceState} from './resourceSlice';
import {
  multiResourceAmount,
  resourceAmountsGainsAndLosses,
  addResourceAmounts,
  resourceAmountKeys,
} from '../utils/ResourceOperations';
import {union, reduce} from 'lodash';

const forEachMachine = (
  state: ReduxMachineState,
  callback: (type: MachineType, machine: MachineState, meta: Machine) => void,
) => {
  Object.keys(state).forEach((key) => {
    const type = key as MachineType;
    callback(type, state[type], machinesData[type]);
  });
};

export const extractAmountFromState = (state: ReduxResourceState) => {
  return Object.keys(state.values).reduce((result, current) => {
    const key = current as ResourceType;
    result[key] = state.values[key]!.current;
    return result;
  }, {} as ResourceAmount);
};

export const calcRPS = (
  amount: ResourceAmount,
  delta: number,
  state: ReduxState,
  unavailableResources: ResourceType[],
) => {
  let rps: ResourceAmount = resourceAmountKeys(amount).reduce((result, key) => {
    result[key] = 0;
    return result;
  }, {} as ResourceAmount);
  let currentAmount = reduce(
    state.resource.values,
    (result, curr) => {
      result[curr.id] = curr.current;
      return result;
    },
    {} as ResourceAmount,
  );

  forEachMachine(state.machine, (machineType, machine, meta) => {
    const machineValue = multiResourceAmount(
      meta.resourcePerSecond,
      (delta / 1000) * machine.current * machine.multiplier,
    );
    const newAmount = addResourceAmounts(machineValue, currentAmount);
    const losses = resourceAmountsGainsAndLosses(newAmount).negative;
    const hasDeficit =
      union(resourceAmountKeys(losses), unavailableResources).length > 0;
    if (!hasDeficit) {
      const machineRPS = multiResourceAmount(
        meta.resourcePerSecond,
        machine.current * machine.multiplier,
      );
      currentAmount = newAmount;
      rps = addResourceAmounts(machineRPS, rps);
    } else {
      rps = addResourceAmounts(
        multiResourceAmount(meta.resourcePerSecond, 0),
        rps,
      );
    }
  });

  return rps;
};

export const calcResourcePerSecond = (state: ReduxState, delta: number) => {
  const currentAmount = extractAmountFromState(state.resource);
  let futureAmount = calcRPS(currentAmount, delta, state, []);

  return futureAmount;
};
