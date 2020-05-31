import React from 'react';
import {StyleSheet} from 'react-native';
import {Machine} from '../types';
import ThemedButton from './ThemedButton';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

const styles = StyleSheet.create({
  machineCard: {
    alignSelf: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  valueContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  valueBox: {
    width: '50%',
  },
});

const ResourceMachine = ({machine}: {machine: Machine}) => {
  return (
    <ThemedView style={styles.machineCard}>
      <ThemedView>
        <ThemedText variant={'heading'}>{machine.name}</ThemedText>
        <ThemedText variant={'body'}>{machine.desc}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.valueContainer}>
        <ThemedView style={styles.valueBox}>
          <ThemedText variant={'title'}>Cost:</ThemedText>
        </ThemedView>
        <ThemedView style={styles.valueBox}>
          <ThemedText variant={'title'}>Input:</ThemedText>
          <ThemedText variant={'title'}>Output:</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView>
        <ThemedButton>Get 1</ThemedButton>
      </ThemedView>
    </ThemedView>
  );
};

export default ResourceMachine;
