import React from 'react';
import {View} from 'react-native';
import ResourceBullet from './ResourceBullet';
import {storiesOf} from '@storybook/react-native';
import ResourceMachine from './ResourceMachine';
import ResourceSummary from './ResourceSummary';
import ResourceRow from './ResourceRow';
import {ResourceType} from '../types';

storiesOf('Resources', module).add('Bullet', () => (
  <View>
    <ResourceBullet cost={10} current={1} dps={3} name="Metal" storage={50} />
    <ResourceBullet cost={10} current={1} dps={0} name="Metal" storage={20} />
    <ResourceBullet cost={10} current={1} dps={0} name="Metal" storage={5} />
    <ResourceBullet cost={10} current={10} dps={0} name="Metal" storage={10} />
  </View>
));
storiesOf('Resources', module).add('Machine', () => <ResourceMachine />);
storiesOf('Resources', module).add('Summary', () => (
  <ResourceSummary type={ResourceType.metal} />
));
storiesOf('Resources', module).add('Tile', () => (
  <ResourceRow type={ResourceType.metal} />
));
