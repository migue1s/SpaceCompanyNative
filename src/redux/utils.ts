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
import {union} from 'lodash';

const forEachMachine = (
  state: ReduxMachineState,
  callback: (type: MachineType, machine: MachineState, meta: Machine) => void,
) => {
  Object.keys(state).forEach((key) => {
    const type = key as MachineType;
    callback(type, state[type], machinesData[type]);
  });
};

const extractAmountFromState = (state: ReduxResourceState) => {
  return Object.keys(state).reduce((result, current) => {
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
  let rps: ResourceAmount = {...amount};

  forEachMachine(state.machine, (machineType, machine, meta) => {
    const losses = resourceAmountKeys(
      resourceAmountsGainsAndLosses(meta.cost).negative,
    );
    const hasDeficit = union(losses, unavailableResources).length > 0;
    if (!hasDeficit) {
      const machineRPS = multiResourceAmount(
        meta.resourcePerSecond,
        (delta / 1000) * machine.current * machine.multiplier,
      );
      rps = addResourceAmounts(machineRPS, rps);
    }
  });

  return rps;
};

export const calcResourcePerSecond = (state: ReduxState, delta: number) => {
  const currentAmount = extractAmountFromState(state.resource);
  let futureAmount = calcRPS(currentAmount, delta, state, []);
  let resourcesInDeficit = resourceAmountsGainsAndLosses(futureAmount).negative;
  let unavailableResources = resourceAmountKeys(resourcesInDeficit);

  while (Object.keys(resourcesInDeficit).length > 0) {
    futureAmount = calcRPS(currentAmount, delta, state, unavailableResources);
    resourcesInDeficit = resourceAmountsGainsAndLosses(futureAmount).negative;
    unavailableResources = union(
      unavailableResources,
      resourceAmountKeys(resourcesInDeficit),
    );
  }

  return {rps: futureAmount, zeroOut: unavailableResources};
};
