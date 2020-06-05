import React, {useCallback} from 'react';
import {View} from 'react-native';
import ThemedText from './ThemedText';
import {useResource} from '../hooks';
import {ResourceType} from '../types';
import {durationFormatter} from '../utils/TimeFormatter';
import ResourceBullet from './ResourceBullet';
import ThemedButton from './ThemedButton';
import {useDispatch} from 'react-redux';
import {upgradeStorage} from '../redux/resourceSlice';
import {resourcesData} from '../data/resourcesData';
import {storageData} from '../data/resourcesData';

const ResourceStorage = ({type}: {type: ResourceType}) => {
  const dispatch = useDispatch();
  const resource = useResource(type);
  const resourceMeta = resourcesData[type];
  const storage = storageData[type];
  const onStorageUpgrade = useCallback(() => {
    dispatch(upgradeStorage(type));
  }, [dispatch, type]);

  if (resource.capacity === -1 || !storage) {
    return null;
  }

  let secondsUntilFull = '';

  if (resource.perSecond > 0) {
    secondsUntilFull = durationFormatter(
      (resource.capacity - resource.current) / resource.perSecond,
    );
  } else if (resource.perSecond < 0) {
    secondsUntilFull = durationFormatter(resource.current / resource.perSecond);
  } else {
    secondsUntilFull = 'N/A';
  }

  return (
    <View style={{paddingTop: 16}}>
      <ThemedText variant="title">Storage</ThemedText>
      <ThemedText variant="body" style={{paddingVertical: 20}}>
        {`Time remaining until ${
          resource.perSecond >= 0 ? 'full' : 'empty'
        } storage: ${secondsUntilFull}`}
      </ThemedText>
      <ThemedText variant="body">
        Upgrade your {resourceMeta.name} storage size to {resource.capacity * 2}
      </ThemedText>
      <ThemedText variant="body">Cost:</ThemedText>
      {Object.keys(storage).map((key) => (
        <ResourceBullet
          key={key}
          type={key as ResourceType}
          cost={storage[key as ResourceType]!}
        />
      ))}
      <ThemedButton
        style={{marginTop: 8}}
        text="Upgrade Storage"
        onPress={onStorageUpgrade}
      />
    </View>
  );
};

export default ResourceStorage;
