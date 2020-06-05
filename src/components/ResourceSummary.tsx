import React, {useCallback} from 'react';
import {ResourceType} from '../types';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import {useDispatch} from 'react-redux';
import {manualGain} from '../redux/resourceSlice';
import ThemedButton from './ThemedButton';
import {resourcesData} from '../data/resourcesData';

const ResourceSummary = ({type}: {type: ResourceType}) => {
  const dispatch = useDispatch();
  const resourceMeta = resourcesData[type];
  const onGainPress = useCallback(() => {
    dispatch(manualGain(type));
  }, [dispatch, type]);

  return (
    <ThemedView>
      <ThemedText variant="body">{resourceMeta.desc}</ThemedText>
      {resourceMeta.manualGain && (
        <ThemedButton onPress={onGainPress} text="Gain 1" />
      )}
    </ThemedView>
  );
};

export default ResourceSummary;
