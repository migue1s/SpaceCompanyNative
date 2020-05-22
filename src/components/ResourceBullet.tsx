import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {durationFormatter} from '../utils/TimeFormatter';

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
    <Text>
      {name}: {current} ({info})
    </Text>
  );
};

export default ResourceCost;

const styles = StyleSheet.create({});
