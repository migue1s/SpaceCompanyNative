import React, {useCallback} from 'react';
import {ResourceType} from '../types';
import {useResource} from '../hooks';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import {useDispatch} from 'react-redux';
import {manualGain} from '../redux/gameSlice';
import {durationFormatter} from '../utils/TimeFormatter';
import ThemedButton from './ThemedButton';
import {resourcesData} from '../data/resourcesData';

const ResourceSummary = ({type}: {type: ResourceType}) => {
  const dispatch = useDispatch();
  const resourceMeta = resourcesData[type];
  const resource = useResource(type);
  const onGainPress = useCallback(() => {
    dispatch(manualGain(type));
  }, [dispatch, type]);

  const secondsUntilFull =
    resource.perSecond !== 0 && resource.capacity !== -1
      ? durationFormatter(
          (resource.capacity - resource.current) / resource.perSecond,
        )
      : 'N/A';

  return (
    <ThemedView>
      <ThemedText variant="body">{resourceMeta.desc}</ThemedText>
      {resource.capacity !== -1 && (
        <ThemedText variant="body" style={{paddingVertical: 20}}>
          {`Time remaining until full storage: ${secondsUntilFull}`}
        </ThemedText>
      )}
      {resourceMeta.manualGain && (
        <ThemedButton onPress={onGainPress} text="Gain 1" />
      )}
    </ThemedView>
  );
};

export default ResourceSummary;
