import React from 'react';
import {durationFormatter} from '../utils/TimeFormatter';
import ThemedText from './ThemedText';
import {ViewStyle} from 'react-native';

interface ResourceBulletProps {
  name: string;
  dps: number;
  cost: number;
  storage: number;
  current: number;
  style?: ViewStyle;
}

const ResourceBullet = ({
  name,
  dps,
  cost,
  current,
  storage,
  style,
}: ResourceBulletProps) => {
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
    <ThemedText variant={'body'} style={style}>
      {name}: {cost} ({info})
    </ThemedText>
  );
};

export default ResourceBullet;
