import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {ResourceType} from '../types';
import {useResourceCount, useResource} from '../hooks';
import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

const ResourceRow = ({
  type,
  onPress,
}: {
  type: ResourceType;
  onPress: (type: ResourceType) => void;
}) => {
  const data = useResource(type);
  const count = useResourceCount(type);
  const onButtonPress = useCallback(() => {
    onPress(type);
  }, [onPress, type]);

  return (
    <TouchableOpacity onPress={onButtonPress}>
      <ThemedView style={{flexDirection: 'row', padding: 8}}>
        <ThemedText variant="body" style={{flex: 1}}>
          Icon
        </ThemedText>
        <ThemedText variant="body" style={{flex: 2, textAlign: 'left'}}>
          {data.name}{' '}
        </ThemedText>
        <ThemedText variant="body" style={{flex: 2, textAlign: 'center'}}>
          {count.perSecond}/Sec
        </ThemedText>
        <ThemedText variant="body" style={{flex: 2, textAlign: 'right'}}>
          {count.current}/{count.capacity}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
};

export default ResourceRow;
