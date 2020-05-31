import React from 'react';
import {View} from 'react-native';
import ResourceBullet from './ResourceBullet';
import {storiesOf} from '@storybook/react-native';
import ResourceMachine from './ResourceMachine';
import ResourceSummary from './ResourceSummary';
import ResourceRow from './ResourceRow';
import {ResourceType, Machine} from '../types';

let machine: Machine = {
  category: 'earth',
  cost: {
    metal: 10,
    wood: 10,
  },
  current: 1,
  desc: 'This is a test machine',
  destroyable: true,
  // iconExtension: "png"
  // iconPath: "Icons/"
  id: 'miner',
  name: 'Miner',
  resource: 'metal',
  tier: 1,
};

storiesOf('Resources', module).add('Machine', () => (
  <ResourceMachine machine={machine} />
));
storiesOf('Resources', module).add('Bullet', () => (
  <View>
    <ResourceBullet cost={10} current={1} dps={3} name="Metal" storage={50} />
    <ResourceBullet cost={10} current={1} dps={0} name="Metal" storage={20} />
    <ResourceBullet cost={10} current={1} dps={0} name="Metal" storage={5} />
    <ResourceBullet cost={10} current={10} dps={0} name="Metal" storage={10} />
  </View>
));
storiesOf('Resources', module).add('Summary', () => <ResourceSummary />);
storiesOf('Resources', module).add('Tile', () => (
  <ResourceRow type={ResourceType.metal} />
));
