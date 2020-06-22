import React from 'react';
import {View} from 'react-native';
import ResourceBullet from './ResourceBullet';
import {storiesOf} from '@storybook/react-native';
import ResourceMachine from './ResourceMachine';
import ResourceSummary from './ResourceSummary';
import ResourceRow from './ResourceRow';
import {ResourceType} from '../types';
import {MachineType} from '../data/machinesData';

storiesOf('Resources', module).add('Machine', () => (
  <ResourceMachine type={MachineType.metalT1} />
));
storiesOf('Resources', module).add('Bullet', () => (
  <View>
    <ResourceBullet cost={10} type={ResourceType.metal} />
    <ResourceBullet cost={60} type={ResourceType.metal} />
  </View>
));
storiesOf('Resources', module).add('Summary', () => (
  <ResourceSummary type={ResourceType.metal} />
));
storiesOf('Resources', module).add('Tile', () => (
  <ResourceRow type={ResourceType.metal} onPress={() => {}} />
));
