import React from 'react';
import {durationFormatter} from '../utils/TimeFormatter';
import ThemedText from './ThemedText';
import {ViewStyle} from 'react-native';
import {useResource} from '../hooks';
import {resourcesData} from '../data/resourcesData';
import {ResourceType} from '../types';

interface ResourceBulletProps {
  cost: number;
  type: ResourceType;
  style?: ViewStyle;
}

const ResourceBullet = ({type, style, cost}: ResourceBulletProps) => {
  const resource = useResource(type);
  const resourceMeta = resourcesData[type];

  let info = '';
  if (resource.current >= cost) {
    info = 'done!';
  } else if (cost > resource.capacity) {
    info = 'insufficient storage';
  } else if (resource.perSecond <= 0) {
    info = '~~';
  } else {
    const remaining = cost - resource.current;
    const seconds = remaining / resource.perSecond;
    info = durationFormatter(seconds);
  }
  return (
    <ThemedText variant={'body'} style={style}>
      {resourceMeta.name}: {cost} ({info})
    </ThemedText>
  );
};

export default ResourceBullet;
