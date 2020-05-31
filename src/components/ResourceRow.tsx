import React, {useCallback} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {ResourceType} from '../types';
import {useResourceCount, useResource} from '../hooks';
import ThemedText from './ThemedText';
import ThemedView from './ThemedView';
import {resourceIcons} from '../assets';

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
      <ThemedView
        style={{flexDirection: 'row', padding: 8, alignItems: 'center'}}>
        <Image source={resourceIcons[type]} style={{height: 32, width: 32}} />
        <ThemedText
          variant="body"
          style={{flex: 2, textAlign: 'left', paddingLeft: 8}}>
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
