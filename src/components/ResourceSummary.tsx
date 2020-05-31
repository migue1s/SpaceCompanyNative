import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {ResourceType} from '../types';
import {useResource} from '../hooks';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import {useDispatch} from 'react-redux';
import {manualGain} from '../redux/gameSlice';

const ResourceSummary = ({type}: {type: ResourceType}) => {
  const dispatch = useDispatch();
  const resource = useResource(type);
  const onGainPress = useCallback(() => {
    dispatch(manualGain(type));
  }, [dispatch, type]);

  return (
    <ThemedView>
      <ThemedText variant="body">{resource.desc}</ThemedText>
      <ThemedText variant="body" style={{paddingVertical: 20}}>
        Time remaining until full storage:{' '}
      </ThemedText>
      <TouchableOpacity onPress={onGainPress}>
        <ThemedText variant="body">Gain 1</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default ResourceSummary;
