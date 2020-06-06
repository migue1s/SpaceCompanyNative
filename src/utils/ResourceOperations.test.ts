import {
  addResourceAmounts,
  multiResourceAmount,
  resourceAmountKeys,
  resourceAmountsGainsAndLosses,
} from './ResourceOperations';
import {ResourceAmount} from '../types';

describe('resource operator', () => {
  const a: ResourceAmount = {
    metal: 8,
    energy: -2,
  };
  const b: ResourceAmount = {
    metal: 1,
  };

  it('extracts the keys', () => {
    expect(resourceAmountKeys(a)).toEqual(Object.keys(a));
  });

  it('adds 2 resources', () => {
    expect(addResourceAmounts(a, b)).toEqual({
      metal: 9,
      energy: -2,
    });
  });

  it('multiplies resource by constant', () => {
    expect(multiResourceAmount(a, 3)).toEqual({
      metal: 24,
      energy: -6,
    });
  });

  it('separates gains from losses', () => {
    expect(resourceAmountsGainsAndLosses(a)).toEqual({
      positive: {
        metal: 8,
      },
      negative: {
        energy: -2,
      },
    });
  });
});
