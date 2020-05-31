import React, {useCallback} from 'react';
import {ResourceType} from '../types';
import {useResource, useResourceCount} from '../hooks';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import {useDispatch} from 'react-redux';
import {manualGain} from '../redux/gameSlice';
import {durationFormatter} from '../utils/TimeFormatter';
import ThemedButton from './ThemedButton';

const ResourceSummary = ({type}: {type: ResourceType}) => {
  const dispatch = useDispatch();
  const resource = useResource(type);
  const resourceCount = useResourceCount(type);
  const onGainPress = useCallback(() => {
    dispatch(manualGain(type));
  }, [dispatch, type]);

  const secondsUntilFull =
    resourceCount.perSecondDisplay !== 0
      ? durationFormatter(
          (resourceCount.capacity - resourceCount.current) /
            resourceCount.perSecondDisplay,
        )
      : 'N/A';

  return (
    <ThemedView>
      <ThemedText variant="body">{resource.desc}</ThemedText>
      <ThemedText variant="body" style={{paddingVertical: 20}}>
        {`Time remaining until full storage: ${secondsUntilFull}`}
      </ThemedText>
      <ThemedButton onPress={onGainPress} text="Gain 1" />
    </ThemedView>
  );
};

export default ResourceSummary;
