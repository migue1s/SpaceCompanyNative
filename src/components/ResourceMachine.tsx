import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Machine} from '../types';
import GlobalStyles from '../styles/GlobalStyles';
import ResourceStyles from '../styles/ResourceStyles';
import ResourceCost from './ResourceBullet';
import {useResource} from '../hooks';

const ResourceMachine = ({machine}: {machine: Machine}) => {
  return (
    <View style={ResourceStyles.machineCard}>
      <View>
        <Text style={GlobalStyles.header}>{machine.name}</Text>
        <Text>{machine.desc}</Text>
      </View>
      <View style={ResourceStyles.machineContainer}>
        {Object.keys(machine.cost).map(resource => (
          <ResourceCost resource. dps cost current storage />
        ))}
        <View style={ResourceStyles.machineBox}>
          <Text style={GlobalStyles.property}>Input:</Text>
          <Text style={GlobalStyles.property}>Output:</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={GlobalStyles.button}>
          <Text>Get 1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResourceMachine;
