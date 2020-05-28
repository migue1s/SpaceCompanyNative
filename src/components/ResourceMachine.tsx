import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Machine, ResourceType} from '../types';
import GlobalStyles from '../styles/GlobalStyles';
import ResourceStyles from '../styles/ResourceStyles';

const getCosts = (costs: {[x in ResourceType]?: number}) => {
  return (
    <View style={ResourceStyles.machineBox}>
      <Text style={GlobalStyles.property}>Cost:</Text>
    </View>
  );
};

const ResourceMachine = ({machine}: {machine: Machine}) => {
  return (
    <View style={ResourceStyles.machineCard}>
      <View>
        <Text style={GlobalStyles.header}>{machine.name}</Text>
        <Text>{machine.desc}</Text>
      </View>
      <View style={ResourceStyles.machineContainer}>
        {getCosts(machine.cost)}
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
