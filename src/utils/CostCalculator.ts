import {ResourceAmount, ResourceType} from '../types';

export default (
  currentCount: number,
  cost: ResourceAmount,
  factor: number = 1.1,
) => {
  return Object.keys(cost).reduce((result, current) => {
    const key = current as ResourceType;
    result[key] = Math.floor(cost[key]! * Math.pow(factor, currentCount));
    return result;
  }, {} as ResourceAmount);
};
