import React from 'react';
import ResourceBullet from './ResourceBullet';
import {storiesOf} from '@storybook/react-native';
import ResourceMachine from './ResourceMachine';
import ResourceSummary from './ResourceSummary';
import ResourceTile from './ResourceTile';

storiesOf('Resources', module).add('Bullet', () => <ResourceBullet />);
storiesOf('Resources', module).add('Machine', () => <ResourceMachine />);
storiesOf('Resources', module).add('Summary', () => <ResourceSummary />);
storiesOf('Resources', module).add('Tile', () => <ResourceTile />);
