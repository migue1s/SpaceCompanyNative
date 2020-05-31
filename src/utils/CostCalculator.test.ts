import CostCalculator from './CostCalculator';
import {ResourceAmount} from '../types';

describe('calculates costs', () => {
  const minerCost: ResourceAmount = {metal: 10, wood: 5};
  it('on buy #1', () => {
    expect(CostCalculator(0, minerCost)).toEqual({metal: 10, wood: 5});
  });

  it('on buy #2', () => {
    expect(CostCalculator(1, minerCost)).toEqual({metal: 11, wood: 5});
  });

  it('on buy #10', () => {
    expect(CostCalculator(9, minerCost)).toEqual({metal: 23, wood: 11});
  });
});
