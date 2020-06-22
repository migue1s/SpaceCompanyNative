import {ResourceAmount, ResourceType} from '../types';
import {union} from 'lodash';

export const resourceAmountKeys = (amount: ResourceAmount) => {
  return Object.keys(amount) as ResourceType[];
};

export const multiResourceAmount = (amount: ResourceAmount, factor: number) => {
  return resourceAmountKeys(amount).reduce((result, current) => {
    result[current] = amount[current]! * factor;
    return result;
  }, {} as ResourceAmount);
};

export const addResourceAmounts = (a: ResourceAmount, b: ResourceAmount) => {
  const keysInA = resourceAmountKeys(a);
  const keysInB = resourceAmountKeys(b);
  const totalKeys = union(keysInA, keysInB);
  const result: ResourceAmount = {};
  totalKeys.forEach((type) => {
    if (a[type] !== undefined && b[type] !== undefined) {
      result[type] = a[type]! + b[type]!;
    } else if (a[type] !== undefined) {
      result[type] = a[type]!;
    } else if (b[type] !== undefined) {
      result[type] = b[type]!;
    }
  });
  return result;
};

export const resourceAmountsGainsAndLosses = (amount: ResourceAmount) => {
  return resourceAmountKeys(amount).reduce(
    (result, current) => {
      if (amount[current]! >= 0) {
        result.positive[current] = amount[current];
      } else {
        result.negative[current] = amount[current];
      }
      return result;
    },
    {positive: {}, negative: {}} as {
      positive: ResourceAmount;
      negative: ResourceAmount;
    },
  );
};
