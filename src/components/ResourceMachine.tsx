import React, {useCallback} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {ResourceType} from '../types';
import {useResource} from '../hooks';
import ThemedButton from './ThemedButton';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import ResourceCost from './ResourceBullet';
import {resourcesData} from '../data/resourcesData';
import {MachineType, machinesData} from '../data/machinesData';
import {useSelector, useDispatch} from 'react-redux';
import CostCalculator from '../utils/CostCalculator';
import {ReduxState} from '../redux/store';
import {tryBuyMachine} from '../redux/machineSlice';

const styles = StyleSheet.create({
  separateTop: {
    paddingTop: 16,
  },
  separateTopButton: {
    marginTop: 16,
  },
  spaceLeft: {
    paddingLeft: 8,
  },
});

const Cost = ({
  resourceType,
  cost,
  style,
}: {
  resourceType: ResourceType;
  cost: number | undefined;
  style: ViewStyle;
}) => {
  const meta = resourcesData[resourceType];
  const data = useResource(resourceType);

  return (
    <ResourceCost
      style={style}
      name={meta.name}
      dps={data.perSecond}
      cost={cost ? cost : 0}
      current={data.current}
      storage={data.capacity}
    />
  );
};

const ResourceMachine = ({
  type,
  style,
}: {
  type: MachineType;
  style?: ViewStyle;
}) => {
  const machineMeta = machinesData[type];
  const machine = useSelector((state: ReduxState) => state.machine[type]);
  const cost = CostCalculator(machine.current, machineMeta.cost);
  const dispatch = useDispatch();

  const rpsList = Object.keys(machineMeta.resourcePerSecond) as ResourceType[];
  const inputs = rpsList.filter(
    (id) => machineMeta.resourcePerSecond[id as ResourceType]! < 0,
  );
  const outputs = rpsList.filter(
    (id) => machineMeta.resourcePerSecond[id as ResourceType]! > 0,
  );

  const buyMachine = useCallback(() => {
    dispatch(tryBuyMachine(type));
  }, [dispatch, type]);

  return (
    <ThemedView style={style}>
      <ThemedText variant="title">
        {machineMeta.name}: {machine.current}
      </ThemedText>
      <ThemedText variant="body">{machineMeta.desc}</ThemedText>
      <ThemedText variant="body" style={styles.separateTop}>
        Cost:
      </ThemedText>
      {Object.keys(cost).map((resourceCost) => (
        <Cost
          key={resourceCost}
          style={styles.spaceLeft}
          cost={cost[resourceCost as ResourceType]}
          resourceType={resourceCost as ResourceType}
        />
      ))}
      <ThemedText variant="body" style={styles.separateTop}>
        Input:
      </ThemedText>
      {inputs.length > 0 ? (
        inputs.map((id) => (
          <ThemedText key={id} variant="body" style={styles.spaceLeft}>
            {resourcesData[id].name}:{' '}
            {machineMeta.resourcePerSecond[id]! * machine.multiplier}
          </ThemedText>
        ))
      ) : (
        <ThemedText variant="body" style={styles.spaceLeft}>
          N/A
        </ThemedText>
      )}
      <ThemedText variant="body">Output:</ThemedText>
      {outputs.length > 0 ? (
        outputs.map((id) => (
          <ThemedText key={id} variant="body" style={styles.spaceLeft}>
            {resourcesData[id].name}:{' '}
            {machineMeta.resourcePerSecond[id]! * machine.multiplier}
          </ThemedText>
        ))
      ) : (
        <ThemedText variant="body" style={styles.spaceLeft}>
          N/A
        </ThemedText>
      )}
      <ThemedButton
        onPress={buyMachine}
        text="Get 1"
        style={styles.separateTopButton}
      />
    </ThemedView>
  );
};

export default ResourceMachine;
