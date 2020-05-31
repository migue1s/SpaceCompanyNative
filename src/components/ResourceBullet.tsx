import React from 'react';
import {durationFormatter} from '../utils/TimeFormatter';
import ThemedText from './ThemedText';

interface ResourceCostProps {
  name: string;
  dps: number;
  cost: number;
  storage: number;
  current: number;
}

const ResourceCost = ({
  name,
  dps,
  cost,
  current,
  storage,
}: ResourceCostProps) => {
  let info = '';
  if (current >= cost) {
    info = 'done!';
  } else if (cost > storage) {
    info = 'insufficient storage';
  } else if (dps <= 0) {
    info = '~~';
  } else {
    const remaining = cost - current;
    const seconds = remaining / dps;
    info = durationFormatter(seconds);
  }
  return (
    <ThemedText variant={'body'}>
      {name}: {cost} ({info})
    </ThemedText>
  );
};

export default ResourceCost;
